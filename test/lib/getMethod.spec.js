/* globals describe, it */

'use strict';

var assert = require('chai').assert;
var Boilerpipe = require('boilerpipe');
var getMethod = require('../../src/lib/getMethod');

describe('getMethod', function() {
  it('should returns null on unknown method', function() {
    var method = getMethod('unknownmethod');
    assert.isNull(method);
  });

  it('should returns getText function prototype', function() {
    var method = getMethod('text');
    assert.isFunction(method);
    assert.equal(method, Boilerpipe.prototype.getText);
  });

  it('should returns getImages function prototype', function() {
    var method = getMethod('images');
    assert.isFunction(method);
    assert.equal(method, Boilerpipe.prototype.getImages);
  });

  it('should returns getHtml function prototype', function() {
    var method = getMethod('html');
    assert.isFunction(method);
    assert.equal(method, Boilerpipe.prototype.getHtml);
  });

  it('should be case insensitive', function() {
    var method = getMethod('Text');
    assert.isFunction(method);
    assert.equal(method, Boilerpipe.prototype.getText);
  });
});
