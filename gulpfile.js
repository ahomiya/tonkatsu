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
    src             : './src',                               // JS - Sources
    dist            : './dist'                               // JS - Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {

  // JavaScript libraries
  js: {
    parser          : [
      packages + '/ua-parser-js/src/ua-parser.js'
    ],
    detection       : [
      js.src + '/ua-detection.js'
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, and optimizing files

// Minified
gulp.task('js.build:detection.minify', function() {
  return gulp.src(packages.js.detection)
    .pipe(concat('ua-detection.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

gulp.task('js.build:parser.minify', function() {
  return gulp.src(packages.js.parser)
    .pipe(concat('ua-parser.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

// Custom
gulp.task('js.build:detection.custom', function() {
  return gulp.src(packages.js.detection)
    .pipe(gulp.dest(js.dist));
});

gulp.task('js.build:parser.custom', function() {
  return gulp.src(packages.js.parser)
    .pipe(gulp.dest(js.dist));
});
