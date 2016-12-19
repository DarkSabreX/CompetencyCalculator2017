'use strict';

angular.module('calc')
    .component('pagecontainer', {
        bindings: { competencies: '<' },
        templateUrl: 'app/pages/PageContainer.html'       
    });