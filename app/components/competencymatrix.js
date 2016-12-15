'use strict';

angular.module('calc')
    .component('competencymatrix', {
        bindings: { competency: '<', ratings: '<', score:'<' },
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

            this.competencyScore = function () {
                var compsubtotal = 0;
                for (var i = 0; i < this.currentCompetency().rows.length; i++) {
                    var tmpCell = 0;
                    tmpCell = Math.round(parseInt(this.currentCompetency().rows[i].curval, 10));
                    compsubtotal += this.currentCompetency().rows[i].curval;
                }
                var comptotal = Math.round(parseFloat(compsubtotal) / parseFloat(this.currentCompetency().rows.length));
                this.setScore(comptotal);
                return comptotal;
            };
             
        },
        template:
           
          ` <md-content> 
            <md-card>
                {{$ctrl.competency.name}}
                <md-card-content>
                    <span class="md-headline">Step 1</span>
                    <p>Use the sliders below to choose the options that best describe the behaviors displayed for the <b>{{ $ctrl.competency.name }}</b> competency.Hover over the behavior abbreviations for a more detailed description.</p><p>Press the <b>Get Rating</b> button when finished.</p>
                </md-card-content>
            </md-card>
            <md-card>
                <md-toolbar>
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
                                        <td md-cell colspan="5" md-theme="{{row.curval | number: 0}}">
                                            <md-slider class="slider-cell md-primary" ng-model="row.curval" step=".2" min="{{row.minval}}" max="{{row.maxval}}" ng-disabled="cmatrix.results.show == true"></md-slider>
                                        </td>
                                    </tr>
                                    <tr md-row id={{row.name}}>
                                        <td md-cell style="{{behavior.style}}" ng-mouseenter="row.currdesc = behavior.description; row.currstyle = behavior.currstyle" ng-mouseleave="row.currdesc = ' '; row.currstyle = 'padding:3px;'" class="compcell" ng-repeat="behavior in row.behaviors track by behavior.id" id="{{behavior.name}}">
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
                        </div>
            </md-card>
            <md-card>
                <md-card-actions style="text-align: center;">
                        <md-button class="md-raised md-primary" ui-sref="step2({competencyRoute: $ctrl.competency.route})">Get Rating</md-button>
                    </md-card-actions>
                    <span>Test rating: {{$ctrl.competencyScore()}} {{$ctrl.getScore()}}</span>
            </md-card>
            </md-content>
            <md-card>
                    <md-card-actions layout="row" layout-align="space-between center" layout-wrap layout-margin layout-padding>
                        <md-button class="md-raised md-warn" ng-click="cmatrix.reloadcalc()">Start Over</md-button>
                        <md-button class="md-raised md-warn md-hue-2" ng-click="cmatrix.closecalc()">Close Calculator</md-button>
                    </md-card-actions>
                </md-card>
         `
    });