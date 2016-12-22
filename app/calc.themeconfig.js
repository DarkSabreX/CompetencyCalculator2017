'use strict';

angular.module('calc')
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('zero', {
            '50': '#ffebee',
            '100': '#ffcdd2',
            '200': '#ef9a9a',
            '300': '#e57373',
            '400': '#ef5350',
            '500': '#f44336',
            '600': '#e53935',
            '700': '#d32f2f',
            '800': '#c62828',
            '900': '#b71c1c',
            'A100': '#ff8a80',
            'A200': '#ff5252',
            'A400': '#ff1744',
            'A700': '#d50000',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 A100',
            'contrastStrongLightColors': '400 500 600 700 A200 A400 A700'
        });
        $mdThemingProvider.definePalette('zeroBG', {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': '#212121',
            'A100': '#ffffff',
            'A200': '#000000',
            'A400': '#303030',
            'A700': '#616161',
            'contrastDefaultColor': 'dark',
            'contrastLightColors': '600 700 800 900 A200 A400 A700'
        });
        $mdThemingProvider.definePalette('two', {
            '50': '#ffebee',
            '100': '#ffcdd2',
            '200': '#ef9a9a',
            '300': '#e57373',
            '400': '#ef5350',
            '500': '#f44336',
            '600': '#e53935',
            '700': '#d32f2f',
            '800': '#c62828',
            '900': '#b71c1c',
            'A100': '#ff8a80',
            'A200': '#ff5252',
            'A400': '#ff1744',
            'A700': '#d50000',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 A100',
            'contrastStrongLightColors': '400 500 600 700 A200 A400 A700'
        });
        $mdThemingProvider.definePalette('twoBG', {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': '#212121',
            'A100': '#ffffff',
            'A200': '#f44336',
            'A400': '#303030',
            'A700': '#616161',
            'contrastDefaultColor': 'dark',
            'contrastLightColors': '600 700 800 900 A200 A400 A700'
        });

        $mdThemingProvider.theme('default')
            .warnPalette('deep-purple');

        $mdThemingProvider.theme('0')
            .primaryPalette('red');

        $mdThemingProvider.theme('1')
            .primaryPalette('zero')
            .backgroundPalette('zeroBG');

        $mdThemingProvider.theme('2')
            .primaryPalette('two')
            .backgroundPalette('twoBG');

        $mdThemingProvider.theme('3')
            .primaryPalette('green');

        $mdThemingProvider.theme('4')
            .primaryPalette('teal');

        $mdThemingProvider.theme('5')
            .primaryPalette('indigo');

        $mdThemingProvider.alwaysWatchTheme(true);
    });    