const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function minify() {
    return src(['js/*.js', '!js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('js'));
}

exports.default = minify;
