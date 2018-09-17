# grunt.js

```
npm install grunt-cli -g
```

## initializing a grunt project

```
npm install grunt-init -g
```

- clone the git template repo

```
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile
```

- this adds to user directory: `%USERPROFILE%\.grunt-init\`

- thereafter you can use the templates

```
grunt-init gruntfile
```

---

```
npm init
```

```
npm install grunt --save-dev
```

```
npm install grunt-contrib-concat --save-dev
```

## create Gruntfile.js

basic format for gruntfile.js

```js
module.exports = function(grunt) {
	// Do grunt-related things in here
};
```

using template strings in grunt file

- valid javascript

```
<% %>
```

```js
module.exports = function(grunt) {
	//configuration
	grunt.initConfig({
		//pass in options to plugins, reference to files etc.
		//takes name after 'grunt-contrib-'
		concat: {
			js: {
				//specify source and destination
				//src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/scripts.js']
				src: ['js/*.js'],
				dest: 'build/scripts.js'
			}
		}
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');

	// //register tasks which need to be run
	// grunt.registerTask('run', function() {
	// 	console.log('I am running');
	// });

	// grunt.registerTask('all', ['sleep', 'run']);
};
```

to run

```
grunt run
```

running all tasks

```js
grunt.registerTask('all', ['sleep', 'run']);
```

```
grunt all
```

## grunt plugins

```
npm install grunt-contrib-concat --save-dev
```

```
grunt concat
```

running specific tasks inside concat

grunt concat-js

```
grunt.registerTask('concat-js', ['concat:js']);
```

## working with mixins

have an external file, mixins.scss

```
@mixin ninjalink($link, $visit, $hover, $active){
  a{
    color:$link,
    &:visited{
      color: $visit;
    },
    &:hover{
      color:$hover;
    },
    &:active{
      color:$active;
    }
  }
}
```

then in the style.scss

- pass in the value

```
.heading{
  @include ninjalink('blue', 'pink', 'purple', 'red');
}
```

## install sass for css

```
npm install --save-dev node-sass
```

then install

```
npm install --save-dev grunt-sass
```

## uglify js

```
npm install grunt-contrib-uglify --save-dev
```

instead of having to call

```
grunt.loadNpmTasks('plugin');
```

you can install

```
npm install load-grunt-tasks --save-dev
```

then in the .js

```
require('load-grunt-tasks')(grunt);
```

---

## jslint

```
npm install grunt-jslint --save-dev
```

## csslint

```
npm install grunt-contrib-csslint --save-dev
```

```js
csslint: {
 	// strict: {
  //   options: {
  //     import: 2
  //   },
  //   src: ['path/to/**/*.css']
  // },
  lax: {
    options: {
      import: false
    },
    src: ['path/to/**/*.css']
  }
}
```

## grunt watch

```
npm install grunt-contrib-watch --save-dev
```

## default grunt task

```
grunt.registerTask('default', ['uglify']);
```
