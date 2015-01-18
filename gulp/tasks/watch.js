var gulp     = require('gulp');
var config   = require('../config');
var browserify = require('./browserify')

gulp.task('watch', ['server'], function(callback) {
  gulp.watch(config.html.files, ['minify-html']);
  gulp.watch(config.js.files, ['browserify']);
});