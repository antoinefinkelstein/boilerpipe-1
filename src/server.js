var express = require('express');
var extract = require('./lib/extract');
var pkg = require('../package.json');

var startTime = new Date();

function createServer() {
  'use strict';

  var app = express();

  app.get('/healthcheck', function (req, res) {
    res.status(200).json({
      data: {
        name: pkg.name,
        version: pkg.version,
        time: new Date(),
        startTime: startTime,
        status: 'Ok'
      }
    });
  });

  app.get('/:extractor/:method', function(req, res) {
    extract(req.params.extractor, req.params.method, req.query.url)
    .then(function(result) {
      res.json({ content: result });
    })
    .catch(function(err) {
      res.status(500).json({ error: err });
    });
  });

  return app;
}

module.exports = {
  createServer: createServer
};
