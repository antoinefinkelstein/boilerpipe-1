var request = require('request');
var Boilerpipe = require('boilerpipe');
var getExtractor = require('./getExtractor');
var getMethod = require('./getMethod');

var ERRORS = require('../enum/errors');

function getHtml(url, callback) {
  'use strict';

  request(url, function(err, response, body) {
    var error = null;
    if (err) {
      error = ERRORS.REQUEST_ERROR;
      error.message = err.message;
      return callback(error, null);
    }
    else if (!err && response.statusCode !== 200) {
      error = ERRORS.REQUEST_NON_OK;
      error.statusCode = response.statusCode;
      return callback(error, null);
    }
    return callback(null, body);
  });
}

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

  getHtml(url, function(err, html) {
    if (err) {
      return callback(err, null);
    }

    var boilerpipe = new Boilerpipe({
      extractor: extractor,
      html: html
    });

    method.call(boilerpipe, function(err, result) {
      if (err) {
        var error = ERRORS.INTERNAL;
        error.message = err.cause.getMessageSync();
        return callback(error, null);
      }
      return callback(null, result);
    });
  });
}

module.exports = extract;
