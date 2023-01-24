# Handling cors errors

https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099018#overview

section 2 : a mini microservices app 22. Handling CORS errors

- a cors request error occurs when you are on a domain trying to send data through to another domain/url
  eg. localhost:3000 makes a request to localhost:4000

- you can fix this by fixing it on the server
- it sets a header on specific responses going back to the browser

```shell
npm i cors
```

## fix cors error

- on the server

```
const cors = require('cors');

const app = express();
app.use(cors());

```

```

```
