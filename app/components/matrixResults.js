'use strict';

angular.module('calc')
    .component('matrixresults', {
        bindings: { competency: '<', ratings: '<', score: '<', finalScore: '<', finalDescriptions: '<' },
        controller: function () {
            this.reloadcalc = function () {
                window.location.reload(true);
            };
        },
        templateUrl: 'app/pages/MatrixResults.html'       
    });