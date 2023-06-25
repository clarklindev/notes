# React - PropTypes

- prevent incorrect usage of component
- defining which props component accepts and the prop type for each of the props
- REQUIRED: install prop-types
- adding to component instance or class name, add a new property .propTypes
- the keys of propTypes object is the prop names
- failed propTypes show up in console with a warning

```
npm install --save prop-types
```

```js
import PropTypes from 'prop-types';

class Person extends Component {}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
```
