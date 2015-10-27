require.config({
    paths : {
        text : "../bower_components/text/text"
    }
});
require(['modules/module1/module1'], function(pkg1){
    'use strict';

    console.log('main.js');

    pkg1.start();

    setTimeout(function(){
        require(['./modules/module2/main'], function(pckg2){
            pckg2.start();
        });
    }, 2000)
});

