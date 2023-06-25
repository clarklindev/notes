# Axios

- using an instance to override with our own custom settings
- create a file that will contain the instance
- update the file using normal instance to import the instance,

```js
// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

//override...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
```

```js
// Blog.js
import axios from '../../../axios';
```
