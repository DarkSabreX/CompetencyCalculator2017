'use strict';

angular.module('calc')
    .config(function ($urlRouterProvider) {
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/');
       
    })
    .config(function ($stateProvider) {


        var states = [
            {
                name: 'competency',
                url: '',
                component: 'starthere',
                resolve: {
                    competencies: function (CompMatrixService) {
                        return CompMatrixService.getAllCompetencies();
                    }
                }
            },
            {
                name: 'competency.step1',
                url: '/competency/{competencyRoute}',
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
                name: 'starthere.step1',
                url: '/step1',
                component: 'step1'
            },
            { name: 'calc.step2', url: '/Step2', component: 'step2' }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });