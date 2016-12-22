'use strict';

angular.module('calc')
    .component('competencymatrix', {
        bindings: { competency: '<', ratings: '<', score: '<' },
        controller: function () {
            this.ratingList = function () {
                return this.ratings;
            };
            this.currentCompetency = function () {
                return this.competency;
            };

            this.setScore = function (total) {
                this.score.setFinalScore(total);
            };
            this.getScore = function () {
                return this.score.getFinalScore();
            };
            this.setFinalScoreObj = function (total) {
                this.score.setFinalScoreObj(total);
            };
            var jsonParse = function (json) {
                return angular.fromJson(json)
            };

            this.sliderRound = function (val) {
                if (val > 0 && val < 1.5) {
                    return val = "one";
                }
                if (val >= 1.5 && val < 2) {
                    return val = "onePointFive";
                }
                if (val >= 2 && val < 2.5) {
                    return val = "two";
                }
                if (val >= 2.5 && val < 3) {
                    return val = "twoPointFive";
                }
                if (val >= 3 && val < 3.5) {
                    return val = "three";
                }
                if (val >= 3.5 && val < 4) {
                    return val = "threePointFive";
                }
                if (val >= 4 && val < 4.5) {
                    return val = "four";
                }
                if (val >= 4.5 && val < 5) {
                    return val = "fourPointFive";
                }
                if (val == 5) {
                    return val = "five";
                }
                else {
                    return val = 'zero';
                }
            };

            this.competencyScore = function () {
                /**
                 Define the variables
                 */
                var compRawScore = 0,
                    compFinalScore = 0,
                    scoreText = {},
                    comptotal = 0,
                    compSubtotal = 0,
                    compDesc = [];
                /*
                Loop through each competency to get the score and description
                */
                for (var i = 0; i < this.currentCompetency().rows.length; i++) {
                    /*
                      Private Variables - Ya know, to do all the dirty work
                     */
                    var tmpFinalScore = 0,
                        tmpCell = 0,
                        tmpDesc = {},
                        compName = this.currentCompetency().rows[i].name;

                    tmpCell = Math.round(parseInt(this.currentCompetency().rows[i].curval, 10));
                    tmpDesc = this.currentCompetency().rows[i].behaviors[tmpCell - 1].description;
                    compDesc.push({ 'competency': compName, 'description' : tmpDesc });
                    compSubtotal += this.currentCompetency().rows[i].curval;
                }
                compRawScore = parseFloat(compSubtotal) / parseFloat(this.currentCompetency().rows.length);
                /*
                Logic can be placed here for custom rounding of final score
                */
                compFinalScore = Math.round(parseFloat(compSubtotal) / parseFloat(this.currentCompetency().rows.length));
                comptotal = Math.round(parseFloat(compSubtotal) / parseFloat(this.currentCompetency().rows.length));
                scoreText.textScore= this.ratingList()[comptotal - 1].title;
                scoreText.color = this.ratingList()[comptotal - 1].color;

                this.setScore({
                    'rawScore': compRawScore,
                    'roundScore': compFinalScore,
                    'scoreText': scoreText,
                    'descriptions': compDesc
                });
            };

            this.reloadcalc = function () {
                window.location.reload(true);
            };
        },
        templateUrl: 'app/pages/CompetencyMatrix.html'
    });