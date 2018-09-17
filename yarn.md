# YARN

```
yarn -v
yarn help
```

package.json

```
{
"name": "yarntest",
"version": "1.0.0",
"main": "index.js",
"license": "MIT"
}
```

auto accept all defaults and creates package.json

```
yarn init -y
```

set defaults

```
yarn config set init-license ISC
```

```
{
"name": "yarntest",
"version": "1.0.0",
"main": "index.js",
"license": "ISC"
}
```

get (delete package.json) and recall 'yarn init'

```
yarn config get init-license
```

remove

```
yarn config delete init-license
```

install packages command line:

NPM

```
npm install <package name>
```

YARN

```
yarn add <package name>
```

```
{
  "dependencies":{
    "lodash": "4.17.4",
    "gulp":"*"      //the * install latest version of gulp
  }
}
```

### install packages manually added to package.json

```
yarn install
```

### uninstall

```
yarn remove lodash //removes the package AND the dependency
```

specific version of package (this updates the dependencies)

```
yarn add lodash@4.17.3
```

find outdated versions of modules we have installed

```
yarn outdated v1.3.2
```

of a specific package

```
yarn outdated lodash
```

upgrading yarn

```
yarn upgrade lodash@4.17.4
```

### global install

NPM: `npm install -g <package name>`  
YARN: `yarn global add <package name>` //order of global is important in YARN

check where global packages are installed

```
yarn global bin
```

remove global package

```
yarn global remove <package name>
```

list all dependencies AND their dependencies

```
yarn list
```

limit depth to dependencies installed package

```
yarn list --depth=0
```

listing dependencies for specific package (eg gulp)

```
yarn list --pattern gulp
```

install a package as a dev-dependency

```
yarn add gulp -D
yarn add gulp --dev
```

remove a dev-dependency

```
yarn remove gulp
```

---

### yarn.lock

file is created automatically for consistency accross machines using #hash values

check folders are in sync with the packages

```
yarn check
```

generate new lock file from existing node_modules folder

```
yarn import
```

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

```
yarn add nodemon -D
```

then we can test this by adding 'scripts' to package.json  
'dev': will run nodemon and check index.js for changes

```
"scripts":{
    "dev": "nodemon index.js"
}
```

run the script

```
yarn run dev
```

package all dependencies into gzip

```
yarn pack
```

check ALL cache of packages

```
yarn cache list
```

check for cache of a specific package eg. lodash

```
yarn cache list --pattern lodash
```

clear cache

```
yarn cache clean
```
