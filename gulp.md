# gulp.js

[gulp for beginners - Zell Liew](css-tricks.com/gulp-for-beginners)

- preprocessor sass/less (gulp-sass)
- reload browser automatically
- web server
- optimize assets

## overview

1. automation - compile sass to css
2.

## install

general install

```
  npm install
```

- need node.js
- npm install -g gulp (-g installs gulp globally)
- npm install gulp --save-dev

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

* we put gulp tasks inside gulpfile.js
1. require the gulp file
```
var gulp = require('gulp');
```
# basic syntax
## to use this task from commandline
```
gulp taskname
```
```
  gulp.task('taskname', function(){
    //stuff here
  });
```

* gets source file with gulp.src
* sent it through the gulp plugin
* outputs file in destination folder
```
  gulp.task('taskname', function(){
    return gulp.src('source-files')
      .pipe(aGulpPlugin())
      .pipe(gulp.dest('destination'))
  });
```
# SASS preprocessing
## gulp preprocessing with gulp
* compile SASS to CSS
* plugin gulp-sass
* npm install gulp-sass --save-dev
* var sass = require('gulp-sass');

## usage:
```
gulp.task('sass', function(){
  return gulp.src('source-files')
  .pipe(sass())           //using gulp-sass
  .pipe(gulp.dest('destination'))
});
```

## example:
```
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
  .pipe(sass())           //using gulp-sass
  .pipe(gulp.dest('app/css'))
});
```
## run:
```
gulp sass
```

---
## Processing multiple files (globbing)
* more than one .scss file into css at same time
* Globbing is aka pattern matching for files to allow more than one file for gulp.src
* it outputs one .css per .scss or .sass file
