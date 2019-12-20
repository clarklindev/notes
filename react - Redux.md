# Redux

## connecting react to redux

- reducer is initiated with a state
- import the reducer and pass to createStore
- pass reducer into createStore() and save to a variable

## connecting store to react

- import {Provider} from 'react-redux'
- Provider allows us to inject store into our components using prop store={store} on `<Provider>`

## getting data from store via connect

- import {connect} from react-redux
- provides 'connect' a function that returns a function which takes a component as input
- and wrap export with connect() which receives 2 params
  1. slice of state,
  2. actions we want to dispatch
- the mapStateToProps() function has props (eg. ctr) which get associated with the state
- we can now access via this.props.ctr
- allows us to access state via redux using 'mapStateToProps=(state)=>{}'

## dispatch actions from within the Component

- the connect() function receives second parameter, mapDispatchToProps
- the mapDispatchToProps() is a function which receives dispatch function as an argument
- the function has methods which are functions and allows us to dispatch actions,
- we access these functions via this.props.mapDispatchToProps
- then in the reducer, we listen for these actions by comparing action.type===''

## Passing and Retrieving Data with Action

- add a second property or object as the payload to the dispatch() function
- then in the reducer we access this property via the same property name via the reducer's action argument
- using a switch statement to filter out the action.type

## Updating State Immutably

- adding to array:
  - array push() - push mutates original array,
  - concat() - concat returns a new array

## Updating Arrays Immutably

- method1: removing items from array, can use array spread `[...old state]` and then .splice(id, 1) it
- method2: with filter(result=> result.id !== action.resultElId) by checking that the current item's id is not equal to the value passed through payload of action.

## Outsourcing Action Types

- create store/actions.js file,
- inside export the constants eg. export const INCREMENT = 'INCREMENT',
- import to where the actions are used, import \* as actionTypes from './actions';
- in the switch case use the constants, actionTypes.INCREMENT

## Combining Multiple Reducers

- you can combine multiple reducers, split up by feature
- import the separate reducers to the class,
- to combine reducers, import {combineReducers} from 'redux'
- then define by passing combineReducers({ctr:counterReducer, res:resultReducer})
- now in the code where u have to access the respective parts of the reducer, you need to access it via its prop name in combineReducers() ie. state.ctr.counter instead of state.counter

```js
//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import reducer from './store/reducer';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// const store = createStore(reducer);
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById
);
```

```js
//store/reducer.js
import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = { ...state, counter: state.counter + 1 };
      return newState;

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};
export default reducer;
```

```js
//Counter.js
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component{
  render(){
    return (

      <SomeComponent clicked={this.props.onIncrementCounter}/>

      <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store result</button>
      //...map results
      <ul>
        {this.props.storedResults.map(strResult=>(
          <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
        ))}
      </ul>
    );
  }
}

//state
const mapStateToProps = state=>{
  return {
    ctr: state.counter,
    storedResults: state.results
  }
}

//actions we want to dispatch
const mapDispatchToProps = dispatch=>{
  return {
    onIncrementCounter: ()=> dispatch({type:actionTypes.INCREMENT}),
    onStoreResult: (result)=> dispatch({type: actionTypes.STORE_RESULT, result:result}),
    onDeleteResult: (id)=> dispatch({type: actionTypes.DELETE_RESULT, resultElId:id})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
