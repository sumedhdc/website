(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://anantajitjg-ng-courseapp.herokuapp.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
