'use strict';

angular.module('calc')

    .factory('ratingFactory', function ($http, $filter)
    {
        var ratingList = {};

        ratingList.getRatingList = function () {
            return $http.get('objects/ratings.json').then(function (data) {
                    // you can do some processing here
                    this.ratings = angular.fromJson(data);
                });
        };

        return ratingList;
    })