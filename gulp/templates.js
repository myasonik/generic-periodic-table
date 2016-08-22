var $ = require('./common.js');
var config = require('./config.js');

var fs = require('fs');
var jade = require('gulp-jade');
var data = require('gulp-data');
var jadeInheritance = require('gulp-jade-inheritance');
var filter = require('gulp-filter');

var jadeSrc = './' + config.src + 'views/';


$.gulp.task('views', function() {
    return $.gulp.src(jadeSrc + '**/*.jade')
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe(jadeInheritance({ basedir: jadeSrc }))
        .pipe(data(function() {
            return {
                production: config.prod,
                file: JSON.parse(fs.readFileSync('./source/data.json'))
            };
        }))
        .pipe(jade({
            basedir: jadeSrc,
            pretty: true
        }))
        .pipe(filter(function(file) {
            var exclude;
            if (config.outputJadeIncludes) exclude = new RegExp('templates|mixins', 'g');
            else exclude = new RegExp('templates|mixins|includes', 'g');

            return !exclude.test(file.path);
        }))
        .pipe($.gulp.dest(config.dest));
});