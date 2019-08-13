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
  - in the component we use single curly braces and accessed via `{props.name}`, `{props.age}`

  - refactor js code to now render only once using 'app' variable
  - comment/comments : to make a block comment in JSX the correct syntax is wrap with {/\* \*/}

  ```js
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

### Outputting Lists

- using map executes function on every element in array of map
- return something..

```js
if (this.state.showPersons) {
	persons = (
		<div>
			{this.state.persons.map(person => {
				return <Person name={person.name} age={person.age} />;
			})}
		</div>
	);
}
```

### list state, updating with IMMUTABILITY, key property, updating on input change

- with lists, and the .map() call, we have access to an index
- index helps React know which item in the list is being updated/deleted
- TEMPORARY SOLUTION:

  - map() through array
  - pass in index into handler function
  - take array and splice
  - handler .splices(index, 1) to removes from index position 1 element

- IMMUTABILE SOLUTION (CORRECT METHOD):

  - use spread operator and create a copy of array [...this.state.persons]
  - or array.slice()

- 'key' property helps react update list efficiently by keeping track of elements that updated for rerendering

  - make use of unique id (usually not index, but 'unique' property from state here.. eg id)

- Updating on input change
  - (App.js) changed={event => this.nameChangedHandler(event, person.id)}, this syntax uses arrow function to retain 'this' scope of class
  - we pass into a handler the 'event' to get what the user entered in the input,
  - we also pass the id of item to update
  - add to <Person changed={(event) => this.nameChangeHandler(event, person.id)}> to handle changing name
  - we need to find the index or item (person) to update use .findIndex() or .find(), returns true/false
  - personIndex = state.persons.findIndex(p=> {return p.id === id}); //p represents each item in persons, check if same as item clicked
  - const person = { ...this.state.persons[personIndex]}
  - OR const person = Object.assign({}, this.state.persons[personIndex])
  - so we say person.name = event.target.value; //update name with the input value from event
  - const persons = [...this.state.persons];
  - make the update: persons[personIndex] = person;
  - update state this.setState({persons:persons})

```js
// App.js
state = {
	persons: [
		{ id: 'asdas', name: 'Max', age: 24 },
		{ id: 'werff', name: 'Manu', age: 23 },
		{ id: 'dfsdf', name: 'Stephanie', age: 22 }
	]
};

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {...this.state.persons[personIndex]}

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});

};

deletePersonHandler = personIndex => {
	//const persons = this.state.persons; //note this is by reference and we need to actually do my copy (see below)

	//IMMUTABLE
	const persons = [...this.state.persons] // OR persons = this.state.persons.slice();
	persons.splice(personIndex, 1);
	this.setState({ persons: persons });
};

render (){
  if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}
```

---

## Styling React Components - Elements

- disadvantage of inline styling - cant use pseudo selectors
  advantage of inline styling is scoping limited to component

- external css styling makes styling global

### Setting Styles Dynamically

- because everything is javascript,
  we can overwrite styling dynamically by updating the style object

```js
if (this.state.showPersons) {
	style.backgroundColor = 'red';
}
```

### Setting Class dynamically

- OPTION:
- can define a variable = [];
- assign classes in an array, then join the array elements with .join(' ')
- use if statement to test and push elements into the array

```css
/* App.css */
.App {
	text-align: center;
}
.red {
	color: red;
}
.bold {
	font-weight: bold;
}
```

```js
// App.js
//let classes = ['red', 'bold'].join(' '); //"red bold"

let classes = [];
if (this.state.persons <= 2) {
	classes.push('red'); //classes = ['red']
}
if (this.state.persons <= 1) {
	classes.push('bold'); //classes = ['red', 'bold']
}
return <p className={classes.join(' ')} />;
```

### Adding and using Radium / NOTE: ALTERNATIVE TO RADIUM IS SCOPED CSS MODULES

- Radium is a third party package to add functionality of media-queries and pseudo classes into inline styling

`npm install --save radium`

- import into any .js `import Radium from 'radium';`

- wrap the export default class or function with Radium

```js
export default Radium(app);
```

- after Radium added,

INLINE

- you can use pseudo selectors wrapped by quotations

#### In object definition

```js
import Radium from 'radium';

const style = {
	':hover': {
		backgroundColor: 'lightgreen',
		color: 'black'
	}
};
```

#### reasign wrap in square brackets

```js
style.backgroundColor = 'red';
style[':hover'] = {
	backgroundColor: 'lightred',
	color: 'black'
};
```

#### Radium for media-queries

- import Radium from 'radium';
- export default Radium(person);
- adding media queries via Radium, we need to wrap @media selector in string quotes: '@media (min-width: 600px)':{}
- for transforming selectors (@media etc) we need to wrap the return() root element with `<StyleRoot></StyleRoot>`

```js
import Radium from 'radium';

const style = {
  '@media (min-width: 500px)':{
    width:'450px'
  }
}
return (
  <StyleRoot>
    <div className="app">
      <div style={style}>
    </div>
  </StyleRoot>
)

export default Radium(person);

```

### CSS MODULES

- CSS Modules uses external css scoped to the js file (without Radium)
- https://github.com/css-modules/css-modules
- all class names and animation names are scoped locally by default
- run 'npm run eject' converts to react managed configurable project
- we need to edit configuration for BOTH files below:

  - config/webpack.config.dev.js
  - config/webpack.config.prod.js

- under test: `/\.css\$/`
- add to `options:{modules:true , localIdentName: '[name]__[local]__[hash:base64:5]'}`
- CSS module configuration will break all previous imports with this syntax `import './Person.css'`
- change to allow access to the Module via js object `import classes from './Person.css'`
- this automatically generated unique name,
- class is now scoped to the component where it is imported
- NB need to restart local server!!!

```js
//config/webpack.config.dev.js
//config/webpack.config.prod.js
options: {
	//add below
	modules: true,
	localIdentName: '[name]__[local]__[hash:base64:5]'
}
```

- now when importing CSS Module, from App.css, we get access to a js Object with the css classes as properties: `import classes from './App.css';`
  'classes' can be whatever you want to represent the css Object
- now we can acess the css class via the property of the import className={classes.App} instead of className="App"

```js
//App.js
import classes from './App.css'; //'classes' can be whatever you want to represent css Object

const assignedClasses = [];

if(){
  assignedClasses.push(classes.red);
}
if(){
  assignedClasses.push(classes.bold);
}
return (
  <div className={classes.App}>
    <p className={assignedClasses.join(' ')}>some text</p>
  </div>
```

```js
//Person.js
return <div className={classes.Person} />;
```

### CSS PSEUDO SELECTORS

- think about it as, CSS modules give you access to an js oject eg 'classes' which gives you access to a string version of your css styles of css class, but adjusted to be unique

- remove inline styling and js styling from code
- doing it CSS module style, add styling into .css file
- see below, react returns classes defined in css file, classes.Red, as a string
  and any class applied, also works for nested classes, even if its to just a sub selector
  eg. in css, .App button.Red{} applies only to buttons but we access via classes.Red

```js
//App.js

// remove const style = {} from render(){}
// const style = {
//   backgroundColor: 'green',
//   color: 'white',
//   font: 'inherit',
//   border: '1px solid blue',
//   padding: '8px',
//   cursor: 'pointer'
// }
let btnClass = '';

if (this.state.showPersons) {
	btnClass = classes.Red;
}

// remove
// style.backgroundColor='red';

//remove setting style with style={style}
<button
	className={btnClass}
	//style={style}
/>;
```

```css
/* App.css */
.App button {
	border: 1px solid blue;
	padding: 8px;
	backgroundcolor: green;
	font: inherit;
	color: white;
}

.App button:hover {
	background-color: lightgreen;
	color: black;
}

.App button.Red {
	background-color: red;
}

.App button.Red:hover {
	background-color: salmon;
	color: black;
}
```

### CSS MEDIA QUERIES

- media queries just work as normal in the external css file, and you apply the chclass and react will automatically pick up the media query

## Debugging

- Chrome browser tools to check for errors
- finding logical errors via source maps and debug breakpoint (forward/back)
- React developer tools https://github.com/facebook/react-devtools to inspect/toggle state of app/components

#### ErrorBoundaries

- Error boundaries is new with React 16
  - used for when you know an error will be thrown but are not sure when it will happen
  - eg. Person is a component that 'might' throw new Error('something went wrong');
  - allows you to create a wrapper component around the component that might throw error,
  - the wrapper component is called an ErrorBoundary but you can call the component anything you like (extends Component)
  - give the ErrorBoundary class state default hasError:false
  - componentDidCatch(error, info) => {} is a method passed in by React and it is called when the ErrorBoundary throws an error
  - inside componentDidCatch(), set state hasError: true,
  - in production you see what you render in ErrorBoundary
  - then render(){} does an if/else to render error or this.props.children
  - in App.js the key moves from the Person component of the map() to the wrapping ErrorBoundary component

```js
// ErrorBoundary/ErrorBoundary.js
class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	};

	componentDidCatch = (error, info) => {
		this.setState({ hasError: true, errorMessage: error });
	};

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>;
		} else {
			return this.props.children;
		}
	}
}
export default ErrorBoundary;
```

```js
// App.js

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
    persons:[{id, name, age}]
		showPersons: false
	};

	render() {
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<ErrorBoundary key={person.id}>
								<Person />
							</ErrorBoundary>
						);
					})}
				</div>
			);
		}
	}
}
```

---

## 07. Diving Deeper into Components & React Internals

- container components (state managing components) shouldnt be involved with UI rendering too much. ie. render() method should be rather lean an not container too much JSX
- eg moving mapping and rendering of a list out into its own Component and passing the list data in as a prop

### folder structure

- index.js
- assets/
- containers/
  -App.css
  -App.js
  -App.test.js
- components/
  -persons/
  -persons/person/

### splitting an app into components

- Class based components for state management
- function based component that receives props

#### Class-based

- extends Component
- has access to state
- lifecycle hooks
- access to props via this.props (class property)
- when to use:

  - if you need to manage state,
  - or access to lifecycle hooks and you dont want to use react hooks

#### Functional Component

- const XY = props => {}
- access to State(useState())
- no access to Lifecycle hooks
- access to state via props.state (argument)
- when to use:
  - statemanagement via react hooks,
  - if using older version of react, use functional component for presentation components

### Class Component Lifecycle Overview

- Component Lifecycle
  - constructor()
  - getDerivedStateFromProps()
  - NB!! ShouldComponentUpdate()
  - getSnapshotBeforeUpdate()
  - NB!! componentDidUpdate()
  - componentDidCatch()
  - NB!! componentDidMount()
  - componentWillUnmount()
  - render()

#### Component Lifecycle - Creation

SEQUENCE

1. constructor(props)

- default ES6 class feature
- if you add your own constructor and you pass in props, you have to call super(props)
- DONT CAUSE SIDE EEFFECTS (eg. sending http request, storing to local storage, sending analytics to google)
- USED FOR: basic initialization (eg setting initial state)
  - inside constructor this.state = {} , NOTE: not this.setState() as there is no initial state to merge with
  - set state outside constructor state = {}

2. getDerivedStateFromProps(props, state) (REACT 16.3)

- USED FOR: when props change, you can sync state to them (RARE cases)
- DONT CAUSE SIDE EEFFECTS (eg. sending http request, storing to local storage, sending analytics to google)
- static getDerivedStateFromProps(props, state) NOTE: it is a static method (from react)
- here you should return updated state,

```js
static getDerivedStateFromProps(props, state){
  return state; //return the updated state
}
```

3. render()

USED FOR: prepare and structure JSX code

4. render child components

5. componentDidMount()

- DO: CAUSE SIDE-EFFECTS (make http requests)
- Dont call update state synchronously, but rather Async or in then() block

```js
componentDidMount(){
  //make http request
}
```

#### Component Lifecycle - Updating (props)

1. getDerivedStateFromProps(props, state)

- USED FOR: when props change, you can sync state to them (RARE cases)
- DONT CAUSE SIDE EFFECTS (eg. sending http request, storing to local storage, sending analytics to google)

2. shouldComponentUpdate(nextProps, nextState)

- allows you to cancel the update process!
- DONT CAUSE SIDE-EFFECTS
- needs to return true/false

3. getSnapshotBeforeUpdate(prevProps, prevState)

- last minute DOM operations
- DONT CAUSE SIDE-EFFECTS

4. render()

- Prepare & Structure your JSX Code

5. Update child Component Props

6. componentDidUpdate()

- DO: CAUSE SIDE-EFFECTS (make http requests)
- Dont call update state synchronously, but rather Async or in then() block
- Most used hook...

#### Component Lifecycle - Updating (state)

shouldComponentUpdate(nextProps, nextState){
return false; //prevents component from updating
}

componentDidUpdate(){

}

---

### Using useEffect() in Functional Components (Managing state in functional components)

- using right version of react, we can use react hooks
- no access to component lifecycle methods
- useEffect() function is the react hook solution
- it covers functionality of all class-based lifecycle hooks combined into a single react hook
- import React, {useEffect} from 'react';
- useEffect() is a function that takes in a 'function that will run for every render cycle' of the component
- runs for compnentDidMount, componentDidUpdate in one effect
- create multiple useEffects()

```js
useEffect(() => {
	console.log('useEffect');
});
```

### controlling when useEffect() executes

- to control when useEffect() executes, - we list all the variables/data used in effect in an array as an additional argument
- solution is to add second argument (array of all dependency fields) `useEffect(()=>{}, [props.persons]);`
- ONLY RUN ONCE - to call effect only when component runs for first time, the second argument should be empty array. - same effect as componentDidMount()
- if you have different effects that depend on different data, create more useEffect() calls

### cleaning up with lifecycle hooks and useEffects()

- eg removing listeners or something like htat

#### cleanup with lifecycle hook - componentWillUnmount(){}

- here can include any code to include before removing component

#### cleaning up with hooks - useEffects()

- can also be used to do cleanup work, by adding a anonymous return () function before the end of the function passed to UseEffect()
- only called when component is removed (cleaned up)
- clean up is called depending on the argument passed to useEffect(),

case 1 - passin empty array as 2nd argument: useEffect() CALLED only when component rendered AND unmounted

```js
useEffect(() => {
	// add return function
	const timer = setTimeout(() => {
		alert('saved data to cloud!');
	}, 1000);

	return () => {
		clearTimeout(timer); //cleanning up before time finshed removes alert
		console.log('cleanup work in useEffect');
	};
}, []);
```

case 2 - no 2nd argument - CALLED for every update cycle

```js
useEffect(() => {
	// add return function
	return () => {
		console.log('cleanup work in useEffect');
	};
});
```

case 3 - 2nd argument an array with all data that component should watch, function runs when that data changes and cleanup too..

```js
useEffect(() => {
	// add return function
	return () => {
		console.log('cleanup work in useEffect');
	};
}, [props.persons]);
```

### Using shouldComponentUpdate for Optimization

```js
//Persons.js
shouldComponentUpdate(nextProps, nextState){
return true; //update
}
```

- scenario a component `<Persons>` has shouldComponentUpdate() set to return true; whenever something changes on component, we update
- App contains the `<Persons>` component, so everytime a change happens in App.js happens, Persons still gets rerendered too
- we can fix and prevent this by checking inside Persons component if a change should occur by comparing if props have updated
- NOTE: persons here is an array (reference type) and we are comparing their pointers (if content of pointer changed but pointer is still the same, then the update wouldnt run, but we have been working arrays by creating a copy with spread operator [...array] which updates the pointer of array in memory)

```js
//Persons.js
shouldComponentUpdate(nextProps, nextState){
  if(nextProps.persons !== this.props.persons){
    return true; //update
  }else{
    return false;
  }
}
```

### Optimizing Functional Components with React.memo()

- react optimization for functional components
- wrap functional component that might not need to update with every change in the parent component with export default React.memo()
- react stores a snapshot of the component and only if its input changes, then rerender it. otherwise if inputs do not change, react will give back the stored snapshot
- by externalizing the check from inside the component (props.persons.length) to outside personsLength = {this.state.persons.length} the component will only change if the passed input changes

```js
export default React.memo(cockpit);
```

### When should you optimize?

- definitely DONT add wrap every function component with React.memo()
- definitely DONT add shouldComponentUpdate to every class Component
- components that update always need to update everytime parent updates - you will have to update - then the check is unecessary
- is this component part of a parent component that could change related to something that does not affect me at all, then you should implement the check...(ie. current component not interested in changes related to parent)
- if all cases where parent updates, then you need to update too, then you should not implement shouldComponentUpdate() or React.memo()

### PureComponents instead of shouldComponentUpdate

- if you have a scenario where you check all the props instead of one or two, then you can not use shouldComponentUpdate,
- rather extend PureComponent
- shouldComponentUpdate() and componentWillUpdate() becomes unecessary as Purecomponent
  already implements shouldComponentUpdate with a COMPLETE PROPS COMPARISON check

### How React Updates the DOM

- (class/functional components) render() method does not automatically render to DOM
- first does old virtual dom vs re-rendered virtual dom comparison (virtual dom is DOM in javascript)
- comparison notes difference, reaches out to real DOM and updates only the differences
- updating real DOM is slow and hence first done in virtual DOM

### Rendering Adjacent JSX Elements

- this lesson refers to RULE when we return () only a single root JSX element in a Component
- ie. not allow to return adjacent elements as part of root

METHOD 1 - Array

- with lists .map() returns multiple elements, and React allows us to return this, as long as every element has a key
- ALTERNATIVE is to wrap return in [] which is an array and we separate our elements with ,
- we add our own UNIQUE key="" identifier to each element
- removes the need to wrapping element for styling or structuring by using an array and giving keys

METHOD 2 - HOC

- create a wrapping component without rendering actual html code but is simply there to fulfil REACT requirement of having a wrapping component
- create hoc/ folder are basically 'higher order components'
- components that wrap other components
- create a file (WINDOWS hoc/Auxiliary.js or on MAC hoc/Aux.js) - in .Zip files on windows Aux.js is not allowed
- empty wrapper that returns the .children
- now it fulfils the single expression return..

```js
// Auxiliary.js
const aux = props => props.children;
export default aux;
```

- import the Aux
- now we can use the <Aux> tag to import all the other jsx

```js
// Persons.js
import Aux from '../../../hoc/Aux';

render(){
  return (
    <Aux>
      ...child content
    </Aux>
  );
}

```

### Using React.Fragment (react 16.2)

- React.fragment is reacts own way of wrapping element shipped with react (SAME AS AUX)
- `<React.Fragment></React.Fragment>`
- or if you import Fragment, import React, { Component, Fragment } from 'react'; then use with just `<Fragment></Fragment>`
- same effect as `<Aux></Aux>` wrapper

### Higher Order Components (HOC) - Introduction

- Higher order components wrap another component and then maybe some extra logic
- useful for wrapping (eg. error handling) additional something useful
- higher order component file names are in CapitalCamel case
- hoc/ folder

```js
// example hoc component WithClass that wraps content and allows passing in of classes via a prop
//hoc/WithClass.js example

import React from 'react';
const withClass = props => (
	<div className={props.classes}>{props.children}</div>
);
export default withClass;
```

```js
//app.js
import WithClass from '../hoc/WithClass';

// <div className={classes.App}>
// </div>

//replaced with
<WithClass classes={classes.App} />;
```

### Another Form of HOC creation

#### METHOD 1 - syntax for normal functional component

- wrapping element method used for more decoration and styling and DOM changing (JSX)

```js
const withClass = props => (
	<div className={props.classes}>{props.children}</div>
);
```

#### METHOD 2 - regular js function

- used for more logic related type HOC where focus is more behind the scenes, not so much the JSX
- this is the export method which calls the regular js function.
- regular js function that returns a component function . import with lowercase 'withClass'
- and change filename to lowercase withClass.js
- 1st argument is a wrapped component (name it anything you want), MUST Start with capital character (as is reference to a component)
- 2nd argument is something that you need in your HOC (as many arguments as required)
- body returns a functional component
- USAGE: we dont wrap the component with this HOC, instead where we export the component, call the HOC
  `export default withClass(App, classes.App);`

```js
import React from 'react';

const withClass = (WrappedComponent, className) => {
	return props => (
		<div className={className}>
			<WrappedComponent />
		</div>
	);
};
export default withClass;
```

```js
// App.js
import classes from './App.css';
import withClass from '../hoc/withClass';
...
export default withClass(App, classes.App);
```

### Passing Unknown Props

- Person uses withClass hoc so its export default is `export default withClass(Person, classes.Person)`

* what this means is whatever withClass exports, is Person, the functional component syntax returned from withClass returns props related to whatever is wrapped...
* so we have access to props of the WrappedComponent `return props=>()` which is Person
* cant set props via <WrappedComponent props={props}/> because JSX takes all attributes you add and compbines them in a `props` object
* need to just pass it into WrappedComponent by spreading the props object

PROBLEM: using the withClass hoc like export default withClass(Person, classes.Person), looses the properties associated with Person (as we dont pass in props), here WrappedComponent refers to the element that was wrapped passed in with withClass()

```js
const withClass = (WrappedComponent, className) => {
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};
```

### Setting State Correctly

- angular holds state updates until convenient time to udpate, although this could be instant, there is a possibility it is lagged.
- When setState() depends on previous value, there is another method of calling setState() for accurate updating of state with the most up to date values of previous state,
- optional syntax - receive 2 arguments (oldstate, current props)=>{ return the new state object}

```js
// less accurate method
// this.setState({
// persons:persons,
// changeCounter: this.state.changeCounter + 1
// })

// accurate method (recommended method for updating state depending on old state)
this.setState((prevState, props) => {
	return {
		persons: persons,
		changeCounter: prevState.changeCounter + 1
	};
});
```

### Using PropTypes

- tries to cater for incorrect usage of Component and the props it accepts and the allows declaring of prop type
- npm install --save prop-types
- react team adds optional prop-types
- helps with throwing errors for incorrect passing in of prop type (prevents incorrect usage of component)
- USAGE: import PropTypes from 'prop-types';
- work on both class based component and functional components
- for class and functional Component: after class definition, add an object to the Class called propTypes = {}
- set up key - value pairs where keys are prop names, and value should be type based on the import 'Proptypes' properties
- now if you pass-in the wrong type for the argument, then error will be flagged

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

### Using Ref (in Class Based COMPONENTS)

```js
// normal javascript method of selecting specific item then giving focus
componentDidMount(){
  document.querySelector('input').focus();
}
```

METHOD 1 - ONLY WORKS IN CLASS BASED COMPONENTS (SUPPORT FOR OLDER VERSIONS OF REACT)

- jsx giving reference to a specific element with the use of ref=
- on any jsx element, add property ref=
- which is associated with an anonymous function and the argument the function receives is a reference to the element 'ref' is put on.. eg (inpulEl) is a reference to <input>
- we are saving this inputEl in a global property inputElement.
- because componentDidMount() is called after render(), we have access to this.inputElement and it can receive .focus

```js
componentDidMount(){
  this.inputElement.focus();
}

<input ref={(inputEl)=>{this.inputElement = inputEl}}>
```

METHOD 2 (REACT 16.3) - USING CONSTRUCTOR METHOD

- in constructor(), create a property this.inputElementRef = and assign to React.createRef();
- this says inputElementRef is a reference, and we can now ref={this.inputElementRef}
- now in componentDidMount() we have access to the class property this.inputElementRef.focus();

```js
  constructor(){
    this.inputElementRef = React.creatRef();
  }

  componentDidMount(){
    this.inputElementRef.focus();
  }

  <input ref={this.inputElementRef}

```

### refs in React Hooks (FUNCTIONAL Components)

- start off by setting up reference
- import React, {useRef} from 'react';
- declare property const toggleBtnRef = useRef(null), and pass in default value null
- in the return(), set ref attribute `<button ref={toggleBtnRef}></button>`
- immitate a btn click `toggleBtnRef.current.click();` higher up in the function but it throws an error because react didnt have a chance to initialize the code with the code that actually does the initilization in the ref={}, so at the time of calling click() the button is undefined,
- we fix this with useEffect(), useEffect() with [] as second prop, runs only once after return() has rendered for first time and then cleans up when unmounted

```js
import {useRef} from 'react';
const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(()=>{
    toggleBtnRef.current.click();
  }

  return (
    <div>
      <button ref={toggleBtnRef}></button>
    </div>
  );
}
```

### Understanding Prop Chain Problems

- when you have components that pass down props just so child components can use it even though, all the components inbetween dont need it.
- eg. in App.js state, we manage authentication state, then we update this state in Cockpit on button click, but we are interested in this state in Person and need to forward it thorugh the prop via Persons component.
- this leads to redundancy and less reusable
- SOLUTION: CONTEXT API - react feature that tries to solve the problem of needing certain data (state) in multiple components and you dont want to pass that state across multiple layers
  of components just to get it from Component A (at the top) to Component D (at the bottom) when components B, C dont care about it.

### Context API

- context solves the need for passing down props via components layer by layer to reach a target component
- create folder context/
- eg. context/auth-context.js
- React.createContext({}), can initialize with default values, default values help with auto completion
- it is a globally available js object.. that can be passed between components without using props.
- the context jsx wraps other DOM elements
- import AuthContext from '../context/auth-context';
- AuthContext can now be used as a component and it should wrap all parts of application that require access to the context
- add .Provider to AuthContext.Provider, Provider JSX component on AuthContext Object,
- Provider takes a value= prop, dafault values only apply when you dont set any value={{}} and we set the value to the same as our default values set in authContext { authenticated: false, login: () => {} }
- react will re-render only when state or props change, so only changing something in Context Object will not cause a re-render.
- so state is still managed at the <AuthContext.Provider value={{ authenticated: this.state.authenticated,login:this.loginHandler }}> level
- authenticated, and login are now accessible by Cockpit and Persons because they in the .Provider wrapper
- we access this inside of Persons.js, we have to import it, import AuthContext from '../../context/auth-context';
- note we "Provider", "Consumer" the context by wrapping return with `<AuthContext.Consumer></AuthContext.Consumer>`
- also note: what was returned was JSX so we also need to wrap with {}, BUT <AuthContext.Consumer> takes a function not JSX as a child between the opening and closing tag, that takes context as an argument .ie in Persons.js <Person /> will have access to context object `<AuthContext.Consumer>{(context)=>{}}</AuthContext.Consumer>`
- BUUUUUUT we wanted to skip the Persons handling context and target Person directly
- so remove everything we added, and add to Person.js instead add to Person, including isAuth={this.props.isAuthenticated}
- remember we are wrapping everything that needs this Context
- we can now access the context properties .authenticated
- for Cockpit.js we can do the same and import AuthContext and access context directly, then this removes the need to pass in loginHandler from App.js as we can now get this from Context directly

```js
// context/auth-context.js
import React from 'react';
const authContext = React.createContext({
	authenticated: false,
	login: () => {}
});

export default authContext;
```

```js
// App.js
import React, { Component } from 'react';
import AuthContext from '../context/auth-context';

return (
	<Aux>
		<AuthContext.Provider
			value={{
				authenticated: this.state.authenticated,
				login: this.loginHandler
			}}
		>
			// content
			{this.state.showCockpit ? (
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					personsLength={this.state.persons.length}
					clicked={this.togglePersonsHandler}
					// login = {this.loginHandler}
				/>
			) : null}
			{persons}
		</AuthContext.Provider>
	</Aux>
);
```

```js
// Persons.js
// import AuthContext from '../../context/auth-context';

//Consume the context
return
	// <AuthContext.Consumer>
	// {context =>
	this.props.persons.map((person, index) => {
		return (<Person
      click={}
      name={}
      age={}
      key={}
      changed={}
      // isAuth={this.props.isAuthenticated}
    />
	  );
	});
  //}
	// </AuthContext.Consumer>
);
```

```js
// Person.js
import AuthContext from '../../../context/auth-context';

render(){
  return (
    <Aux>
      <AuthContext.Consumer>
        {(context)=> this.props.isAuth? <p>Authenticated!</p> : <p>Please Log in</p>}

        //above becomes
        {(context)=> context.authenticated? <p>Authenticated!</p> : <p>Please Log in</p>}

      </AuthContext.Consumer>
    </Aux>
  );
}
```

```js
// Cockpit.js
import AuthContext from '../../context/auth-context';

const cockpit = props => {

  ...


	return (
		<div>
			<h1 />
			<p />
			<button />
			<AuthContext.Consumer>
				{context => <button onClick={context.login}>Log in</button>}
			</AuthContext.Consumer>;
		</div>
	);


};
```

### contextType & useContext() UPPATE TO PREVIOUS LESSON...

- more elegant way than above to use context API in class based components
- althernative METHOD in CLASS BASED components
- alternative METHOD in FUNCTIONAL components

METHOD in CLASS BASED components (react 16.6)

- above method no way to access context as it is only available in return () so not accessible componentDidMount, we fix this by...
- adding static property called contextType `static contextType`, it has to be named such and has to be static
- static contextType = AuthContext;
- react now gives you access to a this.context property inside the class
- we can now access context in places like componentDidMount, where previously we couldnt access it
- we can also update the way we access context in the return,

```js
// Person.js
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	static contextType = AuthContext;

	render() {
		return (
			<Aux>
				// <AuthContext.Consumer>
				// 	{context =>
				// 		context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p>
				// 	}
				// </AuthContext.Consumer>

        { this.context.authenticated? <p>Authenticated!</p> : <p>Please Log in</p>}
			</Aux>
		);
	}
}
```

METHOD in FUNCTIONAL components

- with Hooks, React gives us access to useContext hook
- we have now access to context anywhere inside function body
- we pass in our imported AuthContext object as a prop to useContext(AuthContext) and react makes the connection

```js
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
	const authContext = useContext(AuthContext);
	console.log(authContext.authenticated);

	return (
		<div>
			// {context => <button onClick={context.login}>Log in</button>}
			//with useContext() hook becomes
			<button onClick={authContext.login}>Log in</button>
		</div>
	);
};
```

---

# Reaching out to the Web (Http Ajax)

- sending http requests from react application to server
- SPA have even more decoupled application from backend
- server has RESTful API (exposing API endpoints)
- jasonplaceholder.typicode.com backend rest api / send dummy and fetch dummy data, returns array of js objects of dummy posts
- ajax request using axios (3rd party) or XMLHttpRequest (cumbersome way of manually writing request..)
- returns .json from server

### introducing axios

- axios is a promise based http client for the browser and node.js

```
npm install axios --save

import axios from 'axios';
```

### Creating a Http Request to GET Data

- axios provides axios.get('url', secondargument)
- second argument can be specific configuration
- the get() request happens async
- get() returns a promise so we can chain then() on it.
- uses .then() promises to cater for async and it takes a function as an input that gets called when resolved (when data is there)
- then() receives a response object as an input automatically received by axios
- lifecycle hook for sideeffect (http) is componentDidMount()

```js
import axios from 'axios';

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      console.log(response);
    });
}
```

### Rendering Fetched Data to the Screen

- save the retrieved data into state
- place inside then block

* add key prop

```js
// Blog.js
import axios from 'axios';

state = {
  posts : [];
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      console.log(response);
      this.setState({posts: response.data})
    });
}

render(){
  const posts = this.state.posts.map(post => {
    return <Post key={post.id} title={post.title}/>;
  });

  return (
    <div>{ posts }</div>
  );
}

```

```js
// Post.js
const post = props => (
	<div>
		<h1>props.title</h1>
	</div>
);
```

### Transforming Data

- limiting posts to restrict returned posts before rendering
- call .slice(); on response, response.data.slice(0, 4); to only save 4
- can also manipulate the data returned by updating the data with map and adding additional attributes

```js
// Blog.js

componentDidMount(){
 axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      const posts = response.data.slice(0,4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      });
      this.setState({posts: updatedPosts});
      console.log(response);
    });
}
render(){
  const posts = this.state.posts.map(post => {
    return <Post key={post.id} title={post.title} author={post.author}/>;
  });

  return (
    <div>{ posts }</div>
  );
}
```

### making posts selectable

- add clicked listener on the post,
- add a handler
- add State to track selectedPostId
- setState for a selected Post with the click handler
- pass into FullPost the state.selec tedPostId
- in FullPost check with if(this.props.id) then show the post

### Fetching Data on Update (without Creating Infinite Loops)

- lifecycle hook for updating
  1. componentWillReceiveProps(nextProps)
  2. shouldComponentUpdate(nextProps, nextState)
  3. componentWillUpdate(nextProps, nextState)
  4. render()
  5. update child component props
  6. componentDidUpdate() ... cause side effects here!!!
- important: dont want to cause infinite loop in componentDidUpdate()
- in componentDidUpdate() make .get() request with axios
- add checks for if the prop.id exists
- and if prop.id exists, show that its loading
- then if state loadedPost .id exists, change content of post to the data

### infite loop problem

- code is in inifinite request because we update state in componentDidUpdate() and when state updates, re-render happens
- so prevent inifinite loop by adding check to see if !this.state.loadedPost (if the state is null)
- or if the post is loaded but its id is different from props.id (id is not same as what we got from prop.id)
- ..then its a new post, call get()

```js
componentDidUpdate(){
  if(this.props.id){
    if(!this.state.loadedPost || this.state.loadedPost.id !== this.props.id){
       axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    }
  }
}
```

```js
// Blog.js
state = {
  selectedPostId: null
}

componentDidMount(){
 axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      const posts = response.data.slice(0,4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      });
      this.setState({posts: updatedPosts});
      console.log(response);
    });
}

postSelectedHandler = (id) => {
  this.setState({selectedPostId: id});
}

render(){
  const posts = this.state.posts.map(post => {
    return <Post key={post.id} title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id)}/>;
  });

  return (
    <section className="Posts">{ posts }</div>
    <section>
      <FullPost id={this.state.selectedPostId}/>
    </section>
  );
}
```

```js
// Post.js
const post = props => (
	<div onClick={props.clicked}>
		<h1>props.title</h1>
	</div>
);
```

```js
// FullPost.js

import axios from 'axios';

...
class FullPost extends Component{

  state = {
    loadedPost: null
  }
  componentDidUpdate(){
    if(this.props.id){
      if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id )){
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then(response => {
            console.log(response);
            this.setState({loadedPost: response.data})
          })
      }
    }
  }

  render(){
    let post = <p>Please select a post</p>
    if(this.props.id){
      post = <p>loading</p>
    }
    if(this.state.loadedPost){
      post = (<div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
        <div><button className="Delete">Delete</button></div>
      </div>);
    }
    return post;
  }
}

```

## POST data to server

- import axios from 'axios'
- .post() takes url and data we want to send (object)
- we save state of props and pass it into the post()
- use promise based .then(response=>{}) and .catch()

```js
// NewPost.js
import axios from 'axios';

state = {
	title: '',
	content: '',
	author: 'Max'
};

postDataHandler = () => {
	const post = {
		title: this.state.title,
		content: this.state.content,
		author: this.state.author
	};
	axios
		.post('https://jsonplaceholder.typicode.com/posts', post)
		.then(response => {
			console.log(response);
		});
};

<button onClick={this.postDataHandler} />;
```

## Sending a DELETE Request

- delete() takes a url
- same url style as fetching a single post
- status code 200 indicates successful

```js
// FullPost.js
import axios from 'axios';

deletePostHandler = () => {
	axios
		.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
		.then(response => {
			console.log(response);
		});
};

<button onClick={this.deletePostHandler}>Delete</button>;
```

## Handling errors locally

- axios uses promises so we have access to .catch() method
- it passes an error object through when error is caught
- save state of error
- use error state to show / hide error content vs non-error content

```js
// Blog.js

state = {
  error:false
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/postsssss')
  .then(response=>{})
  .catch(error=>{
    this.setState({error:true});
    console.log(error);
  });
}

render(){
  let posts = <p style={{textAlign:'center'}}>Something went wrong</p>
  if(!this.state.error){
    posts = this.state.posts.map(post =>{
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={()=>this.postSelectedHandler(post.id)}
        />;
    });
  }
}


```

## Adding Interceptors to Execute Code Globally

- interceptors interupt the normal flow of events
- allows us to execute functions for requests leaving app AND reponse returning to app
- useful for special headers
- logging / handling errors globally
- axios.interceptors are shared across project

### request /response

- axios.interceptors.request.use(request=>{}); to register a new request interceptor
- axios.interceptors.response.use(response=>{}); to register a new response interceptor
- the interceptor takes a function as the input which receives the request
- NB the interceptor needs to return the request otherwise you are blocking the request

### request errors / response errors

- interceptors can handle second function besides the request/response config function, it can log errors
- also need to return Promise.reject(error) so we still forward the error to the component

```js
// index.js
import axios from 'axios';
axios.interceptors.request.use(
	request => {
		console.log(request);
		//edit request
		return request;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	response => {
		console.log(response);
		return response;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);
```

## Setting a Default Global Configuration for Axios

- somethings you dont want to setup an interceptor but want to setup a global configuration for axios
- can use axios.defaults to set defaults in a common starting url (index.js)
- setting .defaults.baseURL which allows us to cut this common url portion out form all the axios REST method calls
- can also set headers' .common (common headers - general headers which are set for all types of requests)

becomes:

- axios.get('/posts')
- axios.get('/posts/' + this.post.id)
- axios.delete('/posts/' + this.props.id)
- axios.post('/posts', data)

```js
// index.js
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; //can set to an auth token
axios.defaults.headers.post['Content-Type'] = 'application/json'; //setting header for specific
```

## Creating and Using Axios Instances

- creating instances of axios allows us to have multiple configuration settings
- create axios.js on same level as index.js
- dont forget to export the instance
- axios.create(); and pass in a config object
- then import into the file using this specific instance import axios from '../../axios';

```js
// axios.js
import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
```
# Burger Builder Project Accessing a Server

### 

# Multi-Page-Feeling in a Single-Page-App Routing

* firebase from google, free based on usage
* goto console
* create new project
* firebase automatically gives REST api end points and mongodb like / json structure database 
* firebase does the mapping from http request to database where api endpoints directly map to tables in database
* NB: Choose Realtime Database
* under RULES -> change read and write to true (setting skips authentication)
* when using firebase paths to end points need '.json'

### Creating the Axios Instance

* sending Http requests require axios
* npm install --save axios
* create a file to host the import eg. axios-contact.js 
* import axios from 'axios';
* const instance = axios.create({baseURL: 'https://test-aruba-fe3a6.firebaseio.com/'});
 the base url is the link from firebase for the project

```js
// axios-orders.js
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://test-aruba-fe3a6.firebaseio.com/'
});
export default instance;
```

### Sending a POST Request
* using axios to post data to server
* use the axios instance because it has the  baseURL set up
* axios.post('/path.json'), path will create the node on the db
* and gets appended to baseURL
* firebase requires that the .json be added to the path

```js
// BurgerBuilder.js
import axios from '../../axios-orders'

purchaseContinueHandler = ()=>{
  const order = {
    ingredients: this.state.ingredients,
    price: this.state.totalPrice,

  }
  axios.post('/orders.json');
}

```

## Routing

- routing is not part of the core of react
- 3rd party feature routing
- turns into more like a framework

### Routing and SPAs

- SPA is single page app, but we want to provide the normal web experience
- showing different pages for different urls
- trick is that we dont have multiple html files, we use javascript to render different
  pages for different paths
- routing is about parsing this path, and showing the appropriate jsx/component in our app
- the router package has to
  1. parse the url/path (in the client) to understand where the user wants to go
  2. developer cofigures different paths
  3. router reads the configuration
  4. render / load approriate JSX component

# setting up links

- use `<header><nav><ul><li><a href="/">`
- style ul, hide list-style:none
- style a, text-decoration: none
- style a:hover, a:active

```js
<!-- Blog.js -->
render(){
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </nav>
      </header>
      <section className="Posts">
        {posts}
      </section>
    </div>
  );
}

```

## Setting Up the Router Package

- install react-router
- and react-router-dom
```
npm install --save react-router react-router-dom
```
- enable routing in react app (in index.js or app.js)
- (app.js) 

```js
import {BrowswerRouter} from 'react-router-dom';
```

- wrap the part of app which should be able to render routes with `<BrowserRouter>`
- react-router-dom gives us access to route information via props (history, location, match) via '<BrowserRouter>' BUT route information is given only to components loaded directly via '<Route>'
- so only direct components loaded via a Route will get route information via props
- to make props avaible in any component with higher order component (hoc), import 'withRouter' from 'react-router-dom' and in the export, export default withRouter(class name) see below (The withRouter HOC & Route Props)

```js
<BrowserRouter>
  <div class="App"><Blog/></div>
</BrowserRouter>
```
## Setting Up and Rendering Routes
- the file that will hold dynamic content must 
```
import { Route } from 'react-router-dom';
```
- <Route> with 'path' property
- usage: `<Route path="/" exact/>`
- <Route exact> fixes problem with route matches that start with "/" and makes this route specific for exact match
- without 'exact' content is rendered for all paths that contain path='/' match
- eg. `<Route path="/" render={()=><h1>Home2</h1>}/>` is rendered on all routes that contain '/'
- you can use as many <Route path="" exact> with the same path or exact as you want and it will be rendered

## RENDER vs COMPONENT

### ROUTE 'render' jsx method

- usage: <Route path="/" exact render={()=>jsx here} />
- 'render' prop which is a function that says what happens when we reach this path...render JSX

### ROUTE 'component' method

- render components when the path matches
- component needs to be a reference to function/class we want to use
- so the component needs to be imported eg. import {Posts} from './Posts/Posts';
- usage: <Route path="/" exact component={Posts}>

```js
import { Posts } from './Posts/Posts';
<Route path="/" exact component={Posts} />;
```

```
npm install --save react-router react-router-dom
```

```js
// App.js

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App" />
			</BrowserRouter>
		);
	}
}
```

```js
// Blog.js
import { Route } from 'react-router-dom';

render(){
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact render={()=><h1>Home</h1>}/>
      <Route path="/path" component={Posts}/>
    </div>
  );
}

```

## Switching Between Pages

- currently switching between routes causes reloading
- instead we want only a re-render by changing the links and instead prevent reloading page and let react-router handle the render

## Using Links to Switch Pages / NavLink

- import { Route, Link, NavLink } from 'react-router-dom';
- replace `<a>` tag with <Link>
- use 'to' property to tell router where to link to (:string)
- to can also be js object where we configure {{pathname: '/new-post', hash:'#submit', submit:'?quick-submit=true'}}
  - 'pathname' is the path (string)
  - 'hash' tag is jumping to a id specific point eg. hash:'#submit'
  - 'search' allows query params eg. submit:'?quick-submit=true'

NOTE: react-router-dom wraps react-router and includes it as a dependency

```js
// <a href="/">Home</a>
<Link to="/">Home</Link>
<Link to={{pathname:'', hash:'#', search:'?quick-submit=true'}}>New Post</Link>

```

## Using Routing-Related Props

- react router gives us extra information through props : history, location, match
- history prop object also has push method which allows us to push a new page programatically without a <Link>
- can view props in componentDidMount(){console.log(this.props)}
  - match :{isExact:, params:, path:, url:}
  - location: {hash:, key:, pathname:, search:, }
  - history: {action:, goBack:, goForward:, push:, replace:}

## The withRouter HOC & Route Props

- getting information to components not loaded via Route (see previous lesson)
- we can pass 'match', 'location', and 'history' intot the subcomponent via this.props.x
- there is an easier way to give access to non-container components,
- import {withRouter} from 'react-router-dom' is a HOC
- we wrap our export with withRouter()
- the withRouter adds match, location, history to nearest loaded route  
  so post will get routing information for 'posts'

```js
import { withRouter } from 'react-router-dom';

const post = props => {};

export default withRouter(post);
```

## Routing - Absolute vs Relative Paths

- Default is absolute pathing
- with routing 'to=' always treats it as an absolute path ie. appended directly to domain with or without leading /
- use relative pathing if you want to navigate relative to your existing path
- relative path is appended to the end of current path by building a dynamic path,
- current path is accessed via <Link to={{pathname: this.props.match.url}}>
- and we can append the subpath dynamically <Link to={{pathname: this.props.match.url+ '/subpath'}}>

## styling the active route (NavLink instead of Link)

- `import {NavLink} from 'react-router-dom';`
- `<Link>` replaced with `<NavLink>` to allow us access to additional properties allowing styling
- `<Link>` and `<NavLink>` get rendered as `<a href="">` tags automatically behind the scenes
- now a default 'active' class is added to the dom of the active route which we can style
- just as `<Route path="/" exact />` we can specify exact on `<NavLink>` match for root /
- specify 'exact' on the active link else the dom adds the class to all matches the css will be active for all links that match starting with /
- to name our own classes for active state, instead of automatically getting '.active' class, use activeClassName="" eg. activeClassName="my-active" and then can style with .my-active
- or use activeStyle={{ }} to add 'inline' styling activeStyle={{color: orange, textDecoration:'underline'}}

```js
<nav>
	<ul>
		<li>
			<NavLink
				to="/"
				exact
				activeClassName="my-active"
				activeStyle={{ color: 'orange', textDecoration: 'underline' }}
			>
				Home
			</NavLink>
		</li>
	</ul>
</nav>
```

```css
/* Blog.css */
.Blog a:hover,
.Blog a:active,
.Blog a.active {
	color: orange;
}
```

## Passing Route Parameters

- posting an id from url (Ie.. getting parameters from url)
- we can add a flexible, variable route parameter with :then any name of choice (dynamic portion to the url)
- when defining the `<Route path="/:dynamicname">`
- paths are parsed top-down calling the first match (specific to less specific) eg. /new-post is more specific that /:id
- wrap the DOM html part with `<Link to={'/'+post.id}> <Post clicked={()=> this.postSelectedHandler(post.id)}/></Link>`
- up to this point the app should allow user to click on a Post `<Link>` and the url should update

```js
// Blog.js
import {FullPost} from './FullPost/FullPost';

<Route path="/" exact component={Posts}/>
<Route path="/new-post" component={NewPost}/>
<Route path="/:id" component={FullPost}/>
```

```js
// Posts.js
import {Link} from 'react-router-dom';

render (){
  posts = this.state.posts.map(post => {
    return (
    <Link to={'/'+post.id} key={post.id}>
      <Post title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id)}/>
    </Link>
    );
  });
}
```

## Extracting route parameters

- the router is routing with `<Route path="/:id" component={FullPost}>`
- extracting what we need from browser url
- since the way posts are loaded changes, we now clicking on something and the url updates,
- we are now not looking for an update, but rather if component mounted
  we change from componentDidUpdate() to componentDidMount()
- we can now extract from the route which matched to `<Route path="/:id">` the dynamic url `this.props.match.params.id`
- the .id is the same as what we setup `<Route path="/:id" />`

```js
// FullPost.js

  // componentDidUpdate(){}

  componentDidMount(){
    if(this.props.match.params.id){
      if (
				!this.state.loadedPost ||
				this.state.loadedPost != this.props.match.params.id
			) {
				axios.get('/posts/' + this.props.match.params.id).then(response => {
					// console.log(response);
					this.setState({ loadedPost: response.data });
				});
			}
    }
  }
```

You learned how to extract route parameters (=> :id etc).

- But how do you extract search (also referred to as "query") parameters (=> ?something=somevalue at the end of the URL)?
- How do you extract the fragment (=> #something at the end of the URL)?

### Query Params:

You can pass them easily like this:

```js
<Link to="/my-path?start=5">Go to Start</Link>
```

or

```js
<Link
	to={{
		pathname: '/my-path',
		search: '?start=5'
	}}
>
	Go to Start
</Link>
```

- React router makes it easy to get access to the search string: props.location.search .
- But that will only give you something like ?start=5
- You probably want to get the key-value pair, without the ? and the = . Here's a snippet which allows you to easily extract that information:

```js
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
```

URLSearchParams is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries() method. entries() returns an Iterator - basically a construct which can be used in a for...of... loop (as shown above).

When looping through query.entries() , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

### #(hash param) / Fragment:

You can pass it easily like this:

```js
<Link to="/my-path#start-position">Go to Start</Link>
```

or

```js
<Link
	to={{
		pathname: '/my-path',
		hash: 'start-position'
	}}
>
	Go to Start
</Link>
```

React router makes it easy to extract the fragment. You can simply access props.location.hash

## using Switch to load a single route

* with the router sequence of dynamic after specific (as bellow) it also causes some problems,
now all routes are rendered if they match the path, 
`<Route path="/new-post" component={NewPost} /><Route path="/:id" exact component={FullPost} />`
* we can tell react router to load only one route at a time by wraping with <Switch>
* use import {Switch} from 'react-router-dom';
* load only first route from given set of routes and stop after that. note: Route switch is important
* can put Route's inside and outside of Switch to give more flexibility
```js
<Switch>
  <Route path="/" exact component={Posts}/>
  <Route path="/new-post" component={NewPost}/>
  <Route path="/:id" exact component={FullPost}/>
</Switch>
```
## Navigating Programmatically

* taking advantage of the history object of the params
* goBack(), goForward(), 
* push() pushes on stack of navigation, this.props.history.push(); 
* we can push() props of string <Link to="/"> or an Object same prop as when using <Link to={{pathname:'/'+id}}>Home</Link>

```js
// Posts.js
// import {Link} from 'react-router-dom';

postSelectedHandler = (id) =>{
  // this.props.history.push({pathname:'/'+id});
  this.props.history.push('/'+id);
}

render (){
  posts = this.state.posts.map(post => {
    return (
    // <Link to={'/'+post.id} key={post.id}>
      <Post key={post.id} title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id)}/>
    // </Link>
    );
  });
}
```

## Understanding Nested Routes

* sometimes you want nested routes, loading something like a component, inside of another component also loaded via routing
* you can use the <Route> component wherever you want in the application as long as the part you are using it is wrapped up the hierarchy by <BrowserRouter> component
* in the nested Component, the <Route path={this.props.match.url + '/:id'} exact component={FullPost}>
* updating code (refactor), Blog.js wont load FullPost anymore, 
  * Blog.js has a <Route path="/" exact component="{Posts}"> will load Posts
  * Posts.js will load FullPost <Route path="/:id" exact component={FullPost}/>
* even though the <Route> is inside Posts.js as long as everything that needs access to routing is wrapped by <BrowserRouter> component up the DOM
* BUT since implementation of the nested route, route / loads Posts component, and Posts Component loads FullPost, the route will never match because route path='/' is specified as exact, so Post will never get rendered
* FIX, remove 'exact' from <Route path="/"> so it matches everything starting with / 
* FIX: move it down below the <Route path="/new-post">

### Switch
```
import {Switch } from 'react-router-dom';

```
* wrap with Switch so only single path is called from set
* the nested routes should be relative ie. path should be appended to whatever the current route is responsible for the nested route (Posts Component)
* Posts.js adjust the nested <Route path="/:id" by getting the current path dynamically <Route path={this.path.match.url+'/:id'}> exact component={FullPost}/>

```js
// Blog.js
<Switch>
  <Route path="/new-post" component={NewPost}/>
  <Route path="/" component={Posts}/>
</Switch>
```

```js
// Posts.js
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

  return (
    <div>
      <section className="Posts">
        {posts}
      </section>
      <Route path={this.path.match.url+'/:id'} exact component={FullPost}/>
    </div>
  )
 
```

## Creating Dynamic Nested Routes

* if you are loading a component that is already loaded, react router doesnt replace the component everytime, it reuses it, 
* so in the previous example, component might not update its data even tho the route in the url updated,
  this is because we were using only componentDidMount() but we need to also use componentDidUpdate()
* also note this component is not receiving an id via props anymore, we are using the this.props.match.params.id directly from url
* if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) prevents infinite loop
* NOTE: != is single equals denoting just equality..not same type because state.loadedPost.id is a number and params.id passes back a string 
* can also use unary operator + to do conversion from string to number type state.loadedPost.id !== +this.props.match.params.id

```js
// FullPost.js
componentDidUpdate() {
  this.loadData();
}

componentDidMount(){
  this.loadData();
}
loadData() {
  //check to prevent infinite loop...
  if(this.props.match.params.id){
    //if the state loadedPost doesnt exist
    if( !this.state.loadedPost || 
    (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)){
      axios.get('/posts/'+ this.props.match.params.id)
        .then(
          this.setState({loadedPost:response.data})
        )
    }
  }
}

```
## Redirecting Requests

* import { Redirect} from 'react-router-dom';
* inside `<Switch>` statement, use `<Redirect>`
* <Redirect> does not render content, it redirects
* prop syntax for route path is from="" to=""
* NB: using `<Redirect>` outside of `<Switch>`, then you cannot specify 'from' property 

```js
<Switch>
  <Route path="/posts" component={Posts}/>
  <Redirect from="/" to="/posts"/>
</Switch>

```
## Conditional Redirects (outside of <Switch>)

* <Redirect to="/posts"> can allow us to redirect the url once say a form has submitted or .post() has completed
* import {Redirect} from 'react-router-dom';
* <Redirect> used outside <Switch> can only have 'to' prop, cant have 'from' prop
* render() method does re-render when redirects so we need some conditional state to determine if we need to render redirect

```js
// NewPost.js

import {Redirect} from 'react-router-dom';
state = {
  submitted: false
}
postDataHandler = () => {
  axios.post().then(response=>{
    this.setState({submitted: true});
  })
}
render(){
  let redirect = null;
  if(this.state.submitted){
    redirect =  <Redirect to="/posts" />
  }
  return (
    <div className="NewPost">
      {redirect}
      <h1>Add a post</h1>
      ...
      <button onClick={this.postDataHandler}>Add Post</button>
    </div>
  );
}

```
## Using the History Prop to Redirect (Replace)

* its easier enough to redirect with props.history available on every component that is wrapped by <BrowserRouter>
* this.props.history.push('/posts');
* difference between .push() and <Redirect> is that Redirect replaces the current page on the stack, it doesnt push a new one
* this.props.history.replace('/posts') does same as what `<Redirect>` does, it replaces the current page on the stack

## Working with Guards

* navigation guards is used when you have authentication and only allow certain pages to be visited if they are authenticated
* this translates to rendering <Route> conditionally in React by using a property in the store and checking if prop eg. state={auth:false} is true,
* without access to the Route the component is never rendered
* can also do this in the redirected to component's componentDidMount() function, componentDidMount(){ //if unauth => this.props.history.replace('/home');}

```js
<Switch>
  {this.state.auth ? <Route path="/posts" component={Posts}/> : null}
   
</Switch>
```

## Handling the 404 Case (Unknown Routes)

* accessing a route that is unknown, we called `<Redirect>`
* handling unknown routes with `<Route>` with NO path="" prop you can define component={} or render={()=><h1>Not Found</h1>}
* wont work with root route `<Redirect from="/">` 
* the 404 route should always be last to catch all routes, thats why it wont work with `Redirect from="/">`
```js
<Route path="/posts" component={Posts}/>
<Route render={()=> <h1>Not Found</h1>}/> //or use this <Route component={}/>
// <Redirect from="/" to="/posts"/>
```
## Loading Routes Lazily

* GOAL: loading when needed
* code gets loaded even tho we have not accessed the path just by defining the <Route component={NewPost}>, it should only load when we access it
* Lazy Loading or code splitting is when we load only when we need it (good for loading different feature areas)
* works with REQUIRED: CRA (create react app) or react router 4

### asyncComponent
* basically this function receives a function, save it in state, the render method checks if the state is set, and if it is, render() the component
* we need a Higher order Component (HOC) create a file hoc/asyncComponent.js should help load component asynchronously (only when needed)
* asyncComponent receives an component argument (we call it eg importComponent) which is a function
* it returns a class that extends Component with render() method
* we set a state with 'component' property which initially is null, and will be set to the dynamically loaded component
* we set 'component' prop in componentDidMount() by calling the passed in function importComponent() 
* that function returns a promise which we subscribe to .then(), we receive an argument which will have a .default property which will be the component we want to load dynamically
* assign that to 'component' state
* in render() check if the 'component' state is set, if it is set, then return the component, else return null;

### how to use asyncComponent
* basically we import the asyncComponent, create a const AsyncComponent, that calls the asyncComponent() function and we pass in an anonymous function that returns import(), which is only executed when the calling function is executed, it can be executed in render() by rendering te const we created {AsyncComponent}
* whenever you are importing something with import x from '', you inform webpack about the dependency and it is included in the bundle
* to load when needed, remove the import 
* and then import the hoc asyncComponent we created above
* define a const AsyncComponent = asyncComponent(()=>{return import();}) we are returning an anonymous function that returns an import() as a function
* import() is the syntax for dynamic import, we pass in the same path as what we would normally point to with import x from 'x';
* with import(), whatever is passed into import() is only executed when the asnycComponent(()=>{}) return function is executed
* and this function (asyncComponent) is only executed when we render it to the screen usage would be in render() <Route path="/new-post" component={asyncComponent}>
* we can see this works by development tools - Network shows loading chunk.js

```js
// hoc/asyncComponent.js
import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount(){
      importComponent().then(comp=>{
        this.setState({component:comp.default});
      })
    }

    render (){
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    };
  }
}

export default asyncComponent;
```

```js
// Blog.js
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
});

render (){
  return (
    <Switch>
      {this.state.auth? <Route path="/new-post" component={AsyncNewPost}/> : null}
    </Switch>
  );
}
```

## Lazy Loading with React Suspense (16.6) (ALTERNATIVE METHOD FOR LAZY LOADING)

* REQUIREMENTS react 16.6 and higher, DOES NOT WORK FOR SERVER SIDE RENDERING YET
* has .lazy() to load components asynchronously, defering loading until required
* NOTE: `<React.Framgent>` was added in 16.2 which acts like `<Aux>` in that the dom element is not rendered and acts as a wrapping element
* so instead of importing like `import Posts from './containers/Posts'` we need to use a dynamic import()
1. create a const Reference and assign to React.lazy();
2. pass in an anonymous function to lazy(()=> import('./containers/Posts')) that returns dynamic import() call, and we pass into import() the path we want
3. in the render() , we pass to render prop, anonymous function that returns react feature `<Suspense>`
4. eg `<Route path="/posts" render={()=>(<Suspense></Suspense>)}>`
5. and between the Suspense DOM element, we pass it the const we created (Posts) as an element `<Posts/>`
6. `<Suspense>` has a fallback prop which we can set to show something (its essentially a fallback while it is still loading) while react postpones the rendering of the lazy component 
* the advantage of using the Suspense method is Async rendering and that it is not tied to routing, can use for conditional rendering

```js
// import Posts from './containers/Posts';
import User from './containers/User';

const Posts = React.lazy(()=> import('./containers/Posts'));

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink>
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact/>
          <Route path="/user" component={User}/>
          // <Route path="/posts" component={Posts}/>
          <Route path="/posts" render={()=>(<Suspense fallback={<h1>loading...</h1>}><Posts/></Suspense>)}/>
        </React.Fragment>
      </BrowserRouter>      
    );
  }
}
```

###  example .lazy() not used for Routing
```js
// App.js

class App extends Component{
  state = {showPosts:false};

  modeHandler = () => {
    this.setState(prevState=>{
      return {showPosts: !prevState.showPosts};
    })
  }

  render(){
    return (
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>

        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
          <Posts/>
          </Suspense>
        ): (<User/>
        )}
      </React.Fragment>
    );
  }

}
```

## Routing and Server Deployment

* when in development, the server is already setup, but once we have deployed to a server it is important to point all routes to the index.html
* SERVER CONFIGURATION: ALWAYS FORWARD ALL ROUTING TO THE INDEX.html regardless if the route exists,
* this is because the server handles all routes first, but on the server there is only index.html,
* react routing is client side and the server wouldnt know what to do with a route unless it is accessed via index.html

## NB: if the path where we deploy is not the root / like domain.com/ but something else like domain.com/my-app/

* by default `<BrowserRouter>` points to basename="/"
* configure <BrowserRouter basename="/my-app">

---

## Forms and Form Validation

### Analyzing the App.mp4

* validation
* handling user input

* decide what data we need, store this in the state
* dynamically generate form
* validation of form, with styling based on validation

* moving input elements into custom components

### Creating a Custom Dynamic Input Component.mp4

```js
// ContactDetails.js
// <!-- usage: -->
	<Input
    inputtype="input"
    type="text"
    name="postal"
    placeholder="postal code"
  />
```

```js 
// Input.js

import React from 'react';
import classes from './Input.css';

const input = props => {
	let inputElement = null;

	switch (props.inputtype) {
		case 'input':
			inputElement = <input className={classes.InputElement} {...props} />;
			break;
		case 'inputarea':
			inputElement = <textarea className={classes.InputElement} {...props} />;
			break;
		// dropdown, select
		default:
			inputElement = <input className={classes.InputElement} {...props} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default input;

```css
// Input.css

.Input {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
}

.Label {
	font-weight: bold;
	display: block;
	margin-bottom: 8px;
}

.InputElement {
	outline: none;
	border: 1px solid #ccc;
	background-color: white;
	font: inherit;
	padding: 6px 10px;
	display: block;
	width: 100%;
	box-sizing: border-box;
}

.InputElement:focus {
	outline: none;
	background-color: #ccc;
}

```

### Setting Up a JS Config for the Form.mp4

* creating form dynamically
* define how each element should look
* handling form shape in state - js object which defines all form fields, configuration, values
* the state object props should have elementType key and its value should be the name of html dom element without angle brackets
* the idea is to loop through the state object and create the form elements dynamically
* the Input Components in ContactData receive props `<Input elementType="..." elementConfig="..." value="..." />`

```js 
// ContactData.js
state={
  orderForm: {
    name: {
      elementType: 'input',
      elementConfig: { type: 'text', placeholder: 'your name' },
      value: ''
    },
    email: {
      elementType: 'input',
      elementConfig: { type: 'email', placeholder: 'Your email' },
      value: ''
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'cheapest' }
        ]
      },
      value: ''
    }
  }
}
let form =( <form>
    <Input elementType="..." elementConfig="..." value="..." />
 </form>)

```

### Dynamically Create Inputs based on JS Config.mp4

* creating `<Input>` components dynamically from state
* with the state setup, we can create an array from the state then loop through each element and create the component
* save orderForm key/value in formElementsArray

```js
// ContactData.js

render(){
  let formElementsArray = [];

  for (let key in this.state.orderForm) {
    formElementsArray.push({ id: key, config: this.state.orderForm[key] });
  }

  let form = (
  <form>
    {formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
      />
    ))}

}
```

### 06. Adding a Dropdown Component.mp4
```js
//ContactData.js
	state = {
		orderForm: {
      // ...other form content...

      //drop down select
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          type: 'email',
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'cheapest' }
          ]
        },
        value: ''
      }

    }
  }
```

```js
// Input.js

case 'select':
  inputElement = (
    <select className={classes.InputElement} value={props.value}>
      {props.elementConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );


  ```
  ### Handling User Input.mp4

  * Input component, each input element gets onChange listener
  * in the section using the Input component, pass in as a prop 
  * changed={(event) => this.inputChangedHandler(event, )}
  but make it an anonymouse function that calls our handler so we can pass in arguments
  * the second param is a unique identifier to ref the specific input (inputIdentifier) this is the keys of orderForm in the state...
  * this value came from formElementsArray {id:key} value pair
  * mutate state with setState()
  * make deep copy of state data in inputChangedHandler(), note ...this.state.orderForm only makes a deep copy of the state orderForm, does not make a deep copy the nested keys' objects
* updateOrderKeyObject is now a clone, note: elementConfig is still not a clone,
* update a prop value of updateOrderKeyObject
* reassign back to the key's value `updatedOrderForm[inputIdentifier] = updatedOrderKeyObject`
* set state

#### summary
* form built from state,
* has handler for input
* make a deep copy of the values in the state, 
* make copy of object value of key
* spread to new object 
* update specific value
* and update a value property of this new object to the event.target.value
I reassign the key back to the copy of the form `updatedOrderForm[inputIdentifier] = updatedOrderKeyObject`
* set state

  ```js
  //Input.js definition
  <Input onChange={props.changed}>

  //ContactData.js //usage
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedOrderKeyObject = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedOrderKeyObject.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedOrderKeyObject;
		this.setState({ orderForm: updatedOrderForm });
	};



  const formElementsArray = [];
  for(let key in this.state.orderForm){
    formElementsArray.push({id:key, config: this.state.orderForm[key]})
  } 

  let form = (
    <form>
      {formElementsArray.map(formElement)=> {
      <Input key={formElement.id} changed={()=>this.inputChangedHandler(event, formElement.id)}/>
    </form>
  );
  }

  ```
### 08. Handling Form Submission.mp4

* there is an onSubmit event handler on `<form onSubmit={}>`, so dont use the handler on the submit button
* in the handler, need to event.preventDefault(); so you can handle manually
* want to extract data, but eveything is already managed by the state,
* create formData object
* for each of state.orderForm, get key/value 
* add formData to order as prop

```js
  orderHandler =(event)=>{
    event.preventDefault();
    this.setState({loading: true});
    const formData = {} //get key/value data from state eg. email:value, name:value
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    axios.post('orders.json', order)
    .then(response=>{
      this.setState({loading:false});
      this.props.history.push('/');
    })
    .catch(error=>{
      this.setState({loading:false});

    })
  }

  <form onSubmit={this.orderHandler}>
  </form>
``` 

### adding validation feedback

* Input component should get validation css classes if invalid
* change className={classes.InputElement} to css module reference like className={inputClasses}
* inputClasses is an array to hold all associated classes
* then we are checking against the input type we are creating if its invalid or not
* add to Input component form element (where its being used eg. ContactData.js)
* inside the formElementsArray.map(formElement=>{<Input invalid={!formElement.config.valid}/>})
the json data is 'valid' but we have invalid={} prop, so pass-in the opposite 
* this makes everything invalid, for dropdowns we should cater for a shouldValidate property which the json for dropdown does not have, so check for shouldValidate={check on if validation object exists} ie. shouldValidate={formElement.config.validation}


```js
// Input.js
const inputClasses = [classes.InputElement].join(' ');

if(props.invalid && props.shouldValidate){
  inputClasses.push(classes.Invalid);
}
```

```css
.Invalid {
  /* set up styling */
  border: 1px solid red;
  background-color: salmon;
}
```
```js
// CotactData.js
//reminder: formElementsArray 
const formElementsArray = [];
for(let key in this.state.orderForm){
  formElementsArray.push({id:key, config: this.state.orderForm[key]})
} 

//reminder: orderForm[key] - formElement
email:{
  elementType:'input',
  elementConfig: {
    type:'email',
    placeholder:'your-email'
  },
  value:'',
  validation:{required:true},
  valid:false
}

// inside the formElementsArray.map(formElement=>{<Input/>})
<Input invalid={!formElement.config.valid} shouldValidate={formElement.config.validation}
```

### Improving Visual Feedback.mp4
* form should have 'touched' check,
* add 'touched: false' to json
* and only check validity if touched changed to true
* inside input(),
```js
// ContactData.js
inputChangedHandler = (event, inputIdentifier)=>{
updatedFormElement.touched = true;
} 

<Input touched={formElement.config.touched}>

```
```js
// Input.js
if(props.invalid && props.shouldV && props.touched)
```

### Handling Overall Form Validity.mp4

* checking overall validity, we can use this to turn order button on/off
* can add formIsValid property to state
* the for-loop iterates trhough all inputs, including the drop-down which doesnt have a valid prop, which makes it undefined,
* hence formIsValid is always undefined, fix by adding .valid to the dropdown and set always true
```js 
//ContactData.js
let formIsValid = true;
for(let inputIdentifier in updatedOrderForm){
  formIsValid - updatedOrderForm[inputIdentifier].valid && formIsValid
}
this.setState({orderForm:updatedOrderForm, formIsValid:formIsValid});

<Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
```
```js
//Button.js
<button disabled={props.disabled}>
```
```css
/* Button.css */
.Button:fisabled{
  color: #CCC;
  cursor: not-allowed;
}
```

### Working on an Error

* form validation error on dropdown because it doesnt have a validation:{} prop whereas the others do
* fix by adding it

### 16. Fixing a Bug.mp4

* drop down select default value, if never set, the default is ''
* fix by adding default value to one of the options

---

## Redux

* 3rd party libary for state management
* used for authentication
* ui state

### The Complexity of Managing State.mp4

* state management can get complex as application grows
* fixes issue of passing data around
* cannot use just a global variable js object, stores entire application state because reacts reactivity system doesnt react to changes in some global variable
* but the idea of a global store is what redux is about

### Understanding the Redux Flow.mp4

* Central Store - think about Redux like a giant js Object.
* A Component - it wants to manipulate and gain state, but doesnt do it directly, store will be difficult to track and react wont pick it up
* Actions - a messenger - dispatched from components, action is infomation with a type.. possible includes payload (other data)
* Reducer - pure function (no side effects) that changes the store -> action reachs reducer, reducer can check actions type, then define code for the action in the reducer

Reducer

* receives action as INPUT
* receives old state as INPUT
* OUTPUT updated state
* NB: Synchronos code ONLY (NO ASYNC CODE, NO side effects, NO HTTP requests)
* STATE is updated in immutable way (New object)

Subscription model
* to get updated state back to the component
* store triggers ALL subscription when state changes
* component subscribes to store for updates and it then receives that update automatically

### Setting Up Reducer and Store.mp4

* npm install --save redux
* create new file in root redux-basics.js to be executed with node.js to show independent of react
* redux.createStore; is a function allows us to create a new redux store
* store needs to be initialized with a reducer, pass reducer into createStore()
* so create Reducer first, reducer receives 2 functions current state (state, action)=>{ return state;} and it needs to return the updated state
* simplest reducer you can create is return state
* store.getState();
* setup state const initialState = {} with initial prop
* using ES6 can initialize function with default value
* with initial state created, use as default value for state

### Dispatching Actions.mp4

* dispatch with store.dispatch({type:''}) takes 
1. an object argument with 'type' prop that stores type of action (CONVENTION IS UPPERCASE STRING), 
  * other properties can also be added to the object.

2. and what we should do in reducer

* need to add logic to react to the actions, we do this in Reducer, 
```js
  if(action.type === 'INC_COUNTER'){
    return {
      ...state, counter: state.counter + 1
    }; 
  }
```

### Adding Subscriptions.mp4

* subscriptions make sure you dont have to manually call getState(), it informs me whenever state updates,
* store.subscribe() takes an argument, function that gets executed when state gets updated.
* added after store is created with CreateStore to listen to future dispatches,

  
RUNNING THE JS
```
// to run with node
node redux-basics.js
```

```js
//redux-basics.js
const redux = require('redux');   //node.js syntax
const createStore = redux.createStore;

const initialState = {
  counter:0
}

// Reducer
const rootReducer = (state = initialState, action) = {
  if(action.type === 'INC_COUNTER'){
    return {
      ...state, counter: state.counter + 1
    }
  }
  if(action.type === 'ADD_COUNTER'){
    return {
      ...state, counter: state.counter + action.value
    }
  }
  return state;
}; 

//Store
const store = createStore(rootReducer);    //executes store
console.log(store.getState());

//Subscription
store.subscribe(()=>{
  console.log('[Subscription]', store,getState());
})

//Dispatching Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10});
console.log(store.getState());

```

### Connecting React to Redux.mp4

* npm install --save redux //allows us to create a store
* import {createStore} from 'redux';
* import reducer from './store/reducer';
* const store = createStore(reducer);   passing reducer into createStore()

### Connecting the Store to React.mp4

* npm install --save react-redux //ties redux to react
* import {Provider } from 'react-redux'; 
* wrap our `<App>` component with `<Provider>` which is a helper which injects store into components
* to hook up the store, we pass the store created with createStore() to Provider store={} prop.
* to connect the store to the component... we want to subscribe to the store to connect them...
* in a container component (stateful component) that receives the store   
* import {connect} from 'react-redux';   
* export default connect()(Counter)
* connect is a Higher order function we use on export
* it is a function connect() that returns a function that takes a component eg. Counter (Counter) as an input
* we pass some configuration to connect(), 
* 2 pieces information...
  - which part of whole app state (which slice of the state you want in a specific container)
  - which actions to dispatch

* `const mapStateToProps = ` mapStateToProps - stores how state managed by redux should be mapped to props we can use in the component
- it actually stores a function which expects the state (given to you) stored in redux as an input 
- and returns an object, a map of prop names and slices of the state stored in redux
- this function will eventually be passed to redux and executed by redux, 
- this is a way of configuring which kind of information we need
- eg. return { ctr : state.counter } , ctr is a prop we name, state.counter is from the state in redux
- we pass to connect(mapStateToProps)(Counter) so we are connecting section of state to our Counter component
- now we have access to ctr via {this.props.ctr}

### Dispatching Actions from within the Component.mp4

* dispatching within component, we have acccess to the store via connect()
* a second configuration mapDispatchToProps, will receive dispatch as an argument, return a object {} 
* mapDispatchToProps = dispatch => { return {}}
* in this object, we can define prop names `onIncrementCounter` : that will hold reference to anonymous function that returns a call to dispatch ()=>dispatch({}) 
* we can use this prop onClick={this.onIncrementCounter}
* in dispatch we pass an object with type eg.. {type:'INCREMENT'}
* add mapDispatchToProps as second parameter, connect( mapStateToProps, mapDispatchToProps) 
* in reducer listen for the action

### Passing and Retrieving Data with Action.mp4

* we can add additional data to the dispatch object, in addition to 'type', 
* like a payload object,eg. payload:{} which stores all additional data,

### Switch-Case in the Reducer.mp4

* using switch(action.type) instead of if() 

### Updating State Immutably.mp4
* add a new prop to state, results:[]
* our example will add `<button>Store result</button>` and 
* when button clicked, dispatch an action
* add counter value to result list `<ul>`
* when `<li>` clicked, remove that item from the array
* we add 2 extra props to map dispatchToProps
  - onStoreResult : ()=> dispatch({type:'STORE_RESULT'}),
  - onDeleteResult : ()=> dispatch({type:'DELETE_RESULT'})
* add to `<button onClick={this.props.onStoreResult}>`
* `<ul><li onClick={this.props.onDeleteResult}></li></ul>`
* handle the action in the reducer immutably by taking old value in store and spreading it in a new object 
  - either by const newState = Object.assign({}, state);  update the prop on this new obj, return new object
  OR
  - return a js object, return all props of old state distributed these values in new object, and if we define new prop in new state, add this property to the object, or if it already exists, overwrite this prop.
* onStoreResult dispatches 'STORE_RESULT' which executes return {...state, results: state.results.concat(state.counter) 
* javascript method - concat() returns a new array whereas push() manipulates old value (touching properties of original array - not good practice)
* es6 method - {...state, results:[...state.results, state.counter];
* in a component, we now have access to the state via `storedResults` by adding it to mapStateToProps, storedResults: state.results
* call with this.props.storedResults

### Updating Arrays Immutably.mp4

Normal Method of updating
* create a copy of array, distribute all props eg. `new Array = [...state.results]` into the new array
* manipulate the new copied array by adjusting prop values or removing item, `newArray.splice(id, 1)`
* return spread state, override the prop, eg. `return {...state, results: newArray}`

Filter Method of updating

* remove with handle onClick={()=>this.props.onDeleteResult(strResult.id)} and handle event with anonymous function so we can pass in id
* the .id property comes from when we set with reducer() STORE_RESULT, where we save date id:new Date() as the id.
* we have access to onDeleteResult from mapDispatchToProps, this cause the reducer to execute,
* in the reducer function, const updatedArray = state.results.filter((result)=> return result.id !== action.resultElId );
* filter() returns a new array, takes a function and checks against certain condition if it makes it into new array, return true/false
* so pass into the reducer additional info, the resultElId, on mapDispatchToProps = return { onDeleteResult : (id)=> dispatch({type:'DELETE_RESULT', resultElId:id) } 

```js
// index.js
import {createStore} from 'redux';
import reducer from './store/reducer';
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>);
```

```js
//store/reducer.js
const initialState = {
  counter:0,
  results: []
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    //only returning single object like below because there is only single item counter in state
    case 'INCREMENT':
      return {
      counter: state.counter + 1
    }
    case 'DECREMENT':
      return {
      counter: state.counter - 1
    }
    case 'ADD':
      return {
      counter: state.counter + action.val
    },
    case 'SUBTRACT':
      return {
      counter: state.counter - action.val
    },
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id:new Date(), value: state.counter}) //push manipulates old value, concat returns a new array
      }
    },
    case 'DELETE_RESULT':
    
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id,1)
      // return {    
      //   ...state, results: newArray
      // }

      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
    }
  }
  return state;
}

export default reducer;
```

```js
//Counter.js

  render(){
    <div>
    <CounterOutput value={this.props.ctr}/>
    <CounterControl label="Increment" clicked={()=> this.props.onIncrementCounter }>
    <hr/>
    <button onClick={this.props.onStoreResult}>Store result</button>
    <ul>
      {this.props.storedResults.map(strResult => {
       })}      
    </ul>
    </div>
  }

const mapStateToProps = (state) => {
  return {
    ctr : state.counter,
    storedResults: state.results
  } 
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onIncrementCounter : ()=> dispatch({type:'INCREMENT'}),
    onDecrementCounter : ()=> dispatch({type:'DECREMENT'}),
    onAddCounter : ()=> dispatch({type: 'ADD', val: 10}),
    onSubtractCounter : ()=> dispatch({type: 'SUBTRACT', val: 15}),
    onStoreResult : ()=> dispatch({type:'STORE_RESULT'}),
    onDeleteResult : (id)=> dispatch({type:'DELETE_RESULT', resultElId:id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

```

### Outsourcing Action Types.mp4

* to avoid spelling errors and mismatched action strings with redux action types, we externalize the definition to external file
* store/actions.js
* export const ACTIONTYPE = 'STRING'; note the name and value are the same
* now we can import the actions into the reducer and also the component using the actions for dispatching...

```js
// store/actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

```

```js
//store/reducer.js
import * as actionTypes from './actions';

case actionTypes.INCREMENT:
case actionTypes.DECREMENT:
case actionTypes.ADD:
case actionTypes.SUBTRACT:
case actionTypes.STORE_RESULT:
case actionTypes.DELETE_RESULT:

```

```js
//Counter.js
import * as actionTypes from '../../store/actions';

mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: ()=> dispatch({type: actionTypes.INCREMENT}),
  }
}
```

### Combining Multiple Reducers.mp4

* possible to have multiple reducers
* all actions in the end get funnelled through a single reducer, 
* redux gives us utility map to combine multiple reducers into one
* can split up by feature by part the state manages
* create store/reducers/*file* and split up respective actions
* in index.js , import respective reducers separately
* import combineReducers, `import { createStore, combineReducers} from 'redux';`
* create a new const give prop names to sections and map reducers to it,
* eg. `const rootReducer = combineReducers({ctr:counterReducer, res:resultReducer})`
* we then pass this rootReducer to createStore(rootReducer)
 
ERRORS:
//Counter.js - the component using reducer (does the state mapping )
```js
const mapStateToProps = (state) => {
  return {
    ctr : state.ctr.counter,
    storedResults: state.res.results
  } 
}
```
* the reference to state.counter needs to be adjusted to state.ctr.counter
* redux has one state object, but to avoid naming conflicts, redux adds one level of nesting with keys as properties that gives access to the sub states
* in result.js, case actionTypes.STORE_RESULT: , it tries to access  state.counter, but it needs to get it from an action payload...
* fix by adding to the component Counter.js, mapDispatchToProps the onStoreResult: (result)=> dispatch function receives result so we can dispatch it as part of action result: result.
 * to send the action, `<button onClick={()=>this.props.onStoreResult(this.props.ctr)}>` 
 
```js
// index.js
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({ctr:counterReducer, res:resultReducer})

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App/></Provider>)
```

//containers/Counter/Counter.js
```js
mapStateToProps = state=>{ return {ctr:state.ctr.counter, storedResults:state.res.results}}
```

```js
//store/reducers/counter.js
import * as actionTypes from '../actions';


const initialState = {
  counter: 0
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    //only returning single object like below because there is only single item counter in state
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...,
      counter: state.counter - 1
    }
    case actionTypes.ADD:
      return {
      counter: state.counter + action.val
    },
    case actionTypes.SUBTRACT:
      return {
        ...state,
      counter: state.counter - action.val
    }
  }
  return state;
}
export default reducer;
```
```js
//store/reducers/result.js
import * as actionTypes from '../actions';
const initialState = {
  results: []
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id:new Date(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
    }
  }
  return state;
}
export default reducer;
```

## Adding Redux to our Project

* data to store vs state for conditional UI

### Basic Redux Setup

* import {Provider} from 'react-redux';
* import {createStore} from 'redux';
* import reducer from '';
* `<Provider>` wraps everything including `<BrowserRouter>`
* to gain access to the store, import {connect} from react-redux and wrap export, if an export wrap already exists, wrap that with connect()(oldwrap)

### Finishing the Reducer for Ingredients
### Connecting the Burger Builder Container to our Store.mp4
* import {connect} from 'react-redux'  to connect anything to store
* wrap the export with connect(mapStateToProps)(ComponentName)

```js
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from '';
const store = createStore(reducer);
const app = (<Provider store={store}><App/></Provider>)
import * as actionTypes from '';

const mapStateToProps = state=>{
  return {
    ing: state.ingredients
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onIngredientAdded: (ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName:ingName})
    onIngredientRemoved: (ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
```

## Redux Advanced

### Adding Middleware

* between `action dispatch` and `reaching reducer`, we can add middleware
* middleware - term for functions or code hooked into a process without stopping it
* ie can do something with action before it reaches reducer, eg. adding logging, 

#### Middleware
  1. logger takes a function and receives store as input
  2. return another function where it receives the next argument 'next', we call next to allow the function to continue its way
  3. it returns the action as another function
  4. inside that function we have access to everything above it eg. store, next and action
  5. next(action) allows it to continue to the reducer, and it needs action as an argument
  6. we store the result of the call 'result' and we return this...
  7. allows us to make calls between

* import {applyMiddleware} from 'redux' allows us to add middleware to store
* connect middleware, createStore(reducer, enhancer ) add second argument which can be an enhancer (middleware)
* we get additional output, and we can use Redux dev tools to look into store.

```js
  //index.js
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from '';
import resultReducer from '';
const rootReducer = combineReducers({ctr:counterReducer, res:resultReducer})

  const logger = store => next => action => {
    console.log('[Middleware] Dispatching', action);
    console.log('[Middleware] next state', store.getState());
    return next(action);
  };
  
  const store = createStore(rootReducer, applyMiddleware(logger);


```

### Using the Redux Devtools.mp4

* install redux dev-tools chrome extension,
* this is wiring it up to the dev-tools extension github redux-devtools-extension
* https://github.com/zalmoxisus/redux-devtools-extension
* chrome developer tools -> redux
* add additional code to createStore()
* import {createStore, applyMiddleware, compose} from 'redux';
* compose() combines enhancers()
* time travelling by clicking on that specific state, has skip, jump functions to debug

```js
// index.js
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
```

### Creating Action Creators to prepare for asynchronous code

* In Redux, action creators are functions that simply return an action
* so instead of calling dispatch({type:actionTypes.INCREMENT}), an action creator is a function call that returns this action
* ie. dispatch(increment())
* moving logic related to component out into store/actions/ , store/reducers/
* moving to store/actions/ actionTypes.js, 
* store/actions/ create index.js file to export all in the same directory
* where you using it, import * as whatevernameyouwant from '../../store/actions/index';

```js
//index.js
export {
  addIngredient, removeIngredient
} from './burgerBuilder';
export {} from '';
```

<!-- component using the actions -->
```js
import * as whatevernameyouwant from '../../store/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName)=> dispatch(whatevernameyouwant.addIngredient(ingName)),
    onIngredientRemoved: (ingName)=>dispatch(whatevernameyouwant.removeIngredient(ingName))
  }
}

```
### Executing Asynchronous Code

* putting async code into redux world
* install redux-thunk, `npm install --save redux-thunk`
* import {createStore, applyMiddleware, compose} from 'redux';
* compose allows us to compose our own set of enhancers, middleware is just one kind of enhancer

### Adding Thunk as middleware
```js
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger, thunk)
));
```
### introduction to action creators 
* externalizing the dispatch action to a function,
* dispatch(actioncreator()), eg. dispatch(increment())

```js
//action creator
export const increment = () => {
  return {type:INCREMENT}
}
```

### Action Creators & Async Code
* payloads get passed into the action creator as arguments
* eg. onIncrement(val)=> dispatch(increment(val));
* import * as actionCreators from '';
* then in the dispatch(actionCreators.increment())

### Handling Asynchronous Code
* what thunk does for redux, instead of the reducer returning an action, it returns a function
which will eventually dispatch an action
* we create async action creators which will eventually dispatch synchronous ones
* the dispatch of synchronous should be executing function passing on from the async any arguments
* eg. async function, storeResult = (res)=>{ return dispatch=> {dispatch(saveResult(res))}}, 
* NB: the function receives dispatch as an argument,
* the async calls synchronous - saveResult=(res)=>{return {}}
* for async redux, import thunk from 'redux-thunk';    //this will be applied as middleware
* advanced store setup section under redux-devtools-exention on github

### Restructuring Actions
* separation of action creator functions from action types
* creating an index.js and exporting with `export {} from ''` syntax 
* now only need to `import * as actionCreators from 'somepath/index` 
* actions and reducers need access to the common actionTypes `import * as actionTypes from './actionsTypes';`

### Where to Put Data Transforming Logic
* up to you reducer or action creator is both okay

### Using Action Creators and Get State
* sometimes in your action creator you want access to state, 
* this actually is received as part of async action creator, 
* function receives dispatch BUT ALSO access to state function eg getState which we then call () to get state

```js
export const storeResult = (res)=>{
  return (dispatch, getState) => {
    const someCounter = getState().counter
    dispatch( somesyncfunction(res));
  }
}
```
### Using Utility Functions

* cleaning up reducers regarding imutability
* outsourcing the creating of oldstate/update property to utility function
* usage, `updateObject(state, { phoneBook: updatedArray });` pass in state, and object of prop we want to update 

```js
//store/utility.js

const updateObject = (oldObject, updateValues) => {
  return {
    ...oldObject, 
    ...updateValues
  }
}
```

### A Leaner Switch Case Statement.mp4

* externalizing the switch statement content to its own function, but still passing through the arguments it originally received,
* convention is to use same name as argument list but camelcase

```js
const addContact = (state, action) => {
  //logic handled here
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
    case actionTypes.ADD_CONTACT:
      addContact(state, action);
  }
```

### An Alternative Folder Structure
* our current project uses a central store, it is possible to have alternatives
* each container can have its own store folder with its actions and reducers js files,
* they are then combined later with combineReducers()

### Diving Much Deeper
* redux.js.org
* read immutable update patterns

---

## Adding Authentication to our Burger Project

```js
//action types
//store/actions/actionTypes.js
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
```
```js
//action creators
//store/actions/auth.js
import * as actionTypes from './actionsTypes';
export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};
export const authSuccess = authData => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		authData: authData
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

//async
export const auth = (email, password) => {
	return dispatch => {
		dispatch(authStart());
	};
};

```
```js
//containers/Auth/Auth.js
import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Mail Address'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		}
	};

	checkValidity(value, rules) {
		let isValid = true;
		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(
					event.target.value,
					this.state.controls[controlName].validation
				),
				touched: true
			}
		};
		this.setState({ controls: updatedControls });
	};

	submitHandler = event => {
		event.preventDefault(); //prevents reloading of page and event bubbling
		this.props.onAuth(
			this.state.controls.email.value,
			this.state.controls.password.value
		);
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}
		const form = formElementsArray.map(formElement => (
			<Input
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={event => this.inputChangedHandler(event, formElement.id)}
			/>
		));

		return (
			<div className={classes.Auth}>
				<form onSubmit={this.submitHandler}>
					{form}
					<Button btnType="Success">Submit</Button>
        </form>
      
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	};
};
export default connect(
	null,
	mapDispatchToProps
)(Auth);

```

### Getting a Token from the Backend

* goal: Getting a Token from the Backend
* using firebase, have access to a token via api
* firebase gives us authentication out the box, which we can reach certain api endpoints
* in firebase, under authentication => sign-in method ->enable email/password, 
* this allows user to sign up using their email address and password, and get a token
* where to send the email address and password details to get token? https://firebase.google.com/docs/reference/rest/auth
* note the different version numbers, google docs uses v1, the tutorials use v3...
* sign up with email/password https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  POST request to https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
* sign in with email/password https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
  POST request to https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

STEPS SIGN UP:
* we use the sign in instructions
* in the action creators, async function make the axios POST request
* the [API_KEY] should be replaced with the API key of the firebase project
* project --> next to project overview, options -> project settings -> web api key
* from the documentation, Request Body Payload (json like) 
  - email (string), password (string), returnSecureToken (boolean) should always be true
* the axios request returns a promise, 
* the response has: idToken, refreshToken and expiresIn, email
* and we handle that with .then() and .catch(err)
* a successful post with valid credentials will save user data under project -> authentication -> users

### Adding Sign-In
* adding a toggle to switch views between sign-up and sign-in
* manage state in the Components local state
* set default isSignup: true
* `<Button>` use a clicked={this.switchAuthModeHandler} and toggle this.state.isSignup
* add clicked={this.switchAuthModeHandler} handler
* form onSubmit={this.SubmitHandler}
* pass through isSignUp as argument in submitHandler 
* mapDispatchToProps() gets `onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))`

### Storing the Token.mp4

* store the token
* token allows us to access resources on server which are protected
* create a reducer reducers/auth.js
* reducer initalState = {token:null,userId:null, error:null, loading: false}p
* from the axios.post() get the response.data.idToken, and response.dat.localId
* pass on the response data to action creators: dispatch(authSuccess(response.data.idToken, response.data.localId)

### Logging Users Out.mp4
* logout after token will expire, 
* after AUTH_SUCCESS (response.data.expiresIn)
* create action creator checkAuthTimeout = (expirationTime) { return dispatch=>{ setTimeout(()=>{ dispatch(logout()) }, expirationTime)};}
* actionTypes.AUTH_LOGOUT
* export const logout = ()=>{ return {type: actionTypes.AUTH_LOGOUT}}
* reducer, handle logout by setting token:null, userId:null

```js
//containers/Auth/Auth.js
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
  }
  switchAuthModeHandler = () => {
		this.setState(prevState => {
			return { isSignUp: !prevState.isSignUp };
		});
  };
  
  <form onSubmit={this.submitHandler}>
    <Button btnType="Success">Submit</Button>
  </form>
  <Button clicked={this.switchAuthModeHandler}>switch to {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
```
```js
// store/actions/auth.js
//async
export const auth = (email, password, isSignUp) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};

		let url =
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJzYSyjWZ0D45Prfs_8h1BjuL_PWh_bOY';
		if (!isSignUp) {
			url =
				// note firebase v3 is diff from v1, v3: /identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAJzYSyjWZ0D45Prfs_8h1BjuL_PWh_bOY';
		}
		axios
			.post(url, authData)
			.then(response => {
				console.log(response);
				dispatch(authSuccess(response.data));
			})
			.catch(err => {
				console.log(err);
				dispatch(authFail(err));
			});
	};
};

```
```js
//reducers/auth.js
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}
const reducer = (state, action)=>{
  switch(action.type){
    case actionTypes.AUTH_START:
      return {}
  }
}
export default reducer;

```


### Accessing Protected Resources
* certain parts of pages need authentication to access specific resources
* using token to access protected resources
* in firebase -> database -> rules we originally set read and write access to true, update:
* giving access to ingredients but limiting access to orders.
* using tokens for authentication to gain access
* axios.get('/orders.json?auth=' + token)
* pass token in action creator
* token is stored in redux, mapStateToProps = (state)=>{
  token: state.auth.token
}
* class Orders, componentDidMount(){ this.props.onFetchOrders(this.props.token)}

```json
{
  "rules":{
    "ingredients":{
      ".read":"true",
      ".write":"true",
    },
    "orders":{
      ".read":"auth != null",
      ".write":"auth != null"
    }
  }
}
```

```js
//store/actions/order.js

export const fetchOrders = (token)=>{
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('/orders.json?auth='+token).
    then(res=>{})
  }
}
```
### Updating the UI Depending on Auth State
* if authenthicated, show logout
* else show authentication link
* NavigationItems is a functional component, and not container,
* use token as check if its null for authenticated or not
* add state to Layout (container) using mapStateToProps = state=>{
  return isAuthenticated : state.auth.token !== null
}
* which loads NavigationItems and pass into these nav components as props
* then render authenticate or logout button nav selectively depending on if props.isAuth or not

### Adding a Logout Link

* when clicked, clear token, dispatch action creator logout()
* redirect to starting page

### Forwarding Unauthenticated Users

* make it so that a check is done on some prop if navigation is shown or not, then show that menu item
* when logged in successfully (authenticated), redirect away from auth page
* connect Auth.js container to store with import {connect} from 'react-redux'
* containers/Auth/Auth.js import {Redirect} from 'react'; 
* in Auth container, render a redirect whenever authenticated with if(this.props.isAuthenticated){authRedirect = <Redirect to="/"/>} check

### Redirecting the User to the Checkout Page

* use a state like 'building' for checking whether user was building a burger, if so, redirect to checkout, otherwise to redirect to burgerbuilder
* add action type SET_AUTH_REDIRECT_PATH
* action creator setAuthRedirectPath= (path)=>{
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}
* export method in the index of actions
* auth Reducer 
```js
const setAuthRedirectPath = (state, action) => {
  return updateObject(state, authRedirectPath: action.path)
}
```
* add to switch action.types
case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)

### Persistent Auth State with localStorage

* trying to fix problem of losing logged in state if you refresh page, 
* using localStorage to persist state across sessions
* we need to track the token and when it expires (expirationDate)
* localStorage is baked into the browser so after axios post, 
* store/actions/auth.js auth action creator, axios.post() then(response=>) where we dispatch authSuccess use localStorage to set token and expiry date
* localStorage.setItem('token', response.data.idToken)
* const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
* and we re-wrap in new Date() to turn our calculation into a new Date() object
* note: new Date() without arguments give us current date, new Date() with arguments, gives us date we pass as argument
* note: use current time (.getTime()),
* note: we X1000 because javascript works in milliseconds, so we are converting to seconds here...
* localStorage.setItem('expirationDate', expirationDate)
* with this local storage set, we can check them to log user in if we have a token and it has not expired yet
* otherwise we clean up with the logout dispatch action
* store/actions/auth.js export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

#### fetching token when you log in
* should check this when application loads to log user in if we have token and still valid expirationDate
* App.js good for checking authentication status
* need a new action, we want to dispatch authSuccess() when we are logged in, but also execute checkAuthTimeout()
* note: what we retrieve from localStorage will be a string for expiration date, wrap with new Date() to work with date,
* note: authSuccess(response.data.idToken, response.data.localId) takes in these arguments
* localId we can get from firebase under 'Get user data', getAccountInfo endpoint
* POST method, request body payload idToken, response payload (kind - request type, users (array) - account associated with given firebase id token), first element (user) -> localId is the prop,
* we can also store it in local storage from the auth response from axios.post() call, localStorage.setItem('userId', response.data.localId);
* and remove it on logout() too localStorage.removeItem('userId')
* dispatch(checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds() )) - furture date minus current date all calc in seconds and the difference is expiry time
* now we can dispatch authCheckState if we have a valid user token
* export authCheckState in the store/actions/index.js 
* App.js - import { connect } from 'react-redux';
* import * as actions from './store/actions/index';
* App.js - const create mapDispatchToProps = dispatch => { return {onTryAutoSignup:()=> dispatch(actions.authCheckState()) }} 
* App.js - connect(null, mapDispatchToProps)(App);  //note this is FIXED in next lesson
* App.js call this.props.onTryAutoSignup(); in ComponentDidMount()

* //store/actions/auth.js
  export const authCheckState = (){
  return dispatch=>{
    const token = localStorage.getItem('token');
    if(!token){
      dispatch(logout());
    }else{
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
    }
    if (expirationDate > new Date()){
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId));
      dispatch(checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds() ))
    }
    else{
      dispatch(logout())
    }
  }
}


#### inspecting localStorate
* chrome developer tools -> application -> local Storage


### Fixing Connect + Routing Errors
* problem with router not working with connect() 
* solution: import {withRouter} from 'react-router-dom'
* wrap connect with withRouter(connect(null, mapDispatchToProps)(App))

#### fixing logout being called
* store/actions/auth.js export const authCheckState = () =>{}
* use.getTime() instead of using .getSeconds(), which returns time in milliseconds
* in checkAuthTimeOut = (expirationTime)=>{} we multiply by 1000, so in authCheckState we need to divide calculated answer by 1000
```js
export const authCheckState = () =>{
  ...

  dispatch(checkAuthTimeout( (expirationDate.getTime()- new Date().getTime() )/1000 ));
}
```

### Ensuring App Security
* localStorage can be accessed with cross-scripting attacks
* react and angular prevent cross-scripting attacks by default
* local storage should be safe, token expiry after 60min also helps
* firebase has a refreshToken which doesnt expire,
* on firebase site -> exchange a refresh token for an ID token ->, sending refresh token to api endpoint and you get back a new token
* this means you can check for the token being valid, if it isnt, take the refresh token and get a new one, 
but because it is a security risk to have never expiring token... and possible cross-scripting attacks, we dont do it.

### Guarding Routes

1. storing userId in any order we place, storing userId, this allows us to fetch orders by that user
2. only allowed access to the orders page, and checkout page, if you are logged in (cant access route manually via url unless logged in)

#### Guarding orders page so unauthenticated users cant access it
* because of the way React works, if we dont have the `<Route>` to the component, then we cant access that page
* with isAuthenticated setup in mapStateToProps, 
* redirect users for unknown routes, use import {Redirect} from 'react-router-dom' 
* add to unauthenticated users route `<Redirect to="/"/>`

```js
render(){
  let routes = (
    // unauthenticated users
    <Switch>
      <Route path="/auth" component={Auth}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Redirect to="/"/>
    </Switch>
  );
  if(this.props.isAuthenticaed){
    //authenticated users
    routes = (
    <Switch>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Redirect to="/"/>
    </Switch>
    );
  }

  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps))
```

### Displaying User Specific Orders
* can display user specific data on frontend by filtering user id, but then security flaw as u can inspect other orders,
* adjust orders so we attach userId to order then fetch specific orders from backend
* firebase has a '&orderBy="userId"&equalTo=' query param which allows us to order and filter by "userId"
* note: the "" for "userId" is neccessary
* &equalTo always referes to the key we are filtering by
* fix: add queryparams to store/actions/order.js fetchOrders() add queryParams 
* make sure you pass userId through from mapStateToProps and also dispatch via mapDispatchToProps
* also note: referencing props between mapStateToProps and mapDispatchToProps does not need the reference `this.props.[propname]`

* firebase side, we have to adjust our rules, to make a certain field indexible so firebase can search through it,
* adding ".indexOn": ["userId"]   //and in the array all the fields we want to let firebase search through


```js
export const fetchOrders = (token, userId)=>{
  return dispatch=>{
    dispatch(fetchOrdersStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'; 
    axios.get('/orders.json'+ queryParams)
  }
}
```

```firebase
{
  "rules":{
    "ingredients": {
      ".read":"true",
      ".write":"true"
    },
    "orders":{
      ".read":"auth != null",
      ".write":"auth != null",
      ".indexOn": ["userId"] 
    }
  }
}
```

## Testing

* what to test 

1. isolated units (reducer function, component functions)
2. conditional output, testing based on conditional output)

### Writing our First Test

* make sure jest is part of the package
* npm install --save enzyme react-test-renderer enzyme-adapter-react-16

#### testing functional components
* dependant mostly only on props it receives
* file extension .test.js this gets picked up by create-react-app
* describe(), takes 2 arguments (1. console output, 2. testing function)
* enzyme allows us to render standalone items for unit tests
* import {configure, shallow} from 'enzyme'; 
* shallow is way to render component without deeply rendering their nested content... helps with isolated tests
* import Adapter from 'enzyme-adapter-react-16'
* tests can be written with beforeEach() and afterEach helpers
* enzyme has helper setProps(), wrapper.setProps({isAuthenticated:true})
* each test runs independently of each other
* write tests based on what would break the behavior of the app

```js
//NavigationItems.test.js
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter:new Adapter()});

decribe('<NavigationItems/>', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<NavigationItems/>);  
  });

  it('should render two <NavigationItem/> elements if not authenticated', ()=>{
    expect(wrapper.find(NavigationItem)).tohaveLength(2);
  });

  it('should render three <NavigationItem/> elements if authenticated', ()=>{
    //wrapper = shallow(<NavigationItems isAuthenticated/>);  
    wrapper.setProps({isAuthenticated:true});
    expect(wrapper.find(NavigationItem)).tohaveLength(3);
  });
});
```

### Jest and Enzyme Documentations

* testing reading official documentation
* jest facebook.github.io/jest
* enzyme airbnb.io/enzyme/

### testing containers
* containers are connected to store
* dont need to test connection of connect()
* just simulate props
* export the container class so we can import it and this will 'strip' the connection to the store
* BurgerBuilder.test.js, import {BurgerBuilder} from './BurgerBuilder',
it now strips out the connection to store,
* shallow testing, requires you to receive all props as well used in the class,
ie. passing in  onIngredients={()=>{}} as a function to the component at beforeEach

```js
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BurgerBuilder} from './BurgerBuilder';
import {BuilderControls} from '../../components/Burger/BuildControls/BuildControls';

configure({adapter:new Adapter()});
describe('<BurgerBuilder}/>', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<BurgerBuilder onIngredients={()=>{}}/>)
  });

  it('should render BuildControls when receiving ingredients', ()=>{
    wrapper.setProps({ings:{salad:0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  })
})
```

### How to Test Redux
* mostly testing reducers if not putting too much logic in action creators
* reducers are pure functions so easy to test as there are not side effects

```js
//auth.test.js
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', ()=>{
  
  //testing that reducer should initialize to initial state
  it('should return the intial state', ()=>{
    expect(reducer(undefined, {})).toEqual({
      token:null,
      userId:null,
      error:null,
      loading:false,
      authRedirectPath:'/'
    })
  });

  it('should store the token upon login', ()=>{
    expect(reducer({
      token:null,
      userId:null,
      error:null,
      loading:false,
      authRedirectPath:'/'
    },{
      type:actionTypes.AUTH_SUCCESS,
      idToken:'some-token',
      userId: 'some-user-id'
    })).toEqual({
      token:'some-token',
      userId:'some-user-id',
      error:null,
      loading:false,
      authRedirectPath:'/'
    })
  });
  
})
```
---
## Deploying React Apps

### Deployment Steps
1. check and adjust Basepath if not serving from root path
  - this is importing when setting the router with <BrowserRouter basename="/my-app/">

2. Build and optimize Project
  - npm run build in create-react-app project

3. Server must always serve index.html (always in 404 cases)
  - returning index.html for unknown routes

4. upload to static server
  - aws server
  - github pages
  - firebase 

### Deploying on Firebase
* firebase has hosting 
* (need to npm install -g firebase-tools)
* firebase login
* firebase init
  - selecting features you want to use, select hosting
  - choose the project
  - choose public directory 'build'
  - configure as a SPA? /index.html - yes
  - build/index.html already exists, overwrite? - no
  - .firebaserc contains information about project
  - .firebase.json contains setup configuration
* firebase deploy

---

## Bonus Working with Webpack

* create react app is recommended for SPA's
* Webpack is a bundler / optimization / hook-in loaders / transform by transpile javascript

### How webpack works

* root entry point (webpack analyzes dependencies)
* loader for specific file type help with transformations
* output into a bundle

### Basic workflow requirements
* next gen js support
* jsx support
* css auto prefixing
* image imports
* optimize code

### Project & npm Setup
* npm init
* npm install --save-dev webpack webpack-dev-server

### Creating a Basic Folder & File Structure

src/index.html (html5 boilerplate)
src/index.css
src/index.js
src/App.js
src/assets/
src/containers/
src/components/

### Creating the Basic React Application

```js
// index.html
<body>
  <div id="root"></div>
</body>

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

//index.css
body{
  margin: 0;
  padding: 0;
  font-family:sans-serif;
}

//App.js
//routing
//lazy loading
components/PizzaImage/PizzaImage.css
components/PizzaImage/PizzaImage.js
containers/Pizza.js
containers/Users.js
hoc/asyncComponent.js       //lazy loading

//components/PizzaImage/PizzaImage.js
import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props)=>{
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg}/>
  </div>
}

//components/PizzaImage/PizzaImage.css
.PizzaImage{
  text.align: center;
  margin: 20px auto;
  height:300px;
  width: 80%;
}

.PizzaImg{
  max-width:100%;
  max-height:100%;
}

//containers/Pizza.js
import React, {Component} from 'react';
import PizzaImage from '../components/PizzaImage/PizzaImage';
class Pizza extends Component{
  render(){
    return (
      <div>
        <h1>The Pizza</h1>
        <PizzaImage/>
      </div>
    )
  }
}
export default Pizza;

//containers/Users.js
import React, {Component} from 'react';
class Users extends Component{
  render(){
    return (
      <div>
        <h1>The Users</h1>
        <p>users copy</p>
      </div>
    )
  }
}
export default Users;

//src/App.js
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Users from '../containers/Users';
import asyncComponent from './hoc/asyncComponent';
// import Pizza from '../containers/Pizza'; //will use lazy loading with asyncComponent

const AsyncPizza = asyncComponent(()=>{
  return import('./containers/Pizza.js');
});

class App extends Component{
  render(){
    return (
      <div>
        <div>
          <Link to="/">Users</Link>|
          <Link to="/pizza">Pizza></Link>
        </div>
        <div>
          <Route path="/" exact component={Users}/>
          <Route path="/pizza" component={AsyncPizza}/>
        </div>
      </div>
    );
  }
}

//hoc/asyncComponent.js
import React, {Component} from 'react';
const asyncComponent = (importComponent) =>{
  return class extends Component{
    state={
      component:null
    }
    componentDidMount (){
      importComponent()
      .then(cmp=>{
        this.setState({component:cmp.default})
      });
    }

    render () {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    } 
  }
}
export default asyncComponent;
```
### Installing Production Dependencies

* npm install --save react react-dom react-router-dom

### Setting Up the Basic Webpack Config

* install as dev-dependencies webpack and webpack-dev-server
* package.json "scripts":{
  "start": "webpack-dev-server"
}
* webpack.config.js webpack will automatically look for this SPECIFIC file
* entry points to where journey starts, point to index.js
* devtool define which kind of sourcemaps webpack should generate
* const path = require('path'); // resolve() allows us to generate absolute path
* path.resolve(__dirname, 'dist'), __dirname refers to directory this is run in, ie the project folder, and append 'dist' folder

### Adding File Rules

* making sure webpack appends .js to imports, use resolve:{
  extensions: ['.js','.jsx']
}
* loaders are configured for different file types using module:{}
* module test specific file types with regular expression to apply certain loaders

### introduction to Babel
* babel for js npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-env
* create file in root folder .babelrc, babel configuration file webpack will automatically read, it has a json configuration,
* here we define presets

### Adding CSS File Support
* test:/\.css$/,
* 'loader' is shortform, 'use' is for multiple loaders or loader with config
* 'use' takes an array of loaders we want to apply
* npm install --save-dev css-loader style-loader
* css loaders are applied from right-to-left (bottom-up)
* 'style-loader' is used to extracts code from css and inject into top of html
* loader:'css-loader', {loader:'css-loader', options: {
    modules: true,
    localIdentName:'[name]__[local]__[hash:base64:5]'
  }},
* 'localIdentName' is how to name the files uniquely
* 'postcss-loader' is for adding auto prefixing, npm install --save-dev autoprefixer
* const autoprefixer = require('autoprefixer'); autoprefixer() takes a list of browsers to configure, we can get this from .babelrc and auto add pre-fixing
* if we load any loaders before css-loader, css-loader needs to know about this, options:{importLoaders:1}

### Creating Rules for Images
* npm install --save-dev url-loader
* url-loader, if images are below a certain threshold we define, it will convert them into data-64 urls we can inline, 
* files above the limit(bytes), will be copied to our output folder and a link will be generated that we can use for our components
* we use query params because then we call use a fallback loader for files larger than the threshold we specify
* npm install --save-dev file-loader
* &name= is the path to put images inside dist folder,

### Lazy Loading / Code Splitting
* under module.exports = {}, output:{ chunkFilename:''}
* npm install --save-dev babel-plugin-syntax-dynamic-import , this will make sure Babel understands the chunking syntax
* in .babelrc add "plugins":["syntax-dynamic-import"]
* npm install --save-dev babel-preset-stage-2, and add "stage-2" as a preset

### Injecting the Script into the index.html File
* npm install --save-dev html-webpack-plugin will help us inject our bundled .js into the html
* webpack.config.js, const HtmlWebpackPlugin = require('html-webpack-plugin')
* plugins:[
    new HtmlWebpackPlugin(
      {
        template: __dirname+'/src/index.html',
        filename:'index.html',
        inject:'body'
      }
    )
  ]

```.babelrc
{
  "presets":[
    ["env",{
      "targets":{
        "browsers":[
          "> 1%",
          "last 2 versions"
        ]
      }
    }],
    "stage-2",
    "react"
  ],
  "plugins":[
    "syntax-dynamic-import"
  ]
}
```
```js
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:'./src/index.js',
  output: {
    path:path.resolve(__dirname, 'dist'),   //important for webpack to know if root or nested folder
    filename:'bundle.js',     //how our file should be named 'bundle.js'
    chunkFilename:'[id].js',
    publicPath: '',         //where assets should be stored
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader' ,
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        exclude: /node_modules/
        use: [
          {loader:'style-loader'},
          {loader:'css-loader', options: {
            importLoaders:1,
            modules: true,
            localIdentName:'[name]__[local]__[hash:base64:5]'
          }},
          {
            loader:'postcss-loader',
            options:{
              ident:'postcss',
              plugins:()=>[
                autoprefixer({
                  browsers:["> 1%",
          "last 2 versions"]
                })
              ]
            }
          },
          {
            test:/\.(png|jpe?g|gif)$/,
            loader:'url-loader?limit=8000&name=images/[name].[ext]'
          }

        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        template: __dirname+'src/index.html',
        filename:'index.html',
        inject:'body'
      }
    )
  ]

};
```
### Creating the Production Workflow
* npm run build build production version.
* create a file webpack.prod.config.js
* need to configure to point to this file,
* adjustments:
  - devtool: remove '-eval'
  - plugins: add uglify which is built into webpack by import webpack into webpack.prod.config.js, 
  - new webpack.optimize.UglifyJsPlugin()
* add build script in package.json "build":"webpack --config webpack.prod.config.js --progress --profile --color"
* npm install --save-dev rimraf, this allows us to delete file/files /folder at start of build process, 
* add 'rimraf dist' to build command

```js
//webpack.prod.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry:'./src/index.js',
  output: {
    path:path.resolve(__dirname, 'dist'),   //important for webpack to know if root or nested folder
    filename:'bundle.js',     //how our file should be named 'bundle.js'
    chunkFilename:'[id].js',
    publicPath: '',         //where assets should be stored
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader' ,
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        exclude: /node_modules/
        use: [
          {loader:'style-loader'},
          {loader:'css-loader', options: {
            importLoaders:1,
            modules: true,
            localIdentName:'[name]__[local]__[hash:base64:5]'
          }},
          {
            loader:'postcss-loader',
            options:{
              ident:'postcss',
              plugins:()=>[
                autoprefixer({
                  browsers:["> 1%",
          "last 2 versions"]
                })
              ]
            }
          },
          {
            test:/\.(png|jpe?g|gif)$/,
            loader:'url-loader?limit=8000&name=images/[name].[ext]'
          }

        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        template: __dirname+'src/index.html',
        filename:'index.html',
        inject:'body'
      }
    ),
    new webpack.optimize.UglifyJsPlugin()
  ]

};
```
```json
"scripts":{
  "build":"rimraf dist && webpack --config webpack.prod.config.js"
}
```
---
## NextJS
* enforced folder structure so routes generated automatically
* automatic code splitting
* we dont use react-router with NextJS, every .js file becomes a route in 'pages' folder, you can have 'index.js' files to point to a folder in the url
* we typically use functional, stateless components that dont manage state,
* server side rendering out the box for SEO
* find nextJS on github - requires react16

### Setting Up a Project
* npm init
* npm install --save next react react-dom
* add next scripts to package.json
```
"scripts":{
  "dev":"next",
  "build":"next build",
  "start":"next start"
}
```
### Understanding the Basics
* links, import Link from 'next/link';
* to add a link `<Link href="/auth"><a>Auth</a></Link>`, note we use Link element AND `<a>` element, behind the scenes `<a>` receives href from `<Link>`
* if we have an index.js file NextJS will automatically load that
* imperatively navigating, import Router from 'next/router';
```js
import Router from 'next/router';
import Link from 'next/link';

<p> goto <Link href="/auth"><a>Auth</a></Link></p>
<button onClick={()=>Router.push('/auth')}>Go to Auth</button>
```

### Next.js & Components & Pages
* pages folder gets routes,
* can still have 'components' folder
* still import components to 'pages' folder

```js
//components/User.js
import React from 'react';
const user = (props)=>(
  <div>
    <h1>{props.name}</h1>
    <p>Age:{props.age}</p>
  </div>
)
export default user;
```
### Styling our App in Next.js
* nextJs has its own way of styling REACT
* but it doesnt have access to CSSModules, but you can have scoped styling using styled-jsx
* create style element tags with the opening tag a jsx attribute and content starting with {``}

```js
<style jsx>{`
  div{
    border:1px solid #eee;
  }
`}
</style>
```
### Handling (404) Errors

* github under custom error handling
* create your own error handler file with _error.js

```js
// pages/_errors.js
const error = ()=>{

}
export default error;
```

### A Special Lifecycle Hook
* classed based component has special lifecycle hook getInitialProps()
* getInitialProps() is static async function, that receives an argument that describes context of application
* the function runs on the server, (we dont see on console of browser), but wee see it on the server console, 
* can be used to initialize app before it loads
eg. fetch data from database, and then prepopulate the props the component will receive
* context has the following properties: 
  - pathname, 
  - query, 
  - asPath, 
  - req, 
  - res, 
  - jsonPageRes, 
  - err

```js
import React, {Component} from 'react';
class IndexPage extends Component{
  static async getInitialProps(context){
    console.log(context);
    return {appName: "Super App"};
  }

  render(){
    return ();
  }
}
export default IndexPage;
```
### Deploying our App
* need a hosting service that uses node.js,
* elastic beanstalk, heroko 
* deploy whole project on node ready server,
* execute npm start on server

---
## Animations in React Apps

* react-transition-group is an animation package (3rd party)
* npm install --save react-transition-group 
* import Transition from 'react-transition-group/Transition';
* makes use of `<Transition>` tag and wrap what we want to animate
* set in={} prop, and the result whether true/false de cides if elements should be shown or not
* timeout={} how long animation should be played (ms), time it takes to switch between the 4 states
* transition component manages 4 internal states: ENTERING, ENTERED, EXITING, EXITED
* withint the `<Transition>` tag, we have access to 'state' via anonymous function received as a prop, states `entering, entered, exiting, exited` and it basically loops through these states taking the timeout into account
* mountOnEnter
* unmountOnExit
* then showing or hidding based on props.show === "entering" or props.show==="exiting"
* can move the whole `<Transition>` into the component

### Animation Timings
* pass an animation object with enter and exit props
* animationTimings = {enter:300, exit:1000}
* then plug into <Transition timeout={animationTimings}>

```js
state = {
  showBlock: false
}
<button onClick={()=>{this.setState(prevState=>{
  showBlock = !prevState.showBlock
})}}>Toggle</button>
<br />

<Transition 
  in={this.state.showBlock} 
  timeout={300} 
  mountOnEnter 
  unmountOnExit>
{
  state=>(
  <div style={{
    width:100; 
    height:100; 
    backgroundColor:red, 
    transition:'opacity 1s ease-out', 
    opacity: state=== 'exiting'? 0:1 }}>
  </div>
  )
}
</Transition>
```

### The CSSTransition Component
* sometimes you dont want to use state to control/manage transition animation
* we will be using prefined css classes for animation state, 
* import CSSTransition from 'react-transition-group/CSSTransition';
* CSSTransition doesnt use a function {state=>{}} , it only receives JSX between `<CSSTransition>`
* we add 'classNames' where we define what classes should be added to the wrap JSX element, depending on the state of the transition, 
* new classes get merged with the wrapping class
* the CSSTransition component adds classname classes to the 'classNames',
eg. whatever you name here, eg 'fade-slide', 
* CSSTransition, if we name it: fade-slide
* then these classes get added as CSS to which we can use them to define what happens in this state
  * fade-slide-enter          
  * fade-slide-enter-active
  * fade-slide-exit
  * fade-slide-exit-active
* -enter and -exit are only available for 1 frame, so they can be used for initialization
* put animation transitions on the -active classes eg. animation: openModal 0.4s ease-out forwards;
* this removes the need to manually add classes manually and then .join(' ') the classes

```js
<CSSTransition classNames="">
  <div className="Modal">
  </div>
</CSSTransition>
```

```css
/* Modal.css */
.fade-slide-enter{

}

.fade-slide-enter-active{
  animation: openModal 0.4s ease-out forwards;
}

.fade-slide-exit{

}

.fade-slide-exit-active{
  
}
```
### Customizing CSS Classnames

* passing a js object to CSSTransition classNames={{
  enter: ''
  enterActive: 'ModalOpen'
  exit: ''
  exitActive: 'ModalClosed' 
  
  //used for first time rendered to dom...
  appear:
  appearActive:
}}

* defining your own classes to be used for transition