# Local Storage

Working with localStorage in web development allows you to store data on the client-side browser, which persists even after the browser is closed. It is useful for saving user preferences, settings, or any other data that should be retained between sessions. Here's how you can work with localStorage:

### Setting a value in localStorage:

- You can store data in localStorage using the setItem() method. The data must be stored as key-value pairs, where both the key and value are strings.

```ts
// Storing a value in localStorage
localStorage.setItem('key', 'value');
```

### Getting a value from localStorage:

- To retrieve the value stored in localStorage, use the getItem() method and provide the corresponding key.

```ts
// Retrieving a value from localStorage
const value = localStorage.getItem('key');
console.log(value);
```

### Removing a value from localStorage:

- If you want to remove an item from localStorage, use the removeItem() method and pass the key of the item you want to delete.

```ts
// Removing a value from localStorage
localStorage.removeItem('key');
```

### Clearing all data from localStorage:

- To remove all data stored in localStorage, you can use the clear() method.

```ts
// Clearing all data from localStorage
localStorage.clear();
```

### Handling JSON data in localStorage:

- localStorage stores data as strings, so if you want to store and retrieve objects or arrays, you'll need to use JSON.stringify() and JSON.parse().

```ts
// Storing an object in localStorage
const dataObject = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(dataObject));

// Retrieving the object from localStorage
const storedData = JSON.parse(localStorage.getItem('user'));
console.log(storedData); // { name: 'John', age: 30 }
```

### Checking for localStorage support:

- Although modern browsers support localStorage, it's good practice to check if it's available in the user's browser before using it.

```ts
if (typeof Storage !== 'undefined') {
  // localStorage is supported
  // You can proceed with your localStorage operations here
} else {
  // localStorage is not supported in this browser
  // Handle the situation gracefully
}
```

- Please note that localStorage has a storage limit (usually around 5-10 MB per domain), so it's important not to abuse it by storing large amounts of data. Additionally, since localStorage operates on the client-side, it's not suitable for sensitive information or critical data that must remain secure. For such scenarios, consider using server-side storage with appropriate security measures.

---

# auth res.cookie()

Storing sensitive data like tokens, user IDs, and expiration dates in localStorage is not recommended due to security concerns. localStorage is a client-side storage mechanism that persists data within the user's web browser. While it is convenient for storing non-sensitive information, it poses security risks when used for sensitive data.

Here are some reasons why localStorage is not suitable for storing sensitive data:

No Encryption: Data stored in localStorage is not encrypted, which means it is easily accessible by anyone with access to the user's browser, including malicious scripts or browser extensions.

No Expiry Mechanism: localStorage does not provide built-in support for token expiration or automatic invalidation. Once data is stored, it remains in the browser until explicitly removed.

Cross-Site Scripting (XSS) Vulnerability: If your web application is vulnerable to XSS attacks, an attacker could potentially access and steal data stored in localStorage.

Instead, for storing sensitive data like tokens, user IDs, and expiration dates, it's better to use HttpOnly cookies with the Secure attribute. HttpOnly cookies can only be accessed by the server and are not accessible through client-side scripts, mitigating the risk of XSS attacks.

### example using cookie parser

- server uses res.cookie() which holds token
- and To receive the cookie on the frontend, you need to use the fetch() method with credentials set to "include." This will ensure that cookies are sent with the request.

### server handling incoming login request

- sends token with cookie
- remove the need to set 'BEARER token' in header of requests.
- when using cross origin domains, you need to set cors() middleware in the correct order before express.json()
- corsOptions - credentials: true,
- this should set a cookie in your browser - application -> cookies
- credentials: 'include' needs to be in all frontend headers that need authentication.

```ts
// Enable CORS for specific origins with credentials
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
};

//order important needs to come before express.json()
app.use(cors(corsOptions));
```

```ts
// JWT BEARER TOKEN METHOD: not needed anymore on frontend
  headers: {
    Authorization: `Bearer ${token}`,
  },
```

```ts
// frontend request to backend that requires authentication NEEDS credentials: include in the fetch()
const result = await fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
});
```

```ts
// Route for user login
app.post('/login', (req, res) => {
  // Perform authentication and generate a JWT token
  const user = { email: 'user@example.com', userId: 'user123' };
  const token = jwt.sign(user, 'your_secret_key', { expiresIn: '1h' });

  // Set the token as an HttpOnly cookie with the Secure flag (only sent over HTTPS)
  res.cookie('token', token, { httpOnly: true, secure: true });
  res.send('Login successful.');
});
```

### future api request that require authentication

- then when server receives a request `const token = req.cookies.token;` which can also be done inside middleware.

```ts
// Route to access protected data
app.get('/protected', (req, res) => {
  // Retrieve the token from the cookie
  const token = req.cookies.token;

  // Verify the token and handle the protected data
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      res.status(401).send('Unauthorized.');
    } else {
      // Handle the protected data (e.g., fetch user data based on `decoded.userId`)
      res.send(`Welcome, ${decoded.email}!`);
    }
  });
});
```
