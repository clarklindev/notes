# React Hooks

- import {useEffect} from 'react';
- useEffect(()=>{}) executes for every update
- can have many useEffect calls.
- to cleanup a useEffect(()=>{}), return an anoymous function that will run after every render cycle

- useEffect is ComponentDidMount and ComponentDidUpdate combined
- to distinguish the difference, pass second argument (an array).
  1. [] empty array, when rendered and unmounted.
  2. or [array holds all variables used in effect] and will only call the useEffect() function when this variable changes
  3. no array...useEffect() calls every update cycle

```js
import React, { useEffect } from 'react';

const functionName = props => {
  useEffect(() => {
    //executes for every render cycle
  }, [props.persons]);
};
```

### Cleanup

```js
componentWillUnmount(){}

```
