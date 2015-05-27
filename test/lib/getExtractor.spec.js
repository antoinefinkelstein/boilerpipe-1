/* globals describe, it */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Boilerpipe = require('boilerpipe');
var getExtractor = require('../../src/lib/getExtractor');
var ERRORS = require('../../src/enum/errors');

chai.should();
chai.use(chaiAsPromised);

describe('getExtractor', function() {
  it('should be rejected with INVALID_EXTRACTOR', function() {
    return getExtractor('unknownextractor')
    .should.be.rejected
    .and.eventually.deep.equal(ERRORS.INVALID_EXTRACTOR);
  });

  it('should be fulfilled with ArticleExtractor', function() {
    return getExtractor('article')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.Article);
  });

  it('should be fulfilled with KeepEverythingExtractor', function() {
    return getExtractor('keepeverything')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.KeepEverything);
  });

  it('should be fulfilled with LargestContentExtractor', function() {
    return getExtractor('largestcontent')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.LargestContent);
  });

  it('should be fulfilled with NumWordsRulesExtractor', function() {
    return getExtractor('numwordsrules')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.NumWordsRules);
  });

  it('should be fulfilled with CanolaExtractor', function() {
    return getExtractor('canola')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.Canola);
  });

  it('should be fulfilled with DefaultExtractor', function() {
    return getExtractor('default')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.Default);
  });

  it('should be case insensitive', function() {
    return getExtractor('Article')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.Extractor.Article);
  });
});
