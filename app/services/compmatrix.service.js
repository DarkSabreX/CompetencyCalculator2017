'use strict';

angular.module('calc')
    .service('CompMatrixService', function ($http) {
        var testVar = 'success!'; 

        var service = {
            getAllCompetencies: function () {
                return $http.get('data/competencies.json', { cache: true }).then(function (resp) {
                    return resp.data;
                });
            },

            getCompetency: function (id) {
                function competencyMatchesParam(competency) {
                    return competency.id === competency;
                }

                return service.getAllCompetencies().then(function (competencies) {
                    return competencies.find(competencyMatchesParam)
                });
            },
            getTotal: function () {
                return testVar;
            },
            getCompetencyTotal: function () {
                var competencySubTotal = 0;

            }
        }

        return service;
    })