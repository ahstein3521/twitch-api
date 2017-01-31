const gulp = require('gulp');
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer')
const plumber = require("gulp-plumber");
const sass = require("gulp-sass")
const babel = require("gulp-babel")

const Paths = {
	scripts: ["public/scripts/li-template.js","public/scripts/fetchUser.js","public/scripts/UserList.js","public/scripts/UX.js"],
	styles: "public/styles/**/*.scss"
}


gulp.task("styles",() =>{
	return gulp.src(Paths.styles)
			.pipe(plumber(function(err){ 
				console.log(err);
				this.emit("end") 
			}))
			.pipe(autoprefixer())
			.pipe(sass({outputStyle:"compressed"}))
			.pipe(gulp.dest("public/dist"))
			.pipe(livereload());
})		

gulp.task("scripts",() => {
	return gulp.src(Paths.scripts)
		 	   .pipe(babel({presets: ["es2015"]}))
		 	   .pipe(uglify())
			   .pipe(concat("main.js"))
			   .pipe(gulp.dest("public/dist"))
			   .pipe(livereload())
})

gulp.task("watch", () => {
	
	require("./server");

	livereload.listen();

	gulp.watch(Paths.scripts, ["scripts"])

	gulp.watch(Paths.styles, ["styles"])
})

