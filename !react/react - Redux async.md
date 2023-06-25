# Redux async

- (redux.js.org)

## middleware

- middleware is code/function that hooks into a process and executes as part of the process without stopping it.
  and the action will still reach the reducer, but you can do something before this action reaches the reducer.
- the middleware function receives a store
- returns another function which receives 'next' argument which will let action continue onto reducer
- this function will return an action, and inside this function we can execute code we want to run inbetween action and reducer
- call next(action) to pass the unmodified action and allow code to continue

## applying middleware to the store

- import applyMiddleware from redux
- add to createStore() function as second argument an enhancer (eg. some middleware)
- and pass to applyMiddleware() our valid middleware function logger

## install redux-devtools

- install chrome browser dev tools extension
- hook up the project to the dev tools extension
- import { compose } from 'redux';
- assign `const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;`
- the fallback is the default 'compose' function by redux dev tools.
- compose allows us to combine enhancers
- wrap applyMiddleware() with composeEnhancers()

## Action creators

- function that returns an action, allow us to execute async code
- import the action creator `import { increment } from '../../store/actions/';`
- OR import all actions... `import * as actionCreators from '../../store/actions/'`
- so when we dispatch something, instead of `onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT})`,

- we then call a function `onIncrementCounter: () => dispatch(actionCreators.increment())` <!-- onIncrementCounter: () => dispatch(increment()) -->

## Asynchronous code with Thunk

- github.com/gaearon/redux-thunk
- npm install --save redux-thunk
- thunk allows you to change action creator functions to return a function instead of the action,
- and the function can later dispatch an action
- `import thunk from 'redux-thunk'`
- we add thunk as middleware by using applyMiddleware(thunk)
- now we have access to action creator that returns a function which gives us 'dispatch'
- async action creator `export const storeResult = (res)=>{}` call synchronous action creators `export const saveResult = (res) =>{}`
- move actions constants into actionTypes.js
- thunk allows us access to state as second parameter in the return function that gives us 'dispatch',
- MAX RECOMMENDS rather passing in the state via argument during the dispatch() action creator function call

## exporting/importing with index.js

- allows you to just import from index.js and use any of the functions exported from index.js
- in index.js, export {//here export functions } from './counter';
- in index.js export {//here export functions} from './result';
  ...

* later import the index, `import * as actionCreators from '../../store/actions/index';`

## where to put logic action-creators vs reducer?

- action creator are for actions while reducer updates the state
- reducer should prepare the state for update, just be consistent

## Reducer Utility function

- the utility function cleans up the reducer code instead of `return {...state, counter: state.counter-1}`
- oldObject is the original object and updatedValues is the prop we want to update
- `import {updateObject} from '../utility';`
- instead of returning action.. `return {}`
- to use: `return updateObject(state, {counter: state.counter = action.val});`

## Leaner Switch statements

- move code from switch statement to its own function(state, action)
- the function receives state and action
- see result.js deleteResult() and how switch statement returns the deleteResult() call

## Folder structure

- each container folder can have its own store subfolder with actions and reducer

```js
//store/utility.js
//usage: return updateObject(state, {counter: state.counter = action.val});

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};
```

```js
//store/actions/actionsTypes.js
export const INCREMENT = 'INCREMENT';
```

```js
//store/reducers/result.js
const deleteResult = (state, action) => {
  const updatedArray = state.result.filter(
    (result) => result.id !== action.resultElId
  );
  return updatedObject(state, { results: updatedArray });
};

...
const reducer = (state=initialState, action)=>{
  switch(action.type){
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
  }
}
```

```js
//store/actions/counter.js
import \* as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
//sync action creator
export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
//async action creator
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
```

```js
//index.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//import actioncreator
// import { increment } from '../../store/actions/';
import * as actionCreators from '../../store/actions/';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      //do something here...
      return result;
    };
  };
};

// see documentation for redux-devtools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

mapDispatchToProps = (dispatch) => {
  return {
    // onIncrementCounter: () => dispatch(increment())
    onIncrementCounter: () => dispatch(actionCreators.increment())
  };
};
```

---
