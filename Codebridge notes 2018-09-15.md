## Meetup codebridge ES6

- why es6?

- [tiny.cc/es6-sept]()
- [tiny.cc/es6-sa]()

webpack - transpile module resolution

gulp and grunt competitior are build processors
probably need to still 'plugin' this to something
-configurable

-can also use npm scripts to 'replace' gulp and grunt

webpack has purpose for more specific plugins

parcel - has module resolution AND babel

---

## lookup

- stringTag
- TDZ - temporal dead zone (what happens before something is defined)
- hoisting of types

* alicia de wit presentation

## mutution vs resassign

-let tells you you have declared something already if you recreate the same let

- const Objects can be mutated...and their properties can be mutated

- const cant be reassigned

- side effects of var vs const and let

* you can do everything const and let can do..

## function expression

//named function gets hoisted
function something(){}

//function expression is specific from point of declaration
const something = function(){}

```
const cat = {
  name:'New',
  catName:function(){
    console.log(this.name); //binds to cat object itself
  }
}
```

```
function example(){
  console.log(this);
}

//this - refers to the parent of example() which is window
```

## ES6 shorthand

```
const name = 'clark';
const age = 10;

const normalAssign = {
  name:name,
  age:age,
}

//es6 shorthand takes name and age and their values

const shorthandAssign = {
  other:1,
  name,
  age,
}
```

## destructuring

//renames text with myText

```
function example({text:myText}){
  const text = '';
  console.log(myText);
  return text;
}

example({text:1})
```

//below: firstval refers to value 1
//...restvals refers to the remainder of the props

```
const people = ['1', '2', '3'];
const [firstval, ...restvals]
```

## object iteration

//below iterates through an array and does value comparison
//the find function destructs what is passed and looks only at the value prop

```
console.log([
  {value:1},
  {value:2}
].find(
  ({value})=> value === 2)
);
```

## forloop with ES6

- use .reverse() to reverse an array

//for-of loop

### through an array

//use 'of' keyword for value in arrays

```
for(const location of sources){
  if(location === 'london'){
    return days['london'];
  }
  if(days[location] > days[highest]){
    highest = location;
  }
}
return days[highest];
```

### through an object

- using an array of keys

//looping through objects use 'in' for key
const order = {
item: {
location:'',
type:'',
supplier:''
}
};

```
const example = {
  name:'A',
  age:31,
  gender:'Male'
}
```

//looping through the object

- 'in' can loop through anything,

```
for( const key in example){
  document.write(` ${example[key]}`)
}
```

//looping with 'of' as more concise

- creates an array of keys

```
const keys = Oject.keys(example)
console.log(keys);
```

for(const key of keys){
document.write(`${example[key]}`)
}

```
const calcWaitTime = sources=>{
  const keys = Object.keys(sources);
  let highest = 'cape town';

  for(const sku in sources){
    if(sources[sku].location === 'london'){
      return days['london']
    }
  }
}
```

## generators

//function that runs to a certain point and returns something

```
function* name(){}
```

# symbol

can only be accessed from a direct link to it...
????

## promises

- promise pass function with 'resolve' and 'reject' params

- .catch to handle errors

- chain promises '.then' and resolve all 'Promise.all()'

- promises customize the flow of code execution

- used for async management 'semantic code'

```
if(!text){
  reject(new Error('error message'))
}
```

- resolve tells promise has fininshed 'the return of the function'

```
resolve(result);
```

## fetch

//convert to text

```
fetch('api url')
.then(response => response.text().then(data => console.log(data))).catch();
```

// to json

```js
fetch('api url')
	.then(response => response.json().then(data => console.log(data)))
	.catch();
```

```js
//checking if response.ok
const fetchWrapper = url =>{
return new Promise((resolve, reject) => {
  fetch(url)
    .then(response => {
      if(!response.ok){
        reject('fetch returned ok false')
      }
      response.json().then(data => resolve(data))
    })
  }
}

fetchWrapper('http://www.someurl')
.then(data=> {
const weirdData = data.split(' ');
console.log(weirdData);
})
```

## modules

- named imports and exports
