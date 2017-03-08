const gulp = require('gulp');
const closure = require('google-closure-compiler').gulp();
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');

const files = [
  'important.js',
  'entry/*.js',
  'modules/**/*.js'
]

gulp.task('closure', () => {
  return gulp.src(files)
    .pipe(closure({
      new_type_inf: true,
      compilation_level: 'ADVANCED',
      language_in: 'ES6_STRICT',
      language_out: 'ES5_STRICT',
      warning_level: 'VERBOSE',
      output_wrapper: '(function(){\n%output%\n}).call(self)',
      assume_function_wrapper: true,
      rewrite_polyfills: false,
      js_output_file: 'closure.js',
      formatting: 'PRETTY_PRINT',
      dependency_mode: 'STRICT',
      entry_point: '/entry/entry.js'
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('rollup', () => {
  return gulp.src(files)
    .pipe(rollup({
      entry: 'entry/entry.js',
      format: 'iife',
      moduleName: 'test'
    }))
    .pipe(rename('rollup.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['closure', 'rollup']);