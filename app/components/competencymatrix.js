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
        template:
           
          ` <form name="competencyForm" novalidate>
            <md-content layout="row">
            <div flex="15"></div> 
            <md-card layout="column">
                <md-card-header>
                    <md-card-header-text>
                        <span class="md-headline">
                            Competency Category: {{$ctrl.competency.name}}
                        </span>
                    </md-card-header-text>
                </md-card-header>
                <md-card-content>
                    <span class="md-headline">Step 1</span>
                    <p>Use the sliders below to choose the options that best describe the behaviors displayed for the <b>{{ $ctrl.competency.name }}</b> competency.Hover over the behavior abbreviations for a more detailed description.</p><p>Press the <b>Get Rating</b> button when finished.</p>
                </md-card-content>
            </md-card>
            <md-card>
                <md-toolbar class="tbl-head">
                        {{$ctrl.ratings.title}}
                    <table md-table class="tbl-head">
                       <thead md-head>
                          <tr md-row>
                             <th md-column style="{{rating.style}}" ng-repeat="rating in $ctrl.ratings">{{rating.title}}</th>
                          </tr>
                        </thead>
                     </table>
                </md-toolbar>
                <div id="scrollable-area">
                    <table md-table class="competencytable">
                        <tbody md-body>
                                    <tr md-row ng-repeat-start="row in $ctrl.competency.rows track by row.id">
                                        <td md-cell colspan="5" style="text-align:center;"><b>{{row.name}}</b></td>
                                    </tr>
                                    <tr>
                                        <td md-cell colspan="5" class="slider-cell" md-theme="{{row.curval}}">
                                            <md-slider required md-discrete name="comp{{row.id}}" aria-label="{{row.name}} slider" class="slider-cell md-primary" ng-model="row.curval" step=".2" min="{{row.minval}}" max="{{row.maxval}}"></md-slider>
                                            <div ng-messages="competencyForm.comp{{row.id}}.$error" ng-hide="competencyForm.comp{{row.id}}.$valid">
                                              <div ng-message="required">This is required!</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr md-row id={{row.name}}>
                                        <td md-cell  ng-mouseenter="row.currdesc = behavior.description; row.currstyle = behavior.currstyle" ng-mouseleave="row.currdesc = ' '; row.currstyle = 'padding:3px;'" class="compcell" ng-repeat="behavior in row.behaviors track by behavior.id" id="{{behavior.name}}">
                                            {{behavior.description}}
                                        </td>
                                    </tr>
                                    <tr md-row ng-repeat-end style="text-align:left; padding: 3px;">
                                        <td md-cell colspan="5" ng-attr-style="{{row.currstyle}}">
                                            <span>{{row.currdesc}}</span>
                                        </td>
                                    </tr>
                        </tbody>
                    </table>
                    <div ng-if="!competencyForm.$invalid" ng-init="$ctrl.competencyScore()">
                    </div>
                </div>
                <md-card-actions style="text-align: center;">
                    <md-button ng-disabled="competencyForm.$invalid" class="md-raised md-primary" ui-sref="step2({competencyRoute: $ctrl.competency.route})">Get Rating</md-button>
                </md-card-actions>
            </md-card>
            </md-content>
            </form>
            <md-card>
                    <md-card-actions layout="row" layout-align="space-between center" layout-wrap layout-margin layout-padding>
                        <md-button class="md-raised md-warn" ng-click="$ctrl.reloadcalc()">Start Over</md-button>
                    </md-card-actions>
            </md-card>
         `
    });