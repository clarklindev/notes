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

### OUTSIDE component

- from the outside, DOM looks like this... `<ComponentA render={({//same object as inside})=>(//use object props)}>`
- at the outside DOM level, render={({destructure obj with props})=>(
  //render elements and they have access to these props
  )}
- ie. gain access to the prop render, render={({//object props})=>(//use prop)}

### ComponentB using ComponentA

- import ComponentA
- add own methods to class
- our methods can be passed to <ComponentA> too
- render() {return (<ComponentA render={({//props})=>()}>);}

### Example: search filter

- ComponentA (Search filter functionality)
- ComponentB makes use of ComponentA
- ComponentA has:
  - DOM (input)
  - <UL> results list
  - as well as the filter method

* technique for sharing code between React components using a prop whose value is a function

- nice tutorial regarding reusable code using render props,
- type into an input to filter a list.

- https://blog.logrocket.com/modern-component-reusability-render-props-in-react-scoped-slots-in-vue-ff3c5b2dc899/

- render prop = access data from the child component in the parent DOM

```js
<DataProvider render={data => <h1>Hello {data.target}</h1>} />
```

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
