var express = require('express');
var Boilerpipe = require('boilerpipe');

var ERRORS = {
  UNKNOWN: {
    code: -1,
    text: 'Unknown error.'
  },
  INVALID_EXTRACTOR: {
    code: -2,
    text: 'Invalid extractor.'
  },
  INVALID_METHOD: {
    code: -3,
    text: 'Invalid method.'
  },
  URL_NOT_PROVIDED: {
    code: -4,
    text: 'URL not provided.'
  },
  URL_PROTOCOL_MISSING: {
    code: -5,
    text: 'URL protocol missing.'
  },
  INTERNAL: {
    code: -6,
    text: 'Internal error.'
  }
};

function getExtractor(extractorName) {
  extractorName = extractorName.toLowerCase();

  var extractor = null;
  switch (extractorName) {
    case 'article':
      extractor = Boilerpipe.Extractor.Article;
      break;
    case 'keepeverything':
      extractor = Boilerpipe.Extractor.KeepEverything;
      break;
    case 'keepeverythingwithminkwords':
      extractor = Boilerpipe.Extractor.KeepEverythingWithMinKWords;
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

  return extractor;
}

function getMethod(methodName) {
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

var app = express();

app.get('/:extractor/:method', function(req, res) {
  var response = {};

  var extractor = getExtractor(req.params.extractor);
  var method = getMethod(req.params.method);

  if (extractor === null) {
    return res.json({ error: ERRORS.INAVLID_EXTRACTOR });
  }
  else if (method === null) {
    return res.json({ error: ERRORS.INVALID_METHOD });
  }
  else if (!req.query.url || req.query.url.length <= 0) {
    return res.json({ error: ERRORS.URL_NOT_PROVIDED });
  }
  else if (req.query.url.indexOf('http://') === -1 && req.query.url.indexOf('https://') === -1) {
    return res.json({ error: ERRORS.URL_PROTOCOL_MISSING });
  }

  boilerpipe = new Boilerpipe({
    extractor: extractor,
    url: req.query.url
  });

  method.call(boilerpipe, function(err, result) {
    if (err) {
      var response = { error: ERRORS.INTERNAL };
      response.error.object = err;
      return res.json(response);
    }

    return res.json({ content: result });
  });
});

var server = app.listen(80, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
