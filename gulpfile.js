// require ( npm install ) file
let gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    simpleVars = require('postcss-simple-vars'),
    prettify = require('postcss-prettify'),
    mixins = require('postcss-mixins'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    filters = [
        cssImport,
        simpleVars,
        mixins,
        autoprefixer(),
        nested,
        prettify
    ]


// gulp task starts
gulp.task('watch', () => {
    // Track on Browser Auto Reloading
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })

    // Track on ( html ) changes
    gulp.watch('./app/*.html').on('change', () => {
        browserSync.reload()
    })

    // Track on ( css ) changes
    gulp.watch('./app/assets/css/**/*.css', () => {
        return gulp.src('./app/assets/css/styles.css')
        .pipe( postCss ( filters ) )
        .pipe( gulp.dest ('./app/temp/'))
        .pipe( browserSync.stream() )
    })

    // Track on ( js ) changes
    gulp.watch('./app/assets/js/**/*.js', () => {
        browserSync.reload()
    })
})