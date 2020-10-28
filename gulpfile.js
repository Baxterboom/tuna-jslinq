const gulp = require("gulp");
const karma = require("karma");
const ts = require("gulp-typescript");
const debug = require("gulp-debug");
const minify = require('gulp-minify');

const fr = require('undertaker-forward-reference');
gulp.registry(fr());

const path = {
	src: "./src",
	tests: "./tests",
	output: {
		js: "./dist",
	},
	input: {
		ts: ["./src/**/*.ts"]
	}
};
/*
============================================================================================================
mains
============================================================================================================
*/

gulp.task("edit", gulp.series("build", "watch:all"));
gulp.task("test", gulp.series("run:karma-tests"));
gulp.task("build", gulp.series("compile:ts", "compile:tests"));
gulp.task("default", gulp.series("build"));

/*
============================================================================================================
subs - tests
============================================================================================================
*/

gulp.task("run:karma-tests", gulp.series("compile:ts", "compile:tests"), function (done) {
	gulp.watch([path.src + "/**/*.ts", path.tests + "/**/*.ts"], ["compile:ts", "compile:tests"]);
	return new karma.Server({
		singleRun: false,
		configFile: `${__dirname}/${path.tests}/karma.conf.js`
	}, done).start();
});

/*
============================================================================================================
subs - common
============================================================================================================
*/
const tsc = ts.createProject("tsconfig.json", {});
gulp.task("compile:ts", () => {
	return tsc.src()
		.pipe(tsc())
		.pipe(minify())
		.pipe(gulp.dest("."));
});

const testtsc = ts.createProject("./tests/tsconfig.json", {});
gulp.task("compile:tests", () => {
	return testtsc.src()
		.pipe(testtsc())
		.pipe(gulp.dest("."));
});

/*
============================================================================================================
watchers
============================================================================================================
*/

gulp.task("watch:all", gulp.series("watch:ts"));
gulp.task("watch:ts", () => gulp.watch(path.src + "/**/*.ts", ["compile:ts"]));