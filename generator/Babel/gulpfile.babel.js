// var gulp = require('gulp');
// gulp.task('task-name', function() {
//     console.log('Hello, Gulp!');
// });


import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
const dirs = {
    src: 'src',
    dest: 'dist'
};

//这里并没与写错  模板字符串就是`符号
const sassPaths = {
    src: `${dirs.src}/styles/main.scss`,
    dest: `${dirs.dest}/css`
};

console.log(sassPaths.src);
gulp.task('styles', () => {
    sass(sassPaths.src)
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassPaths.dest));
});
gulp.task('js', () =>{
    gulp.src('src/js/*.babel.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', () =>{
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});