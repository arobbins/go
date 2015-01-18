var config = require('../config');
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var browsersync = require('browser-sync');

// Maps subfolders recursively by default, nice!
gulp.task('minify-html', function() {
	var options = {
		comments: true,
		spare: true
	};

	gulp.src(config.html.files)
		.pipe(minifyHTML(options))
		.pipe(gulp.dest(config.paths.project))
		.pipe(browsersync.reload({
			stream: true
		}));
});