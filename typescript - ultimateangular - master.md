# Typescript master class

- this keyword is in the context of from where it is called
* with 'const', we can mutate the value but cannot reassign the value
* Object.freeze() returns an object that can no longer be changed

## call, apply, bind

### call

- call is for comma separated parameter
- 'call' can change the 'this' context from which the call is called
- arguments if any, after context argument, is comma separated, separately defined

```
myFunction.call(myObject, 'arg1', 'arg2'); //context of myObject
myFunction.call([], 'arg1', 'arg2'); //context of array
```

### apply

- 'apply' vs 'call'
- apply is for array parameter
- 'apply' is like 'call' but the arguments is a single array as the argument

### bind

- ahead of time binding to change context
- call and apply invoke the function, bind does not
- context change is already set up,
- returns a new function in a new context

```
const bindFunction = myFunction.bind(myObj)
bindFunction('ABC','DEF');
bindFunction('123','456');

```

## Arrow functions and Lexical Scope

- each new function gets a new scope context and new "this"

* lexical scope means variable is only accessible from scope within which it is defined
* setTimeout creates a new scope, so usually we have a problem of 'this' referencing 'window'
* arrow function => ignores/doesnt bind the 'this' value to a new scope change,

```
setTimeout(()=>{
  console.log(this);
}, 0);
```

### typing the 'this' keyword and 'noImplicitThis'

- in app.ts "noImplicitThis" = true, means 'this' keyword cannot be inferred or type 'any', typescript flags it
- typing 'this' keyword can be done by passing it in the function as the first parameter

* put it as the first argument and give a type eg HTMLAnchorElement

```
const elem = document.querySelector('.click');
function handleClick(this:HTMLAnchorElement ,event:Event){
  event.preventDefault();
  console.log(this.href);
}
elem.addEventListener('click', handleClick, false);
```

## Type Queries

### typeof type queries

* type query is a 'typeof' operator used with type declarations
* its like saying create a Person which is a typeof a specific structure
* it 'copies' the DNA structure of another structure and uses it as its type
```
const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;

const anotherPerson:Person = {
  name: 'John',
  age: 30
};

```
<!-- also valid -->
```
const anotherPerson: typeof person = {
  name: 'John',
  age: 30
};
```
### keyof index type queries

* returns keys made up of another structure
```
const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;   //type PersonKeys = "name" | "age"
```

```
<!-- allows us to use the union keys of PersonKeys and looks up their type in Person-->
type PersonTypes = Person[PersonKeys]     //type PersonTypes = string | number
```
* PersonTypes takes the values of the keys (PersonKeys) which are string literals "name" | "age" and looks at keys in 'Person' and takes those actual types for PersonTypes.
* so "name" is associated with a string and "age" is associated with a number
* type PersonTypes return a new union type of real types string | number

### keyof generics and lookup types
* following the above theory,
* demonstrating power of generic types
* asking for the property from an object
* K extends keyof T, means K has to exist in T, k is a subtype of T (lookup type)
```
const person = {
  name: 'Todd',
  age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;   //type PersonKeys = "name" | "age"
type PersonTypes = Person[PersonKeys]     //type PersonTypes = string | number
```
* keyof T returns 'name' | 'age', K extends this means K must be one of the two
* returns type for obj[key]
```
function getProperty<T, K extends keyof T>(obj: T, key: K){ 
  return obj[key];    //returns type
}

const personName = getProperty(person, 'name');
//personName is a type of 'string' as Typescript picks it up

```
### mapped types

* transforming one type into another type
```
interface Person{
  name: string;
  age: number;
}

interface ReadonlyPerson{
  readonly name: string;
  readonly age: number;
}

const person: Person = {
  name: 'Todd',
  age: 27
};

```