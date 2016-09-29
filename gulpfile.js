var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src('./css/*.less')
      .pipe(concat('main.css'))
      .pipe(less())
      .pipe(gulp.dest('./output'));
});

gulp.task('default', ['less']);