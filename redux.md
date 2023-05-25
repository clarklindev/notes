# Redux

- state management using events called "actions"
- centralized store for state across entire application
- redux is for writing code that is predictable and testable

## Redux store (Reducer)

- The center of every Redux application is the store.
- A "store" is a container that holds your application's global state.
- its a JavaScript object with a few special functions and abilities that make it different than a plain global object
- Redux expects that all state updates are done immutably
- store notifies subscribers that the state has been updated so the UI can be updated with the new data.

### Actions

- to cause an update to the state, create a plain action object that describes "something that happened in the application", and then dispatch the action to the store to tell it what happened.
- action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action. updates state immutably
- An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
- The type field should be a string that gives this action a descriptive name, like "todos/todoAdded" - the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.
- An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

---

## Redux (Basic Example without react)

```js
import { createStore } from 'redux';

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' });
// {value: 1}
store.dispatch({ type: 'counter/incremented' });
// {value: 2}
store.dispatch({ type: 'counter/decremented' });
// {value: 1}
```

---

### State, action, reducer

1. define initialState

2. define reducer(state=initialState, action) with switch action.type, each action returns new state

### Store

3. Create a new Redux store: const store = Redux.createStore(reducer)

### UI

4. user interacts with a button, render() function has: const state = store.getState(), then update with new state
5. store.subscribe(render) to redraw whenever the data changes in the future

## Dispatching actions

6. in UI dispatch action

---

# Redux toolkit

```js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
```
