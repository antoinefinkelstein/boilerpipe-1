var Promise = require('bluebird');
var Boilerpipe = require('boilerpipe');
var ERRORS = require('../enum/errors');

function getMethod(methodName) {
  'use strict';

  return new Promise(function(resolve, reject) {
    methodName = methodName.toLowerCase();

    var method = null;
    switch (methodName) {
      case 'html':
        method = Boilerpipe.prototype.getHtml;
        break;
      case 'images':
        method = Boilerpipe.prototype.getImages;
        break;
      case 'text':
        method = Boilerpipe.prototype.getText;
        break;
    }

    if (method === null) {
      return reject(ERRORS.INVALID_METHOD);
    }

    return resolve(method);
  });
}

module.exports = getMethod;
