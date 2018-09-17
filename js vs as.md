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
