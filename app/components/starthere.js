'use strict';

angular.module('calc')
    .component('starthere', {
        bindings: { competencies: '<' },
        template:
        `
            <md-sidenav md-is-locked-open="$mdMedia('gt-md')">
            sidenav
            <span>Competencies</span>
            <span ng-repeat="competency in $ctrl.competencies">{{competency.name}}</span>
            <a ng-repeat="competency in $ctrl.competencies" ui-sref-active="active" ui-sref="competencies.competency({competencyId: competency.id})">
                <md-button ng-disabled="false" class="md-raised md-primary">{{competency.name}}</md-button>
            </a>
            <a ui-sref="calc.step1">
                <md-button ng-disabled="false" class="md-raised md-primary">Step 1</md-button>
            </a>
            <a ui-sref="calc.step2">
                <md-button ng-disabled="false" class="md-raised md-primary">Step 2</md-button>
            </a>
            
        </md-sidenav>
        <ui-view>
            <div>
                <p>Welcome to the ALPS Competency Calculator. Please select a competency on the left to get startedg</p>
            </div>
        </ui-view>
         `
    });