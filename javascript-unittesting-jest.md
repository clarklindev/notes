# Jest / Enzyme

- snapshot testing
- unit (core function) / integration testing (multiple units working together)
- acceptance /end-to-end test

---

react 16.3.2

install globally
create react app
jest watchmode (changes since last commit)

.test.js

it() chai() // mocha /jest
test() expect() // jest
expect()

pass - running without errors
fail - error thrown
asertion

---

Enzyme - tool creating virtual dom

- jquery style selectors

- create react app / Enzyme virtual dom

- shadow rendering - render element 1 level deep

dependencies

`npm install ajv` //peer dependency versions

- updates jest
- install enzyme
- install enzyme-adapter-react-16
- npm install jest-enzyme

---

```js
import { shallow } from 'emzyme';
```

- shallow() function takes JSX and returns shallow wrapper

```js
import App from './App';
const wrapper = shallow(<App />);
```

- logging DOM as string using .debug()

```js
console.log(wrapper.debug());
```

- airbnb.io/enzyme/docs/api
- facebook.github.io/jest/docs/en/expect.html

```js
* expect().toBe()
* toBeTruthy()
* StringContaining()
```

- Test behavior NOT implementation
- test what it does (test state update)
