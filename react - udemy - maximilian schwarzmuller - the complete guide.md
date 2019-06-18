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
