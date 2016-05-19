(function() {
'use strict';

    angular
        .module('myApp', [])
        .factory('dependency', function(){
            return new Object();
        })
        .controller('ControllerController', ControllerController);

    ControllerController.$inject = ['$scope', 'dependency'];
    function ControllerController($scope, dependency) {
        
        dependency.Guess = {
            inputNumber : 0,
            guessNumber : Math.floor(Math.random() * 9 + 1),
            compare : "猜一下",
            count : 0,
            reset : function() {
                this.inputNumber = 0;
                this.guessNumber = Math.floor(Math.random() * 9 + 1);
                this.compare = "猜一下";
                this.count = 0;
            },
            verify : function() {
                if(this.inputNumber == this.guessNumber) {
                    this.compare = "猜对了";
                    return;
                } else if(this.inputNumber > this.guessNumber) {
                    this.compare = "太大了";
                } else {
                    this.compare = "太小了";
                }
                this.count++;
            }
        }
        
        $scope.dep = dependency;
    }
    
})();