# Cookies / Sessions

## Session

- with sessions - session is created, cookie stores hashed ID of session - server can confirm id stored in cookie relates to something in db
- session shares information accross all requests of the same user.
- cookie lasts the session while browser tab is open
- session data is stored in memory but should be stored in db (express-session) can store using connect-mongodb-session (for production build)

```
npm i express-session connect-mongodb-session

```

- session should then be initialzed as early middleware
- secret - used to hash - long string.
- resave:false - session saved only when something changed in session
- saveUninitialized:false - the session cookie will not be set on the browser unless the session is modified

```js
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI =  `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@<somemongodb given db url>`,

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

//app.js
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
```

### Session cookie - identifying the session

set cookie on session - accessed via controllers using "req.session."

```js
//in the controllers
exports.login = (req, res, next) => {
  req.session.isLoggedIn = true; //sets the cookie via session
};
```

<!-- ------------------------------------------------------------------------------ -->

## Cookie

- cookies are not safe!!! can be used but it is not safe as they can be manipulated in browser tools via hardcoding cookie values
- setting cookies manually (chrome dev tools => Application=> Storage => cookies)
- ALTERNATIVE to storing cookies on backend is using sessions (stored on backend in db or in memory) - client tells server which session he belongs

- Secure - cookie set only when using https url
- HttpOnly - cookie cant be accessed via client side javascript to read cookie values
- resave -
  determines whether the session should be saved to the session store even if the session was not modified during the request. By setting resave to false, you are indicating that the session should not be saved if it was not modified. This can help optimize performance by avoiding unnecessary writes to the session store.

- saveUninitialized -
  determines whether a new, uninitialized session should be saved to the session store. An uninitialized session is a session that is new but hasn't been modified yet. By setting saveUninitialized to false, you are indicating that uninitialized sessions should not be saved. This can be useful to save storage space and reduce the number of unnecessary session objects in the session store.

In summary, by setting resave and saveUninitialized to false, you are optimizing the session middleware to only save the session if it has been modified and to skip saving uninitialized sessions. This can improve performance and efficiency.

- set a cookie in header response like:

<!-- how to set/get a cookie -->

```js
//set
exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true; Secure'); //cookie is only set with https connections
  // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly'); //cookie cant be accessed via clientside javascript
  res.setHeader('Set-Cookie', 'loggedIn=true');

  res.redirect('/');
};

// get
exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
};
```

## destroy() session

```js
exports.postLogout = async (req, res, next) => {
  // clear session
  // callback with potential error as prop
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
```

---

# authentication in nodejs

## CREATE USER - SIGNUP

```shell
npm i bcryptjs
```

```js
const bcrypt = require('bcryptjs');

exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.json({ status: 'FAIL', data: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12); //12 is the salt (rounds of hashing to be applied (12) is a secure number)
    const newUser = new User({
      email,
      password: hashedPassword,
      cart: { items: [] },
    });
    await newUser.save();
    res.json({ status: 'OK', data: 'successfully created new user' });
  } catch (err) {
    console.log(err);
  }
};
```

## LOGIN USER

- take password entered in form and let bcrypt "hash" it and see if it will equal the stored hash value

```js
const user = await User.findOne({ email: email });
if (!user) {
  return res.json({ error: 'user does not exist' });
}

try {
  const result = await bcrypt.compare(password, user.password); //compare password user entered..
  //the result of compare() is a promise where it returns 'true' if equal and 'false' if not equal.
  if (result) {
    req.session.isLoggedIn = true;
    req.session.user = user;

    return req.session.save((err) => {
      console.log(err);
      //ensure session was created before redirect()
      // res.redirect('/');
      res.json({ status: 'LOGGED IN', done: true });
    });
  }
  res.json({ status: 'ERROR', message: 'incorrect credentials' });
} catch (err) {
  console.log(err);
}
```
