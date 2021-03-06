// Plugin dependencies
var gulp            = require('gulp'),                        // Gulp
    concat          = require('gulp-concat'),                 // Concatinate
    uglify          = require('gulp-uglify')                  // Minify

// -----------------------------------------------------------------------------
// Configurations
var packages        = './packages'                            // Packages

// -----------------------------------------------------------------------------
// Globs
var js              = {
    src             : './src',                                // Sources
    dist            : './dist/toolkit'                        // Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {

  js: {
    parser          : [
      packages + '/ua-parser-js/src/ua-parser.js'             // UA - Parser
    ],
    detection       : [
      js.src + '/toolkit/ua-detection.js'                     // UA - Detection
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, optimizing and organizing files

// Minified
gulp.task('build:js.detection.minify', function() {
  return gulp.src(packages.js.detection)
    .pipe(concat('ua-detection.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

gulp.task('build:js.parser.minify', function() {
  return gulp.src(packages.js.parser)
    .pipe(concat('ua-parser.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

// Custom
gulp.task('build:js.detection.custom', function() {
  return gulp.src(packages.js.detection)
    .pipe(gulp.dest(js.dist));
});

gulp.task('build:js.parser.custom', function() {
  return gulp.src(packages.js.parser)
    .pipe(gulp.dest(js.dist));
});
