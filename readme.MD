#Read these ...

Read [this link] (http://www.bennadel.com/blog/2404-compiling-optimizing-a-subset-of-a-requirejs-application.htm) on how to do module dependencies. 

#Then run the ususal shizzle...

```
$: npm install;
```

```
$: bower install
```

#To build locally:

Build dat wid Grunt 

```
$: grunt build-local
```

Build this up your bad self using r.js:

```
$: node node_modules/requirejs/bin/r.js -o build.local.js
```

#Open in a browser and view the console log.

Go to : [http://whatever.your.domain.is/requireTests/index.html] (http://127.0.0.1/requireTests/index.html) 
