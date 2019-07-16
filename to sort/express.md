Express.js

========================================================================
basics
========================================================================
npm init
entry point: (index.js) enter app.js

npm install express --save (by default (npm 5+) saves to dependencies list in package.json)

npm install

HELP:
express [options][dir]

options:
--version which version to use
-h <OR> --help usage/help information
--hbs add handlebar engine support
-H <OR> --hogan add Hogan.js support
-v <OR> --view <engine> view <engine> to use (ejs | hbs | jade | pug | twig | vash) - default jade
-c <OR> --css <engine> add stylesheet <engine> support (less | stylus | compass | sass) - default plain css
--git add .gitignore
-f <OR> --force force on non-empty directory

eg.

express -v=hbs myapp creates a folder myapp with handlebar view engine
cd myapp
npm install

mac:
DEBUG=myapp:\* npm start

windows:
set DEBUG=myapp:\* & npm start

http://localhost:3000

========================================================================

## simplest express app

this app starts a server and listens on port 3000 for connections

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

========================================================================

express-generator

CMD:
npm install -g express-generator
CMD:
express
CMD:
npm install

========================================================================
basic routing

routing - determining how an app responds to client request

app.METHOD(PATH, HANDLER)

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

//respond to GET request
app.get('/', function (req, res) {
res.send('Hello World!')
})

//respond to POST request on root route(/)
app.post('/', function (req, res) {
res.send('Got a POST request')
})

//respond to PUT request on /user route
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user')
})

//respond to DELETE request on /user route
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user')
})

========================================================================
Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:
express.static(root, [options])

The root argument specifies the root directory from which to serve static assets.
For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'))

Now, you can load the files that are in the public directory:

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
To use multiple static assets directories, call the express.static middleware function multiple times:
app.use(express.static('public'))
app.use(express.static('files'))

Express looks up the files in the order in which you set the static directories with the express.static middleware function.

Virtual path
To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
app.use('/static', express.static('public'))

Now, you can load the files that are in the public directory from the /static path prefix.

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
app.use('/static', express.static(path.join(\_\_dirname, 'public')))

========================================================================
advanced
========================================================================

Popular node modules
-NConf - configuration module
-Winston - logging library used to log various aspects of our app
-Helmut

npm install -g express-generator
express
npm install

========================================================================

npm install nconf

nconf - 5 ways to load configuration

- nconf.argv (command line)
- nconf.env
- nconf.file (use config file)
- nconf.defaults
- nconf.overrides

The order in which they are used specifies which options override others

defaults > file > argv > env > overrides

---

TODO: Replace hardcodded values in our app with configuration from nconf
