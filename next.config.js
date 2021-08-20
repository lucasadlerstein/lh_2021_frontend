const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    es: 'es',
    en: 'en',
    pr: 'pr'
}

module.exports = {

    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
      },
    shallowRender: true,
    env: {
        backendURL: 'https://p.api.latamhospitals.com',
        // backendURL: 'http://localhost:4000',
        frontendURL: 'https://latamhospitals.com',
        // frontendURL: 'http://localhost:3000',
    }
}