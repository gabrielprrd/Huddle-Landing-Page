const gulp = require('gulp'),
sass = require('gulp-sass'),
prefix = require('gulp-autoprefixer'),
minifyCSS = require('gulp-minify-css'),
imagemin = require('gulp-imagemin');

// Sass task
gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

// Watch Sass task
gulp.task('watch', () => {
    gulp.watch('src/sass/*.scss', ['sass'] );
});


// Minify CSS and atoprefix to support all browsers
gulp.task('minify-css', () => {
    return gulp.src('src/css/style.css')
    .pipe(minifyCSS({keepSpecialComments: 1}))
    .pipe(gulp.dest('dist/css'))
    
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist/css'))
})


// Optimize images
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

// Run all tasks by only typing 'gulp' on the terminal
gulp.task('default', ['sass', 'watch', 'minify-css', 'imageMin'] );