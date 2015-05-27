var Promise = require('bluebird');
var Boilerpipe = require('boilerpipe');
var ERRORS = require('../enum/errors');

function extractFromHtml(extractor, method, html) {
  'use strict';

  var boilerpipe = new Boilerpipe({
    extractor: extractor,
    html: html
  });

  var extract = Promise.promisify(method.bind(boilerpipe));

  return extract()
  .then(function(result) {
    return result;
  }, function(err) {
    var error = ERRORS.INTERNAL_ERROR;
    error.message = (err.cause) ? err.cause.getMessageSync() : null;
    throw error;
  });
}

module.exports = extractFromHtml;
