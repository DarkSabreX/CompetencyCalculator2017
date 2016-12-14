'use strict';

angular.module('calc')
    .component('sidenavComponent', {
        bindings: { competencies: '<' },
        template:
        `
            <md-sidenav md-is-locked-open="$mdMedia('gt-md')" layout="column">

            <span>Competencies</span>

            <a ng-repeat="competency in $ctrl.competencies track by competency.id" ui-sref-active="active" ui-sref="step1({competencyRoute: competency.route})">
                <md-button ng-disabled="false" class="md-raised md-primary">{{competency.name}}</md-button>
            </a>

            
        </md-sidenav> 
        `
    });