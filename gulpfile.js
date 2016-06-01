var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};

gulp.task('runKeystone', shell.task('node keystone.js'));

gulp.task('default', ['runKeystone']);
