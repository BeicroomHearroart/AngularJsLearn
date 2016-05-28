(function(){
    'use strict';

    angular
        .module('testAnimation')
        .animation(".home", testAnimationAnimation);

    function testAnimationAnimation() {
        return {
            enter : function(element, done) {
                $(element).css({ opacity : 0 });
                $(element).animate({ opacity : 1 }, 2000, null, done());
            },
            leave : function(element, done) {
                $(element).css({ opacity : 1 });
                $(element).animate({ opacity : 0 }, 2000, null, done());
            }
        }
    }

})()