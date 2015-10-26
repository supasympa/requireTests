({
    baseUrl: "scripts",
    mainConfigFile : "scripts/main.js",
    optimize: "none",
    dir : "builds/local",
    modules:[
        {
            name : "main",
            include : [
                "packages/package2/main"
            ]
        }
    ]
})
