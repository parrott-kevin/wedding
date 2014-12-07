var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var del = require('del');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

// Start webserver
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: 'src'
    }));
});

// Clean task for dist
gulp.task('clean:build', function() {
  del.sync(['dist/*']);
});

// Clean task for dev
gulp.task('clean:dev', function() {
  del.sync(['src/assets/css/*', 'src/assets/fonts/*']);
});

// Views task
gulp.task('views', function() {
  var files = ['home', 'info', 'photos', 'registry', 'wedding-party'];
  for (var i = files.length; i >= 0; i--) {
    gulp.src('src/app/components/' + files[i] + '/*.html')
    .pipe(gulp.dest('dist/views'));
  }
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

// Copy fonts for dev
gulp.task('fonts:dev', function() {
  gulp.src([
    'bower_components/bootstrap/fonts/*',
    'bower_components/fontawesome/fonts/*'
  ])
    .pipe(gulp.dest('src/assets/fonts'));
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

// Build task
gulp.task('build', [
  'clean:build',
  'fonts:build',
  'usemin',
  'views',
  ], function() {}
);

gulp.task('dev', [
  'clean:dev',
  'styles',
  'fonts:dev',
  'webserver',
  'watch'
  ], function() {}
);
