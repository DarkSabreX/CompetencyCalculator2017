'use strict';

angular.module('calc')
    .component('pagecontainer', {
        bindings: { competencies: '<' },
        template:
        `
         <md-toolbar>ALPS Competency Calculator</md-toolbar>
         <div layout="column" layout-fill>
            <ui-view></ui-view>
         </div>
        `
    });