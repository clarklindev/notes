C#

## C# vs .NET

- C# is a programming language vs .NET framework

* C# files end in .cs
* variables, in JS are setup with 'let' 'const' and 'var'
* C# is strongly typed language and variables are setup with type as prefix: 'int', 'float', 'double', 'decimal','char','string', 'string[]', 'bool'

* array syntax in javascript is [], in C# {}
* "" and '' is context specific in C#
* C# is actually an object oriented language, so everything I learnt about inheritance, encapsulation, namespacing, is similar in C#.

* to run C# file, CTRL+F5
* C# file structure:

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

# variables

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

<!-- ====================================================================== -->

---

# Running C# in VSCode

- https://medium.com/edgefund/c-development-with-visual-studio-code-b860cc71a5ec

## REQUIRED

- install VSCode
- install .NET Core SDK

## VSCODE EXTENSIONS

- C# extension by microsoft
- NuGet by jmrog
- Material Icon Theme by Philipp Kief

## Project structure

- Folder to house the project
- mkdir src/ folder
- mkdir test/ folder
- dotnet solution file
- powershell: code . opens project folder in vscode

```powershell
cd (mkdir CSharpWithVSCode);
mkdir src;
mkdir test;
dotnet new sln;
code .
```

## Create project files, then add the reference

- we are creating 2 projects, linking them with a reference
- adding them to the solution file
- here setting up a class library (typical starting point of C# project)
- and console application (typical starting point of C# project)

### Create the console project

```powershell
cd src;
cd (mkdir CSharpWithVSCode.ConsoleApp);
dotnet new console;
cd..; cd..
```

### Create Class libary project

```powershell
cd src;
cd (mkdir CSharpWithVSCode.ClassLib);
dotnet new classlib;
cd..; cd..
```

### setup Solution file

- linking to the projects

```powershell
dotnet sln add .\src\CSharpWithVSCode.ConsoleApp\CSharpWithVSCode.ConsoleApp.csproj
dotnet sln add .\src\CSharpWithVSCode.ClassLib\CSharpWithVSCode.ClassLib.csproj
```

- linking class libary to the console project

```powershell
cd .\src\CSharpWithVSCode.ConsoleApp\;
dotnet add reference ..\CSharpWithVSCode.ClassLib\CSharpWithVSCode.ClassLib.csproj;
cd..; cd..
```

### run the project

- start the automated process for C# (.cs files) by clicking on (ConsoleApp project)/Program.cs
- OmniSharp will download some required files
- if asked 'Required assets to build and debug are missing from 'crypto-algorithms'. Add Them?' select yes
- this adds a .vscode folder
- adds a launch.json file
- add a tasks.json file
- add a 'bin' and 'obj' folder under both projects
- pull in the project dependencies
- F5 to run the project

---

# Unit testing

## Create and Configure the unit test project

- create the test project

```powershell
cd test;
cd (mkdir "CSharpWithVSCode.Tests");
dotnet new xunit;
cd..; cd..
```

- add reference to the class lib project
- (dotnet add reference \*REFERENCE_TO_PROJECT\*)

```powershell
cd .\test\CSharpWithVSCode.Tests;
dotnet add reference ..\..\src\CSharpWithVSCode.ClassLib\CSharpWithVSCode.ClassLib.csproj;
cd..; cd..
```

- add test project to solution

```powershell
dotnet sln add .\test\CSharpWithVSCode.Tests\CSharpWithVSCode.Tests.csproj
```

### Restore test project

- test project needs to be restored
- here VSCode downloads any dependencies and adds the 'bin' and 'obj' folders to the directory.

```powershell
# at same level as solution file
dotnet restore
```

### Build and run test project

```powershell
cd .\test\CSharpWithVSCode.Tests\;
dotnet test;
cd..; cd..
```

### An additional nuance with v2.x

- create a file named `Directory.Build.targets` in the solution's directory with the following content
- dotnet test should now correctly target only the test-specific folders.

```Directory.Build.targets
<Project>
  <Target Name="VSTestIfTestProject">
    <CallTarget Targets="VSTest" Condition="'$(IsTestProject)' == 'true'" />
  </Target>
</Project>
```

```after.CSharpWithVSCode.sln.targets
<Project>
  <Target Name="VSTest">
    <MSBuild Projects="@(ProjectReference)" Targets="VSTestIfTestProject" />
  </Target>
</Project>
```

### Hook up test command to Visual Studio Code

- update task.json in folder .vscode
- F1
- Run Test Task11

```json
// .vscode/task.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "command": "dotnet",
      "type": "process",
      "args": [
        "build",
        "${workspaceRoot}/src/CSharpWithVSCode.ConsoleApp/CSharpWithVSCode.ConsoleApp.csproj"
      ],
      "problemMatcher": "$msCompile"
    },
    {
      "label": "test",
      "command": "dotnet",
      "type": "process",
      "args": [
        "test",
        "${workspaceRoot}/test/CSharpWithVSCode.Tests/CSharpWithVSCode.Tests.csproj"
      ],
      "problemMatcher": "$msCompile",
      "group": {
        "kind": "test",
        "isDefault": true
      }
    }
  ]
}
```

## Key Mapping for VSCode Testing

- CTRL+K+S (opens key mapping)
- search 'Run Test Task'
- click +
- bind shortcut keys for testing...
