angular.module('simpleCRUD').config([
    '$stateProvider',
    'urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('userInfo', {
            url: '/userInfo/',
            template: './index.html'
        }).state('userInfo', {
            url: '/userInfo',
            template: './index.html'
        })

        $urlRouterProvider.otherwise('/userInfo');
    }
]);