﻿'use strict';

angular.module('calc')
    .component('starthere', {
        bindings: { competencies: '<' },
        template:
        `
            <div layout="row">
            
            <md-sidenav md-is-locked-open="$mdMedia('gt-md')" layout="column">

            <span>Competencies</span>

            <a ng-repeat="competency in $ctrl.competencies track by competency.id" ui-sref-active="active" ui-sref="step1({competencyRoute: competency.route})">
                <md-button ng-disabled="false" class="md-raised md-primary">{{competency.name}}</md-button>
            </a>

            
        </md-sidenav>
        <md-content flex layout="row">
            <ui-view>
                <div layout="column">
                    <p>Welcome to the ALPS Competency Calculator. Please select a competency on the left to get startedg</p>
                </div>
            </ui-view>
        </md-content>
        </div> 
        `
    });