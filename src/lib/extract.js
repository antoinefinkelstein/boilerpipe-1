var Promise = require('bluebird');
var getExtractor = require('./getExtractor');
var getMethod = require('./getMethod');
var getHtml = require('./getHtml');
var extractFromHtml = require('./extractFromHtml');

function extract(extractorName, methodName, url) {
  'use strict';

  return Promise.all([
    getExtractor(extractorName),
    getMethod(methodName),
    getHtml(url)
  ])
  .spread(extractFromHtml);
}

module.exports = extract;
