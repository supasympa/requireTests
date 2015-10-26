#read these!

read this on how to do module dependencies : [by clicking here]  (http://www.bennadel.com/blog/2404-compiling-optimizing-a-subset-of-a-requirejs-application.htm)


# To build locally using r.js:
*$:* node node_modules/requirejs/bin/r.js -o build.local.js paths.requireLib=../bower_components/requirejs/require name=main include=requireLib

or maybe  

*$:* node node_modules/requirejs/bin/r.js -o build.local.js paths.requireLib=../bower_components/requirejs/require include=requireLib
