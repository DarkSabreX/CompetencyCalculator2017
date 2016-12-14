'use strict';

angular.module('calc')
    .component('contentComponent', {
        bindings: { competencies: '<' },
        template:
        `
        <md-content flex layout="row">
                <div layout="column">
                    <p>Welcome to the ALPS Competency Calculator. Please select a competency on the left to get startedg</p>
                </div>
        </md-content> 
        `
    });