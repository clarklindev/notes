# gulp.js

[gulp for beginners - Zell Liew](css-tricks.com/gulp-for-beginners)

- preprocessor sass/less (gulp-sass)
- reload browser automatically
- web server
- optimize assets

## overview

1. automation - compile sass to css

- globbing (more than one file to process) for gulp.src

  \*.scss, \*\*\/\*.scss, !not-me.scss, \*.+(scss|sass)

2. browswerSync

- browser reload
- web server

3. optimization

- gulp-useref for concatenate css + js

4. minification (cssnano)

5. optimize images

- gulp-imagemin
- gulp-cache

6. optimize fonts

- copying over fonts

7. npm install del --sav-dev
8. npm install run-sequence --save-dev

9. Ruby [http://rubyinstaller.org](Ruby)

```
  gem install sass
  gem install compass
```

---

## install

general install

```
  npm install
```

- need node.js
- npm install -g gulp (-g installs gulp globally)
- npm install -g browserify
- npm install gulp --save-dev (adds as a dev dependency in package.json)
- npm install gulp-useref --save-dev
- npm install gulp-uglify --save-dev
- npm install gulp-if --save-dev
- npm install gulp-sass --save-dev
- npm install browser-sync --save-dev
- npm install del --sav-dev
- npm install run-sequence --save-dev

## create a gulp project

- create a project directory folder
- (inside project folder) create a package.json file

```
  npm init
```

```
  npm install gulp --save-dev
```

- this installs gulp to our project as a dev dependency in package.json

- gulp creates node_modules folder

## project folder structure

```
app -> css
    -> fonts
    -> images
    -> index.html
    -> js
    -> scss
    -> dist
    -> node_modules
    gulpfile.js
    package.json
```

app - for dev  
dist - for distribution

---

# Part1

## Using gulp

- we put gulp tasks inside gulpfile.js

1. require the gulp file

```js
var gulp = require('gulp');
```

# basic syntax

## to use this task from commandline

```
gulp taskname
```

```js
gulp.task('taskname', function() {
	//stuff here
});
```

- gets source file with gulp.src
- sent it through the gulp plugin
- outputs file in destination folder

```js
gulp.task('taskname', function() {
	return gulp
		.src('source-files')
		.pipe(aGulpPlugin())
		.pipe(gulp.dest('destination'));
});
```

# SASS preprocessing

## gulp preprocessing with gulp

- compile SASS to CSS
- plugin gulp-sass
- npm install gulp-sass --save-dev
- var sass = require('gulp-sass');

## usage:

```js
gulp.task('sass', function() {
	return gulp
		.src('source-files')
		.pipe(sass()) //using gulp-sass
		.pipe(gulp.dest('destination'));
});
```

## example:

```js
gulp.task('sass', function() {
	return gulp
		.src('app/scss/styles.scss')
		.pipe(sass()) //using gulp-sass
		.pipe(gulp.dest('app/css'));
});
```

## run:

```
gulp sass
```

---

## Processing multiple files (globbing)

- more than one .scss file into css at same time
- Globbing is aka pattern matching for files to allow more than one file for gulp.src
- it outputs one .css per .scss or .sass file

## the 4 different Globbing patterns

1. \*.scss

   - the \* wildcard matching in current directory

2. \*\*\/\*.scss

   - matches in root folder and any child directories

3. \!not-me.scss

   - exclude the pattern from matches

4. \*. +(scss|sass)

   - allows gulp to match multiple patterns

---

gets all files in app/scss/ and child directories

```js
gulp.task('sass', function() {
	return gulp
		.src('app/scss/**/*/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
});
```

## Watching

Watching SASS files for changes and calls task

```js
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
```

```js
gulp.watch('app/scss/**/*.scss', ['sass']);
```

```js
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	//other watchers
});
```

## creating server / live reloading (browserSync)

- up to now, only reprocess scss file with watch()
- browserSync allows temp web server
- live reload

```
npm install browser-sync --save-dev
```

```js
var browserSync = require('browser-sync').create();
```

```js
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});
```

updating sass task, so browserSync can inject new CSS

```js
gulp.task('sass', function() {
	return gulp
		.src('app/scss/**/*.scss')
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true }));
});
```

## Running both 'watch' and 'browserSync'

- we now tell Gulp to run these tasks by telling 'watch' task that 'browserSync' must be completed before 'watch' is allowed to run.

```js
gulp.task(
	'watch',
	['array', 'of', 'tasks', 'to', 'complete', 'before', 'watch'],
	function() {}
);
```

Ensuring 'sass' runs before 'watch' so CSS will already be latest whenever we run a Gulp command.... (the other gulp commands)

```js
gulp.task('watch', ['browserSync'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
```

## Watching for HTML and JS changes

```js
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
```

---

# Part 2

## Optimizing CSS and JS files

- minification
- concatenation

### Concatenation

'gulp-useref' for concatenation

gulp-useref concatenates any number of CSS and JS files into a single file by looking for a comment that starts with

```
"<!--build:-->" and ends with "<!--endbuild-->"
```

syntax:

```
<!--build:<type><path>-->
  //html markup, list of script / link tags
<!--endbuild-->
```

- type - can be js, css, remove (removes entire block without generating a file)
- path - target path of generated file

eg.

```js
<!--build:js js/main.min.js-->
  <script src="js/lib/a-library.js"></script>
  <script src="js/lib/another-library.js"></script>
  <script src="js/main.js"></script>
<!--endbuild-->
```

## Combining CSS/JS files

```
npm install gulp-useref --save-dev
```

```js
var useref = require('gulp-useref');

gulp.task('useref', function() {
	return gulp
		.src('app/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});
```

- running useref will run through the 3 script tags and concatenate them into dist/js/main.min.js

- gulp-useref automatically changes script within

```
<!--build:<type><path>--> and <!--endbuild-->
```

into one single javascript file 'js/main.min.js'

---

## Minification .js

- gulp-uglify plugin to minify js files
- gulp-if ensure only minify js files

```
npm install gulp-uglify --save-dev
npm install gulp-if --save-dev
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
```

### Usage Example

```
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
  .pipe(useref())

  //minifies only if .js
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulp.dest('dist'))
});
```

### minification of CSS

```
npm install gulp-cssnano --save-dev
```

usage:

```html
<!--build:css css/styles.min.css-->
<link rel="stylesheet" href="css/styles.css" />
<link rel="stylesheet" href="css/another-style.css" />
<!--endbuild-->
```

example:

```js
var cssnano = require('gulp-cssnano');
gulp.task('useref', function() {
	return (
		gulp
			.src('app/*.html')
			.pipe(useref())
			.pipe(gulpIf('*.js', uglify()))
			//minifies only if css file
			.pipe(gulpIf('*.css', cssnano()))
			.pipe(gulp.dest('dist'))
	);
});
```

## Optimizing images

```
gulp-imagemin
```

```
npm install gulp-imagemin --save-dev
```

```js
var imagemin = require('gulp-imagemin');
gulp.task('images', function() {
	return gulp
		.src('app/images/**/*.+(jpg|png|gif|svg)')
		.pipe(imagemin({ interlaced: true })) //interlaced:true is optional
		.pipe(gulpdest('dist/images'));
});
```
gulp-cache plugin to help with optimizing images

```
npm install gulp-cache --save-dev
```
```js
var cache = require('gulp-cache');
gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(jpg|png|jpeg|gif|svg)')
	.pipe(cache(imagemin({interlaced:true})))
	.pipe(gulp.dest('dist/images'));
});
```

## Copying fonts to dest

* fonts are already optimised, just copy over to 'dist' folder

```
gulp.task('fonts', function(){
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});
```
## Cleaning dist/cache

### cleaning up generated files automatically

```
npm install del --save-dev
```
```js
var del = require('del');
```
dell function takes in an array of node globs which tell it what folders to delete.
```js
gulp.task('clean:dist', function(){
	return del.sync('dist');
});

```
```
command: gulp clean:dist
```
cleaning cache off local system:
```
gulp.task('cache:clear', function(callback){
	return cache.clearAll(callback)
})
```
---
## Combining Gulp tasks

so far we have created 2 sets of gulp tasks
1. develop processes
	* compiles sass to css
	* watch for changes
	* reload browser when changes occur

2. optimization processes
	* where we optimize css
	* js
	* images
	* fonts copied over
	* clean:dist

```
<!-- Group 1 tasks -->
gulp.task('watch', ['browserSync', 'sass'], function(){
	//watchers
})
```

### using run-sequence

```
npm install run-sequence --save-dev
```

syntax:

```js
var runSequence = require('run-sequence');
gulp.task('task-name', function(callback){
	runSequence('task-one', 'task-two', 'task-three', callback);
	//OR
	runSequence('task-one', ['task-two','task-three'], 'task-four', callback);
});
```
---
creating a task that ensures 'clean:dist' runs first and allows tasks running in parallel with use of array syntax

```js
gulp.task('build', function(callback){
	runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback)
});
```

---

# Running gulp

1. npm install
2. gulp build
3. gulp / gulp default

*can use gulp in conjunction with bower

---
