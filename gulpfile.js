var gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserify = require('gulp-browserify'),
  concat = require('gulp-concat'),
  // clean = require('gulp-clean'),
  del = require('del'),
  less = require('gulp-less'),
  path = require('path');

// Modules for webserver and livereload
var embedlr = require('gulp-embedlr'),
  refresh = require('gulp-livereload'),
  lrserver = require('tiny-lr')(),
  express = require('express'),
  livereload = require('connect-livereload'),
  livereloadport = 35729,
  serverport = 8888; 

// Setup an express server with livereload
var server = express();
server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));
server.all('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist'});
});

// Dev task
gulp.task('dev', [
  'clean', 
  'views', 
  'styles', 
  'js'
  ], function(){}
);

// Clean task
gulp.task('clean', function(cb) {
  del([
    'dist/index.html',
    // 'dist/css/*.css',
    'dist/js/*.js',
    'dist/views/*.html'
    ], cb);
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
  gulp.src('./app/less/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./dist/css'));
});

// JS task
gulp.task('js', function() {
  gulp.src(['app/*.js'])
    .pipe(gulp.dest('dist/js'));
});
  
gulp.task('watch', function() {
  // Start webserver
  server.listen(serverport);
  // start livereload
  refresh.listen(livereloadport);

  gulp.watch(['app/*.js'], [
    'js'
  ]);
  gulp.watch(['app/index.html', 'app/views/**/*.html'], [
    'views'
  ]);
  gulp.watch(['app/less/*.less'], [
    'styles'
  ]);
  gulp.watch('./dist/**').on('change', refresh.changed);
});

gulp.task('default', ['dev', 'watch']);