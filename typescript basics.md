# Typescript

## Basics

- install typescript via npm globally
- vscode typescript extension
- create typescript config file with tsc --init
- webpack can be used for test server 'webpack.config.js'
- typescript uses lowercase types whereas Javascript uses uppercase
- access variables in a strings via
  `` `${variablename}` ``
- 'this' keyword is in the context from which it is called, the parent object
- union type allows options, 1 | 2 | 3
- OPTIONAL argument eg. quantity?:number
- object type eg. pizza:{name:string, price:number; getName():string }
- array types  
   eg. number array - let sizes:number[],  
   eg. string array - let sizes:string[]
- generic type `let toppings: Array<string>`
- tuple type - datasctructure inside array of different types
  eg. let pizza:[string, number, boolean] , order is important
- type alias
  - reference variable to a type we can use elsewhere in app
  - can assign anything to a type  
    type Size = 'small' | 'medium' | 'large';  
    let pizzaSize : Size
- type assertion
  when we tell typescript we know more about what we expecting back from server than Typescript

### type

```
type Pizza = {name:string, toppings: number};
const pizza = {name: 'Blazing Inferno', toppings: 5};
const serialized = JSON.stringify(pizza);   //makes it a string
NEW WAY
    return (JSON.parse(obj) as Pizza);

OLD WAY
//default return type of 'any' we tell it we return a 'Pizza'
function getNameFromJSON(obj:string){
    //to tell Typescript we know what we expect, wrap it in ()
    return (<Pizza>JSON.parse(obj));
}
```

SYNTAX for type returning string array:  
type getAvailableSizes = () => string[];

### enums

- allow reverse mapping
- enums return numeric values
- enums can stack together with the same name declaration

```
enum Sizes{ Small, Medium, Large }
//stacking name
enum Sizes{ ExtraLarge=3 }
```

compiles down to self invoked function
called like
`console.log(Sizes.Large, Sizes[Sizes.large])`

- to get numeric value like 2, we use Sizes.Large
- to get value like "Large", use Sizes[Sizes.large]

```
var Sizes;
(function(Sizes){
    Sizes[Sizes["Small"]=0] = "Small";
    Sizes[Sizes["Medium"]=1] = "Medium";
    Sizes[Sizes["Large"]=2] = "Large";
})(Sizes || (Sizes = {}))

```

### interface

can use the extending of classes but types cannot

```
interface Pizza{
    name: string;
    sizes: string[];
    getAvailableSizes():string[];
}

function createPizza(name:string, sizes:string[]):Pizza{
    return{
        name,
        sizes,
        getAvailableSizes(){
            return this.sizes;
        }
    };
}
```

- inherit an interface with 'extends'
- interfaces can also have optional properties

```
interface Pizza{
    toppings?:number
}
```

---

#### interface index signatures

- key/value look up structure
- allows data structures to have dictionary index like behavior

```
interface Pizza extends Sizes{
    [key:number]:string;
}
```

allows us to have something like

```
var pizza[1] = 'xyz';
```

### classes

initialize properties directly from constructor by declaring as private

- private, public (by default), readonly
- getters and setter functions

```
    get availableSizes(){}

    set availableSizes(sizes:string[]){
        this.sizes = sizes;
    }
```

usage:

```
console.log(sizes.availableSizes);
sizes.availableSizes = ['medium', 'large']
console.log(sizes.availableSizes);
```

```
class Pizza{
    name: string;
    toppings: string[] = [];
    constructor(name:string){

    }
}
```

shorthand syntax

```
//remove name:string;
constructor(private name:string){

}

```

- class inheritance with 'extends' and call super() in constructor
- abstract classses prevent instantiation, it is a class we just ONLY want to extend from

```
abstract class Sizes{}
```

- protected members (properties) in the parent class, can be accessed in the class extending it.

```
protected sizes: string[]
```

### interfaces

- use 'implements' keyword

* interfaces can extend other interfaces
* public members can be added to interface
* private and protected members cannot be added

```
abstract class Sizes implements SizesInterface{

}
```

- use single declaration for getter/setter eg. availableSizes

```
interface SizesInterface{
    availableSizes:string[];
}
```

### static properties and methods

- they can be accessed directly without creating a new instance of the class

```
class Coupon{
    static allowed = ['Pepperoni', 'Mushroom'];
    static create(percentage:number){
        return `PIZZA_${percentage}`;
    }
}

console.log(Coupon.create(25));
```

---

### generics <>

- create a dynamic type by using a placeholder

* allow type inference on creating class type

```
class List<T>{
    private list: T[];

    addItem(item:T):void{
        this.list.push(item);
    }
    getItem():T[]{
        return this.list;
    }
}
class Pizza{
    constructor(private name:string, private price:number){}
}
const list = new List<Pizza>();

class Coupon{
    constructor(private name:string){}
}

const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon(`COUPON25`));
```

### function overload

- declaring different ways we can use a function
  by declaring arguments and return types

```
function reverse(str:string):string;
function reverse<T>(arr:T[]):T[];
function reverst<T>(stringOrArray:string | T[]):string | T[]{
    if(typeOf stringOrArray === 'string'){
        return stringOrArray
        .split('')
        .reverse()
        .join('');
    }
    return stringOrArray.slice().reverse();
}
```

```
reverse('Pepperoni');
reverse(['bacon', 'ham', 'tomato'])
```

---

## tsconfig.json

- removes the need for command line script parameters

```

tsc --init

```

```

{
"compilerOptions":{
"target": "es5",
"module": "commonjs",
"strict": true,
"outDir": "dist"
}
}

```

## webpack.config.js

- entry - source entry
- output - output file,
- \_\_dirname is a global variable referencing project folder
- resolve - array of file extensions to look at
- module - rules for this module (an array) - 'test' against different file extensions, use regular expression with \$ denote end - 'use' we supply different loaders so it can compile

```

module.exports = {
entry: './src/app.ts',
output: {
filename: 'app.js',
path: \_\_dirname + './dist'
},
resolve:{
extensions: ['.ts', '.js']
},
module:{
rules:[
{ test: /\.ts$/, use: 'awesome-typescript-loader' }
]
},
devServer:{
port: 3000
},
};

```

```

```

```

```

```

```

```

```
