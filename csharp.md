C#

- C# files end in .cs
- variables, in JS are setup with 'let' 'const' and 'var'
- C# is strongly typed language and variables are setup with type as prefix: 'int', 'float', 'double', 'decimal','char','string', 'string[]', 'bool'

- array syntax in javascript is [], in C# {}
- "" and '' is context specific in C#
- C# is actually an object oriented language, so everything I learnt about inheritance, encapsulation, namespacing, is similar in C#.

- C# file structure:

```C#
using System;
namespace _NAME_{
  class _CLASSNAME_ {
    static void Main(string[] args){}
    //methods go here...
    static *type* FunctionNAme(*type* argumentName){

    }
  }
}
```

- method names are PascalCase
- Console

```C#
Console.WriteLine(); Console.ReadLine();
```

```js
console.log();
```

- C# 2D Array:

```C#
int [,] numberGrid = { {1,2}, {3,4}, {5,6} }
//access 2D Array:
numberGrid[1,1]; //4

int [,] myArray = new int[2,3]; //2,3 here means 2 rows, 3 columns
```

- Exception handling with

```C#
try{}
catch(Exception e){ Console.WriteLine(e.Message); }
finally{
  //always gets executed
}

```

- classes can be used by referring to the class as a type:

```C#
Book book = new Book();
```

- Constructors - you can have as many constructors as you want!!! to cater for different argument patterns of the class

* constructors take the same name as the class

```C#
  class Book { Book(string aTitle){title = aTitle}}
```

- access modifiers: private, public

```C#
  private string rating;
```

```C#
public Movie(string aRating){
  Rating = aRating; //calls Rating method's setter
}
```

- getters and setters can be added to a method of a class

```C#
public string Rating{
  get{
    return rating;
  }
  set{
    if(value="G"|value="PG"|value="PG-13"){
      rating= value;
    }
  }
}
```

- static class attributes

```C#
public static int songCount = 0;
Song.songCount //access static attribute of class
```

- static methods in a class - public static _returnType_ _methodName_

```C#
public static void SayHi(string name){Console.WriteLine("Hello " + name)}
```
