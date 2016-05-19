(function() {
'use strict';

    angular
        .module('myApp', [])
        .controller('ControllerController', ControllerController);

    ControllerController.$inject = ['$scope'];
    function ControllerController($scope) {
        
        $scope.Guess = {
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
    }
    
})();