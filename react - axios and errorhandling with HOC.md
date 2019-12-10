# Axios Error Handling with HOC

- creating a global error handler
- the withErrorHandler component which acts as a wrapper on components that need error handling
- see hoc/withErrorHandler/withErrorHandler.js
- to use, import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler'
- wrap the export with the hoc
- the withErrorHandler should also receive the axios instance on the component it is being used to be able to handle errors
- change withErrorHandler to class based to add lifecycle methods

## OPTIMIZATION

- the withErrorHandler component can be wrapped around multiple components,
- we are attaching interceptors to componentWillMount(), and everytime we use withErrorHandler, we are attaching interceptors, hence multiple interceptors are being added to the application.
- the older interceptors used on a component that may not be needed anymore still exist that react to requests.
- FIX: store reference to the axios.interceptor so we can reference it later, this.reqInterceptor,
- Handler removing of the interceptors with axios.interceptors.request.eject() and axios.interceptors.response.eject()

```js
// BurgerBuilder.js
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

export default withErrorHandler(BurgerBuilder);
```

```js
// SNIPPET withErrorHandler.js
componentWillMount(){
  this.reqInterceptor = axios.interceptors.request.use(req=>{});
  this.resInterceptor = axios.interceptors.response.use(res=>res, error=>{})
}
componentWillUnmount(){
  axios.interceptors.request.eject(this.reqInterceptor);
  axios.interceptors.response.eject(this.resInterceptor);
}
```

```js
// FULL withErrorHandler.js
import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
```
