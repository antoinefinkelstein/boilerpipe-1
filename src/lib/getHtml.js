var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
var ERRORS = require('../enum/errors');

function getHtml(url) {
  'use strict';

  return request.getAsync(url)
  .spread(function(response, body) {
    if (response.statusCode === 200) {
      return body;
    }

    var error = ERRORS.REQUEST_NON_OK;
    error.statusCode = response.statusCode;
    throw error;
  }, function(err) {
    var error = ERRORS.REQUEST_ERROR;
    error.message = err.message;
    throw error;
  });
}

module.exports = getHtml;
