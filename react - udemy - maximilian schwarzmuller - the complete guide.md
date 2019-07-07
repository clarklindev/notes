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
  - comment/comments : to make a block comment in JSX the correct syntax is wrap with {/\* \*/}

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

- use <header><nav><ul><li><a href="/">
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
- enable routing in react app (in index.js or app.js)
- (app.js) import {BrowswerRouter} from 'react-router-dom';
- wrap the part of app which should be able to render routes with <BrowserRouter>
- the file with dynamic content that will be loaded must import { Route } from 'react-router-dom';
- <Route> with 'path' property
- usage: <Route path="/" exact/>
- <Route exact> fixes problem with route matches that start with "/" and makes this route specific for exact match
- without 'exact' content is rendered for all paths that contain path='/' match
- eg. <Route path="/" render={()=><h1>Home2</h1>}/> is rendered on all routes that contain '/'
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

## Using Links to Switch Pages

- import { Route, Link } from 'react-router-dom';
- replace <a> tag with <Link>
- use 'to' property to tell router where to link to (:string)
- to can also be js object where we configure {{pathname: '/new-post', hash:'#submit', submit:'?quick-submit=true'}}
  - 'pathname' is the path (string)
  - 'hash' tag is jumping to a id specific point eg. hash:'#submit'
  - 'search' allows query params eg. submit:'?quick-submit=true'

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

- import {NavLink} from 'react-router-dom';
- <Link> replaced with <NavLink> to allow us access to additional properties allowing styling
- <Link> and <NavLink> get rendered as <a href=""> tags automatically behind the scenes
- now a default 'active' class is added to the dom of the active route which we can style
- just as <Route path="/" exact /> we can specify exact on <NavLink> match for root /
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
- when defining the <Route path="/:dynamicname">
- paths are parsed top-down calling the first match (specific to less specific) eg. /new-post is more specific that /:id
- wrap the DOM html part with <Link to={'/'+post.id}> <Post clicked={()=> this.postSelectedHandler(post.id)}/> </Link>
- up to this point the app should allow user to click on a Post <Link> and the url should update

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

- the router is routing with <Route path="/:id" component={FullPost}>
- extracting what we need from browser url
- since the way posts are loaded changes, we now clicking on something and the url updates,
- we are now not looking for an update, but rather if component mounted
  we change from componentDidUpdate() to componentDidMount()
- we can now extract from the route which matched to <Route path="/:id"> the dynamic url this.props.match.params.id
- the .id is the same as what we setup <Route path="/:id" />

```js
// FullPost.js

  // componentDidUpdate(){}

  componentDidMount(){
    if(this.props.match.params.id){
      if (
				!this.state.loadedPost ||
				this.state.loadedPost !== this.props.match.params.id
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
import {Link} from 'react-router-dom';

postSelectedHandler = (id) =>{
  // this.props.history.push({pathname:'/'+id});
  this.props.history.push('/'+id);
}

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