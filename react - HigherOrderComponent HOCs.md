## React Higher Order Components

- Wraps another component
- does not contain its own styling
- possibly adds additional logic
- 2 types method1 and method 2
- use method1 for ones that changes html code / styling
- use method2 that adds behind the scenes logic

## Method1 of HOC

- use a functional component (ie function that receives props and returns jsx)
- note naming with Capital letter for filename
- import with Capital letter classname because we are referencing a functional component

```js
//hoc/WithClass.js
import React from 'react';
const withClass = props => {
  <div className={props.classes}>{props.children}</div>;
};

export default withClass;
```

### usage

```js
import WithClass from 'hoc/WithClass';
<WithClass classes={classes.App}></WithClass>;
```

---

## Method2 of HOC

- pass to the regular javascript function

1. a reference to Component (\*note the capitals, we do this so later we can call the Component)
2. any other props for what the HOC should do

- it returns a functional component
- inside this div, we call the component,
- usage by wrapping export default with withClass(App, propsneeded)
- note: props getting passed through

```js
//hoc/withClass.js
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
```

### usage

```js
import withClass from 'hoc/withClass';

export default withClass(App, classes.App);
```
