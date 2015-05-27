var Promise = require('bluebird');
var Boilerpipe = require('boilerpipe');
var ERRORS = require('../enum/errors');

function getExtractor(extractorName) {
  'use strict';

  return new Promise(function(resolve, reject) {
    extractorName = extractorName.toLowerCase();

    var extractor = null;
    switch (extractorName) {
      case 'article':
        extractor = Boilerpipe.Extractor.Article;
        break;
      case 'keepeverything':
        extractor = Boilerpipe.Extractor.KeepEverything;
        break;
      case 'largestcontent':
        extractor = Boilerpipe.Extractor.LargestContent;
        break;
      case 'numwordsrules':
        extractor = Boilerpipe.Extractor.NumWordsRules;
        break;
      case 'canola':
        extractor = Boilerpipe.Extractor.Canola;
        break;
      case 'default':
        extractor = Boilerpipe.Extractor.Default;
        break;
    }

    if (extractor === null) {
      return reject(ERRORS.INVALID_EXTRACTOR);
    }

    return resolve(extractor);
  });
}

module.exports = getExtractor;
