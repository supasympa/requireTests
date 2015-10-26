define(['./dependencies/package1-dep1'], function(dep1){
    'use strict';

    return {
        start: function(){
            console.log('package1.js, package1.start()');

            dep1.start();

        },

        routed : function(){
            console.log('package1.js, package1.routed()')
        }
    };

});
