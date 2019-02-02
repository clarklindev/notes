# Typescript

## Basics

* install typescript via npm globally
* vscode typescript extension
* create typescript config file with tsc --init
* webpack can be used for test server 'webpack.config.js'
* typescript uses lowercase types whereas Javascript uses uppercase
* access variables in a strings via 
``` `${variablename}` ```
* union type allows options, 1 | 2 | 3
* optional argument eg. quantity?:number
* object type eg. pizza:{name:string, price:number; getName():string }
* array types   
    eg. number array - let sizes:number[],   
    eg. string array - let sizes:string[] 
* generic type ```let toppings: Array<string>```
* tuple type - datasctructure inside array of different types
    eg. let pizza:[string, number, boolean] , order is important
* type alias 
    - reference variable to a type we can use elsewhere in app
    - can assign anything to a type   
    type Size = 'small' | 'medium' | 'large';   
    let pizzaSize : Size
* type assertion
    when we tell typescript we know more about what we expecting back from server than Typescript
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

## tsconfig.json

* removes the need for command line script parameters
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
* entry - source entry 
* output - output file, 
* __dirname is a global variable referencing project folder
* resolve - array of file extensions to look at
* module - rules for this module (an array) 
                - 'test' against different file extensions, use regular expression with $ denote end
                - 'use' we supply different loaders so it can compile

```
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
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

