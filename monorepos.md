## Symlink

you can link another repo using symlink

1. goto the folder (module-b):
- create a global node_modules link

```
npm link 
```

2. goto folder (module-a):
```
npm link module-b
```

3. 
```js
// module-a/index.js
require('module-b');
```

4. run module-a:
```shell
node index.js
```

----------------------------------------------------------------------------------------
## Workspaces
- monorepo package organisation system
- packages available to each other as symlinks
- optimise dependencies with hoisting

1. create package.json at root of directory
2. make it 'private' (so it wont be published - all packages in workspace will still be published)
3. the value for "workspaces" can be an array (legacy) or an object that defines "packages" which is an array []
4. instead of manually typing each package, we use a pattern: "packages/*"
5. from root folder: npm i
6. run (from root): node packages/module-a
7. making changes in module-b will instantly reflect in module-a
8. add .gitignore: node_modules 
9. note the symlinks of both packages have been hoisted to root

```json
{
  "name": "packages",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "private": true,
  "workspaces": {
    "packages":[
      "packages/*",
    ]
  }
}

```
## hoisting
- HOISTING DOESNT WORK WITH NPM - ONLY YARN...at the moment
- module_a, module_b dont have node_module folder - the symlinks have been hoisted to root of repository
- any dependency installed for any module is also hoisted to root node_modules
- if you dont want a npm package to be hoisted, use nohoist: "workspaces": {"nohoist":[]}

```shell
yarn install
```

### scripts
- you can create executable files that can be run as commands by putting bin in package.json
- tell terminal to use node to run script by adding this comment ontop of file: '#!/usr/bin/env node'
- below: gives alias name "mdb"
- from root directory: 'yarn install --force'
- this creates a .bin folder inside /node_modules
- you can call these as scripts by name (same name as file)

```json
// module-b/package.json
"bin": {
  "mdb":"./index.js"
}
```

- note the comment...tells commandline to run as node
```js
// module-b/index.js
#!/usr/bin/env node

console.log('I am module-b');

```

- main package.json 
```json
// package.json
"scripts":{
  "start": "mdb"
}
```

### changing directories
- you can create scripts for building form a package
- run from anywhere: you can call its packages script: 'yarn workspace <name of package> <command>' 
- you can use the workspace/package syntax to add packages 'yarn worksapce <name of package> add <npm package>'

```js
//module-a/package.json


  "scripts": {
    "start": "mdb",
    "build": "node ./index.js"
  }
```

```shell
# root directory
yarn workspace module-a build

yarn workspace module-a add react
```

## managing and publishing with Lerna
- Lerna is tool for managing monorepos compatible with workspaces
- cli to run same command in your packages
- versioning/releasing

- scope your packages
- update the require() in places that use the packages with scope
- add module-b as a dependency to module-a package.json
- add "publishConfig" to packages

```json
// package.json
  "publishConfig": {
    "access": "public"
  }
```

## lerna
- it is considered bad practice to add dependencies at root of monorepo
- if you have a module that depends on dependency - but its not defined in the modules' package.json, the module could fail due to the package not being installed.
- However, this is not the case with dev-dependencies.
- install as dependency and at root (Workspace)
- after install lerna cli is not directly available in terminal, but is via scripts
- a lerna.json is created
  - version aligns all modules versions, new releases update all incremented versions
  - can also set versions to "independent"
- run with 'yarn lerna run <command>' will run a node script in each module if its defined, eg. 'yarn lerna run build'

```shell
yarn add lerna -DW 
```

```json
// package.json

"scripts": {
  "start": "mdb",
  "lerna": "lerna"
},

```

- creates a lerna.json
```shell
yarn lerna init
```

```js
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useWorkspaces": true,
  "npmClient": "yarn",
  "version": "0.0.0"
}

```

- run build command in each module if it exists

```shell
yarn lerna run build
```

- run build command (IN PARALLEL) in each module if it exists

```shell
yarn lerna run build --parallel
```
---------------------------------------------------------------------------

## publishing packages

```
yarn lerna publish
```