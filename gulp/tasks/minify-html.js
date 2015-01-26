var config = require('../config'); // Relative to this file
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var livereload = require('gulp-livereload');

/*  The paths used in the task below will be imported into gulpfile.js
	 and therefore need to be realtive to that file */
gulp.task('minify-html', function() {
	var options = {
		comments: true,
		spare: true
	};

	gulp.src(config.html.files)
		.pipe(minifyHTML(options))
		.pipe(gulp.dest(config.paths.project))
		.pipe(livereload());
});