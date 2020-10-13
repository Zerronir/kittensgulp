const gulp = require('gulp');
const { watch, series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

/* Watchers per al scss */
function watcherSASS(){
    return src('sass/*.scss')
        .pipe(sass())
        .pipe(dest('css/'))
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


exports.min = series(minifyCSS, minifyJS);