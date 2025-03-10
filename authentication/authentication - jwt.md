# Session Cookies

- with session cookies, the server keeps track of user with a session.
- the session can be stored on a db
- session cookies stored on server, but with REST api, session cookies arent used, it uses tokens (see JWT tokens section)

```js
const result = await bcrypt.compare(password, user.password);

if (result && req.session) {
  req.session.isLoggedIn = true;
  req.session.user = user;
  return req.session.save((err: Error) => {
    console.log(err);
    //ensure session was created before redirect()
    // res.redirect('/');
    res.json({ status: 'LOGGED IN', done: true });
  });
}
```

# JWT - jason web tokens

- with JWT, you still have to get the form data
- you still check against the database if it can find a user
- const token = jwt.sign() creates a new signature and packs it in a token.
- .sign(what we want to store in token)
- once it is confirmed that user exists and password is correct, you generate a token, this token is stored on client side
- need to attach token to requests that require authentication

## passing tokens (authentication) to the backend

- client passes token back to server, need to check token exists and that its valid before continuing
- put tokens in header
- note: this requires enabling header access control - "Authorization" or use npm package cors()

```js
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
```

```shell
npm i jsonwebtoken
```

```js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//users-controller.js
//signup
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, password } = req.body;

  //use mongodb
  let existingUser;
  try {
    //try find if user exists (findOne uses criteria to match... here by email)
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'user exists already, please login instead',
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12); //12 is the salt
  } catch (err) {
    const error = new HttpError('Could not create user, please try again', 500);
    return next(error);
  }

  const createdUser = new User({
    id: uuid(),
    name,
    email,
    password: hashedPassword,
    image: req.file.path,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('signing up failed, please try again', 500);
    return next(error);
  }

  // after successful creating of user, create a token
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email }, //payload: cant be, string, object or buffer
      process.env.JWT_PRIVATE_KEY, //private key
      { expiresIn: '1h' }
    ); //assign data - inputs are payload : string, object or buffer
  } catch (err) {
    const error = new HttpError('signing up failed, please try again', 500);
    return next(error);
  }

  // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

// login
//check password
const login = async (req, res, next) => {
  const { email, password } = req.body;
  //use mongodb
  let existingUser;

  //validate email
  try {
    //try find if user exists (findOne uses criteria to match... here by email)
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later',
      500
    );

    return next(error);
  }

  //check if email/password is in database and correct
  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      403
    );
    return next(error);
  }

  //check password
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      403
    );
    return next(error);
  }

  //generate token

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email }, //payload is data you want to encode into token: string, object or buffer
      process.env.JWT_PRIVATE_KEY, //private key
      { expiresIn: '1h' }
    ); //assign data - inputs are payload : string, object or buffer
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again', 500);
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  }); //returns to frontend

  // res.json({
  //   message: 'Logged in!',
  //   user: existingUser.toObject({ getters: true }),
  // });
};
```

```js
// checking if authenticated
//check-auth.js
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTION') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; //Authorization returns:     Authorization : "Bearer <TOKEN>"
    if (!token) {
      throw new Error('Authentication failed!');
    }

    //verify token
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY); //verify(token, private key)

    //add dynamic data to request
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed', 403);
    return next(error);
  }
};
```
