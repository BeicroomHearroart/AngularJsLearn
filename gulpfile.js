var gulp = require('gulp');
var ugl = require('gulp-uglify');
var babel = require('gulp-babel');
var fs = require('graceful-fs');
var notify = require('gulp-notify');
var del = require('del');

var i = 0;

gulp.task('testTask', ['clean'], function() {
    gulp.src('TestPromise/*.html')
        .pipe(gulp.dest('dist'));

    gulp.src('TestPromise/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(notify({ message: 'babel task complete' }))
        //.pipe(ugl())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['testTask']);

gulp.task('clean', function() {
    del(['dist/*.*']);

    gulp.src('TestPromise/*.js').pipe(notify({ message: 'clean task complete for ' + i }));

        // .then(function(paths) {
        //     console.log('Deleted files and folders: ', paths.join('\n'))
        // });
});

// gulp.task('trans', function() {
//     return gulp.src('TestPromise/ES6TestClass.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('dist'))
//         .pipe(notify({ message: 'babel task complete' }));
// });