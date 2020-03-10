const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const rigger = require("gulp-rigger");
const htmlmin = require("gulp-htmlmin");



function html() {
    return gulp.src("./src/*.html")
        .pipe(rigger())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./build/"))
        .pipe(browserSync.stream());
}


function styles() {
    return gulp.src("./src/css/*.scss")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowsersList: ['>0.01%']
            // cascade: false
        }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.stream());
}


function scripts() {
    return gulp.src("./src/js/*.js")
        .pipe(uglify({ toplevel: false }))
        .pipe(gulp.dest("./build/js"))
        .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
        //tunnel: true
    });
    gulp.watch("./src/**/*.html", html);
    gulp.watch("./src/css/*.scss", styles);
    gulp.watch("./src/js/**/*.js", scripts);
}


gulp.task("html", html);
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("watch", watch);






























