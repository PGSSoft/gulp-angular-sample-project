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

var angularTemplates = [
    paths.app + 'components/**/*.html',
    paths.app + '/*.html',
    '!' + paths.app + 'index.html'
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
    bowerFiles,
    tempFiles,
    angularTemplates
];

// build
sources.rawAssets = [
    bowerFiles,
    sources.css
];

sources.rawBuild = [
    angularTemplates
];

module.exports = sources;