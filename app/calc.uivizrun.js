'use strict';

angular.module('calc')
    .run(function ($uiRouter) {
        var vis = window['ui-router-visualizer'];
        vis.visualizer($uiRouter);
    });