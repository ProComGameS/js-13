import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);


import browserSync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';



gulp.task('scss', async function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', async function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('serve', function () {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*.scss', gulp.series('scss')).on('change', browserSync.reload);
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
});


gulp.task('prefix', function () {
    return gulp.src('./dist/css/**/*.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('minify', function () {
    return gulp.src('./dist/css/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'));
});



gulp.task('default', gulp.series('scss', 'prefix', 'minify', 'scripts', 'serve'));

