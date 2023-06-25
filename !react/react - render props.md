## Render Props

eg. ComponentA

### INSIDE component

- render() method that takes an object

```js
render(){
    return (

      //somewhere in the return...
      this.props.render({});
    )
  }
```

- we attach what we want to expose to outside DOM
- eg. render(){return this.props.render({//expose stuff here})}
- essentially render() method takes an object and you can attach any data you want the outside to get access to
- at the same time we are given data and methods through props in ComponentA

### OUTSIDE component

- from the outside, DOM looks like this... `<ComponentA render={({//same object as inside})=>(//use object props)}>`
- at the outside DOM level, render={({destructure obj with props})=>(
  //render elements and they have access to these props
  )}
- ie. gain access to the prop render, render={({//object props})=>(//use prop)}

### ComponentB using ComponentA

- import ComponentA
- add own methods to class
- our methods can be passed to <ComponentA> to be used by ComponentA without ComponentA knowing what it does
- render() {return (<ComponentA render={({//props})=>()}>);}

### Example: search filter

### https://blog.logrocket.com/modern-component-reusability-render-props-in-react-scoped-slots-in-vue-ff3c5b2dc899/

- ComponentA (Search filter functionality)
- ComponentB makes use of ComponentA

- ComponentA:
- has the functionality for filter
- is a renderless component (doesnt render markup)
- receives function to filter via prop
- has a method (searchList method) which uses this function to get filtered results
- filters list of options, based on query string
- using special render prop to render an element

// exposes searchList: the function to call when input value changes
// exposes results: search results
// receives options (set of data to filter)
// receives filter function

ComponentA STEPS:

1. props.options save in state as 'results'
2. searchList(event) is function used for filtering
   - this function uses props.filterMethod(props.options, event.target.value)
   - this function uses props.options
   - this function uses event.target.value
3. const results = props.filterMethod
4. setState({results:results});
5. render() return this.props.render({results:this.state.results, searchList:(event)=>this.searchList(event)})
6. ComponentA doesnt know what the DOM element will be, it only knows the function it should call: searchList(event)
7. attaching searchList method to input `<input onChange={searchList}` allows us access to event.target
8. note: the filterMethod is passed in as a prop so we can change way to filter

ComponentB STEPS:

- props.options passed into componentB
- define filterMethod (a blind filter method) that doesnt know what is its data, or what its searching for
- filterMethod(props.options, query) that returns filtered array (props.options.filter(each=> toLowerCase().includes(query.toLowerCase()) ))
- where does 'query' come from? the prop that is unknown until used by ComponentA
- ComponentB has access to ComponentA render props: {results, searchList}
- ComponentA's exposed render prop searchList allows us to call `<input onChange={searchList}/>` that internally calls - searchList calls props.filterMethod(props.options, event.target.value), and event.target is `<input>`
- in render(), DOM input `<input onChange={searchList(event)}/>`
- in render(), DOM UL `<ul>{results.map(option=>(<li></li>))}</ul>` or however we want to render the result.
- in render(), `<ComponentA options={props.options} filterMethod={this.filterMethod} render={({results, searchList})=>()}/>`

### https://reactjs.org/docs/render-props.html

- As the cursor moves around the screen, the component displays its (x, y) coordinates in a `<p>`.

- Now the question is: How can we reuse this behavior in another component? In other words, if another component needs to know about the cursor position,

- Here’s where the render prop comes in: Instead of hard-coding a `<Cat>` inside a <Mouse> component, and effectively changing its rendered output, we can provide `<Mouse>` with a function prop that it uses to dynamically determine what to render – a render prop.

* Instead of providing a static representation of what <Mouse> renders, use the `render` prop to dynamically determine what to render.

```js
class Cat extends React.Component {
	render() {
		const mouse = this.props.mouse;
		return (
			<img
				src="/cat.jpg"
				style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
			/>
		);
	}
}
```

```js
class Mouse extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = { x: 0, y: 0 };
	}

	handleMouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	render() {
		return (
			<div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
				{/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
				{this.props.render(this.state)}
			</div>
		);
	}
}
```

```js
class MouseTracker extends React.Component {
	render() {
		return (
			<div>
				<h1>Move the mouse around!</h1>
				<Mouse render={mouse => <Cat mouse={mouse} />} />
			</div>
		);
	}
}
```

### using render props to pass props into component from `<Router>`

https://tylermcginnis.com/react-router-pass-props-to-components/

### WRONG:

Though technically this will work, it’s not the best solution. The reason for this is because of performance. According to the official docs…

"When you use the component props, the router uses React.createElement to create a new React element from the given component. That means if you provide an inline function to the component attribute, you would create a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component."

```js
<Route path="/dashboard" component={() => <Dashboard isAuthed={true} />} />
```

### Correct - using render="" prop

So if you’re not supposed to pass a function to component, what’s the solution? Turns out the React Router team predicted this problem and gave us a handy solution. Instead of using component, use the render prop. render accepts a functional component and that function won’t get unnecessarily remounted like with component. That function will also receive all the same props that component would receive. So you can take those and pass those along to the rendered component.

```js
<Route
	path="/dashboard"
	render={props => <Dashboard {...props} isAuthed={true} />}
/>
```

So to recap, if you need to pass a prop to a component being rendered by React Router, instead of using Routes component prop, use its render prop passing it an inline function then pass along the arguments to the element you’re creating.
