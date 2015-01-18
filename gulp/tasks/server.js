var config = require('../config');
var gulp = require('gulp');
var browsersync = require('browser-sync');

// Static web server
gulp.task('server', function() {
	browsersync({
		server: {
			baseDir: config.paths.project
		}
	});
});