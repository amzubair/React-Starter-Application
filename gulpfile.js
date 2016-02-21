var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');


gulp.task('browserify', function(){
    browserify('./public/app/main.js')
    .transform([reactify, babelify])
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/build/'));

});
