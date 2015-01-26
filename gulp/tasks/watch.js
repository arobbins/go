var gulp     = require('gulp');
var config   = require('../config'); // Relative to this file
var browserify = require('./browserify'); // Relative to this file
var livereload = require('gulp-livereload');

/*  The paths used in the task below will be imported into gulpfile.js
	 and therefore need to be realtive to that file */
gulp.task('watch', ['server'], function(callback) {
	livereload.listen();
	gulp.watch(config.html.files, ['minify-html']);
	gulp.watch(config.js.files, ['browserify']);
});