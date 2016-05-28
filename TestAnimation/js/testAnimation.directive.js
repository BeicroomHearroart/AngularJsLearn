(function(){
    'use strict';

    angular
        .module('testAnimation')
        .directive("tdMenu", testAnimationDirective)
        .controller("tdMenuController", tdMenuController);

    function testAnimationDirective() {
        return {
            restrict : "E",
            templateUrl : "template/testDirective.html",
            controller : tdMenuController,
            controllerAs : "tdmc",
            link : function(scope, element, attrs) {
                $(element).css({ opacity : 0 });
                $(element).animate({ opacity : 1 }, 2000);
            }
        }
    }

    function tdMenuController() {

    }

})()