var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-replace');
var del = require('del');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

//---------------------------------------------------------------------------//
// Common Tasks
//---------------------------------------------------------------------------//

// Styles task
gulp.task('styles', function() {
  gulp.src('src/assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/assets/css'));
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch(['src/assets/less/*.less'], ['styles']);
});

//---------------------------------------------------------------------------//
// Tasks for running dev
//---------------------------------------------------------------------------//

// Start webserver for dev
gulp.task('webserver:dev', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: 'src'
    }));
});

// Clean task for dev
gulp.task('clean:dev', function() {
  del.sync(['src/assets/css/*', 'src/assets/fonts/*']);
});

// Copy fonts for dev
gulp.task('fonts:dev', function() {
  gulp.src([
    'bower_components/bootstrap/fonts/*',
    'bower_components/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('src/assets/fonts'));
});

// Dev task
gulp.task('dev', [
  'clean:dev',
  'styles',
  'fonts:dev',
  'webserver:dev',
  'watch'
  ], function() {}
);

//---------------------------------------------------------------------------//
// Tasks for running a build
//---------------------------------------------------------------------------//

// Start webserver for build
gulp.task('webserver:build', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: 'dist'
    }));
});

// Clean task for dist
gulp.task('clean:build', function() {
  del.sync(['dist/*']);
});

// Views task
gulp.task('views', function() {
  var files = ['home', 'info', 'photos', 'registry', 'wedding-party'];
  for (var i = files.length; i >= 0; i--) {
    gulp.src('src/app/components/' + files[i] + '/*.html')
    .pipe(gulp.dest('dist/views'));
  }
});

// Replace dev routes with dist routes
gulp.task('replace', function() {
  gulp.src('dist/js/app.js')
    .pipe(replace(/(app\/components\/)+.+\//g, '../views/'))
    .pipe(gulp.dest('dist/js/'));
});

// Images task
gulp.task('img', function() {
});

// Copy fonts for dist
gulp.task('fonts:build', function() {
  gulp.src([
    'bower_components/bootstrap/fonts/*',
    'bower_components/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('dist/fonts'));
});

// Usemin
gulp.task('usemin', function() {
  gulp.src('./src/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify(), 'concat']
    }))
    .pipe(gulp.dest('dist'));
});

// Build task
gulp.task('build', [
  'clean:build',
  'fonts:build',
  'usemin',
  'views',
  'replace',
  // 'webserver:build'
  ], function() {}
);
