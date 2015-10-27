define(['./dependencies/module1-dep1', 'common/foo/foo'], function(dep1, foo){
    'use strict';

    return {
        start: function(){
            console.log('module1.js, module1.start()');

            dep1.start();

            foo.bar();
        }
    };

});
