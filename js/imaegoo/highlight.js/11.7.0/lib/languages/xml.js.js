function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/xml" instead of "highlight.js/lib/languages/xml.js"'
      );
    }
  }
  emitWarning();
    module.exports = require('./xml.js');