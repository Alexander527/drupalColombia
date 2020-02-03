/*const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task ('sass',()=>
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
    
);
const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
autoprefixer = require('gulp-autoprefixer');*/




// const gulp = require('gulp'),
//   sass = require('gulp-sass'),
//   browserSync = require('browser-sync'),
//   autoprefixer = require('gulp-autoprefixer');

//   // gulp.task('sass', ()=>
//   // gulp.src('./sass/*.scss')
//   // .pipe(sass())
//   // .pipe(gulp.dest('./css')));

// function style() {
  
// }

// function watch() {
//   return gulp.src('./sass/main.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'))
//     .pipe(browserSync.stream());

//   browserSync.init({
//     server: {
//       baseDir: './'
//     }
//   });
//   gulp.watch('./sass/*.scss', style);
//   gulp.watch('./*.html').on('change', browserSync.reload);
//   gulp.watch('./js/**/*.js').on('change', browserSync.reload);
// }

// exports.style = style;
// exports.watch = watch;

const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
autoprefixer = require('gulp-autoprefixer');

//gulp.task('sass', ()=>
//  gulp.src('./sass/**/*.scss')
//  .pipe(sass())
//  .pipe(gulp.dest('./css'))
//);

function style() {
  return gulp.src('./sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;