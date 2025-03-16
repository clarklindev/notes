```js
//checking if response.ok
const fetchWrapper = url =>{
return new Promise((resolve, reject) => {
  fetch(url)
    .then(response => {
      if(!response.ok){
        reject('fetch returned ok false')
      }
      response.json().then(data => resolve(data))
    })
  }
}

fetchWrapper('http://www.someurl')
.then(data=> {
const weirdData = data.split(' ');
console.log(weirdData);
})
```
