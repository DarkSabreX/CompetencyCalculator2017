'use strict';

angular.module('calc')
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .warnPalette('deep-purple');

        $mdThemingProvider.theme('1')
            .primaryPalette('red');

        $mdThemingProvider.theme('2')
            .primaryPalette('amber');

        $mdThemingProvider.theme('3')
            .primaryPalette('green');

        $mdThemingProvider.theme('4')
            .primaryPalette('teal');

        $mdThemingProvider.theme('5')
            .primaryPalette('indigo');

        $mdThemingProvider.alwaysWatchTheme(true);
    });    