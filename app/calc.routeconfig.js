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
                url: '/competency/{competencyRoute}',
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
                    }
                }
            },
            {
                name: 'step2',
                url: '/competency/{competencyRoute}/Results',
                parent: 'step1',
                component: 'competencymatrix',
                resolve: {
                    competency: function (competencies, $stateParams) {
                        return competencies.find(function (competency) {
                            return competency.route === $stateParams.competencyRoute;
                        });
                    },
                    ratings: function (CompRatingService) {
                        return CompRatingService.getAllRatings();
                    }
                }
            },
            { name: 'calc.step2', url: '/Step2', component: 'step2' }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });