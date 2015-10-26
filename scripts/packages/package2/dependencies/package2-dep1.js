define(['../../package1/package1'], function(pckg1){

    return {
        start : function(){
            console.log('package2-dep1.js; package2-dep1.start()');
        },

        startPkg1 : function(){
            console.log('package2-dep1.js; calling package 1 from package 2 ...');
            pckg1.start();
        }
    };

});
