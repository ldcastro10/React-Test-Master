var babel      = require('babelify')
var browserify = require('browserify')
var gulp       = require('gulp')
var jade       = require('gulp-jade')
var rename     = require('gulp-rename')
var stylus     = require('gulp-stylus')
var nib        = require('nib')
var source     = require('vinyl-source-stream')

gulp.task('styles', function () {
  return gulp.src('./assets/styles/style.styl')
    .pipe(stylus({ use: nib(), import: ['nib'], compress: true }))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./public/styles/'))
})

gulp.task('assets', function () {
  return gulp.src('./assets/assets/**/*')
    .pipe(gulp.dest('./public/assets/'))
})

gulp.task('src', function () {
  browserify('./src/index.js')
    .transform(babel, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./public/src/'))
})

gulp.task('watch', function () {
  gulp.watch('./assets/styles/*.styl', ['styles'])
  gulp.watch('./assets/assets/*', ['assets'])
  gulp.watch('./src/*', ['src'])
  gulp.watch('./src/**', ['src'])
})

gulp.task('default', ['styles', 'assets', 'src', 'watch'])
