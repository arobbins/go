var gulp = require('gulp');

gulp.task('default', ['browserify', 'minify-html', 'server', 'watch']);