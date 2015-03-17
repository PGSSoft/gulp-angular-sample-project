'use strict';

angular.module('app', [
    'ui.router',

    'app.pages.hello'
])
    .config($stateProvider => {
        $stateProvider.state('app', {
            url: '',
            abstract: true
        });
    });