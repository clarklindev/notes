# Handling cors errors

## NodeJS fix by adding Middleware (Headers)

- this is what is happening under the hood, but use NPM cors module (see below)

```js
//cors handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //allows sending
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});
```

<!-- ----------------------------------------------------------------------------------------------- -->

## NPM cors module

```shell
npm i cors
```

https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099018#overview

- when domain/subdomain/port different from where we making request.
- browser rejects requests unless we update request headers

section 2 : a mini microservices app 22. Handling CORS errors

- a cors request error occurs when you are on a domain trying to send data through to another domain/url/port
  eg. localhost:3000 makes a request to localhost:4000

- you can fix this by fixing it on the server
- it sets a header on specific responses going back to the browser

```shell
npm i cors
```

### fix cors error

- on the server

```
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

```
