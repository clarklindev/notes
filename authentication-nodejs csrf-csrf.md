# HOW TO: the csrf-sync, and csrf-csrf packages

- note "csurf" is deprecated but see below for alternatives.

## csrf-sync (recommended) vs csrf-csrf

https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/34691636#questions/19548182

## csrf-csrf (double csrf)

- uses the Double Submit Cookie Pattern, which is required when storing a token on the server is not an option
- (app with stateless authentication).

- Server generates a token
- Token is sent to the client with the GET response (for the form's hidden field)
- Token's hash is sent to the client in a cookie with the GET response
- Client sends token and hash back to the server when POSTing the form
- Token and hash are then compared by the server

= The client stored the token (as a hash).

Same thing about the order.

```shell
npm install cookie-parser csrf-csrf

```

```js
// app.js:

import cookieParser from 'cookie-parser';
import { doubleCsrf } from 'csrf-csrf';
...

const { doubleCsrfProtection } = doubleCsrf({
getSecret: () => 'any long string, used to generate the hash of the token',
getTokenFromRequest: (req) => req.body.csrfToken,
});

const app = express();

...

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({...}));

app.use(cookieParser()); // BEFORE the csrf middleware
app.use(doubleCsrfProtection);

app.use((req, res, next) => {
res.locals.isSignedIn = req.session.isSignedIn;
res.locals.csrfToken = req.csrfToken(true);
next();
});

app.use(routes etc.)
...
```
