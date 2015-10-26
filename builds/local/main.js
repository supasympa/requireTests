define('modules/module1/dependencies/module1-dep1',[], function(){
    'use strict';

    return {
        start : function(){
            console.log('module1-dep1.js: module1-dep1.js.start();');
        }
    };

});

define('modules/module1/module1',['./dependencies/module1-dep1'], function(dep1){
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

require(['modules/module1/module1'], function(pkg1){
    'use strict';

    console.log('main.js');

    pkg1.start();

    setTimeout(function(){
        require(['modules/module2/main'], function(pckg2){
            pckg2.start();
        });
    }, 200)
});


define("main", function(){});

