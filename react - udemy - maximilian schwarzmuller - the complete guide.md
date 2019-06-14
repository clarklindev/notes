# Udemy - Maximilian Schwarzmüller - React 16 - The Complete Guide (incl. React Router 4 & Redux)

## 01 Getting Started

- using codepen.io as a playground for our tutorial exercises
- https://codepen.io/clarklindeveloper

### running basic html/css/react

#### https://codepen.io/clarklindeveloper/pen/QXLZNG

- in codepen pen-settings javascript

  - javascript preprocessor: babel (other options are Typescript)
    - this allows us to use JSX (html in javascript)
  - quick-add 'react' - responsible for correctly parsing jsx code
  - quick-add 'react-dom' - responsible for rendering js function as a component to the real DOM

  ### EXAMPLE:

  `https://codepen.io/clarklindeveloper/pen/QXLZNG`

  ### FIX OF ABOVE LINK: updated using SPA method to render out single element

  `https://codepen.io/clarklindeveloper/pen/zVOeVb`

  - in html section of codepen, create a placeholder `<div id="p1"></div>`
  - in js section of codepen, the basic react component is a function
  - create a function with class in Capital first letter eg.

  ```js
  Person(){
    return (jsx code here);
  }
  ```

  - using react-dom to render component,
  - `ReactDOM.render(what to render, where to render)`
  - what to render can be the function we called 'Person' as a self closing element (it needs to be a single element)
  - `ReactDOM.render(<Person/>, document.querySelector('#p1'))`
  - note in JSX we use 'className' instead of 'class'
  - to make html reusable, we use props added
  - `<Person name="Max" age="28">` and receive it in the constructor function Person(args)
  - props contains all the attributes
  - in the component we use single curly braces and accessed via {props.name}, {props.age}

  - refactor js code to now render only once using 'app' variable

  ```
  var app = (
    <div>
      <Person name="Rob" age="30"/>
      <Person name="Clark" age="20"/>
    </div>
  );

  ReactDOM.render(app, document.querySelector('#app'))
  ```

---

## 02 Refresher on basic javascript

### let vs const

- 'let' is the new 'var'
- 'const' is assigned once

```js
const myName = 'Max';
console.log(myName);

myName = 'Manu';
console.log(myName); //error as myName is a const
```

### arrow functions

- const myFunc = () => {}
- solves issues with 'this' keyword, 'this' keeps its context when used in a arrow function

```js
const printMyName = name => {
	console.log(name);
};

// or FOR ONLY ONE ARGUMENT or () => {}
const printMyName = name => {
	console.log(name);
};

//or IF ONLY RETURNING SOMETHING
const multiply = number => {
	return number * 2;
};

//CAN BE WRITTEN same as ABOVE
const multiply = number => number * 2;
```

### Exports and Imports

- writing modular code by spliting up js into multiple files
- using 'export default' keyword marks as default export of this file, when importing this, we can import as any name we want eg. import something from './person.js'
- note we have to include the extension .js when importing without Typescript
- possible to having multiple exports
- when we import, we import by name { baseData} from './utility.js'
- can import named exports using eg. {smth as Smith}
- can also `import * as bundled from './utility.js'`

```js
// person.js

const person = {
	name: 'Max'
};
export default person;
```

```js
// utility.js
export const clean = ()=>{ ...}
export const baseData = 10;
```

```js
// app.js
import person from './person.js'; //refers to default export
import { baseData, clean } from './utility.js';
```

### classes properties, and methods

https://codepen.io/anon/pen/OeJzvd

- 'properties' are variables attached to classes
- 'methods' are functions attached to classes
- class is instantiated with 'new' keyword
- classes support inheritance, note the child class needs to call super() to invoke the parent class.
- classes are comparable to constructor functions, inheritance is comparible to prototypes

### spread/rest operator

- ... used to split up array elements or object properties

```js
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 };
```

- ... is also the rest operator, used to merge a list of function arguments into an array

```js
function sortArgs(....args){
  return args.sort();
}

sortArgs(3,2,1,4);
```

### destructuring

- easily extract array elements or object properties and store time in variables
- array desctructuring, if you want to skip and element, just use empty space
  `const numbers = [1,2,3]; [num1, ,num3] = numbers;`

```js
// Array Destructuring
[a, b] = ['Hello', 'Max']; //creates variables 'a' and 'b'
console.log(a); //Hello
console.log(b); //Max

const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);

//Object desctructuring
{name} = {name:'Max', age:28}
console.log(name);  //Max
console.log(age); //undefined
```

### reference and primitive types

- primitive types are string, boolean and numbers, assigning variables to these create a copy
- reference types are array and object, assigning variables to these create a reference to the original

### reference array functions

filter, map, sort, reduce returns new array

---

# 03 Understanding the Base Features Syntax

### build workflow

- Dependency management: NPM or Yarn
- Bundler: Webpack
- Compiler: Babel
- Development server

### using Create react app

- https://facebook.github.io/create-react-app/docs/getting-started
- https://github.com/facebook/create-react-app
- maintained by facebook community
- official tool for creating react projects 'create react app'
- requires npm 5.2+
- requires node >= 8.10 (development)

#### OPTIONAL: adding typescript

- to add typescript to the app https://facebook.github.io/create-react-app/docs/adding-typescript
  - note: requires >= react-scripts@2.1.0
- to add typescript to an existing Create React App project, install
- after the install, rename file to be a typescript file (.tsx) and restart dev server

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
or
yarn add typescript @types/node @types/react @types/react-dom @types/jest

```

#### Quick start NEW APP

```
<!-- using npx -->
npx create-react-app my-app

<!-- using npm 6+ -->
npm init react-app my-app

<!-- yarn 0.25+ -->
yarn create react-app my-app

<!-- or with typescript -->
npx create-react-app my-app --typescript
yarn create react-app my-app --typescript

```

#### Running the app

cd my-app
npm start

cd my-app
yarn start

then open in browser `http:/localhost:3000`

### production build

- build folder
- optimizes for best performance
- minifies files, filesnames include hashes

```
npm run build
```

### Folder structure

<!-- public/index.html -->

```html
<div id="root"></div>
```

<!-- src/index.js -->

```js
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```

<!-- App.js -->

```js
import React, { Component} from 'react';
import './App.css';

class App extends Component{
  render() {
    return (
      //jsx here...
    );
  }
}
export default App;
```

<!-- App.css -->

- global styling

<!-- index.css -->

- global styling

---

### React Components

- render single root component
- inside the root component, nest all other components
- the App.js imports React and Component
- the class extends Component
- it needs to have the render() method

#### How to define a component (Class based Component)

- class based components are also referred to as "containers", "smart" or "stateful" components
- can have state

```js
// App.js
import React, { Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return(

    );
  }
}
export default App;
```

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

### JSX

- wrap in () to write in multiple lines
- react functions written with capital letter can be rendered as an element
- eg. `function Person() can be reference in JSX via <Person/>`
- we use 'className' instead of 'class'
- sometimes replaces .js with .jsx (jsx convention is to use .js)
- props received from function(props) arguments
- single curly brackets {} to access props eg. `{props.name}`
- ReactDOM.render() should render a single element ONLY

#### jsx example

```js
//jsx
render(){
  return(
    <div className="App">
      <h1>Hi, Im react app</h1>
    </div>
  );
}
```

#### under the hood, jsx gets compiled to JS

- syntax:

```
React.createElement(element, object of props, value)
```

```js
//example
React.createElement(
	'div', //element or component
	{ className: 'App' }, //props
	React.createElement('h1', null, 'Does this work now?')
);
```

### JSX restrictions

- reserved words: class, must use className
- react returns single root element from render()
- in react 16, return() can be multiple elements via JSON

### React functional component as opposed to Class based Component

- convention is to use Capital letter for folder, eg. Person but export as a lowercase for function component and import with Capital
- creating components with bare function that returns jsx (recommended)
- `import React from 'react';`
- in the App.js, import Person from './Person/Person'; (note Capital letter 'Person' so React knows it is a custom Component)
- functional components are 'presentational' or 'dumb', 'stateless'
- there is no state property in functional component

<!-- boilerplate jsx function -->

```js
// Person/Person.js
import React from 'react';
const person = () => {
	return <p>hello</p>;
};
export default person;
```

```js
//App.js
import Person from './Person/Person'; //note no .js needed
class App extends Component {
	render() {
		return (
			<div className="app">
				<Person />
			</div>
		);
	}
}
export default App;
```

### Dynamic content in JSX

- wrap in single curly braces
- eg. `{Math.floor(Math.random() * 30 )}`

### Props (dynamic content from html to class)

```js
//App.js
<Person name="Max" age="30"/>
<Person name="Clark" age="25"/>
```

```js
//Person.js
import React from 'react';

const person = props => {
	return (
		<p>
			I'm {props.name} and i'm {props.age}
		</p>
	);
};
export default person;
```

### Children Property - Passing data between opening tag and closing tag and receiving in JSX with props.children

- in JSX, return() using {props.children} will receive what is passed between opening and closing tag `<Person>hello</Person>`

### props State

- 'state' special property that extends Component (class based Component)
- state is managed from inside
- state is a js object
- if state changes, react updates the DOM

```js
//App.js
class App extends Component {
	state = {
		persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }]
	};
	render() {
		return (
			<div>
				<Person
					name={this.state.person[0].name}
					age={this.state.person[0].age}
				/>
				<Person
					name={this.state.person[1].name}
					age={this.state.person[1].age}
				/>
			</div>
		);
	}
}
```

### Handling Events with Methods

- supported events https://reactjs.org/docs/events.html#supported-events
- click handler with onClick={this.methodName}

```js
switchNameHandler = () => {
	console.log('was clicked!');
};

render(){
  return (<button onClick={this.switchNameHandler} />);
}
```

### Manipulating the State in functional components with Hooks (UPDATE with react 16.8+)

- basically a collection of functions exposed to you by React which you can use in functional components
- remove import {Component }
- remove the render() method, just return (jsx)
- state moves out the class,
- handler functions (switchNameHandler) removed from the class
- import React, {useState} from 'react';
- react hook functions start with 'use'
- you can use as many `useState()` calls as you want
- to use useState, we pass it the initial state,
- useState ALWAYS returns an array with 2 elements
- the first element will always be the current state,
- the second element will always be a function which allows us to update the state (which react is aware of and rerender component)
- we use array destructuring to pull out what we want `[currentState, updateFunctionToSetState]` eg: [personState, setPersonState]
- then in the code, instead of this.state property reference, we have a reference to this.personState to access the state,
- when we want to update the state, we have access to setPersonState()
- we use the setPersonState() function declared in the array destructuring from useState() call to update the state
- NB!! when using react hooks, the function that upstates the state in useState() does NOT merge whatever you pass to the update with old state, it replaces.
- NB!! class based components, only have one state property -> and it automatically handles merges of state with old state
- Best practice is to have useState() manage a single concept and call it multiple times for each state you want to manage

```js
// react 16.8+ using hooks... becomes

// import {Component} from 'react'; //removed
import './App.css';
import React, { useState } from 'react';

// class App extends Component{ //removed
const app = props => {
	const [personState, setPersonState] = useState({
		persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }],
		// otherState: 'some other value' //removed to its own useState() call below
	});
  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    //class based method
    // this.setState({
    //   persons: [{ name: 'Maximilian', age: 28 }, { name: 'Manu', age: 25 }],
    // });

    //we use the setPersonState() function declared above in array destructuring from useState() call to update
    setPersonState({
      persons: [{ name: 'Maximilian', age: 28 }, { name: 'Manu', age: 25 }],
      // otherState: personsState.otherState; //otherState managed by its own useState()
    });
  }

	return (
    // <button onClick={this.switchNameHandler}></button> //this keyword removed as it is not a class anymore
    <button onClick={switchNameHandler}></button>
		<Person
			name={personsState.persons[0].name}
			age={personsState.person[0].age}
		/>
	);
};
// export default App; //removed
export default app;
```

### manipulating state on click

- we dont update state by direct assignment
- by extending Component we have access to this.setState() made available by React
- setState({}) merges whatever we define inside with the existing state, leaves everything else untouched

#### react updates the DOM when

- when state changes
- when props changes

```js
state = {
  persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }],
  otherState: 'some other state'
};

switchNameHandler = () => {
	console.log('was clicked!');
  //DONT DO THIS: this.state.persons[0].name = "Maximilian";
  this.setState({
    persons: [
      { name: 'Maximilian', age:28},
      { name: 'Manu', age:29},
    ]
  });
};

render(){
  return (<button onClick={this.switchNameHandler} />);
}
```

### Passing Method References Between Components

- passing reference of a function into a component as a prop
- from the component, we use props and access the property via props.click

```js
// App.js
// passing switchNameHandler into the Person component
<Person click={this.switchNameHandler} />
```

```js
//Person.js
<p onClick={props.click}>
```

#### passing in props into a method

- using bind syntax we can pass in props
  OR
- using arrow function to pass in props (NOTE: more INEFFICIENT rather use bind method)

```js
//App.js

switchNameHandler = newName => {
	console.log('was clicked!');
	this.setState({
		persons: [{ name: newName, age: 28 }, { name: 'Manu', age: 29 }]
	});
};
```

```js
// App.js
//using bind/ prop syntax
<Person
  name={}
  age={}
  click={this.switchNameHandler.bind(this, 'Max!')}
/>
```

```js
// App.js
//using arrow syntax
<button onClick={() => this.switchNameHandler('Maximilian!!')}>
	Switch name
</button>
```

### Two-way data binding / 2-way data binding

- to make it 2-way data bind, we listen to input changes and we read the initial value
- pass into the `<Person/>` component the onChangeHandler, here nameChangedHandler() as `changed={this.nameChangedHandler}`
- in Person component, create an `<input>`
- listen to `onChange=""` which fires when value changes

- the other part is setting it to initial value `value={props.name}`

```js
//App.js
state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
  ],
  otherState: 'some other value'
}

switchNameHandler = newName => {
	console.log('was clicked!');
	this.setState({
		persons: [{ name: newName, age: 28 }, { name: 'Manu', age: 29 }]
	});
};

nameChangedHandler = event => {
	this.setState({
		persons: [{ name: 'Max', age: 28 }, { name: event.target.value, age: 25 }]
	});
};

render(){
  return (
    <Person name={this.state.persons[0].name} changed={this.nameChangedHandler}/>
  );
}
```

```js
//Person.js
import React from 'react';

const person = props => {
	return (
		<div>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};
```

### adding styling with stylesheets (METHOD 1 of 2)

- css style files are global, we limit the scope by creating classes that associate with the element
- the css is not linked into the project by default
- thanks to Webpack we can import css into the js (need to include the .css extension)
- these style tags are injected by webpack, it has automatic pre-fixing

```js
// Person.js
import './Person.css';

return <div className="Person" />;
```

```css
/* Person.css */
.Person {
	width: 60%;
	margin: 16px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;
}
```

### inline styling (METHOD 2 of 2)

- using inline styling, the css is scoped to a specific component that it is added to
- limitation is it is difficult to add hover state, so best use METHOD 1 if want to do that
- add style object in render() {} method,
- style gets property value pairs (values are strings)
- bind with style property (normal inline css property) the style object with `style={style}`

```js
//App.js

render() {
  const style={
    backgroundColor: 'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }


  return (
    <button style={style}></button>
  );
}
```

---

### base syntax

git repo: git@github.com:clarklindeveloper/react-udemy-maximilian.git

assignment solution: https://github.com/clarklindeveloper/react-udemy-maximilian/tree/master/base-syntax--assignment-problem

---

## Working with Lists and Conditionals

### Rendering Content Conditionally

- showing content coditionally (if condition true, show) we use itinery operator {(test state) ? jsx block : null }
- return ({ test === true ? jsx : null})
- alternative way is to define a variable and assign to null (inside the return(){})
- then an if condition, test if it is true, assign variable some jsx value, and in the return

```js
return (
  { test === true ? jsx : null}
)
```

### Handling Dynamic Content The JavaScript Way

- Better way to write conditional content (above) instead of ternarary operator

```js
render(){
  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }

  return <div className="App">{persons}</div>;
}
```
