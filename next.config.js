const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    en: 'en'
}

module.exports = {

    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
      },
    shallowRender: true,
    env: {
        backendURL: 'https://api.latamhospitals.com/v2/',
        frontendURL: 'https://latamhospitals.com',
    }
}