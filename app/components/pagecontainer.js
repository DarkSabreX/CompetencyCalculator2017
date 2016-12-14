'use strict';

angular.module('calc')
    .component('pagecontainer', {
        bindings: { competencies: '<' },
        template:
        `
         <md-toolbar>ALPS Competency Calculator</md-toolbar>
         <ui-view></ui-view>
        `
    });