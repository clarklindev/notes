# WEBPACK

- To run the local installation of webpack you can access its bin version as  
  node_modules/.bin/webpack
- npm install --global webpack
- To bundle the lodash dependency with index.js, we'll need to install the library locally...
- npm install --save lodash
- use nvm to load different node versions

---

# Webpack Tutorial for Beginners #02 - Installing Webpack & Bundling JS Files.mp4

## start a new project

creates package.json

```
npm init
```

## run webpack

```
webpack
```

install dependencies

- package.json adds a devDependencies:{}
- webpack allows module.exports, and require

```
npm install -g webpack
npm install --save-dev webpack
npm install —save-dev webpack@<version>
```

### index.html script

```
<script src="./script1.js"></script>
```

### script2.js

- lets say it is required by script1.js
- module.exports - explicitly specify what to give, when other files requires this file

```
module.exports = "Hello World";
```

### script1.js

- linked to index.html
- script1 requires script2 to work

```
var message = require('./script2');
alert(message);
```

---

## step3: bundle together

```
webpack <entrypoint> <output>
```

eg:

```
webpack script-1.js bundle.js
```

### Change index.html script

```
<script src="./bundle.js"></script>
```

---

# Webpack Tutorial for Beginners #03 - The webpack.config File.mp4

webpack.config.js

- webpack config file
- configuration js file
- running webpack commands
- create src folder / dist folder
- move scripts to src folder
- define entry point(string)
- define output point (object)
- define ouput path 'dist' folder will be created
- define output filename

---

```js
module.exports = {
	entry: './src/script1.js',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	}
};
```

then TO RUN...  
cmd:

```
webpack
```

## change index.html script to point to dist

- link up bundle in .html

```
<script src="./dist/bundle.js"></script>
```

---

Loaders - help perform transformations on our code

- convert ES6/ES2015 -> vanilla js
- jsx -> vanilla js
- SASS

3 steps

- install babel-core
- install babel-loader
- install presets to use for transformations

  - preset for es2015
  - preset for jsx

- configure webpack.config to tell webpack to use babel to transform our code

---

# Babel Loaders

install dependencies

- dependencies are added to package.json

---

```
npm install babel-core babel-loader babel-preset-es2015 --save-dev
```

### Configure in webpack.config.js

- adding module property
- tell it, we want to use some loaders (an array) or all the different loaders we want to use in our project
- each loader is an object
- test- chooses the extension (reg expression), eg. /\.js\$/ tests for .js files
- exclude- tell webpack to exclude certain js files
- loader- which loader to use
- query-(object) and inside we list which presets to use
- presets-(array) of presets we going to use

```js
module.exports = {
	entry: './src/script1.js',

	output: {
		path: 'dist',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
```

---

# CSS Loaders

- modularises css
- load in only the particular styles we need at a particular point, into different parts of our application
- eg in a js framework -> dynamically injects content into website, splitting js into differnt components
- each js component can load only the css it needs for that component

Css-loader - loads css into js file  
Style-loader - adds css into DOM

CMD:

```
npm install style-loader css-loader --save-dev
```

## index.html

```
<div class="intro-component">
    <h1>CSS Loaders are Awesome</h1>
</div>
```

### webpack.config.js

- style-loader AND css-loader
- use '!' to say we want to use multiple loaders

```js
module.exports = {
	entry: './src/script1.js',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};
```

### css/introComponent.css

```
.intro-component{
    padding:20px;
    background:maroon;
    color:#FFF;
    font-family:arial;
}
```

eg script1.js

load only the css you need through 'require' for the component

```
var message = require('./script2');
require('./css/introComponent.css');
```

---

# SASS Loaders

- sass to css
- install node-sass

CMD:

```
npm install node-sass sass-loader --save-dev
```

# css/introComponent.scss

```scss
$mainColour: #7777bb;

.intro-component {
	padding: 20px;
	background: $mainColour;
	color: #fff;
	font-family: arial;

	h1 {
		text-transform: uppercase;
	}
}
```

### eg script1.js

update reference to .scss instead of .css

```
var message = require('./script2');
require('./css/introComponent.scss');
```

### webpack.config.js

add on test for SASS /\.scss\$/

```js
module.exports = {
	entry: './src/script1.js',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};
```

---

# JSX

- ES2009/ES5
- ES2015/ES6

```html
<head>
	<script type="text/babel" src=".js"></script>
	//react babel
</head>
```

use npm to install react and babel, react-dom  
webpack to configure babel  
webpack for loader  
webpack dev-server

```
npm install react react-dom —save —savedev
```

```
npm install babel-core babel-loader babel-presets-es2015 babel-presets react
```

### webpack

```
npm install webpack webpack-dev-server —save-dev
```

---

### webpack.config.js

- \*\*dirname is current directory

```js
var path = require(‘path’);

module.exports = {
    entry: path.resolve(**dirname, 'src') + '/app/index.js',
    output: {path.resolve(**dirname, 'dist') + 'app',
    filename : 'bundle.js', //combined code
    publicPath : '/app/',
    module: {
        loaders:[
            {
                test:/\.js$/, //files loader should work on
                include:path.resolve(**dirname, 'src'),
                loader:'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader | css-loader'
            }
        ]
    } //close module
}; //close exports
```

cmd:

```
webpack
```

or

use package.json to run script

- content -base is where the index file is

```json
"scripts" : {
"start": "npm run build",
"build": "webpack -d && webpack-dev-server -content -base src/ -inline -hot -port 1234"
}
```

commandline:

```
npm start //calls 'npm run build'
```

include the bundle.js in index.html

```
<body>
<script src='/app/bundle.js'></script>
</body>
```
