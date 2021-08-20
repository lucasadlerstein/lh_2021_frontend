const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en', 'pr'],
  localeSubpaths: {
    es: 'es',
    en: 'en',
    pr: 'pr'
  },
  localePath: path.resolve('./public/static/locales')
})