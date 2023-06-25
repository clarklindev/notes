# React - setState

- this applies to Class based components
- this.state is not guaranteed to be the latest state,
- to depend on old state, you can pass setState a function, it has previousState and current props
- previousState guarantees the actual previous state

```js
//wrong way to update state with setState()
state = {
  changeCounter: 0
};

//WRONG!!!
this.setState({ changeCounter: this.state.changeCounter + 1 });

//CORRECT METHOD
thi.setState((prevState, props) => {
  return {
    persons: persons,
    changeCounter: prevState.changeCounter + 1
  };
});
```
