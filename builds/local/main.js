define('packages/package1/dependencies/package1-dep1',[], function(){
    'use strict';

    return {
        start : function(){
            console.log('package1-dep1.js: package1-dep1.js.start();');
        }
    };

});

define('packages/package1/package1',['./dependencies/package1-dep1'], function(dep1){
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


define("main", function(){});

define('packages/package2/dependencies/package2-dep1',['../../package1/package1'], function(pckg1){

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

define('packages/package2/main',['./dependencies/package2-dep1'], function(pkg22){

    return {
      start : function(){
          console.log('package2: package2.start()');

          pkg22.start();
          pkg22.startPkg1();
      }
    };
});

