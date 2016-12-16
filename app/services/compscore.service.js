'use strict';

angular.module('calc')
    .service('CompScoreService', function () {
        var finalScore = '';
        var finalDescriptions = [];
        var service = {
            setFinalScore: function (total) {
                finalScore = total;
            },
            getFinalScore: function () {
                return finalScore;
            },

            setFinalDescriptions: function (desc) {
                finalDescriptions = desc;
            },

            getFinalDescriptions: function () {
                return finalDescriptions;
            }

        }

        return service;
    })