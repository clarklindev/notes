# ES6

## ES6 - Template literals / template strings

* remove the need for concatenation of strings using backticks `
* allows coding on multiple lines 
* can take in expressions
* bind to data ${name} or functions ${makeUppercase('Hello')}
which removes the need for breaking out of string to reference variable 
eg. ('' + name + '')

.html  
```
<div id='template'>
```
.js
```  
let name = 'John';

function makeUppercase(word){
  return word.toUpperCase();
}


//this is a template literal
let template = 
`<h1>this is a simple template</h1>

${name},
${makeUppercase('Hello')}
`

document.getElementById('template').innerHTML = template;
```

---
## ES6 - String and Number methods

STRINGS

```
let theString = 'Hello, my name is Brad and i love javascript';
```

### startsWith()
can have 2 parameter, which position to start check..

### endWith()
can have 2 parameter, which position to end check (checks in reverse).

### includes()
checks to see if it includes letters we specify

### repeat()

```
console.log(theString.startsWith('Hello')); //true
console.log(theString.startsWith('Javascript')); //true
console.log(theString.includes('Brad')); //true
console.log(theString.repeat(4)); //prints 4 times
```
---

## NUMBER

### hex
console.log(OxFF);

### binary
console.log(0b101011);

### octal
console.log(0o543);

### isFinite
console.log(Number.isFinite(2));	//true

### isNaN
console.log(Number.isNaN('string'));	//false

### isInteger
console.log(Number.isInteger(2));	//true

---
## ES6 - Default params and spread operator

### DEFAULT PARAMS

```
function greet($greeting = "Hello World"){
console.log($greeting);
}
```

greet(); //prints 'Hello World'

==================================
## SPREAD OPERATOR(s3dots) ...
* ...
* spread array out - outputs individual elements
* can be used for joining contents of array
* used to allow an expression to be expand in places where multiple arguments are expected

eg. 
```
var nums1= [1,2,3];  
var nums2= [nums1, 4,5,6]; //if we do this we get nums1 as a single item in nums2,
```
```
var nums1= [1,2,3];
var nums2= [...nums1, 4,5,6]; //so we spread it out with ...
```
```
var nums = [3, 5, 7];
function addNums(a,b,c){}
```
and we want to pass contents of nums into addNums()

we just call addNums(...nums); //because its expecting 3 parameters
```
let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test(){
console.log(args1, ',' + args2);	
}
```
ES5:
test.apply(null, args); 

ES6:
test(...args1, ...args2);	//spreads it out

---
## ES6 - Set, Map, WeakSet, WeakMap

## Set 
- the set data structure allows us to set unique values of any type, 
- each entry in set is individual value
- eliminates duplicates, sets do not have 2 items of same name in Set
- .add() can be chained, .delete() cannot be chained
- .clear() removes every element in Set
- .has() can check if value is in set

```
let myArray = [11,12,35,66];
let mySet = new Set(myArray);

console.log(mySet); //{11,12,35,66}
mySet.add('100'); //{11,12,35,66, '100'} 
mySet.add({a:1, b:2})';	//{11,12,35,66, '100', {a:1, b:2}} 

mySet.delete(12); //{11,35,66, '100', {a:1, b:2}} 
mySet.clear();	{}

mySet.add(2);

mySet.has('100');	//false because we called clear()

console.log(mySet.size); //1

mySet.forEach(function(val){ //logs every entry of the set
console.log(val);
});

//removing duplicates with Set
var ninjas = ['shaun', 'crystal', 'yoshi', 'ryu', 'yoshi'];

var refinedNinjas = new Set(ninjas); //removes duplicates with Set()
ninjas = [...refinedNinjas]; //add back to same array without duplicates
```
---
## map - key value pairs

```
let myMap = new Map([['a1', 'Hello'], ['b', 'Goodbye']]);

console.log(myMap);  
//{'a1' = > 'Hello', 'b2' => 'goodbye'} 

myMap.set('c3', 'Foo');

console.log(myMap);  
//{'a1' = > 'Hello', 'b2' => 'goodbye', 'c3'=>'Foo'}

myMap.delete('a1');  
//{'b2' => 'goodbye', 'c3'=>'Foo'}

console.log(myMap.size);  
//2
```

---

## WeakSet/WeakMap - have to do with objects

WEAKSET

let carWeakSet = new WeakSet();

let car1 = {
make:'Honda',
model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
make:'Toyota',
model: 'Camry'
}

carWeakSet.add(car2);

console.log(carWeakSet);  
// { {make:'Honda', model:'Civic'}, {make:'Toyota', model:'Camry'} }

carWeakset.delete(car1);  
//{ {make:'Toyota', model:'Camry'} }

---
## WEAKMAP

```
let carWeakMap = new WeakMap(); 

let key1 = {id:1};

let car1 = {
make:'Honda',
model: 'Civic'
}

carWeakMap.set(key1, car1);

console.log(carWeakMap); {{id:1}=>{make:'Honda', model:'Civic'}}

let key2 = {id:2};

let car2 = {
make:'Toyota',
model: 'Camry'
}

carWeakMap.set(key2, car2); 
console.log(carWeakMap); {{id:1}=>{make:'Honda', model:'Civic'}, {id:2}=>{make:'Toyota	', model:'Camry'}}

carWeakMap.delete(key1) {{id:2}=>{make:'Toyota	', model:'Camry'}}
```
---

## Arrow Functions 

- shorter syntax
- allows binding of 'this' lexically
- ES6, remove 'function' keyword and we add =>
- ES6 if the contents of the function is a single line, we can remove the {} as well
- ES6 single parameters dont even need (), 


### ES5	
var ninjaGreeting = function(){}  

### ES6	
var ninjaGreeting = ()=> {}  
var ninjaGreeting = (someParameter1, someParameter2)=> {}  
var ninjaGreeting = someParameter => {}  	//single parameter doesnt need ()

---

error - 'this' does not have the correct scope
```
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  return arr.map(function(x){
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['brad', 'jeff']); 
```

### ES5 fix
```
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){	
  var that = this;

  return arr.map(function(x){
    console.log(that.prefix + x);
  });
}

var pre = new Prefixer('Hello ');
pre.prefixArray(['brad', 'jeff']); 
```
---
### ES6 fix
```
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){	
  return arr.map((x)=>{
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['brad', 'jeff']); 
```
---

### ES5
```
var add = function(a,b){
  var sum = a+b;
  console.log(sum);
  return false;
}

add(2,2);
```

### ES6 
```
let add = (a,b)=>{
  let sum = a+b;
  console.log(sum);
    return false;
}
```
add(2,2);

---
## ES6 - promises

- promisses used for deferred and asynchronous computations
- it represents an operation that hasnt completed yet but is expected in the future

### immediately resolved promise
```
var myPromise = Promise.resolve('Foo');
myPromise.then((res)=> console.log(res));
```

### delayed
```
var myPromise = new Promise(function(resolve, reject){
  setTimeout(()=> resolve(4), 2000);
});

myPromise.then((res) => {
  res += 3;
  console.log(res);
});

//get data from api using ajax
function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else{
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();

  }); //ends promise
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
  console.log(data);
  let todos = JSON.parse(data);
  let output '';
  for(let todo of todos){
    output += `
    <li>
    <h3>${todo.title}</h3>
    <p>completed: ${todo.completed}</p>
    </li>
  `;
}

document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
});
```

.html
```
<ul id="template">
</ul>
```

---
## ES6 - generators 

* syntax uses function* or function * 
* basically returns an iterator with a .next() 
* yield - pauses execution of the code after the 'yield' line of code runs
* console.log() yield second parameter says if generator is done
* think of line of code running from right to left.

* returning multiple values from one function
* generators are functions that can be paused and resumed as many times as we like
* at each pause we can yield a value back, 

  or  
  function* g1(){}  
  function *g1(){}

* need to set generator to variable then call .next()
```
function *g1(){
  console.log('Hello');
  //yield 'Yield 1 ran..';

  console.log('Hello');
  //yield 'Yield 2 ran..';

  return 'Returned..';
}

var g = g1();

console.log(g.next() );	//{value:'Yield 1 Ran..', done:false}
console.log(g.next().value ); 'Yield 2 Ran..'
console.log(g.next() ); //{value:'Yield 2 Ran..', done:true}
```

### ...as an iterator
```
for(let val of g){
  console.log(value);
}

//passing data out of generator
function* gen(){
  var x = yield "pear";	
  var y = yield "apple";
  var z = yield "banana"; 
}

var myGen = gen();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
```

### passing data back in generator by passing values in .next()
- first time we iterate through generator,
- think about it like this, code line runs right to left, and stops at yield,
```
console.log(myGen.next());
console.log(myGen.next(5));
console.log(myGen.next(10));
console.log(myGen.next(3));
```

- next time round, and we call next(), it sets a value to the variable, so assigns x = 5;
- so x is assigned what we pass in,
- same goes for y = 10, z = 3;

## how we could use generators to async load and display code in sync manner

```
genWrapper( function* generator(){
  var tweets = yield $.getJSON('data/tweets.json');
  console.log(tweets);

  var friensd = yield $.getJSON('data/fb-friends.json');
  console.log(friends);

  var ytVids = yield $.getJSON('data/yt-vids.json');
  console.log(ytVids);
});

function genWrapper(generator){
  //set up generator / iterator
  var myGen = generator();

  //create function to handler the yielded value
  function handle(yielded){
    if(!yielded.done){	
      yielded.value.then(function(data){
        return handle(myGen.next(data));	//pass value back in and assigns to 'tweets', 'friends', 'ytVids'
      });
    }
  }//end handle

  return handler(myGen.next());
}
```
---

## ES6 - Object literals
ES6 gives us cleaner way to define properties and methods on our objects should we want to use it

//adding name and belt to ninja
```
var name = "Crystal";
var belt = "Black"; 
var ninja = {}
```

### ES5 
```
var ninja = {
  name: name,
  belt : belt,
  chop: function(x){
    console.log('blah' + ${x})
  }
};

console.log(ninja.name);
console.log(ninja.chop(5));
```

### ES6 

- in ES6, we reference the attribute directly
- functions remove the ':function' 

```
var ninja = {
  name, belt,

  chop(x){
    console.log('blah' + ${x})
  }
};

console.log(ninja.name);
console.log(ninja.chop(5));
```
