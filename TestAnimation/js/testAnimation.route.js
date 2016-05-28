(function(){
    'use strict';

    angular
        .module('testAnimation')
        .config(testAnimationRouter);

    function testAnimationRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'template/testPage1.html'
            })
            .state('test', {
                url : '/test',
                templateUrl : 'template/testPage2.html'
            })

        $urlRouterProvider
            .when('', '/home')
            .otherwise('/home');
    }

})()