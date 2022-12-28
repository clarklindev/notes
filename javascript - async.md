```js
const fetch = require('node-fetch');
//=========================================================

//using fetch
function showGitHubUser(handle) {
  console.log(`calling ${handle}`);
  const url = `http://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    });
}
showGitHubUser('clarklindeveloper');
//=========================================================
//using async
async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}
showGitHubUser('clarklindeveloper');
//=========================================================
//ASYNC FUNCTION DECLARATION
//refactoring, function only retrieves user, returns to caller
//when async function is called, it returns a promise
//when an async function is returns a value, the async function will resolve with that value
//so we can call .then() and .catch() off the return value
async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}
showGitHubUser('clarklindeveloper').then(user => {
  console.log(user.name);
  console.log(user.location);
});
//=========================================================
//convert any function into an asynchronous function
//async (function expressions, arrow functions, methods)
//ASYNC FUNCTION EXPRESSION
const fetchGitHubUser = async function(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
};
//=========================================================

//ASYNC FUNCTION ARROW SYNTAX
//await keyword can only be used WITHIN async functions
const fetchGitHubUser = async handle => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
};

// //so we want to call function with await, but cant at top level (only inside a async function)
// //so we need a wrapper async function - immediately invoked function expression
(async function() {
  const user = await fetchGitHubUser('clarklindeveloper');
  console.log(user.name);
  console.log(user.location);
})();

// //same as above but with arrow function
(async () => {
  const user = await fetchGitHubUser('clarklindeveloper');
  console.log(user.name);
  console.log(user.location);
})();
//=========================================================
//ASYNC CLASS METHOD
//uses shorthand syntax for method name which makes it async

class GithubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}
//create instance of GithubApiClient
(async () => {
  const client = new GithubApiClient();
  const user = await client.fetchUser('clarklindeveloper');
  console.log(user.name);
  console.log(user.location);
})();
// //=========================================================
// //handle errors in asynchronous functions
// //eg. loading unexisting user
// //instead of returning a promise, if error, we reject the promise with throwing an error
async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  //handle error if status is not successful
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}
//calling fetchGitHubUser()
fetchGitHubUser('idontexist')
  .then(user => {
    console.log(user);
  })
  //handle error thrown with .catch
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });

//=========================================================
//handle errors in asynchronous functions
//using try/catch with await (note: not possible with promise())
async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  //handle error if status is not successful
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}
async function showGithubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
showGitHubUser('idontexist');

//=========================================================
//await multiple promises sequentially or concurrently
//load User profile AND load list of their repositories

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

//VARIATION 1 - SEQUENTIAL: 2 HTTP REQUESTS - executing in SEQUENCE
async function showUserAndRepos(handle) {
  //waiting for first request to complete then call second request
  const user = await fetchFromGitHub(`/users/${handle}`);
  const repos = await fetchFromGitHub(`/users/${handle}/repos`);
  console.log(user.name);
  console.log(`${repos.length} repos`);
}
//VARIATION 2 - CONCURRENT: 2 ACTIONS HAPPENING SAME TIME
async function showUserAndRepos(handle) {
  //http requests happening at same time
  const userPromise = fetchFromGitHub(`/users/${handle}`);
  const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

  //waiting for both to come back...
  const user = await userPromise;
  const repo = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}
showUserAndRepos('clarklindeveloper');
//=========================================================
//await multiple promises concurrently with Promise.all()
//Promise.all([]) receives sequence of promisses and returns a single new promise
//order added is order accessed via index
//we used an array but it works with any iterable
//if any of passed in promises is rejected, the return promise is rejected as well,

//VARIATION 1 - promise is accessed via array index
async function showUserAndRepos(handle) {
  const results = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`)
  ]);

  const user = results[0];
  const repos = results[1];

  console.log(user.name);
  console.log(`${repos.length} repos`);
}
//VARIATION 2 - array destructuring
async function showUserAndRepos(handle) {
  const [user, repos] = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}
//=========================================================
//using await operator with non-promise value
//internally await converts any non-promise value into resolved promise.
async function main() {
  const x = await 42;
  console.log(x);
}
main();

//using Bluebird
const Bluebird = require('bluebird');
async function main() {
  console.log('Working ...');
  await Promise.resolve(Bluebird.delay(2000)); //pause for 2seconds
  console.log('Done.');
}
main();
//=========================================================
//Generator with ASYNC

//polyfil asyncIterator symbol
//iterate asynchronously with the for await of loop
//need to transpile to suport asyncIterator
Symbol.asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator');

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

async function* someGenerator() {
  await delay(1000); //simulate long running operation
  yield 1;
  await delay(1000); //simulate long running operation
  yield 2;
  await delay(1000); //simulate long running operation
  yield 3;
}

async function main() {
  //for await of loop prints every value of generator (used for asynchronous iteration)
  for await (const value of someGenerator()) {
    console.log(value);
  }
}

//describing whats happening above
async function main() {
  const generator = someGenerator();
  while (true) {
    const { value, done } = await generator.next();
    if (done) {
      break;
    }
    console.log(value);
  }
}

main();
```
