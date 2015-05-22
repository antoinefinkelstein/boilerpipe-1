/* globals describe, it */

'use strict';

var assert = require('chai').assert;
var extract = require('../../src/lib/extract');

var ERRORS = require('../../src/enum/errors');

describe('extract', function() {
  it('should returns INVALID_EXTRACTOR error', function() {
    extract('unknwonextractor', 'text',
      'http://www.korben.info', function(err, result) {
      assert.isNull(result);
      assert.isObject(err);
      assert.deepEqual(err, ERRORS.INVALID_EXTRACTOR);
    });
  });

  it('should returns INVALID_METHOD error', function() {
    extract('article', 'unknownmethod',
      'http://www.korben.info', function(err, result) {
      assert.isNull(result);
      assert.isObject(err);
      assert.deepEqual(err, ERRORS.INVALID_METHOD);
    });
  });

  it('should returns URL_NOT_PROVIDED error', function() {
    extract('article', 'text',
      '', function(err, result) {
      assert.isNull(result);
      assert.isObject(err);
      assert.deepEqual(err, ERRORS.URL_NOT_PROVIDED);
    });
  });

  it('should returns URL_PROTOCOL_MISSING error', function() {
    extract('article', 'text',
      'www.korben.info', function(err, result) {
      assert.isNull(result);
      assert.isObject(err);
      assert.deepEqual(err, ERRORS.URL_PROTOCOL_MISSING);
    });
  });
});
