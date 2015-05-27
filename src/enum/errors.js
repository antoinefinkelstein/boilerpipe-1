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
  },
  REQUEST_ERROR: {
    code: -7,
    text: 'Request error'
  },
  REQUEST_NON_OK: {
    code: -8,
    text: 'Request does not return 200 OK status code'
  }
};

module.exports = ERRORS;
