define(['./dependencies/module1-dep1'], function(dep1){
    'use strict';

    return {
        start: function(){
            console.log('module1.js, module1.start()');

            dep1.start();

        },

        routed : function(){
            console.log('module1.js, module1.routed()')
        }
    };

});
