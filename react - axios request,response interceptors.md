# Axios request/response Interceptors

- interceptors allow handling requests/response globally
- the interceptor function always needs to return the request
- the interceptor function can receive second function to handle errors
- the catch() should return Promise.reject(error); to pass on the handling to the component from the global scope
-

```js
// index.js
import axios from 'axios';

// request
axios.interceptors.request.use(
  request => {
    console.log(request); //request config

    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response
axios.interceptors.response.use(
  response => {
    console.log(response); //request config

    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
```
