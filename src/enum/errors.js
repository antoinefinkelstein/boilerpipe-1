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
  INTERNAL: {
    code: -4,
    text: 'Internal error.'
  },
  REQUEST_ERROR: {
    code: -5,
    text: 'Request error'
  },
  REQUEST_NON_OK: {
    code: -6,
    text: 'Request does not return 200 OK status code'
  }
};

module.exports = ERRORS;
