/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const notify = require("gulp-notify");
/* eslint-enable node/no-unpublished-require */


gulp.task('sass', () => {
    return gulp.src('dev/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(autoprefixer(['last 15 versions'], {
            cascade: true
        }))
        .pipe(gulp.dest('public/stylesheet'))
});


gulp.task('default', ['sass'], () => {
    gulp.watch('dev/sass/**/*.sass', ['sass']);
});
