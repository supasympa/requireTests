require(['./packages/package1/package1'], function(pkg1){
    'use strict';

    console.log('main.js');

    pkg1.start();

    setTimeout(function(){
        require(['./packages/package2/main'], function(pckg2){
            pckg2.start();
        });
    }, 200)
});

