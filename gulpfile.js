var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function () {
    browserSync.reload();
})
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*.html', ['reload']);
    gulp.watch('./*.css', ['reload']);
    gulp.watch('./*.js', ['reload']);
});

gulp.task('default', ['serve']);
