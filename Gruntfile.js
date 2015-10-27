module.exports = function (grunt) {

    var buildLocal = require("./build.local");

    grunt.initConfig({

        requirejs: {
            build: {
                options: {
                    baseUrl: "scripts",
                    mainConfigFile : "scripts/main.js",
                    optimize: "uglify",
                    dir : "builds/local",
                    paths : {
                        requireLib : "../bower_components/requirejs/require"
                    },
                    modules:[
                        {
                            name : "main",
                            include: ["requireLib", "modules/module2/dependencies/module2-dep1"],
                            exclude: ["common/foo/foo"]
                        },
                        {
                            name : "common/foo/foo"
                        }
                    ]
                }
            }
        },

        copy: {
            local: {
                files: [{
                    cwd: "builds",
                    src: "index.html",
                    dest: "builds/local",
                    expand: true
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build-local', ['requirejs:build', 'copy:local']);

};
