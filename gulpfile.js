const gulp = require("gulp");
const karma = require("karma");
const ts = require("gulp-typescript");
const debug = require("gulp-debug");

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

gulp.task("edit", ["build", "watch:all"]);
gulp.task("test", ["run:karma-tests"]);
gulp.task("build", ["compile:ts", "compile:tests"]);
gulp.task("default", ["build"]);

/*
============================================================================================================
subs - tests
============================================================================================================
*/

gulp.task("run:karma-tests", ["compile:ts", "compile:tests"], function (done) {
	gulp.watch(path.src + "/**/*.ts", ["bundle:js", "compile:tests"]);
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
gulp.task("compile:ts", function () {
	return tsc.src()
		.pipe(tsc())
		.pipe(gulp.dest(""));
});

const testtsc = ts.createProject("./tests/tsconfig.json", {});
gulp.task("compile:tests", function () {
	return testtsc.src()
		.pipe(testtsc())
		.pipe(gulp.dest(""));
});

/*
============================================================================================================
watchers
============================================================================================================
*/

gulp.task("watch:all", ["watch:ts"]);

gulp.task("watch:ts", function () {
	gulp.watch(path.src + "/**/*.ts", ["bundle:js"])
});