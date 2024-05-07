# esmodule import/export syntax

- https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/20342081#overview

## path

- with esmodules, you lose access to things like \_\_dirname, but there is a workaround

```js
//response-handler.js
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //import.meta.url gives path to filename
const __dirname = dirname(__filename);

export const resHandler = (req, res, next) => {
  res.sendFile(path.join(__dirname, 'my-page.html'));
};
```

## cwd() (when using commonjs)

when using ECMAScript Modules (ES Modules), you can use process.cwd() as an alternative to **dirname to get the current working directory (CWD). Unlike **dirname, which is the directory name of the current module file, process.cwd() returns the current working directory of the Node.js process.

-The process global object is only available in CommonJS modules, not in ES Modules.
-To access the current working directory (CWD) in ES Modules, you should use the import.meta.url approach

```ts
// response-handler.js
import fs from 'fs';
import path from 'path';

const currentWorkingDirectory = process.cwd();

export const resHandler = (req, res, next) => {
  res.sendFile(path.join(currentWorkingDirectory, 'my-page.html'));
};
```
