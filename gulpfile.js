var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less', function() {
  return gulp.src('./css/*.less')
      .pipe(concat('main.css'))
      .pipe(less())
      .pipe(gulp.dest('./output'));
});

gulp.task('watch-less', function() {  
  gulp.watch('css/*.less' , ['less']);
});

gulp.task('default', ['less' , 'watch-less']);
