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

module.exports = ERRORS;
