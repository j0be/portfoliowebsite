var _ = require('lodash');
var clean = require('gulp-clean');
var cssmin = require('gulp-cssmin');
var filter = require('gulp-filter');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var iconfont = require('gulp-iconfont');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');

var argv = require('yargs')
  .default('nowatch', false)
  .default('nosourcemaps', false)
  .argv;

var SOURCEMAPS = !argv.nosourcemaps;
var WATCH = !argv.nowatch;

function _buildJSBundle() {

}

function _buildStyleBundle() {
  var destinationDir = './assets/css/';
  var sourceDir = './assets/sass/**/*.scss';

  var settings = _.extend({
    optimize: true,
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
      .pipe(gulpif(settings.optimize, cssmin({
        options: {
          compatibility: {
            iePrefixHack: true,
          }
        }
      })))
      .pipe(gulpif(settings.optimize, rename({
        suffix: '.min'
      })))
      .pipe(sourceFilter.restore)
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

gulp.task('js', _buildJSBundle);
gulp.task('sass', ['sprites'], _buildStyleBundle);
gulp.task('default', ['js', 'sass']);
