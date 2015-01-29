var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var del = require('del');
var less = require('gulp-less');
var shell = require('gulp-shell');
var webserver = require('gulp-webserver');

//---------------------------------------------------------------------------//
// Compilation Tasks
//---------------------------------------------------------------------------//

// Dev task
gulp.task('dev', [
  'clean:dev',
  'styles',
  'fonts:dev',
  'webserver:dev',
  'watch'
  ], function() {}
);

// Build task
gulp.task('build', [
  'clean:build',
  'copy:build',
  'usemin'
  ], function() {}
);

//---------------------------------------------------------------------------//
// Common Tasks
//---------------------------------------------------------------------------//

// Styles task
gulp.task('styles', function() {
  gulp.src('src/assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('src/assets/css'));
});

// Watch less files for changes
gulp.task('watch', function() {
  gulp.watch(['src/assets/less/*.less'], ['styles']);
});

// Publish to Github Pages
//gulp.task('gh-pages', shell.task('git subtree push --prefix dist origin gh-pages'));

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

// Copy files for dist
gulp.task('copy:build', function() {

  // html
  gulp.src('src/app/**/*.html')
    .pipe(gulp.dest('dist/app/'));

  // json
  gulp.src('src/app/**/*.json')
    .pipe(gulp.dest('dist/app/'));

  // css
  //gulp.src('src/assets/css/styles.css')
  //  .pipe(gulp.dest('dist/assets/css/'));

  // images
  gulp.src('src/assets/img/**/*')
    .pipe(gulp.dest('dist/assets/img/'));

  // fonts
  gulp.src([
    'bower_components/bootstrap/fonts/*',
    'bower_components/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('dist/assets/fonts/'));
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
