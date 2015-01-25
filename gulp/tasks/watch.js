var gulp     = require('gulp');
var config   = require('../config');
var browserify = require('./browserify');
var livereload = require('gulp-livereload');

gulp.task('watch', ['server'], function(callback) {
	livereload.listen();
	gulp.watch(config.html.files, ['minify-html']);
	gulp.watch(config.js.files, ['browserify']);
});