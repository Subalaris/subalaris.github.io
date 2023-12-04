const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Define paths for your source files
const paths = {
  scss: 'src/sass/**/*.scss',
  js: 'src/js/**/*.js',
  html: './*.html',
};

// Compile SCSS to CSS
gulp.task('sass', function () {
  return gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream()); 
});

// Concatenate JavaScript files
gulp.task('scripts', function () {
  return gulp
    .src(paths.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

// Watch for changes and reload the browser
gulp.task('serve', function () {
  browserSync.init({
    server: './',
  });

  gulp.watch(paths.scss, gulp.series('sass'));
  gulp.watch(paths.js, gulp.series('scripts'));
  gulp.watch(paths.html).on('change', browserSync.reload);
});

// Default task to run everything
gulp.task('default', gulp.series('sass', 'scripts', 'serve'));
