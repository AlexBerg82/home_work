var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
//var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("style.css"))
    //.pipe(minifyCSS())
	//.pipe(rename("style.css"))
    .pipe(gulp.dest('app/'));
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(uglify())
    //.pipe(concat('main.js'))
    .pipe(gulp.dest('build'));
});