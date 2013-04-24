/**
 * Project:     build-winston
 * File:        build-winston.js
 * Description: Build a winston logger via JSON configuration
 * User:        flexbean
 * Main Repo:   github.com/flexbean/build-winston
 * Date:        04/23/2013
 * License:     MIT
 */
'use strict';


var winston = require('winston')
    , _ = require('lodash')
;


/**
 * getLogger, get configured winston logger
 * @param config is configuration object JSON that is iterated over in order to build the winston logger, in the form:
 *        "transport": { transport_parameters }
 * @param callback(error, winstonLogger)
 */
exports.get = function(config, callback) {
    if (_.isEmpty(config)) {
        callback(new Error('Empty build-winston configuration'));
        return;
    }

    winston.remove(winston.transports.Console); // remove the default

    for (var key in config) {
//        console.log('build-winston add ' + key)
        var ufirst = key.charAt(0).toUpperCase() + key.slice(1);
        if (key != 'console' && key != 'file' && key != 'http' && key != 'webhook') { // ignore built in
            require('winston-' + key); // require only when needed
        }
        if (winston.transports[ufirst]) {
            winston.add(winston.transports[ufirst], config[key]);
        } else {
            callback(new Error('Missing winston ' + key + ' transport'));
            return;
        }
    };

    callback(null, winston);
}