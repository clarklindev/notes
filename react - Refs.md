# React Refs

- you can add a ref={} on any jsx element,

## Method 2 (react 16.3+)

- in constructor, create property on class: `this.inputElement = React.createRef();`
- then on the jsx element (eg `<input>`), add the ref and asign it to the ref we created in constructor
- now in componentDidMount() we can access this class ref property via .current which is the current reference to the current element

```js
constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
}

componentDidMount(){
    this.inputElementRef.current.focus();
}

render(){
    <input ref={this.inputElementRef}>
}

```

## Method 1 (Class based components ONLY - older method)

- pass refs an anonymous function
- the argument is a reference to the element we are placing refs on (we name this whatever we want)
- we can add a new global property to our class by using this.newpropertyname (eg. this.inputElement) and we assign it inputEl
- then componentDidMount(){} executed after render() so this.inputElement would have been created by the time componentDidMount() is called

```js
// Method 1 for using Refs
componentDidMount(){this.inputElement.focus();}
<input ref={(inputEl)=> {this.inputElement = inputEl}}>
```
