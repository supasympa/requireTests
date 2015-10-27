({
    baseUrl: "scripts",
    mainConfigFile : "scripts/main.js",
    optimize: "none",
    dir : "builds/local",
    paths : {
        requireLib : "../bower_components/requirejs/require"
    },
    modules:[
        {
            name : "main",
            include: ["requireLib"],
            exclude: ["common/foo/foo"]
        }
    ]
})
