(function(){
    'use strict';

    angular
        .module('testAnimation')
        .controller("testAnimationController", testAnimationController);

    testAnimationController.$inject = ["$q", "testAnimationService"]
    function testAnimationController($q, testAnimationService) {
        var deferred = $q.defer();
        testAnimationService.getData()
            .then(function(response){
                setTimeout(function(){ alert(JSON.stringify(response)) }, 2000);
                deferred.resolve(response);
            }, function(error){
                setTimeout(function(){ alert(error) }, 2000);
                deferred.reject(error);
            })
    }
    
})();