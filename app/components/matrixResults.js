'use strict';

angular.module('calc')
    .component('matrixresults', {
        bindings: { competency: '<', ratings: '<', score: '<', finalScore: '<', finalDescriptions: '<', finalScoreObj: '<' },
        controller: function () {
            this.reloadcalc = function () {
                window.location.reload(true);
            };
        },
        templateUrl: 'app/pages/MatrixResults.html'       
    });