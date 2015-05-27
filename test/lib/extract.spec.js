/* globals describe, it */

'use strict';

var fs = require('fs');
var path = require('path');
var nock = require('nock');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var extract = require('../../src/lib/extract');
var ERRORS = require('../../src/enum/errors');

chai.should();
chai.use(chaiAsPromised);

describe('extract', function() {
  it('should be rejected with INVALID_EXTRACTOR', function() {
    return extract('unknwonextractor', 'text', 'http://www.korben.info')
    .should.be.rejected
    .and.eventually.deep.equal(ERRORS.INVALID_EXTRACTOR);
  });

  it('should be rejected with INVALID_METHOD', function() {
    return extract('article', 'unknownmethod', 'http://www.korben.info')
    .should.be.rejected
    .and.eventually.deep.equal(ERRORS.INVALID_METHOD);
  });

  it('should be rejected with REQUEST_ERROR', function() {
    var expectedError = ERRORS.REQUEST_ERROR;
    expectedError.message = 'options.uri is a required argument';

    return extract('article', 'text', '')
    .should.be.rejected
    .and.eventually.deep.equal(expectedError);
  });

  it('should be rejected with REQUEST_ERROR', function() {
    var expectedError = ERRORS.REQUEST_ERROR;
    expectedError.message = 'Invalid URI "www.korben.info"';

    return extract('article', 'text', 'www.korben.info')
    .should.be.rejected
    .and.eventually.deep.equal(expectedError);
  });

  it('should be fulfilled', function() {
    nock('https://www.korben.info')
      .get('/')
      .replyWithFile(200,
        path.join(__dirname, '../fixtures/korben.info.body'));

    var expectedResult = fs.readFileSync(
      path.join(__dirname, '../fixtures/korben.info.text'),
      { encoding: 'utf8' });

    return extract('default', 'text', 'https://www.korben.info')
    .should.be.fulfilled
    .and.eventually.deep.equal(expectedResult);
  });
});
