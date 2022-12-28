# Javascript vs JQuery - is jquery still relevant

## DOM SELECTION

jquery

```
$('.someclass')
```

javascript

```
document.querySelector('.someclass')
document.querySelectorAll('.someclass li')
```

---

## DOM MANIPULATION

jquery

```
$element.remove()
$element.prepend(otherElement)
$element.before(otherElement)
$element.addClass('someClass')
$element.removeClass('someClass')
$element.toggleClass('someClass')
const parent = $element.parent()
const cloned = $element.clone()
```

javascript

```
element.remove()
element.prepend(otherElement)
element.before(otherElement)
element.classList.add('someClass')
element.classList.remove('someClass')
element.classList.toggle('someClass')
const parent = element.parentNode
const cloned = element.cloneNode(true)
```

---

## EVENTS

jquery

```
$someElement.on('click', function(e){
    //logic
});
```

javascript

```
someElement.addEventListener('click', e=> {
    //logic
});
```

---

## HTTP Requests / Ajax

jquery  
was much easier than using XHR object to make ajax calls until Fetch API and other libraries became available

## fetch()

fetch api is a promise based API, usually map result to json

```
fetch('http://api.something.com')
.then(res=> res.json())
.then(data=> console.log(data))
```

## axios is specialized library for http requests.

```
axios.get('http://api.something.com')
.then(res=>console.log(res.data))
```

---

## UTILITIES

jquery

```
$.isArray(someValue)
$.inArray(item, anArray)
$.each(someArray, (index, value)=>{})
$.map(someArray, (value, index)=>{})
$.grep(someArray, (value, index)=>{})
$parseJSON(str)
```

javascript

```
Array.isArray(someValue)
someArray.indexOf(item) > -1
someArray.forEach((value,index) => {})
someArray.map((value, index) => {})
someArray.filter((value, index) => {})
JSON.parse(str)
```

---

## Animations

Javascript animations:

- CSS Transitions / Keyframes
- Web Animations API
- 3rd Party libraries like greensock

---

## SUMMARY

**DOM selection** - replaced with querySelector() & querySelectorAll()

**DOM manipulation** - replaced by Native Browser API's

**HTTP/Ajax** - Fetch or Axios (or other lib)

**Utilities** - map, filter, reduce, etc OR lodash

**Animation** - CSS3 or 3rd Party lib

**Browser support** - Modern Browsers + Babel & Polyfills

---
