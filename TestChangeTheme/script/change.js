/**
 * Created by Beicroom on 2016/6/29.
 */

(function(){
    'use strict';

    angular.module("changeTheme")
        .controller("changeThemeController", changeThemeController);

    changeThemeController.$inject = ["$scope", "changeThemeConfig"];
    function changeThemeController($scope, changeThemeConfig) {
        $scope.Themes = changeThemeConfig.config.local;

        $scope.changeTheme = function() {
            var head = document.getElementsByTagName("head")[0];
            var lastLink = document.getElementsByTagName("link")[1];
            head.removeChild(lastLink);

            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = $scope.selectedTheme.url;
            head.appendChild(link);
        }

        // $scope.Themes = [
        //     {
        //         "name" : "默认",
        //         "value" : "default"
        //     },
        //     {
        //         "name" : "绿色",
        //         "value" : "Green"
        //     },
        //     {
        //         "name" : "红色",
        //         "value" : "Red"
        //     }
        // ];
    }

})();