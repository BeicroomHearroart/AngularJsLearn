/**
 * Created by Beicroom on 2016/7/1.
 */

(function(){
    'use strict';

    angular.module("testPromise", [])
        .service("testPromiseService", testPromiseService)
        .controller("testPromiseController", testPromiseController);

    testPromiseService.$inject = ["$q", "$http"];
    function testPromiseService($q, $http) {
        //var $q = $injector.get("$q");
        sendMessage($q, $http)
            .then(function(response) {
                try {
                    alert(Object.keys(response));
                } catch (ex) {
                    alert(ex);
                }
            }, function(error) {
                console.log(error);
            });
    }

    function sendMessage($q, $http) {
        var deferred = $q.defer();
        var requestConfig = {
            method : "get",
            url : "http://en.fullgoal.com.cn/wind/A"
        };
        $http(requestConfig)
            .success(function(response) {
                    deferred.resolve(response);
                }
            )
            .error(function(error) {
                    deferred.reject(error);
                }
            );

        return deferred.promise;
    }

    //testPromiseController.$inject = ["$scope", "testPromiseService"];
    function testPromiseController($scope, testPromiseService) {
        $scope.checkPromise = function() {
            testPromiseService.sendMessage();
        }
    }
})();