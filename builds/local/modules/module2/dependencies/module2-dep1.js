define(['../../module1/module1'], function(pckg1){

    return {
        start : function(){
            console.log('module2-dep1.js; module2-dep1.start()');
        },

        startPkg1 : function(){
            console.log('module2-dep1.js; calling module 1 from module 2 ...');
            pckg1.start();
        }
    };

});
