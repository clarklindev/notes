## CSRF (Cross Site Request Forgery)

- prevent malicious code execution which uses valid session (eg link in email to use your credentials), then gain access to your api's
- OPENAI:
  Cross-Site Request Forgery (CSRF) protection is primarily required when you have a server-side component handling user requests, such as when using traditional server-rendered web applications or APIs. If you're not using server-side rendering and your application is entirely client-side, the need for CSRF tokens may not be as critical.

### prevent CSRF with CSRF token

- how does it work?

- want to prevent your sessions being stolen,
- csurf is a package for node/express which generates a csrf token.

- a new token is generated for every request
- can be embedded onto pages/forms that do something to change users state - then on backend we check if there is the valid token.
- it uses the session (default) to store the token
- add after session()
- Typically, res.locals is used within server-side rendering frameworks to pass variables to templates or views during the rendering process.
- use middleware, store in res.locals like:
  - res.locals.isAuthenticated = req.session.isLoggedIn;
  - res.locals.csrfToken = req.csrfToken();
- NOTE: for POST req - need to add to form input (hidden) giving access to csrfToken

```
<input type="hidden" name="_csrf" value={${csrfToken}}>
```

```shell
npm i csurf
```

```js
const csrf = require('csurf');
const csrfProtection = csrf(); //middleware

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(csrfProtection);
...

//SERVER SIDE RENDER...for every request - set local variables to pass into views

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

```
