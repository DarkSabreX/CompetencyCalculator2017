'use strict';

angular.module('calc')
    .service('CompTotalService', function ($http) {
        var service = {
            testVar: [{subtotal:test}
            ],

            getTotal: function () {
                return service.testVar;
            }
        }

        return service;
    })