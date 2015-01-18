var gulp = require('gulp');
var config = require('../config');
var browserify = require('browserify');
var browsersync = require('browser-sync');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Browserify!
gulp.task('browserify', function () {
	var browserified = transform(function(filename) {
		var b = browserify(filename);
		return b.bundle();
	});

	return gulp.src([config.js.files])
		.pipe(browserified)
		.pipe(uglify())
		.pipe(concat(config.js.names.app))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browsersync.reload({
			stream: true
		}));
});