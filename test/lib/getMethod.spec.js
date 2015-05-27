/* globals describe, it */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Boilerpipe = require('boilerpipe');
var getMethod = require('../../src/lib/getMethod');
var ERRORS = require('../../src/enum/errors');

chai.should();
chai.use(chaiAsPromised);

describe('getMethod', function() {
  it('should be rejected with INVALID_METHOD', function() {
    return getMethod('unknownmethod')
    .should.be.rejected
    .and.eventually.deep.equal(ERRORS.INVALID_METHOD);
  });

  it('should be fulfilled with getText function prototype', function() {
    return getMethod('text')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.prototype.getText);
  });

  it('should be fulfilled with getImages function prototype', function() {
    return getMethod('images')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.prototype.getImages);
  });

  it('should be fulfilled with getHtml function prototype', function() {
    return getMethod('html')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.prototype.getHtml);
  });

  it('should be case insensitive', function() {
    return getMethod('Text')
    .should.be.fulfilled
    .and.eventually.deep.equal(Boilerpipe.prototype.getText);
  });
});
