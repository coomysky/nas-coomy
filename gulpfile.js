var gulp        = require("gulp");
var sass        = require("gulp-ruby-sass");
var browserSync = require("browser-sync").create();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

 gulp.task('sass', function(){
   return sass('./app/styles/main.scss', { style: 'expanded' })
     .pipe(gulp.dest('./dist/css/css'));
 });
