var Boilerpipe = require('boilerpipe');

function getMethod(methodName) {
  'use strict';

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

  return method;
}

module.exports = getMethod;
