var express = require('express');
var extract = require('./lib/extract');

function createServer() {
  'use strict';

  var app = express();

  app.get('/:extractor/:method', function(req, res) {
    extract(req.params.extractor, req.params.method,
      req.query.url, function(err, result) {
      if (err) {
        return res.json({ error: err });
      }
      return res.json({ content: result });
    });
  });

  return app;
}

module.exports = {
  createServer: createServer
};
