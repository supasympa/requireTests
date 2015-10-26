define(['./dependencies/package2-dep1'], function(pkg22){

    return {
      start : function(){
          console.log('package2: package2.start()');

          pkg22.start();
          pkg22.startPkg1();
      }
    };
});
