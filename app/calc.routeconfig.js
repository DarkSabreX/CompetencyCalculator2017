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
                name: 'calc',
                url: '/',
                component: 'starthere',
                resolve: {
                    competencies: function (CompMatrixService) {
                        return CompMatrixService.getAllCompetencies();
                    }
                }
            },
            {
                name: 'calc.step1',
                url: '/Step1',
                component: 'step1'
            },
            { name: 'calc.step2', url: '/Step2', component: 'step2' }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });