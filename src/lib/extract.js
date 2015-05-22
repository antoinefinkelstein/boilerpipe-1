var Boilerpipe = require('boilerpipe');
var getExtractor = require('./getExtractor');
var getMethod = require('./getMethod');

var ERRORS = require('../enum/errors');

function extract(extractorName, methodName, url, callback) {
  'use strict';

  var extractor = getExtractor(extractorName);
  var method = getMethod(methodName);

  if (extractor === null) {
    return callback(ERRORS.INVALID_EXTRACTOR, null);
  }
  else if (method === null) {
    return callback(ERRORS.INVALID_METHOD, null);
  }
  else if (!url || url.length <= 0) {
    return callback(ERRORS.URL_NOT_PROVIDED, null);
  }
  else if (url.indexOf('http://') === -1 &&
    url.indexOf('https://') === -1) {
    return callback(ERRORS.URL_PROTOCOL_MISSING, null);
  }

  var boilerpipe = new Boilerpipe({
    extractor: extractor,
    url: url
  });

  method.call(boilerpipe, function(err, result) {
    if (err) {
      var error = ERRORS.INTERNAL;
      error.object = err;
      return callback(error, null);
    }
    return callback(null, result);
  });
}

module.exports = extract;
