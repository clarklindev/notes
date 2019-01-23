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
