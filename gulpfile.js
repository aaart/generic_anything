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

var cfg = {
    isDev: yargs.isDev,
    isProd: yargs.isProd,
    nodeModules: "node_modules/",
    externalsTarget: "3rd/"
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
    removeMinSuffix: path => {
        path => {
            if (path.basename.endsWith(".min")) {
                path.basename = path.basename.replace(".min", "");
            }
            return path;
        }
    }
}

gulp.task(
    "build-website", 
    [
        "print-cfg", 
        "copy-vue",
        "copy-bootstrap"
    ]);

gulp.task("print-cfg", () => {
    console.log(cfg);
});

gulp.task("copy-vue", () => {
    var sourceFiles = tools.extractSrcFiles("vue/dist/", ".js");
    gulp.src(sourceFiles)
    //.pipe(debug())
    .pipe(rename(tools.removeMinSuffix))
    .pipe(cleanDest(cfg.externalsTarget + "vue/"))    
    .pipe(gulp.dest(cfg.externalsTarget + "vue/"));
});

gulp.task("copy-bootstrap", () => {
    var sourceStyles = tools.extractSrcFiles("bootstrap/dist/css/", ".css").concat(tools.extractSrcFiles("bootstrap/dist/css/", ".css.map"));

    gulp.src(sourceStyles)
    .pipe(rename(tools.removeMinSuffix))
    .pipe(cleanDest(cfg.externalsTarget + "bootstrap/css/"))
    .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/css/"));

    gulp.src(cfg.nodeModules + "bootstrap/fonts/*")
    .pipe(cleanDest(cfg.externalsTarget + "bootstrap/fonts/"))
    .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/fonts/"))

    var sourceJs = tools.extractSrcFiles("bootstrap/dist/js/", ".js");
    gulp.src(sourceJs)
    .pipe(rename(tools.removeMinSuffix))
    .pipe(cleanDest(cfg.externalsTarget + "bootstrap/js/"))    
    .pipe(gulp.dest(cfg.externalsTarget + "bootstrap/js/"));
});
