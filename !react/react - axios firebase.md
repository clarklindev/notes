# React - Firebase

- use real-time database (NOT firestore)
- firebase console - create new project
- this creates a mongodb like database
- gives a endpoint url `http://abc.firebaseio.com`
- set rules read/write to true AND publish
- npm install --save axios

```js
// axios-custom.js
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://abc.firebaseio.com/'
});
export default instance;
```

## using axios with FIREBASE

- note, endpoints need .json
- setup object you want to save, send it with .post()
- NOTE: below is dummy object
- post() response code 200 means success
- saved to firebase with auto-generated id

```js
purchaseContinueHandler = () => {
  const order = {
    ingredients: this.state.ingredients,
    price: this.state.totalPrice,
    customer: {
      name: 'Clark',
      address: {
        street: '',
        zipcode: '',
        country: 'South Africa'
      },
      email: 'clark@test.com'
    },
    deliverymethod: 'fast'
  };
  // AXIOS POST
  axios.post('/orders.json', order);
};
```

## Adding a spinner

- css loader (https://projects.lukehaas.me/css-loaders/)
- create a spinner component
