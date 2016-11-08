'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', function () {
   
   return gulp.src([
     'src/**/*.ngfactory.ts',
     'src/**/*.js',
     'src/**/*.d.ts',
     'src/**/*.metadata.json'
   ]).pipe(clean()); 
});

