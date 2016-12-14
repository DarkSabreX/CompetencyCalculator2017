﻿'use strict';

angular.module('calc')
    .component('matrixresults', {
        bindings: { competency: '<', ratings: '<' },
        template:
           
          ` <md-content> 
            <md-card>
                {{$ctrl.competency.name}}
                <md-card-header>
                        <md-card-header-text>
                            <span class="md-headline">Step 2</span>
                        </md-card-header-text>
                    </md-card-header>
            </md-card>
            <md-card class="tblcard">
                    
                    <md-card-content>
                        <div style="text-align: center;" style="margin-bottom: 2%;">
                            <span>The Rating is:</span>
                            <h2 ng-attr-style="{{cmatrix.comptotaltxtcolor}}">{{cmatrix.comptotal}}</h2> or <h2 ng-attr-style="{{cmatrix.comptotaltxtcolor}}">{{cmatrix.comptotaltxt}}</h2>
                            <span>Copy the text below. Enter the rating into the <b>{{cmatrix.compsel.name}}</b> Section and paste the behavior list into the comments section.</span>
                            <br />
                            <i class="material-icons" style="font-size: xx-large; color: black;">&#xE5DB;</i>
                        </div>
                        <div class="md-whiteframe-4dp" style="padding: 2%;">
                            <span class="layout-max-width">{{cmatrix.comptxt.join('; ')}}</span>
                        </div>
                    </md-card-content>
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