'use strict';

angular.module('calc')
    .component('starthere', {
        bindings: { competencies: '<' },
        templateUrl: 'app/pages/StartHere.html'
    });