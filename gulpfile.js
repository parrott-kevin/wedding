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
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));

  var files = ['home', 'info', 'photos', 'registry', 'wedding-party'];
  for(var i = files.length; i >= 0; i--) {
    gulp.src('src/app/components/' + files[i] + '/*.html')
    .pipe(gulp.dest('dist/views'));
  }
  
});

// Styles task
gulp.task('styles', function() {
  gulp.src('src/assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
  gulp.src('src/assets/img/*.jpg')
    .pipe(gulp.dest('dist/img'));
});

// JS task
gulp.task('js', function() {
  gulp.src('src/app/*.js')
    .pipe(gulp.dest('dist/js'));

  var files = ['home', 'info', 'photos', 'registry', 'wedding-party'];
  for(var i = files.length; i >= 0; i--) {
    gulp.src('src/app/components/' + files[i] + '/*.js')
      .pipe(gulp.dest('dist/js'));
  }
});

// Copy bower components
gulp.task('copy-bower', function() {
  var bc = 'bower_components/';
  gulp.src([
    bc + 'angular/angular.min.js',
    bc + 'angular/angular.min.js.map',
    bc + 'angular-route/angular-route.min.js',
    bc + 'angular-route/angular-route.min.js.map',
    bc + 'angular-google-maps/dist/angular-google-maps.min.js',
    bc + 'angular-bootstrap/ui-bootstrap.min.js',
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
  gulp.watch(['src/app/*.js', 'src/app/components/**/*.js'], [
    'js'
  ]);
  gulp.watch(['src/index.html', 'src/app/components/**/*.html'], [
    'views'
  ]);
  gulp.watch(['src/assets/less/*.less'], [
    'styles'
  ]);
});

gulp.task('default', ['dev', 'webserver', 'watch'], function() {});