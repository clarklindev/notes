# Typescript master class

- this keyword is in the context of from where it is called

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
