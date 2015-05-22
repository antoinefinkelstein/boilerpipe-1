'use strict';

var env = process.env;

module.exports = {
  logLevel: env.LOGLEVEL || 'info',
  httpPort: env.APP_PORT || env.PORT || 3000
};
