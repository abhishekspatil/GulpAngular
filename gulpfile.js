
// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    root: 'src',
    port: 8888
  });
});

gulp.task('default', function() {
    // place code for your default task here
    console.log("Hi I'm running default task")
});