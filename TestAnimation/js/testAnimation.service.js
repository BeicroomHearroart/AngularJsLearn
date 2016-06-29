(function(){
    'use strict';

    angular
        .module('testAnimation')
        .service("testAnimationService", testAnimationService);

    testAnimationService.$inject = ["$q", "$http"];
    function testAnimationService($q, $http) {
        this.getData = function() {
            var deferred = $q.defer();
            const url = 'http://en.fullgoal.com.cn/wind/A';

            var promise = $http({
                method: 'GET',
                url: url
            });

            promise
                .then(function (response) {
                    console.log(response);
                    deferred.resolve(response);
                }, function (error) {
                    console.log(error);
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

})();