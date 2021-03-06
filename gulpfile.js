const gulp = require('gulp');
const { watch, series, src, dest, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const concat = require('gulp-concat');
const CompSass = require('gulp-sass');
const gulpBabel = require('gulp-babel');
const sort = require('sort-stream');

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
        .pipe(dest('dist/css/'));
}

/* Funció per a minimitzar el js */
function minifyJS(){
    return src('js/*.js')
        .pipe(cleanJS())
        .pipe(dest('dist/js/'));
}

/* Concats */
function concatCSS(){
    return src('css/*.css')
        .pipe(cleanCSS())
        .pipe(concat('all.css'))
        .pipe(dest('dist/css/'));
}

function concatJS(){
    return src('js/*.js')
        .pipe(sort())
        .pipe(cleanJS())
        .pipe(concat('all.js'))
        .pipe(dest('dist/js/'));
}

/* Babel JS */
function allBabel(){
    return src('dist/js/all.js')
        .pipe(gulpBabel())
        .pipe(concat('all-babel.js'))
        .pipe(dest('dist/js/'));
}


/*TASQUES*/
exports.sass = sass;
exports.watchSass = watcherSass;
exports.minifyAll = series(minifyCSS, minifyJS);
exports.concatStyles = concatCSS;
exports.concatScripts = concatJS;
exports.babel = allBabel;

/* REALITZAR TOTES LES TASQUES */
exports.kittens = series(sass, minifyCSS, minifyJS, concatCSS, concatJS, allBabel);