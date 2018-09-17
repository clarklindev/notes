# NODE.JS

### install node.js

node makes running javascript without browser possible

command:

```
node
```

to run test.js file, command:

```
node test.js
```

### require('');

eg. require('os');  
allow us to pull in more code,
node searches for a module (os module)
returns an object of all code available in os module

open google chrome  
->view->developer->javascript console

or just use:

```
node
```

can type any javascript and it will run

- NPM is a command shipped with node
- NPM allows us to install/remove/update node modules
- Node has a tool that automatically run code again when it detects a file change is saved to disk

```
npm install node-dev -g
```

```
sudo npm install node-dev -g
//gets around writing to binary path of computer
```

---

## Modules

package.json

```
{
  'dependencies':{
    'node-markdown':'0.1.0'
  },
}
```

package.json has 'dependencies' attribute in where we list the dependencies, this gets put in the node_modules folder  
node-markdown will be put in node_modules/node-markdown folder

### script.js

```
var os = require('os');
var message = "this script is running on Node.js" + process.version + 'on a ' + os.type() + '-based operating system';

console.log(message);
```

---

cmd:

```
node script.js
```

use require('./module-name.js'); ./ to load from local modules instead of the node_modules directory (helps separating data from code)

eg.

### data_modules/fibonacci.js

```
exports.data = [1,1,2,3,5,8,13,21]; //using exports gains access as properties
```

### data_modules/script.js

./ means load local module instead of from core modules collection
console.log(sequence.data);

```
var sequence = require('./fibonacci');
```

cmd:

```
node data_module/script.js
```

---

find modules via npm

cmd:

```
npm search
//used to search for modules

npm search | grep markdown
//piped through grep and search for 'markdown'

npm search markdown
//search for markdown
```

search.npmjs.org

---

## npm init //creates package.json

create 'dependencies'

```
package.json
{
  ...
  'dependencies':{
    "node-markdown":"0.1.0"
    //version to pull, use * astrix for latest version
  }
  ...
}
```

install dependencies

cmd:

```
npm install
```

---

## updating modules

updating latest versions of all modules

cmd:

```
npm update //update modules
sudo npm update -g
```

## remove unused modules

remove from dependencies list in package.json

cmd:

```
npm prune //remove unwanted modules
```

---

## Command line scripts

### reading args by using .argv;

eg.
script.js

```
var argv = require('optimist').argv;
//getting argv property off optimist module

for(var i=0; i< argv.times; i++){
  //getting .times property
  console.log(argv._[0] + 'on loop number ' + (i + 1));
}
```

times property gets set on the command line using the times flag. --times

remaining arguments not set with flags are stored in the _[] array ._[0] //gets first remaining argument

cmd:

```
node script.js --times 8
```

---

## command line interactive prompts

readline.js

module: readline

```
var rl = require('readline'); //readline is part of core modules that come with NPM

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("how many servings of fruits and vegetables do you eat each day? ", function(servings){
var message = "";
if(servings < 5){
  message = "since you're only eating " + servings + "right now, you might want to start eating " + (5 - servings) + "more.";
}else{
  message = "Excellent, your diet is on the right track!";
}

console.log(message);

process.exit(); //end process when done
});
```

---


using jquery in node on command line to get content out html document

accessing the file system via require('fs'); //core node module

script.js
var argv = require('optimist').argv,
$ = require('jquery'),
fs = require('fs');

var file = argv.\_[0]; //get name of the file

var html = fs.readFileSync(file, 'UTF-8'); //pass in name of file and open up in UTF-8 encoding

//html string is parsed into jquery
$(html).find('p').each(function(index){
var content = $(this).html();

console.log('Paragraph' + (index + 1) + ": " + content);

});

=====================================================================================================================
lint checkers - detect potential problems with code before we run it

jshint

sudo npm install -g jshint

jshint [filename.js]

# =====================================================================================================================

creating web server

*node is designed with web servers in mind
*capable of responding to basic http requests with relatively small amount of code

server.js
var http = require('http'); //core module distributed with node

//function is run whenever a request is sent to the server
//request object has all data that came in with http request
//response object allows us to customize what we send back to web browser

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/html'}); //when we get a request we send back a 200 response code
response.end('<html><body>home, URL was: ' + request.url + "</body></html>");
console.log(request.url);
}).listen(3000, 'localhost'); //http to listen to port 3000 on localhost

console.log('server running at http://localhost:3000/');
[br /]
node server.js
node-dev server.js //when changes are made to server.js, changes update

=====================================================================================================================
Connect module

taking care of routine tasks, builds on core http module and provides functions for common webserver configurations

"dependencies":{
"connect':"1.9.2"
}

script.js
var connect = require('connect');

var app = connect()
.use(connect.static('public')) //serve files directly from public folder - serves index.html if it exists
.use(function(req, res){
res.end('couldnt find it');
})
.listen(3000);

cmd:
node-dev script.js

=====================================================================================================================
connect - reading data

connect is middleware handling http requests

Connect makes it possible for you to handle multiple kinds of request by chaining calls to connect to use.
when you want to read the data being passed into the HTTP request, use the bodyParser function to have Connect prepare the data for you.

bodyParser() //allow us to read variables in submitted form

var connect = require('connect');

var app = connect() //creating connect server
.use(connect.bodyParser()) //allow us to read variables in submitted form
.use(connect.static('public')) //connecting to public folder
.use(function(req, res){
if(req.url === '/process'){
res.end(req.body.name + 'would repeat' + req.body.repeat + ' times.');
}else{
req.end('invalid request');
}
})
.listen(3000);

index.html

<html>
<body> 
<form action="/process" method="post"> //posting to process url

<label for="name">Name</label><input type="text" name="name" value="" id="name">
<label for="repeat">Repeat</label><input type="text" name="repeat" value="" id="repeat">

<p><input type="submit" value="Submit"></p>

</form>
</body>
</html>

cmd:

node-dev script.js

localhost:3000

# we assume we have access to the variables posted to 'process'. if we access 'process' directly we get undefined

connect usually send back appropriate header back for you.
connect allows you to override specific parts of the http response to suite your needs.

package.json
"dependencies":{
"connect":"1.9.2"
}

server.js
var connect = require('connect');

var app = connect()
.use(function(req, res){
res.statusCode = 403;
res.end('forbidden'); //on every request we send back the message 'forbidden'
})
.listen(3000);

cmd:
node-dev server.js

browser -> tools -> web developer -> web console

=====================================================================================================================

var connect = require('connect');
var my_data = {
'fruit':'apple'
}
