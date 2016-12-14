'use strict';

angular.module('calc')
    .component('headerComponent', {
        bindings: { competencies: '<' },
        template:
        `
         <md-toolbar>ALPS Competency Calculator</md-toolbar> 
        `
    });