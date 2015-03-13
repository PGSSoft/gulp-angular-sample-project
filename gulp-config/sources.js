var paths = require('./paths');
var _ = require('lodash');

var sources = {};
sources.defaultBase = paths.app;


// dev serving
sources.index = 'app/index.html';

sources.sass = [
    paths.app + 'components/**/*.{sass,scss}',
    paths.app + '*.{sass,scss}'
];

sources.css = [
    paths.app + 'components/**/*.css',
    paths.app + '*.css'
];

sources.angularModules = [
    paths.app + 'components/**/*.js',
    paths.app + '*.js'
];

var tempFiles = {
    files: [
        paths.tmp + '*.*',
        paths.tmp + 'components/**/*.*'
    ],
    base: paths.tmp
};

var bowerFiles = {
    files: [
        paths.app + 'bower_components/*/*.js',
        paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}' // most of the generic bower modules
    ],
    watch: false
};

sources.devAssets = [
    sources.js, // include only when serving non-processed js files
    bowerFiles,
    tempFiles
];

// build
sources.rawAssets = [
    bowerFiles,
    sources.js,
    sources.css
];

module.exports = sources;