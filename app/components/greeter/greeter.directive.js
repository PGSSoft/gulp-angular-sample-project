'use strict';

angular.module('app.greeter')
    .directive('greeter', function () {
        return {
            restrict: 'E',
            templateUrl: '/components/greeter/greeter.html',
            scope: {
                name: '='
            }
        }
    });