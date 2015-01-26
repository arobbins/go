var gulp = require('gulp');
var config = require('../config'); // Relative to this file
var browserify = require('browserify');
var livereload = require('gulp-livereload');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

/*  The paths used in the task below will be imported into gulpfile.js
	 and therefore need to be realtive to that file */
gulp.task('browserify', function () {
	var browserified = transform(function(filename) {
		var b = browserify(filename);
		return b.bundle();
	});

	return gulp.src([config.js.files])
		.pipe(browserified)
		.pipe(uglify())
		.pipe(concat(config.js.names.app))
		.pipe(gulp.dest(config.paths.js))
		.pipe(livereload());
});