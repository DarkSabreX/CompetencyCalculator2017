'use strict';

angular.module('calc')
    .service('CompScoreService', function () {
        var finalScore = '';
        var service = {
            setFinalScore: function (total) {
                finalScore = total;
            },

            getFinalScore: function () {
                return finalScore;
            }
        }

        return service;
    })