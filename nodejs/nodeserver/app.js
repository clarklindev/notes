//app.js
const http = require('http'); //adding ./ looks for local file, without pathing, it looks for global library

//with named function
//function requestListener(req, res) {}
//const server = http.createServer(requestListener);

//or anonymous function
const server = http.createServer((res, res) => {
    //all request details
    console.log(req);

    //important request details
    console.log(req.url , req.method , req.headers );

    const url = req.url;
    if(url === '/'){
      res.write('<html>');
      res.write('<head><title>Enter message</title></head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
    }
    //sending response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end(); //send back to client

    //process.exit(); //quits the server
});

server.listen(3000); //default port:80
//in browser localhost:3000

