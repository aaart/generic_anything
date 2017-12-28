var gulp = require('gulp');
var print = require('gulp-print');
var debug = require('gulp-debug');
var run = require('gulp-run');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var yargs = require('yargs').argv;
var fs = require('fs');
var rename = require('gulp-rename');
var cleanDest = require('gulp-clean-dest');
var webpack = require('gulp-webpack');

// REMEMBER: this script does NOT support multiple destinations
var cfg = {
    isDev: yargs.isDev,
    isProd: yargs.isProd,
    nodeModules: "node_modules/",
    target: "geany.dotnet_core/geany.dotnet_core/wwwroot/",
    externalsTarget: "geany.dotnet_core/geany.dotnet_core/wwwroot/3rd/"
};

var tools = {
    extractSrcFiles: (srcPath, suffix) => {
        var sourceDir = cfg.nodeModules + srcPath;
        var sourceFiles = fs.readdirSync(sourceDir).filter(x => x.endsWith(suffix));
    
        var minified = sourceFiles.filter(x => x.endsWith(".min" + suffix));
        if (cfg.isDev) {
            minified.forEach(x => {
                var index = sourceFiles.indexOf(x);
                sourceFiles.splice(index, 1);
            });
        } else if (cfg.isProd) {
            minified.forEach(x => {
                var fullFile = x.replace(".min" + suffix, suffix);
                var index = sourceFiles.indexOf(fullFile);
                sourceFiles.splice(index, 1);
            });
        }
        //console.log(sourceFiles);
        return sourceFiles.map(x => cfg.nodeModules + srcPath + x);
    },
    removeNameSuffix: (path, suffix, suffixReplacement) => {
        suffixReplacement = suffixReplacement || "";
        if (path.basename.endsWith(suffix)) {
            path.basename = path.basename.replace(suffix, suffixReplacement);
        }
        return path;
    }
}

gulp.task(
    "build-website", 
    [
        "print-cfg",
        "clear-dest",
        "copy-index.html",
        "copy-jquery", 
        "copy-vue",
        "copy-vue-router",
        "copy-bootstrap",
        "copy-fontawesome",
        "run-webpack"
    ]);

gulp.task("print-cfg", () => {
    console.log(cfg);
});

gulp.task("clear-dest", () => {
    
});

gulp.task("copy-index.html", () => {
    gulp.src(["app/src/index.html"])
        .pipe(gulp.dest(cfg.target));
});

gulp.task("copy-jquery", () => {
    var sourceFiles = ["core.js", "jquery.min.map"];
    if (cfg.isDev) {
        sourceFiles.push("jquery.js");
    } else {
        sourceFiles.push("jquery.min.js");
    }
    sourceFiles = sourceFiles.map(item => cfg.nodeModules + "jquery/dist/" + item);
    gulp.src(sourceFiles)
        .pipe(rename(path => {
            if (path.extname !== ".map") tools.removeNameSuffix(path, ".min");
        }))
        .pipe(cleanDest(cfg.externalsTarget + "jquery/"))
        .pipe(gulp.dest(cfg.externalsTarget + "jquery/"));
    
});

gulp.task("copy-vue", () => {
    var sourceFiles = tools.extractSrcFiles("vue/dist/", ".js");
    gulp.src(sourceFiles)
        //.pipe(debug())
        .pipe(rename(path => tools.removeNameSuffix(path, ".min")))
        .pipe(cleanDest(cfg.externalsTarget + "vue/"))    
        .pipe(gulp.dest(cfg.externalsTarget + "vue/"));
});

gulp.task("copy-vue-router", () => {
    var sourceFiles = tools.extractSrcFiles("vue-router/dist/", ".js");
    gulp.src(sourceFiles)
        //.pipe(debug())
        .pipe(rename(path => tools.removeNameSuffix(path, ".min")))
        .pipe(cleanDest(cfg.externalsTarget + "vue-router/"))    
        .pipe(gulp.dest(cfg.externalsTarget + "vue-router/"));
});


gulp.task("copy-bootstrap", () => {
    var sourceStyles = tools.extractSrcFiles("bootstrap/dist/css/", ".css").concat(tools.extractSrcFiles("bootstrap/dist/css/", ".css.map"));
    var sourceJs = tools.extractSrcFiles("bootstrap/dist/js/", ".js");

    gulp.src(sourceStyles)
        .pipe(rename(path => {
            tools.removeNameSuffix(path, ".min.css", ".css");
            tools.removeNameSuffix(path, ".min");
            
        }))
        .pipe(cleanDest(cfg.externalsTarget + "bootstrap/css/"))
        .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/css/"));
        
    gulp.src(cfg.nodeModules + "bootstrap/fonts/*")
        .pipe(cleanDest(cfg.externalsTarget + "bootstrap/fonts/"))
        .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/fonts/"));

    gulp.src(sourceJs)
        .pipe(rename(path => tools.removeNameSuffix(path, ".minx")))
        .pipe(cleanDest(cfg.externalsTarget + "bootstrap/js/"))    
        .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/js/"));
});

gulp.task("copy-fontawesome", () => {
    var sourceStyles = tools.extractSrcFiles("font-awesome/css/", ".css").concat(tools.extractSrcFiles("font-awesome/css/", ".css.map"));

    gulp.src(sourceStyles)
        .pipe(rename(path => {
            tools.removeNameSuffix(path, ".min.css", ".css");
            tools.removeNameSuffix(path, ".min");
            
        }))
        .pipe(cleanDest(cfg.externalsTarget + "font-awesome/css/"))
        .pipe(gulp.dest(cfg.externalsTarget + "font-awesome/css/"));

    gulp.src(cfg.nodeModules + "font-awesome/fonts/*")
        .pipe(cleanDest(cfg.externalsTarget + "font-awesome/fonts/"))
        .pipe(gulp.dest(cfg.externalsTarget + "font-awesome/fonts/"));
});

gulp.task("run-webpack", () => {
    run('webpack').exec();
});
