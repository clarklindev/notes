# React - Axios and CSS Loaders

## Adding a spinner

- css loader (https://projects.lukehaas.me/css-loaders/)

## create a spinner component

<!-- Spinner.js -->
<!-- Spinner.scss -->

## using spinner

- conditionally load spinner or content
- create a new state 'loading' initially set it to false
- import spinner
- modal content should either be data or if(this.state.loading), modal content should be spinner component
- NOTE: spinner inside Modal we need to be aware of modal's componentShouldUpdate(),
- the check should be on if prop.show updated AND
  also if nextProps.children !== this.props.children;

## when should we change to setState({loading:true})

- when about submit, this.setState({loading:true})

## when to stop loading... setState({loading:false})

- when we axios.post() OR when error
- setting state purchasing:false will close the modal

```js
// AddSomething.js
import Spinner from 'Spinner';

state = {
  loading: false;
}


purchaseContinueHandler = ()=>{
  this.setState({loading: true});
  axios
  .post('orders.json', order)
  .then(response => {
    this.setState({ loading: false, purchasing: false });
  })
  .catch(error => {
    this.setState({ loading: false, purchasing: false });
  });
}

render(){
  let orderSummary = <OrderSummary/>
  if(this.state.loading){
    orderSummary = <Spinner/>
  }

  return(
    <Modal show={this.state.purchasing}>
      {orderSummary}
    </Modal>
  );
}


```
