'use strict';

angular.module('calc')
    .service('CompRatingService', function ($http) {
        var service = {
            getAllRatings: function () {
                return $http.get('data/ratings.json', { cache: true }).then(function (resp) {
                    return resp.data;
                });
            },

            getRating: function (id) {
                function ratingMatchesParam(rating) {
                    return rating.id === rating;
                }

                return service.getAllRatings().then(function (ratings) {
                    return ratings.find(ratingMatchesParam)
                });
            }
        }

        return service;
    })