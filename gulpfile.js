var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var server = require('gulp-express');

gulp.task('server', function () {

	// Start the server at the beginning of the task
	server.run({
		file: 'server.js'
	});

	// Restart the server when file changes
	gulp.watch(['app/**/*.html'], server.notify);
	gulp.watch(['app/css/**/*.css'], server.notify);
	gulp.watch(['app/js/**/*.js'], server.notify);
	gulp.watch(['app/img/**/*'], server.notify);
});

// gulp.task('default', function(){

// });

// gulp.task('js', function(){

// 	var bundle = browserify('./main.js').bundle();

// 	bundle
// 		.pipe(source('./main.js'))
// 		.pipe(gulp.dest('./js'));
// });

// gulp.task('watch', function(){
// 	gulp.watch(["./js/**/*.js"], ['js']);
// });

