(function() {
    'use strict'
    let gulp = require('gulp');
    let nodemon = require('nodemon');
    let gulpMocha = require('gulp-mocha');
    let env = require('gulp-env');
    let supertest = require('supertest');
    
    gulp.task('default', function() {
        nodemon({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT:8000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('Restart..');
        })
    });
    
    gulp.task('test', function() {
        env({vars:{ENV:'Test'}});
        gulp.src('tests/*.js', {read: true})
        .pipe(gulpMocha({reporter: 'nyan'}));
    });
    
})();