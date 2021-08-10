const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');


let deepResolve = function (object) {
    if (_.isPlainObject(object)) {
        return Promise.props(_.mapValues(object, deepResolve));
    } else if (_.isArray(object)) {
        return Promise.map(object, deepResolve);
    } else {
        return Promise.resolve(object);
    }
}


module.exports = {
    deepResolve:deepResolve
}