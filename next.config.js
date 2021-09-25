const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
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
        clientID: 'AUJfApwNXTXZP0-QR5NxFqYyRgKL6ytJ_fCAVeWHTwPAhdYw696Y4drN1MroGLSScg-9rsxT8S-jCADH',
        secretTKN: 'EHcQ-Z3AHQb5M_CQtnmcKzD8PBIYngk_CeX_mpfh4YUgSUcTGhjxkXB4xbFnaaMJSMNEC-gNbUsdAMP-'
    }
}