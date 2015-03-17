var paths = require('./paths');
var _ = require('lodash');

var sources = {};
sources.defaultBase = paths.app;

// dev serving
sources.index = 'app/index.html';

sources.sass = [
    paths.app + 'components/**/*.{sass,scss}',
    paths.app + 'pages/**/*.{sass,scss}',
    paths.app + '*.{sass,scss}'
];

sources.css = [
    paths.app + 'components/**/*.css',
    paths.app + 'pages/**/*.css',
    paths.app + '*.css'
];

sources.babel = [
    paths.app + 'components/**/*.js',
    paths.app + 'pages/**/*.js',
    paths.app + '*.js'
];

sources.js = [];

var bowerFiles = {
    files: [
        // most of the generic bower modules
        paths.app + 'bower_components/*/*.js',
        paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}'
    ],
    watch: false
};

var tempFiles = {
    files: paths.tmp + '/**',
    base: paths.tmp
};

var angularTemplates = [
    paths.app + 'components/**/*.html',
    paths.app + 'pages/**/*.html',
    paths.app + '/*.html',
    '!' + paths.app + 'index.html'
];

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