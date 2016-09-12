var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
//var rename = require('gulp-rename');
//var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');


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



 
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
});