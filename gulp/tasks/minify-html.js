var config = require('../config');
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var livereload = require('gulp-livereload');

// Maps subfolders recursively by default, nice!
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