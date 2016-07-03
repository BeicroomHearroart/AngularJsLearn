var gulp = require('gulp');
var ugl = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('testTask', function() {
    gulp.src('TestPromise/*.js')
        .pipe(ugl())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['testTask'], function(){
    console.log("hello gulp");
});