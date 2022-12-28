# Unit testing (Test Driven Development)

- organized
- maintainable
- fewer bugs

## versions

- create react app 1.5.2
- node 8.2.1
- npm 5.3.0
- react 16.3.2
- jest 22.4.3
- enzyme 3.3.0
- enzyme-adapter-react16 1.1.1
- redux 4.0.0
- react-redux 5.0.7
- redux-thunk 2.2.0
- axios 0.18.0
- moxios 0.4.0

## Sections

1. jest and enzyme (create react app)
2. testing simple React app (component state and component elements)
3. react/redux app, testing connected redux components (how they deal with state)
4. testing action creators and reducers
5. testing redux thunk and Axios
6. testing redux props and action creator calls

## Test Driven Development (TDD)

- write tests before writing code
- 'red-green' testing
  - tests fail (red) before code is written
  - then write code to make test pass (green)

---

## jest and enzyme (create react app)

- npx downloads the latest version of create-react-app templates every time
- meaning its not dependant on when you last installed create-react-app on your machine
- npx - using npx means its never installed on your machine (needs npm 5.2+)
- its watching for changes since last commit (files ending with .test.js)

```
npm install -g create-react-app

npx create-react-app demo

npm test
```

## OPTIONAL: Setting up without Create React App

```
npm install --save-dev jest babel-jest
npx create-react-app demo
```

- babel-jest is for babel support with jest
- for react, we need to put in place some mocks for static files (images) that jest does not work with natively.
- https://jestjs.io/docs/en/webpack.html#handling-static-assets

### Mocking images AND mocking css modules

```
npm install --save-dev identity-obj-proxy
```

```json
// package.json
{
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3)",
      "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$":"identity-obj-proxy"
    }
  },
  "scripts":{
    "test": "jest --watch"
  }
}
```

- OR can also put in jest.config.js

```js
// jest.config.js
{
  module.exports = {
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3)",
      "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$" : "identity-obj-proxy"
    }
  }
}
```

```js
//__mocks__/fileMock.js
module.exports = 'test-file-stub';
```

---

## An example jest test

- jest uses 'test()' keyword (official api test word for jest) or can use Mocha like syntax 'it()'
- if the function runs without errors, test passes, if we throw error, test fails

```js
//app.test.js
import React from 'react';
import App from './App';

test('renders without error', () => {
  //if the function runs without errors, test passes,if we throw error, test fails
});
```
