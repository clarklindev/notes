# Axios global config

- setting global configuration for all axios calls
- axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
- then remove the baseurl from axios call in rest of the code

```js
//index.js
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```
