# node.js - maximillian schwarzmuller - nodejs complete guide

# Asynchronous code

- mimic async by implementing setTimeout()

## Callbacks

```js
const fetchData = callback => {
  setTimeout(() => {
    callback('Done!');
  }, 1500);
};

setTimeout(() => {
  console.log('Timer is done!');
  //passing callback function into fetchData(()=>{})
  fetchData(text => {
    console.log(text);
  });
}, 2000);

console.log('Hello!');
console.log('Hi');

//output
//Hello!
//Hi!
//Timer is done!
//Done!
```

## Promises

- created with new Promise((resolve, reject)=>{})
- the Promise() takes a callback
- the callback takes 2 arguments: resolve / reject
- to complete promise successfully call resolve() / for fail and error handling call reject()
- return the promise
- we can now use .then() (.then() is callable on a promise)
- so we define our callback inside .then(), returning something converts it to a promise
- so now, we can just chain on .then() which refers to previous .then() blocks, returned promise

```js
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  //callback
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi');
```

## Async Await

---

## Understanding basics

- see notes/nodejs project folder/app.js

### Nodejs core modules

- these core modules are available with nodejs and can be imported with require('\*coremodule\*');

* http - launch a server, send requests
* https - launch SSL server
* fs -
* path -
* os -

### http

- const server = http.createServer(requestListener); //function takes in a request listener that executes for every incoming request
- takes 2 arguments, (request, response)
- createServer() returns a server
- then server.listen() listens to all incoming requests (event loop that stays running)
- open browser, localhost:3000
- process.exit(); quits the server

### The request object

- the important ones are:
  - request.url,
  - request.method,
  - request.headers
- request.url - everything after the domain name, eg. when at root, gives /
- request.method - 'GET'

### sending responses

- set the header type res.setHeader('Content-Type', 'text/html');
- res.write() - writes multiple lines of response (typically the html)
- res.end() - sending data back to client

### Routing requests

- add form with method="POST"
- button type="submit"
- form elements with name="" get passed into the request that gets sent to server
- res.end(); ends execution of if statement to avoid calling all other code

```js
//see app.js
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
});
```

### Redirecting requests

- fs.writeFile() vs fs.writeFileSync()
- res.statusCode = 302;
- res.setHeader('Location', '/');

```js
const fs = require('fs'); //working with file system

const method = req.method;
if (url === '/message' && method === 'POST') {
  //adding what user types in and outputting to file
  fs.writeFile('message.txt', 'DUMMY'); //adding 'DUMMY'string as content of file
  res.statusCode = 302;
  res.setHeader('Location', '/'); //redirect
  return res.end();
} //ensures handled only if POST request
```
