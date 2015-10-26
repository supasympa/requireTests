define(['./dependencies/module2-dep1'], function(pkg22){

    return {
      start : function(){
          console.log('module2: module2.start()');

          pkg22.start();
          pkg22.startPkg1();
      }
    };
});
