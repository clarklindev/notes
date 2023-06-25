## Introduction

* takes time
* practical learning is key, implementing these data-structures
* this course implements with es5, and methods are attached to prototype object

## Agenda and Scope

* Recursion and Object Oriented JS
* Time Complexity, Sorting
* Trees & Searching Algorithms
* Graphs and Paths
* Hash Tables and Hashing
* Advanced Applications and Optimizations (bonus)

### What is this course?
* carefully curated topics based on university level CS courses, and common inteview questions
* good starting point for anyone wanting to up their programing and inteview skills by mastering the fundamentals
* useless if you dont complete the exercises

### How to Succeed
* learning to talk through your thought process
* use programming terminology

### Pseudoclassical JavaScript
* javascript is an OOP language but there is no formal way of creating class constructors until es6
hence the name pseudoclasses
* using classes to make instances of our Data Structures

### Defining a Class
* has a constructor
* has properties with key/value pairs, refer to properties with 'this' inside class
* create class with 'new' keyword to create an instance of the class
* es5, methods for all instances go on the 'prototype', 
* prototype is an object where we can attach methods that are shared accross all instances of the class

### Using a Class
* Class.prototype.method = function(){
    this.attribute
}
* var instance = function(prop){
    this.attribute = prop;
}

```js
Building.prototype.countFloors = function(){}
var house = new Building(2);
house.countFloors();
```

### Difference between x++ and ++x
* operator is to right, perform calculation first then on next loop increment/decrement
* operator is to left, perform increment/decrement first then do calculation

### variable definition
* declaring variables with this._ means private, its not strict, notify other developers this is private...
* telling them to interact with these properties with public methods

### performant algorithm
* given a larger data set, compute things faster
* performance measure: bigO

### closure
* has got to do with scope
* when you have a function inside another function
* the inner function has access to the outer function closure variable (on the outside)