var _ = require('lodash');
var autoprefixer = require('autoprefixer');
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var filter = require('gulp-filter');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');

var argv = require('yargs')
  .default('nowatch', false)
  .default('optimize', true)
  .default('nosourcemaps', false)
  .argv;

var SOURCEMAPS = !argv.nosourcemaps;
var OPTIMIZE = !argv.optimize;
var WATCH = !argv.nowatch;

function _buildJSBundle() {

}

function _buildStyleBundle() {
  var destinationDir = './assets/css/';
  var sourceDir = './assets/sass/**/*.scss';

  var settings = _.extend({
    optimize: OPTIMIZE,
    sourcemaps: SOURCEMAPS,
    watch: WATCH,
  });
  function build() {
    var sourceFilter = filter(['*', '!*.map'], {
      restore: true
    });

    console.log('--- building styles ---');

    return gulp.src(sourceDir)
      .pipe(gulpif(settings.sourcemaps, sourcemaps.init()))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sourceFilter)
      .pipe(sourceFilter.restore)
      .pipe(gulpif(settings.optimize, cssmin()))
      .pipe(gulpif(settings.optimize, rename({suffix: '.min'})))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulpif(settings.sourcemaps, sourcemaps.write('.')))
      .pipe(gulp.dest('./assets/css'));
  }

  if (WATCH) {
    gulp.watch(sourceDir, build);
  }

  return build();
}

gulp.task('sprites', function () {
  var sourceDir = './assets/icons/*.png';
  function build () {
    gulp.src('./assets/css/_sprite.*', {
        read: false
      })
      .pipe(clean());

    var spriteData = gulp.src('./assets/icons/*.png').pipe(spritesmith({
      imgName: '_sprite.png',
      cssName: '_sprite.scss'
    }));
    return spriteData.pipe(gulp.dest('./assets/css/'));
  }
  if (WATCH) {
    gulp.watch(sourceDir, build);
  }
  return build();
});

gulp.task('build', function () {
  return runSequence('clean', ['js','sass']);
});
gulp.task('clean', function () {
  return gulp.src('./assets/css/*', {
    read: false
  }).pipe(clean());
});

gulp.task('js', _buildJSBundle);
gulp.task('sass', ['sprites'], _buildStyleBundle);
gulp.task('default', ['build']);
