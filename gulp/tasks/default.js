var gulp = require('gulp');

gulp.task('default', ['server', 'browserify', 'minify-html', 'watch']);