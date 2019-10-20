## Memorization

- to prevent unecessary rendering with react hooks and functional components,
  wrap export with React.memo()
- only if components props changes will it re-render
- note we can optimize what gets passed into Component, so intead of passing in the state object, we can push in array length and then it will only update when the length changes.

```js
export default React.memo(cockpit);
```
