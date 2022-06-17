const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const _ = require("lodash");
const fs = require("fs");
const {DateTime} = require('luxon');
const {Interval} = require("luxon/build/cjs-browser/luxon");

const SwaggerParser = require("@apidevtools/swagger-parser");


const DOC_CACHE_VALIDITY_DAYS = 14;
const DOC_CACHE_VALIDITY_MS = DOC_CACHE_VALIDITY_DAYS * 24 * 60 * 60 * 1000;


async function retrieve_page() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://api.cloudflare.com/', {waitUntil: 'networkidle2'});

    await page.waitForTimeout(3000);


    let expanded = false;
    do {
        expanded = await page.evaluate(function () {
            let _expanded = false;
            let elHandles = document.querySelectorAll('a.object-definition-toggle, a.sub-object-definition-toggle');
            elHandles.forEach(function (el) {
                if (/Show definition/i.test(el.textContent)) {
                    _expanded = true;
                    return el.click();
                }
            });
            return _expanded;
        });
        await page.waitForTimeout(500);
    } while (expanded);

    let content = await page.content();


    await browser.close();
    return content;
}


(async () => {
    try {

        let last_modified_interval = -1;
        let content = null;
        try {

            let file_stats = await fs.promises.stat('cloudflare_api.html');

            last_modified_interval = Math.ceil(Interval.fromDateTimes(DateTime.fromMillis(file_stats.mtimeMs), DateTime.now()).toDuration().toMillis());

            content = await fs.promises.readFile('cloudflare_api.html');

        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error(err);
            }
        }


        if (_.isEmpty(content) || last_modified_interval === -1 || last_modified_interval >= DOC_CACHE_VALIDITY_MS) {
            content = await retrieve_page();
            await fs.promises.writeFile('cloudflare_api.html', content);
        }


        let openapi_doc = {
            openapi: '3.0.3',
            servers: [{
                url: 'https://api.cloudflare.com/'
            }],
            "info": {
                "contact": {
                    "name": "Samuel Loh",
                    "url": "samuel.loh.yk@gmail.com"
                },
                "title": "Cloudflare OpenAPI",
                "version": "4.0.0"
            }
        }


        // console.log(content);

        let $ = cheerio.load(content);


        function parse_object_definition_div(object_definition_div) {
            let schema = {};
            let object_definition_table_rows = $(object_definition_div).find('> table > tbody > tr');

            _.each(object_definition_table_rows, function parse_object_definition_table_row(table_row) {
                let property = {};


                let table_cells = $(table_row).find('td');
                let $name_cell = $(table_cells[0]);
                let $description_cell = $(table_cells[1]);
                let $constraints_cell = $(table_cells[2]);


                let name = $name_cell.find('strong').text();
                name = _.trim(name);
                //_.set(property, 'name', name);

                let type = null, format = null, nullable = false;
                let type_cell_text = $name_cell.find('small').text();
                type_cell_text = _.trim(type_cell_text);

                let data_type_regex = /^(?<type>string|number|integer|boolean|array|object)(?<nullable>null)?(\s*\((?<format>[\w-_]+)\))?$/;
                let data_type_regex_match = data_type_regex.exec(type_cell_text);

                if (!_.isEmpty(data_type_regex_match)) {
                    type = _.get(data_type_regex_match, ['groups', 'type']);
                    nullable = !_.isEmpty(_.get(data_type_regex_match, ['groups', 'nullable']));
                    format = _.get(data_type_regex_match, ['groups', 'format']);
                } else if (!_.isEmpty(type_cell_text)) {
                    console.log(`Unrecognized type: ${type_cell_text}`);
                    type = type_cell_text;
                }

                if (!_.isEmpty(format)) {
                    _.set(property, 'format', format);
                }
                if (nullable) {
                    _.set(property, 'nullable', true);
                }


                let description = $description_cell.find('div').first().text();
                description = _.trim(description);

                if (!_.isEmpty(description)) {
                    _.set(property, 'description', description);
                }


                let example = $description_cell.find('small.example-code').first().text();

                if (!_.isEmpty(example)) {
                    example = _.trim(example);
                    if (!(example.startsWith("{") && example.endsWith("}"))
                        && !(example.startsWith("[") && example.endsWith("]"))
                        && !(example.startsWith("\"") && example.endsWith("\""))) {
                        example = `"${example.replace(/"/g, '\\"')}"`;
                    }

                    try {
                        example = JSON.parse(example);
                    } catch (err) {
                        // console.error(err.stack);
                        console.error(example);
                    }

                    _.set(property, 'example', example);
                }

                if (_.isNil(type)){
                    if (/An object with the following properties:/.test(description)) {
                        type = 'object';
                    } else if (/One of the following:/.test(description)) {
                        _.set(property, 'oneOf', true);
                        type = 'object';
                    } else if (/Any of the following:/.test(description)) {
                        _.set(property, 'anyOf', true);
                        type = 'object';
                    }
                }
                _.set(property, 'type', type);

                let sub_object_definition_table = $description_cell.find('div.object-definition-table').first();
                if (!_.isEmpty(sub_object_definition_table)) {
                    let sub_object_definition_schema = parse_object_definition_div(sub_object_definition_table);
                    let sub_object_type;


                    let keys = _.keys(sub_object_definition_schema);
                    if (_.size(keys) === 1 && _.first(keys) === '[*]') {
                        sub_object_definition_schema = _.first(_.values(sub_object_definition_schema));
                        sub_object_type = _.get(sub_object_definition_schema, 'type');

                        if (_.isNil(type)) {
                            if ( !_.isNil(sub_object_type)){
                                type = sub_object_type;
                            }
                        }
                    }

                    if (type === 'array') {
                        _.set(property, ['items'], sub_object_definition_schema);
                    } else if (type === 'object') {
                        _.set(property, ['properties'], sub_object_definition_schema);
                    } else {
                        console.log(`unrecognised subtype: ${type}, Description: ${description}`)
                        // console.trace();
                    }
                }




                let constraint_lis = $constraints_cell.find('ul > li');
                let constraints = _.map(constraint_lis, function (constraint_li) {
                    return $(constraint_li).text();
                });

                if (!_.isEmpty(constraints)) {
                    _.each(constraints, function (constraint) {
                        let min_length_constraint_regex = /min length:\s*(?<minimum_length>\d+)/;
                        let min_length_constraint_regex_match = min_length_constraint_regex.exec(constraint);

                        if (!_.isEmpty(min_length_constraint_regex_match)) {
                            let minimum_length_str = _.get(min_length_constraint_regex_match, ['groups', 'minimum_length']);
                            let minimum_length = parseInt(minimum_length_str, 10);
                            _.set(property, 'minLength', minimum_length)
                            return;
                        }


                        let max_length_constraint_regex = /max length:\s*(?<maximum_length>\d+)/;
                        let max_length_constraint_regex_match = max_length_constraint_regex.exec(constraint);

                        if (!_.isEmpty(max_length_constraint_regex_match)) {
                            let maximum_length_str = _.get(max_length_constraint_regex_match, ['groups', 'maximum_length']);
                            let maximum_length = parseInt(maximum_length_str, 10);
                            _.set(property, 'maxLength', maximum_length)
                            return;
                        }

                        let read_only_constraint_regex = /read only/;
                        let read_only_constraint_regex_match = read_only_constraint_regex.exec(constraint);

                        if (!_.isEmpty(read_only_constraint_regex_match)) {
                            _.set(property, 'readOnly', true);
                            return;
                        }

                        let valid_boolean_values_regex = /valid values:\s*\(true,false\)/
                        let valid_boolean_values_regex_match = valid_boolean_values_regex.exec(constraint);

                        if (!_.isEmpty(valid_boolean_values_regex_match)) {
                            type = 'boolean';
                            return;
                        }

                        let valid_code_values_regex = /valid values: , (?<valid_values>Could not gather.*)/
                        let valid_code_values_regex_match = valid_code_values_regex.exec(constraint);

                        if (!_.isEmpty(valid_code_values_regex_match)) {
                            let valid_values = _.get(valid_code_values_regex_match, ['groups', 'valid_values']);
                            valid_values = valid_values.split(/[\s,]+/);
                            valid_values = _.filter(valid_values, _.negate(_.isEmpty));
                            _.set(property, 'enum', valid_values);
                            return;
                        }


                        let valid_enclosed_values_regex = /^valid values:\s*\[(?<valid_values>([^\s,]+[\s,]*)+)\]$/
                        let valid_enclosed_values_regex_match = valid_enclosed_values_regex.exec(constraint);

                        if (!_.isEmpty(valid_enclosed_values_regex_match)) {
                            let valid_values = _.get(valid_enclosed_values_regex_match, ['groups', 'valid_values']);
                            valid_values = valid_values.split(/[\s,]+/);
                            valid_values = _.filter(valid_values, _.negate(_.isEmpty));
                            _.set(property, 'enum', valid_values);
                            return;
                        }

                        let valid_values_regex = /^valid values:\s*(?<empty_valid_value>,\s+)?(?<valid_values>([^\s,]+[\s,]*)+)$/
                        let valid_values_regex_match = valid_values_regex.exec(constraint);

                        if (!_.isEmpty(valid_values_regex_match)) {
                            let valid_values = _.get(valid_values_regex_match, ['groups', 'valid_values']);
                            let empty_valid_value = _.get(valid_values_regex_match, ['groups', 'empty_valid_value']);


                            valid_values = valid_values.split(/[\s,]+/);
                            valid_values = _.filter(valid_values, _.negate(_.isEmpty));
                            if (!_.isEmpty(empty_valid_value)) {
                                valid_values.unshift("");
                            }
                            _.set(property, 'enum', valid_values);
                            return;
                        }

                        let default_value_regex = /default value:\s*(?<default_value>(\w+,?)+|\[\]|\/|""|)/
                        let default_value_regex_match = default_value_regex.exec(constraint);

                        if (!_.isEmpty(default_value_regex_match)) {
                            let default_value = _.get(default_value_regex_match, ['groups', 'default_value']);
                            _.set(property, 'default', default_value);
                            return;
                        }

                        let pattern_regex = /pattern:\s*(?<pattern>\^.*\$)/
                        let pattern_regex_match = pattern_regex.exec(constraint);

                        if (!_.isEmpty(pattern_regex_match)) {
                            let pattern = _.get(pattern_regex_match, ['groups', 'pattern']);
                            _.set(property, 'pattern', pattern)
                            return;
                        }

                        let pattern_values_regex = /^pattern:\s*(?<pattern>((\w+)\|)*\w+)$/
                        let pattern_values_regex_match = pattern_values_regex.exec(constraint);
                        if (!_.isEmpty(pattern_values_regex_match)) {
                            let valid_values = _.get(pattern_values_regex_match, ['groups', 'pattern']);
                            valid_values = valid_values.split(/[\s|]+/);
                            _.set(property, 'enum', `[${_.join(valid_values, ', ')}]`);
                            return;
                        }

                        let min_value_constraint_regex = /min value:\s*(?<minimum>-?\d+)/;
                        let min_value_constraint_regex_match = min_value_constraint_regex.exec(constraint);

                        if (!_.isEmpty(min_value_constraint_regex_match)) {
                            let minimum_str = _.get(min_value_constraint_regex_match, ['groups', 'minimum']);
                            let minimum = parseInt(minimum_str, 10);
                            _.set(property, 'minimum', minimum)
                            return;
                        }

                        let max_value_constraint_regex = /max value:\s*(?<maximum>-?\d+)/;
                        let max_value_constraint_regex_match = max_value_constraint_regex.exec(constraint);

                        if (!_.isEmpty(max_value_constraint_regex_match)) {
                            let maximum_str = _.get(max_value_constraint_regex_match, ['groups', 'maximum']);
                            let maximum = parseInt(maximum_str, 10);
                            _.set(property, 'maximum', maximum)
                            return;
                        }


                        let notes_constraint_regex = /notes:\s*(?<notes>.*)/i;
                        let notes_constraint_regex_match = notes_constraint_regex.exec(constraint);
                        if (!_.isEmpty(notes_constraint_regex_match)) {
                            let notes = _.get(notes_constraint_regex_match, ['groups', 'notes']);
                            if (/deprecated/i.test(notes)) {
                                _.set(property, 'deprecated', true);
                            }

                            description += '\n\n' + notes;
                            _.set(property, 'description', description);

                            return;
                        }

                        let unique_items_constraint_regex = /unique items/i;
                        let unique_items_constraint_regex_match = unique_items_constraint_regex.exec(constraint);
                        if (!_.isEmpty(unique_items_constraint_regex_match)) {
                            _.set(property, 'uniqueItems', true);

                            return;
                        }

                        console.log(`unrecognized constraint: ${constraint}`);


                    });
                }

                _.set(schema, [name], property);
            });
            return schema;
        }


        let object_definition_h4s = $('h4:contains("Object definition")');
        _.each(object_definition_h4s, function (object_definition_h4) {
            let object_definition_header = $(object_definition_h4).parent('header.mod-header');
            let object_definition_anchor = $(object_definition_header).prev('a.anchor');
            let object_definition_name = _.trim($(object_definition_anchor).text());
            let object_definition_div = $(object_definition_header).next('div.object-definition')
            let object_definition_table = $(object_definition_div).find('div.object-definition-table').first();


            let schema = parse_object_definition_div(object_definition_table);

            _.set(openapi_doc, ['components', 'schemas', object_definition_name], {
                type: 'object',
                properties: schema
            });
        });


        let anchors = $('a.anchor2');

        _.each(anchors, function (anchor) {


            let path = null;
            let method = null;
            let operation = {};


            let anchor_reference = $(anchor).prop('id');
            if (!_.isEmpty(anchor_reference)) {
                let external_url = new URL(`#${anchor_reference}`, 'https://api.cloudflare.com/')
                _.set(operation, ['externalDocs', 'url'], external_url.toString());
            }


            let api_call_section = $(anchor).parents('section.modunit');

            let api_call_section_header = $(api_call_section).find('div.mod-header').first();

            if (!_.isEmpty(api_call_section_header)) {
                let http_sample_pre = $(api_call_section_header).find('pre.language-http').first();

                if (!_.isEmpty(http_sample_pre)) {

                    let http_sample = $(http_sample_pre).text();

                    if (!_.isEmpty(http_sample)) {
                        let http_sample_regex = /(?<method>GET|PUT|POST|DELETE|OPTIONS|HEAD|PATCH|TRACE) (?<path>.*)/
                        let http_sample_regex_match = http_sample_regex.exec(http_sample);
                        method = _.get(http_sample_regex_match, ['groups', 'method']);
                        method = _.toLower(method);
                        path = _.get(http_sample_regex_match, ['groups', 'path']);
                    }

                    let description_div = $(http_sample_pre).prev('div');

                    if (!_.isEmpty(description_div)) {

                        let description = $(description_div).text();
                        description = _.trim(description);
                        if (!_.isEmpty(description)) {
                            _.set(operation, ['description'], description);
                        }
                    }
                }

                let title_h3 = $(api_call_section_header).find('h3.mod-title').first();

                if (!_.isEmpty(title_h3)) {
                    let title = $(title_h3).contents().filter(function () {
                        return this.type === 'text';
                    }).text();


                    title = _.trim(title);

                    if (!_.isEmpty(title)) {
                        _.set(operation, ['summary'], title);
                    }

                }

            }


            let curl_h5 = $(api_call_section).find('h5.mod-content:contains("cURL")').first();
            if (!_.isEmpty(curl_h5)) {
                let curl_pre = curl_h5.next('div.CodeMirror').find('pre').first();
                let curl_example = curl_pre.text();

                _.set(operation, ['description'], _.get(operation, ['description']) + `### cURL Example:\n\`\`\`\n${curl_example}\n\`\`\`\n`)
            }


            let response_h5 = $(api_call_section).find('h5.mod-content:contains("Response")').first();
            if (!_.isEmpty(response_h5)) {
                let response_pre = response_h5.next('div.CodeMirror').find('pre').first();
                let response_example = response_pre.text();

                _.set(operation, ['responses', 'default'], {
                    description: `### Response Example:\`\`\`\n${response_example}\n\`\`\`\n`
                });
            }


            let parameters = [];
            let request_body_schema = {};

            let api_call_optional_parameters_em = $(api_call_section).find('h4.mod-content em:contains("Optional")').first();
            if (!_.isEmpty(api_call_optional_parameters_em)) {
                let optional_parameters_object_definition_table = $(api_call_optional_parameters_em).parent('h4.mod-content').siblings('div.object-definition-table').first();
                if (!_.isEmpty(optional_parameters_object_definition_table)) {
                    let optional_parameters_object_definition_schema = parse_object_definition_div(optional_parameters_object_definition_table);


                    if (_.includes(['put', 'post'], method)) {
                        request_body_schema = _.merge(request_body_schema, optional_parameters_object_definition_schema);
                    } else {
                        let path_parameters_regex = /:([^/]+)/g,
                            path_parameters_regex_match;

                        let path_parameters = [];
                        while (!_.isNil(path_parameters_regex_match = path_parameters_regex.exec(path))) {
                            path_parameters.push(path_parameters_regex_match[1]);
                        }


                        _.each(request_body_schema, function (property, key) {
                            let parameter = {};
                            _.set(parameter, 'name', key);

                            if (_.includes(path_parameters, key)) {
                                _.set(parameter, 'in', 'path');

                            } else {
                                _.set(parameter, 'in', 'query');
                            }

                            _.set(parameter, 'optional', false);
                            _.set(parameter, 'schema', property);

                            parameters.push(parameter);
                        })
                    }


                }
            }


            let api_call_required_parameters_em = $(api_call_section).find('h4.mod-content em:contains("Required")').first();

            if (!_.isEmpty(api_call_required_parameters_em)) {
                let required_parameters_object_definition_table = $(api_call_required_parameters_em).parent('h4.mod-content').siblings('div.object-definition-table').first();
                if (!_.isEmpty(required_parameters_object_definition_table)) {
                    let required_parameters_object_definition_schema = parse_object_definition_div(required_parameters_object_definition_table);


                    if (_.includes(['put', 'post'], method)) {
                        request_body_schema = _.merge(request_body_schema, required_parameters_object_definition_schema);
                    } else {
                        let path_parameters_regex = /:([^/]+)/g,
                            path_parameters_regex_match;

                        let path_parameters = [];
                        while (!_.isNil(path_parameters_regex_match = path_parameters_regex.exec(path))) {
                            path_parameters.push(path_parameters_regex_match[1]);
                        }


                        _.each(request_body_schema, function (property, key) {
                            let parameter = {};
                            _.set(parameter, 'name', key);

                            if (_.includes(path_parameters, key)) {
                                _.set(parameter, 'in', 'path');

                            } else {
                                _.set(parameter, 'in', 'query');
                            }

                            _.set(parameter, 'required', false);
                            _.set(parameter, 'schema', property);

                            parameters.push(parameter);
                        })
                    }


                }
            }

            if (!_.isEmpty(parameters)) {
                _.set(operation, ['parameters'], parameters);
            }

            if (!_.isEmpty(request_body_schema)) {
                _.set(operation, ['requestBody', 'content', 'application/json', 'schema', 'properties'], request_body_schema);
            }


            if (!_.isEmpty(path) && !_.isEmpty(method) && _.has(operation, 'summary')) {
                _.set(openapi_doc, ['paths', '/' + path, method], operation);
            }
        })


        await fs.promises.writeFile('api_calls.json', JSON.stringify(openapi_doc, null, 4));
        // let sidebar_html = await (await page.$('.sidebar')).getProperty('innerHTML')
        // console.log(sidebar_html);

        console.log("Parsed");


        await SwaggerParser.validate(openapi_doc);


        process.exit(0);
    } catch (err) {
        console.error(err.stack);
        process.exit(1);
    }

})();