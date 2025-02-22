
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./neo-sharestudio-scraper.cjs.production.min.js')
} else {
  module.exports = require('./neo-sharestudio-scraper.cjs.development.js')
}
