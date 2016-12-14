'use strict';

angular.module('calc')
    .component('competencymatrix', {
        bindings: { competency: '<', ratings: '<' },
        template:
           
          `  
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
                                        <td md-cell style="{{behv.style}}" ng-mouseenter="row.currdesc = behv.desc; row.currstyle = behv.currstyle" ng-mouseleave="row.currdesc = ' '; row.currstyle = 'padding:3px;'" class="compcell" ng-repeat="behv in row.behvs track by behv.id" id="{{behv.name}}">
                                            {{behv.desc}}
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
         `
    });