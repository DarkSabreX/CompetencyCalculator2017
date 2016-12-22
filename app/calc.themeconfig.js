'use strict';

angular.module('calc')
    .config(function ($mdThemingProvider) {
        var onePointFiveMap = $mdThemingProvider.extendPalette('red', {
            '500': '#FA821F'
        });
        var twoPointFiveMap = $mdThemingProvider.extendPalette('amber', {
            '500': '#A6B82C'
        });
        var threePointFiveMap = $mdThemingProvider.extendPalette('green', {
            '500': '#26A36C'
        });
        var fourPointFiveMap = $mdThemingProvider.extendPalette('teal', {
            '500': '#20749F'
        });
        $mdThemingProvider.definePalette('onePointFive', onePointFiveMap);
        $mdThemingProvider.definePalette('twoPointFive', twoPointFiveMap);
        $mdThemingProvider.definePalette('threePointFive', threePointFiveMap);
        $mdThemingProvider.definePalette('fourPointFive', fourPointFiveMap);


        $mdThemingProvider.theme('default')
            .warnPalette('deep-purple');

        $mdThemingProvider.theme('zero')
            .primaryPalette('red');

        $mdThemingProvider.theme('one')
            .primaryPalette('red');

        $mdThemingProvider.theme('onePointFive')
            .primaryPalette('onePointFive');

        $mdThemingProvider.theme('two')
            .primaryPalette('amber');

        $mdThemingProvider.theme('twoPointFive')
            .primaryPalette('twoPointFive');

        $mdThemingProvider.theme('three')
            .primaryPalette('green');

        $mdThemingProvider.theme('threePointFive')
            .primaryPalette('threePointFive');

        $mdThemingProvider.theme('four')
            .primaryPalette('teal');

        $mdThemingProvider.theme('fourPointFive')
            .primaryPalette('fourPointFive');

        $mdThemingProvider.theme('five')
            .primaryPalette('indigo');

        $mdThemingProvider.alwaysWatchTheme(true);
    });    