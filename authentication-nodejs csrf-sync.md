# HOW TO: the csrf-sync, and csrf-csrf packages

- note "csurf" is deprecated but see below for alternatives.

## csrf-sync (recommended) vs csrf-csrf

https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/34691636#questions/19548182

## csrf-sync (RECOMMENDED)

- Our app can store a token server-side (stateful authentication)
  and for that it is recommended to use csrf-sync, which uses the Synchronizer Token Pattern.

- Server generates a token, then stores it
- Token is sent to the client with the GET response (for the form's hidden field)
- Client sends token back to the server when POSTing the form
- The server then compares the server-stored token and the token sent by the client

= The server stored the token (no need for hash).

Implementation of csrf-sync (recommended):

Note that the order is important, the csrfSynchronisedProtection middleware must be after the session, and before the routes, so they'll be protected.

```shell
npm install csrf-sync
```

```js
// app.js:

import { csrfSync } from 'csrf-sync';
...

const { csrfSynchronisedProtection } = csrfSync({
getTokenFromRequest: (req) => req.body.csrfToken,
});

const app = express();

...

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({...}));

app.use(csrfSynchronisedProtection);

app.use((req, res, next) => {
res.locals.isSignedIn = req.session.isSignedIn;
res.locals.csrfToken = req.csrfToken(true);
next();
});

app.use(routes etc.)
...

```

---
