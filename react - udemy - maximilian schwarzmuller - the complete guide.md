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

- properties are variables attached to classes
- methods are functions attached to classes

---

# JSX

- wrap in () to write in multiple lines
- react functions written with capital letter can be rendered as an element
- eg. `function Person() can be reference in JSX via <Person/>`
- we use 'className' instead of 'class'
- props received from function(props) arguments
- single curly brackets {} to access props eg. `{props.name}`
- ReactDOM.render() should render a single element ONLY

```

```
