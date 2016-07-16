var gulp = require('gulp');
var ugl = require('gulp-uglify');
var babel = require('gulp-babel');
var fs = require('graceful-fs');
var del = require('del');

gulp.task('testTask', ['clean'], function() {
    gulp.src('TestPromise/*.html')
        //.pipe(ugl())
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['testTask']);

gulp.task('clean', function() {
    return del(['dist/*.js'])
        .then(function(paths) {
            console.log('Deleted files and folders: ', paths.join('\n'))
        });
})