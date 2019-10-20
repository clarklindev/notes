# React Refs Hooks (functional component)

- create the ref with `const toggleBtnRef = useRef(null)`
- so we want to assign ref(eg. ToggleBtnRef) to the jsx element
- then we can use useEffect(()=>{}, []), and by passing empty array, executes when runs for first time and if the useEffect() returns a function it can do cleanup
- and now we have access to toggleBtnRef in useEffect

```js
import React, { useRef } from 'react';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleButtonRef.current.click(); //reference to button and call click()
    return () => {};
  }, []);

  return <button ref={toggleBtnRef}></button>;
};
```
