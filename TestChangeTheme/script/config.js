/**
 * Created by Beicroom on 2016/6/29.
 */

(function(){
    'use strict';

    angular.module("changeTheme", [])
        .factory("changeThemeConfig", changeThemeConfig);

    function changeThemeConfig() {
        require(["config.json"],"","")
        this.config = {
            "useLocal" : true,
            "defaultLocal" : "default",
            "local" : [
                {
                    "name" : "default",
                    "url" : "style/default.css"
                },
                {
                    "name" : "Green",
                    "url" : "style/Green.css"
                },
                {
                    "name" : "Red",
                    "url" : "style/Red.css"
                }
            ],
            "remote" : {
                "name" : "",
                "url" : ""
            }
        };

        return this;
    }
})();