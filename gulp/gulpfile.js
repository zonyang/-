const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
gulp.task('co',function() {
   gulp.src(["images/**/*.{jpg,gif}","!images/img/1.*"]).pipe(gulp.dest("dest"));
});
gulp.task('m',function(){
   gulp.watch("index.html",function() {
       gulp.src(["images/**/*.{jpg,gif}","!images/img/1.*"]).pipe(gulp.dest("dest"));
   });
});
gulp.task('server', function () {
    connect.server({
        root: 'dist',
        port: 8888,
        livereload: true
    });
});
gulp.task('watch', function () {
    watch('index.html',function () {
            gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
        }
    );
    watch('sass/style.scss',function () {
            return gulp.src('sass/style.scss').pipe(sass()).pipe(gulp.dest('dist/css')).pipe(connect.reload());
        }
    )
});
gulp.task('all',gulp.parallel('server','watch'));
gulp.task('concat',function() {
    return gulp.src(['1.js','2.js']).pipe(concat('main.js')).pipe(gulp.dest('dist')).pipe(uglify())
        .pipe(rename('main.min.js')).pipe(gulp.dest('dist'));
});