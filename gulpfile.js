const gulp = require('gulp');
const { watch, series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const concat = require('gulp-concat');
const CompSass = require('gulp-sass');

/* Watchers per al scss */
function sass(){
    return src('sass/**/*.scss')
        .pipe(CompSass())
        .pipe(dest('css/'))
}

function watcherSass() {
    watch('sass/**/*.scss', sass);
}

/* Funció o tarea per a minimitzar el css */
function minifyCSS(){
    return src('css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('lib/css/'));
}

/* Funció per a minimitzar el js */
function minifyJS(){
    return src('js/*.js')
        .pipe(cleanJS())
        .pipe(dest('lib/js/'));
}

/* Concats */



exports.sass = sass;
exports.watchSass = watcherSass;
exports.min = series(minifyCSS, minifyJS);