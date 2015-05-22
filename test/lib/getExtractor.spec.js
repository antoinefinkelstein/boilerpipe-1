/* globals describe, it */

'use strict';

var assert = require('chai').assert;
var Boilerpipe = require('boilerpipe');
var getExtractor = require('../../src/lib/getExtractor');

describe('getExtractor', function() {
  it('should returns null on unknown extractor', function() {
    var extractor = getExtractor('unknownextractor');
    assert.isNull(extractor);
  });

  it('should returns ArticleExtractor', function() {
    var extractor = getExtractor('article');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.Article);
  });

  it('should returns KeepEverythingExtractor', function() {
    var extractor = getExtractor('keepeverything');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.KeepEverything);
  });

  it('should returns LargestContentExtractor', function() {
    var extractor = getExtractor('largestcontent');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.LargestContent);
  });

  it('should returns NumWordsRulesExtractor', function() {
    var extractor = getExtractor('numwordsrules');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.NumWordsRules);
  });

  it('should returns CanolaExtractor', function() {
    var extractor = getExtractor('canola');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.Canola);
  });

  it('should returns DefaultExtractor', function() {
    var extractor = getExtractor('default');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.Default);
  });

  it('should be case insensitive', function() {
    var extractor = getExtractor('Article');
    assert.isObject(extractor);
    assert.deepEqual(extractor, Boilerpipe.Extractor.Article);
  });
});
