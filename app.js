var path = require('path');
var config = require('config');
var server = require(path.join(__dirname, 'src/server'));

console.log(config);

var instance = server.createServer().listen(80, function() {
  'use strict';

  var address = instance.address();

  console.log('listening at http://%s:%s', address.address, address.port);
});
