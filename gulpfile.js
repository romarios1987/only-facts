/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
/* eslint-enable node/no-unpublished-require */


// First, run all your tasks
// gulp.task('default', ['nodemon', 'sass', 'js'], function () {
//
//     // Then watch for changes
//     gulp.watch("dev/sass/**/*.sass", ['sass']);
//     gulp.watch("views/**/*.ejs").on('change', browserSync.reload);   //Manual Reloading
//
//     // JS changes need to tell browsersync that they're done
//     gulp.watch("dev/js/*.js", ['js-watch']);
// });

// create a task that ensures the 'js' task is complete before
// reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });

// Process JS files and return the stream.
// gulp.task('js', function () {
//     return gulp.src('dev/js/*.js')
//         //.pipe(uglify())
//         .pipe(gulp.dest('public/javascript'));
// });

// Compile SASS to CSS.
gulp.task('sass', () => {
    return gulp.src('dev/sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
                cascade: true
            })
        )
        .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheet'))
        .pipe(browserSync.stream());
});


// Setup proxy for local server.
// gulp.task('browser-sync', ['js', 'sass'], function () {
//     browserSync.init(null, {
//         proxy: "http://localhost:3000",
//         port: 7000,
//     });
// });


// gulp.task('nodemon', ['browser-sync'], function (cb) {
//     let running = false;
//     return nodemon({script: './app'}).on('dev', function () {
//         if (!running) {
//             running = true;
//             cb();
//         }
//     });
// });


gulp.task('scripts', function () {
    return gulp.src('dev/js/*.js')
        ///.pipe(uglify())
        .pipe(gulp.dest('public/javascript'));
});

gulp.task('default', ['sass', 'scripts'], () => {
    gulp.watch('dev/sass/**/*.sass', ['sass']);
    gulp.watch('dev/js/**/*.js', ['scripts']);
});
