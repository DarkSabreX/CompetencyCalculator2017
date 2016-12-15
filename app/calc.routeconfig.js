'use strict';

angular.module('calc')
    .config(function ($urlRouterProvider) {
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/starthere');
       
    })
    .config(function ($stateProvider) {


        var states = [
            {
                name: 'calculator',
                resolve: {
                    competencies: function (CompMatrixService) {
                        return CompMatrixService.getAllCompetencies();
                    }
                },
                component: 'pagecontainer'
            },
            {
                name: 'starthere',
                url: '/starthere',
                parent: 'calculator',
                component: 'starthere',
                resolve: {
                    competencies: function (CompMatrixService) {
                        return CompMatrixService.getAllCompetencies();
                    }
                }
            },
            {
                name: 'step1',
                url: '/calculator/{competencyRoute}',
                parent: 'calculator',
                component: 'competencymatrix',
                resolve: {
                    competency: function (competencies, $stateParams) {
                        return competencies.find(function (competency) {
                            return competency.route === $stateParams.competencyRoute;
                        });
                    },
                    ratings: function (CompRatingService) {
                        return CompRatingService.getAllRatings();
                    },
                    score: function (CompScoreService) {
                        return CompScoreService;
                    }
                }
            },
            {
                name: 'step2',
                url: '/results/{competencyRoute}',
                parent: 'calculator',
                component: 'matrixresults',
                resolve: {
                    competency: function (competencies, $stateParams) {
                        return competencies.find(function (competency) {
                            return competency.route === $stateParams.competencyRoute;
                        });
                    },
                    ratings: function (CompRatingService) {
                        return CompRatingService.getAllRatings();
                    },
                    score: function (CompScoreService) {
                        return CompScoreService;
                    }
                }
            }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });