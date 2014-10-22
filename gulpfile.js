var gulp = require('gulp'),
  del = require('del'),
  less = require('gulp-less'),
  webserver = require('gulp-webserver');

// Start webserver
gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Dev task
gulp.task('dev', [
  'clean', 
  'views', 
  'styles', 
  'js',
  'copy-bower'
  ], function(){}
);

// Clean task
gulp.task('clean', function() {
  del.sync([
    'dist/index.html',
    'dist/css/*',
    'dist/fonts/*',
    'dist/lib/*',
    'dist/js/*',
    'dist/views/*'
    ]);
});

// Views task
gulp.task('views', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));
  gulp.src('app/views/*')
    .pipe(gulp.dest('dist/views'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('app/assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

// JS task
gulp.task('js', function() {
  gulp.src('app/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Copy bower compenents
gulp.task('copy-bower', function() {
  var bc = 'bower_components/';
  gulp.src([
    bc + 'angular/angular.min.js',
    bc + 'angular/angular.min.js.map',
    bc + 'angular-route/angular-route.min.js',
    bc + 'angular-route/angular-route.min.js.map',
    bc + 'angular-google-maps/dist/angular-google-maps.min.js',
    bc + 'bluebird/js/browser/bluebird.js',
    bc + 'lodash/dist/lodash.min.js'
  ]).pipe(gulp.dest('dist/lib'));

  gulp.src([
    bc + 'bootstrap/fonts/*', 
    bc + 'fontawesome/fonts/*'
  ]).pipe(gulp.dest('dist/fonts'));
});

// Watch files for changes  
gulp.task('watch', function() {
  gulp.watch(['app/*.js'], [
    'js'
  ]);
  gulp.watch(['app/index.html', 'app/views/*.html'], [
    'views'
  ]);
  gulp.watch(['app/assets/less/*.less'], [
    'styles'
  ]);
});

gulp.task('default', ['dev', 'webserver', 'watch'], function() {});