# React - Retrieving data from backend

- retrieveing data from backend, first add the data object and properties/values in firebase
- need the endpointurl
- REQUIRED: with axios/react you need to add .json to the endpointurl
- state={ingredients:null}, set initial state to null
- add data to componentDidMount()
- use then() to setState and assign to data returned
- ERROR: render() that depends on data will fail as initially state ingredients is null
- FIX: anything that depends on state:ingredients, needs a check before the render, eg. show a spinner while loading else, show content
- FIX2: so other dependencies that depend on state:ingredients will also fail
  eg. orderSummary needs to be added to if(this.state.ingredients){} check
- and check that if state:loading, then set orderSummary = `<Spinner/>`
- if there is an error, the error component doesnt show up here, this is because BurgerBuilder.js is wrapped by withErrorHandler() and in withErrorHandler, the componentDidMount() happens after child components' render(), so withErrorHandler's axios.interceptors are too late. if you change to componentWillMount() (deprecated) it will happen before child components are rendered , can just use the constructor() to intercept.
- add an initial state={error:false}
- then update render(), do check to see if state.error? show error else if no error show spinner.

## setting up state dynamically

```js
// BurgerBuilder.js
state={
  ingredients:null
}
componentDidMount(){
  axios.get('endpointurl.json')
  .then(response=>{
    this.setState({ingredients:response.data});
  })
  .catch(error=>{
    this.setState({error: true})
  })
}

render(){
  let orderSummary = null;

  let burger = this.state.error ? <p>ingredients cant be loaded</p> : <Spinner/>;

  if(this.state.ingredients){
    burger = <React.Fragment><Burger/><BuildControls/></React.Fragment>;
    orderSummary = <OrderSummary>;
  }

  if(this.state.loading){
    orderSummary = <Spinner/>
  }

  return (
    {burger}
  )
}
```
