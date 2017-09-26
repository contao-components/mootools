'use strict';

var gulp = require('gulp'),
    ignore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('minify-js', function (cb) {
    pump([
            gulp.src('js/*.js'),
            ignore.exclude('*.min.js'),
            uglify(),
            rename({
                suffix: '.min'
            }),
            gulp.dest('js')
        ],
        cb
    );
});

gulp.task('default', ['minify-js']);
