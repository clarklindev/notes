# Working with API keys
create your own server - https://www.youtube.com/watch?v=ZGymN8aFsv4&list=PLvhpGCY2ioeIrq41jfq_sUF7xAV4PWZZe&index=5&ab_channel=TraversyMedia

when working with api keys you should hide it from your code using environment variables

## METHOD 1

- create a .env file


### DotEnv
- install dotenv 
- Dotenv is a zero dependency module that loads environment variables from a .env file into process.env. It means we install this package, write some properties inside .env file and they will be available inside process.env
- use try/catch to throw error if .env does not exist with api token
- NB!!!! add .env to .gitignore

```
npm i dotenv
```

```js
require("dotenv").config();

const express = require("express");
const app = express();

app.get("/names", async (req, res, next) => {
  try {
    if (!process.env.RANDOMER_API_TOKEN) {
      throw new Error("You forgot to set RANDOMER_API_TOKEN");
    }
  } catch (err) {
      next(err);
    }
  });


```

```env
RANDOMER_API_TOKEN=5325325yygdfgg7532578ghtrhtr782532
```

## METHOD 2
- github, vercel etc all allow you to add environment variables
- then if this is set, you can access eg. process.env.CLIENT_ID

```env
YOUR_VALUE=X343324234
```

```js
process.env.YOUR_VALUE
```