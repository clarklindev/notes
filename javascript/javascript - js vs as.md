## ECMA Script (ES)

Definition:

coding standard / methodology.

Both Actionscript (AS) and Javascript (JS) are derived from the ECMA script standard, they are just based on different versions of ECMA script standard.

AS VS JS - Syntax are identical with minor differences.

---

## ACTIONSCRIPT (AS)

Definition:

Wikipedia [https://en.wikipedia.org/wiki/ActionScript]()

ActionScript is an Object-oriented programming language. It is a dialect of ECMAScript.

### Actionscript 1.0 (AS1)

    (It was based on JavaScript. ActionScript 1.0 is a loosely-typed language.)
    AS1 - is prototype based, as there are no classes or OOP constructs

### Actionscript 2.0 (AS2)

    (move towards bringing ActionScript closer to an Object-Orientated Language)

### Actionscript 3.0 (AS3)

    developed by Adobe, is an open source, object-oriented programming (OOP) language.
    AS3 was written when ES4 specifications were still being written, it diverged, it conforms to ES4 (see below), but goes beyond…

    AS3 is the more feature rich language.

    AS3 has:
    * Class and inheritance
    * Object-Oriented programming, encapsulation
    * Functions have access modifiers: public, private, protected, internal
    * arguments have a type
    * functions have return type
    * Maps using Objects, Dictionary, weak-Keys
    * default parameters
    * typing (which is what Typescript tries to solve for JS)
    * invisible until addChild() called and added to display list;

---

## JAVASCRIPT (JS)

Javascript is a dialect of ECMAScript.  
Javascript versions of interest:

- ES3 (1999), (most people know this version of Javascript) is more like AS1, has regular expression support
- ES4 (never released),
- ES5 (2009), current version of javascript supported by most modern browsers, supports JSON
- ES6/ES2015 (2015), more advanced way to code JS based on ES6 standards (some browsers support this version) - classes and inheritance - scopped variables 'let', - object literal improvements - arrow functions, - default parameters - spread operator ... - promises, - modules - no type - no 'private' access modifier, can immitate with scopped variables. - Set(), Map(), WeakSet(), WeakMap() - iterators, generators
- ES7/ `**` operator, Array.includes()
- ES8/ES2017 (2017), latest version of EMCA Script (still unsupported by many browsers)
- ES9 (2018)
- ES10 (2019)

---

# SIMILARITIES (AS vs JS)

## TYPE

### AS3

variable declarations should have type.

Example:

```
public var colour:String = 'red';
```

### JS (ES6)

still no need to strictly type declarations.

Example:

```
let colour = 'red';
```

---

## VARIABLES (Block level scope variables)

### AS3

'var' keyword block-level scope (no need for backward compatibility)

### JS (ES6)

'var' keyword for global scope / functional scope  
'let' keyword block-level scope (named 'let' for backward compatibility)

---

## CONST

Declare an immutable variable (cannot re-assign the variable, but can populate with new values when array or object)

### AS3

Example:

```
public static const EXAMPLE_CONST:Number = 3;
```

### JS (ES6)

Example:

```
const example_const = 3;
```

CLASS DECLARATION
AS3
public class ExampleClass{}
JS (ES6)
class ExampleClass{}

---

## CONSTRUCTOR, METHODS

constructor - the initial method called of a class object used for assigning resources.

### AS3

in AS3, the constructor takes the same name as the class
methods need to be declared after 'function' word

eg.

```
public class ExampleClass{
   public function ExampleClass(){} //constructor
   public function exampleFunction(){}
}
```

### ES6:

in JS (ES6), the constructor is just called 'constructor' and has no name.  
\*method is declared without 'function' word

eg.

```
class ExampleClass{
   constructor(){}
   exampleFunction(){}
}
```

---
