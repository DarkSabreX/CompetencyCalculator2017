'use strict';

angular.module('calc')
    .component('competencymatrix', {
        bindings: { competency: '<', ratings: '<', score: '<' },
        controller: function () {
            this.currentCompetency = function () {
                return this.competency;
            };

            this.setScore = function (total) {
                this.score.setFinalScore(total);
            };
            this.getScore = function () {
                return this.score.getFinalScore();
            };

            this.setDescriptions = function (desc) {
                this.score.setFinalDescriptions(desc);
            };
            this.getDescriptions = function () {
                return this.score.getFinalDescriptions();
            };
            var jsonParse = function (json) {
                return angular.fromJson(json)
            };

            this.competencyScore = function () {
                var comptotal = 0;
                var compSubtotal = 0;
                var compDesc = [];

                for (var i = 0; i < this.currentCompetency().rows.length; i++) {
                    var tmpCell = 0;
                    var tmpDesc = {};
                    var compName = this.currentCompetency().rows[i].name;
                    tmpCell = Math.round(parseInt(this.currentCompetency().rows[i].curval, 10));
                    tmpDesc = this.currentCompetency().rows[i].behaviors[tmpCell - 1].description;
                    compDesc.push({ 'competency': compName, 'description' : tmpDesc });
                    compSubtotal += this.currentCompetency().rows[i].curval;
                }
                comptotal = Math.round(parseFloat(compSubtotal) / parseFloat(this.currentCompetency().rows.length));
                this.setScore(comptotal);
                angular.fromJson(this.setDescriptions(compDesc));
                return comptotal;
            };

            this.reloadcalc = function () {
                window.location.reload(true);
            };
        },
        templateUrl: 'app/pages/CompetencyMatrix.html'
    });