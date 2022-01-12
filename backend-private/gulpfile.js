/*.1 para hacer cambios a los css con los archivos scss*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const { series } = require("gulp");

/*.1 para hacer cambios a los css con los archivos scss EN EL ARCHIVO CUSTOM*/

function change_scss_css1() {
    return gulp.src('./src/main/resources/static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/main/resources/static/css'));
};

exports.change_scss_css1 = change_scss_css1;



'use strict';

function copy() {
    return gulp.src('./node_modules/bootstrap/dist/js/*')
        .pipe(gulp.dest('./js'));
};

exports.copy = copy;

exports.build =series(change_scss_css1,copy)


