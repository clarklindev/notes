## React Context API

- context API is Reacts way of preventing the need to pass down / forwarding props down multiple levels of Components
- Context is a globally available object available to components without using props
- by adding default object with everything we want to access on the Object, it gives us better auto completion from IDE

- contextType (Class) vs useContext (Hooks)

```js
//context/auth-context
import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
```

### Usage

- note: the component still manages its state, state.authenticated, because only changing something in context will not cause a rerender cycle
- import AuthContext file
- the Authcontext imported can be used as a component
- it should wrap all parts of the app that need access to the context
- `<AuthContext.Provider value={{authenticated:this.state.authenticated}}></AuthContext.Provider>`

### SETTING AUTH-CONTEXT VALUES

```js
import AuthContext from '../context/auth-context';

<AuthContext.Provider
  value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
  //some jsx
</AuthContext.Provider>;
```

### GETTING AUTH-CONTEXT VALUES

- first import the auth-context file

#### METHOD2 (preferred method)

- creating a static property called `static contextType = AuthContext;`
- this auto connects component to context behind the scenes
- gives us a new property this.context property from React

```js
//person.js is a class based component
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated); //access to context property
  }

  render() {
    return ({
      this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
    });
  }
}
```

#### METHOD1

- here this method, context API only available on classes in the JSX via AuthContext.Consumer element
- `<AuthContext.Consumer></AuthContext.Consumer>`
- AuthContext.Consumer takes a function as its content
- the function gets the `context` object as the argument

```js
//person.js is a class based component
import AuthContext from '../../../context/auth-context';
render(){
  return (
    <AuthContext.Consumer>{
      (context)=> context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
    }
    </AuthContext.Consumer>
  )
}
```

---

## Functional Components (UseContext Hook)

- using useContext hook `import React, {useContext} from 'react';`
- create a property and pass it the AuthContext we imported
- eg. `const authContext = useContext(AuthContext)`

```js
//cockpit.js is a functional component
import AuthContext from '../../context/auth-context';
import React, { useContext } from 'react';

const cockpit = props => {
  const authContext = useContext(AuthContext);

  //using the context
  console.log(authContext.authenticated);
};

return (
  <button onClick={authContext.login}>Log-in</button>}
);
```
