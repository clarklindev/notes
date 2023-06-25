## Routing

- routing is not part of the core of react
- 3rd party feature routing
- turns into more like a framework

### Routing and SPAs

- SPA is single page app, but we want to provide the normal web experience
- showing different pages for different urls
- trick is that we dont have multi ple html files, we use javascript to render different
  pages for different paths
- routing is about parsing this path, and showing the appropriate jsx/component in our app
- the router package has to
  1. parse the url/path (in the client) to understand where the user wants to go
  2. developer cofigures different paths
  3. router reads the configuration
  4. render / load approriate JSX component

# setting up nav links

- use `<header><nav><ul><li><a href='/'>`
- style ul, hide list-style:none
- style a, text-decoration: none
- style a:hover, a:active

```js
// <!-- Blog.js -->
render(){
  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/new-post'>New Post</a></li>
          </ul>
        </nav>
      </header>
      <section className='Posts'>
        {posts}
      </section>
    </div>
  );
}

```

## Setting Up the Router Package

- install react-router
- and react-router-dom

```
npm install --save react-router react-router-dom
```

- enable routing in react app (in index.js or app.js)
- (app.js)

```js
import { BrowswerRouter } from 'react-router-dom';
```

- wrap the part of app which should be able to render routes with `<BrowserRouter>`
- react-router-dom gives us access to route information via props (history, location, match) via '<BrowserRouter>' BUT route information is given only to components loaded directly via '<Route>'
- so only direct components loaded via a Route will get route information via props
- to make props avaible in any component with higher order component (hoc), import 'withRouter' from 'react-router-dom' and in the export, export default withRouter(class name) see below (The withRouter HOC & Route Props)

```js
<BrowserRouter>
  <div class='App'>
    <Blog />
  </div>
</BrowserRouter>
```

## Setting Up and Rendering Routes

- when the `<Route>` element is in the dom, it says, we are going to do something here depending on what the route is...
- this file that will hold dynamic content must have the following:

```
import { Route } from 'react-router-dom';
```

- <Route> with 'path' property
- usage: `<Route path='/' exact/>`
- <Route exact> fixes problem with route matches that start with '/' and makes this route specific for exact match
- without 'exact' content is rendered for all paths that contain path='/' match
- eg. `<Route path='/' render={()=><h1>Home2</h1>}/>` is rendered on all routes that contain '/'
- you can use as many <Route path='' exact> with the same path or exact as you want and it will be rendered

## RENDER vs COMPONENT

### ROUTE 'render' jsx method

- usage: `<Route path='/' exact render={()=>jsx here} />`
- 'render' prop which is a function that says what happens when we reach this path...render JSX

### ROUTE 'component' method

- render components when the path matches
- component needs to be a reference to function/class we want to use
- so the component needs to be imported eg. import {Posts} from './Posts/Posts';
- usage: `<Route path='/' exact component={Posts}>`

### Rendering Components for Routes

<!-- Example below of routing.. -->

```js
// EXTRACT Blog.js
import { Posts } from './Posts/Posts';
<Route path='/' exact component={Posts} />;
```

```js
// App.js

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App' />
      </BrowserRouter>
    );
  }
}
```

### Switching Between Pages

- NOTE: `<a>` links actually causes the page to reload.
- we will fix this using `<Link>` and `<NavLink>`

```js
// EXTRACT Blog.js
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

...

render(){
  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/new-post'>New Post</a></li>
          </ul>
        </nav>
      </header>
      {/*<Route path='/' exact render={()=><h1>Home</h1>}/>*/}
      <Route path='/' exact component={Posts}>
      <Route path='/new-post' component={NewPost}/>
    </div>
  );
}

```

- currently switching between routes causes reloading
- instead we want only a re-render by changing the links and instead prevent reloading page and let react-router handle the render

## Using Links to Switch Pages / NavLink

- FIX: prevent reloading of the page with Link and NavLink element
- import { Route, Link, NavLink } from 'react-router-dom';
- replace `<a>` tag with `<Link>`
- use 'to' property to tell router where to link to (:string)
- 'to' can also be js object where we configure {{pathname: '/new-post', hash:'#submit', search:'?quick-submit=true'}}
  - 'pathname' is the path (string)
  - 'hash' tag is jumping to a id specific point eg. hash:'#submit'
  - 'search' allows query params eg. search:'?quick-submit=true'

NOTE: react-router-dom wraps react-router and includes it as a dependency

```js
// <a href='/'>Home</a>
<Link to='/'>Home</Link>
<Link to={{pathname:'', hash:'#', search:'?quick-submit=true'}}>New Post</Link>

```

## Using Routing-Related Props

- react router gives us extra information through props : history, location, match
- history prop object also has push method which allows us to push a new page programatically without a <Link>
- can view props in componentDidMount(){console.log(this.props)}
  - match :{isExact:, params:, path:, url:}
  - location: {hash:, key:, pathname:, search:, }
  - history: {action:, goBack:, goForward:, push:, replace:}

## The withRouter HOC & Route Props

- getting information to components not loaded via Route (see previous lesson)
- OPTION1: we can pass 'match', 'location', and 'history' into the subcomponent via this.props.x
- there is an easier way to give access to non-container components,
- OPTION2: import {withRouter} from 'react-router-dom' is a HOC
- we wrap our export with withRouter()
- the withRouter adds match, location, history to nearest loaded route  
  so post will get routing information for 'posts'

```js
import { withRouter } from 'react-router-dom';

const post = (props) => {};

export default withRouter(post);
```

## Routing - Absolute vs Relative Paths

### Absolute

- Default is absolute pathing (always treated as an absolute path)
- with routing 'to=' always treats it as an absolute path ie. appended directly to domain with or without leading /

### Relative

- relative path makes use of `this.props.match.url`
- use relative pathing if you want to navigate relative to your existing path
- relative path is appended to the end of current path by building a dynamic path,
- current path is accessed via `<Link to={{pathname: this.props.match.url}}>`
- and we can append the subpath dynamically `<Link to={{pathname: this.props.match.url+ '/subpath'}}>`

## styling the active route (NavLink instead of Link)

- `import {NavLink} from 'react-router-dom';`
- `<Link>` replaced with `<NavLink>` to allow us access to additional properties allowing styling
- `<Link>` and `<NavLink>` get rendered as `<a href=''>` tags automatically behind the scenes
- now a default 'active' class is added to the dom of the active route which we can style
- just as `<Route path='/' exact />` we can specify exact on `<NavLink>` match for root /
- specify 'exact' on the active link else the dom adds the class to all matches the css will be active for all links that match starting with /

### activeClassName vs active class

- to name our own classes for active state, instead of automatically getting '.active' class, use activeClassName='' eg. activeClassName='my-active' and then can style with .my-active

### activeStyle

- or use activeStyle={{ }} to add 'inline' styling activeStyle={{color: orange, textDecoration:'underline'}}

```js
<nav>
  <ul>
    <li>
      <NavLink
        to='/'
        exact
        activeClassName='my-active'
        activeStyle={{ color: 'orange', textDecoration: 'underline' }}>
        Home
      </NavLink>
    </li>
  </ul>
</nav>
```

```css
/* Blog.css */
.Blog a:hover,
.Blog a:active,
.Blog a.active {
  color: orange;
}
```

## Passing Route Parameters

- posting an id from url (Ie.. getting parameters from url)
- we can add a flexible, variable route parameter with :then any name of choice (dynamic portion to the url)
- when defining the `<Route path='/:dynamicname'>`
- paths are parsed top-down calling the first match (specific to less specific) eg. /new-post is more specific that /:id
- wrap the DOM html part with `<Link to={'/'+post.id}> <Post clicked={()=> this.postSelectedHandler(post.id)}/></Link>`
- up to this point the app should allow user to click on a Post `<Link>` and the url should update

```js
// Blog.js
import FullPost from './FullPost/FullPost';

<Route path='/' exact component={Posts}/>
<Route path='/new-post' component={NewPost}/>
<Route path='/:id' exact component={FullPost}/>
```

```js
// Posts.js
import {Link} from 'react-router-dom';

render (){
  posts = this.state.posts.map(post => {
    return (
    <Link to={'/'+post.id} key={post.id}>
      <Post title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id)}/>
    </Link>
    );
  });
}
```

## Extracting route parameters

- the router is routing with `<Route path='/:id' component={FullPost}>`
- extracting what we need from browser url
- since the way posts are loaded changes, we now clicking on something and the url updates,
- we are now not looking for an update, but rather if component mounted
  we change from componentDidUpdate() to componentDidMount()
- we can now extract from the route which matched to `<Route path='/:id'>` the dynamic url `this.props.match.params.id`
- the .id is the same as what we setup `<Route path='/:id' />`

```js
// FullPost.js

  // componentDidUpdate(){}

  componentDidMount(){
    if(this.props.match.params.id){
      if (
				!this.state.loadedPost ||
				this.state.loadedPost != this.props.match.params.id
			) {
				axios.get('/posts/' + this.props.match.params.id).then(response => {
					// console.log(response);
					this.setState({ loadedPost: response.data });
				});
			}
    }
  }
```

learned how to extract route parameters (=> :id etc).

- But how do you extract search (also referred to as 'query') parameters (=> ?something=somevalue at the end of the URL)?
- How do you extract the fragment (=> #something at the end of the URL)?

### Query Params:

You can pass them easily like this:

```js
<Link to='/my-path?start=5'>Go to Start</Link>
```

or

```js
<Link
  to={{
    pathname: '/my-path',
    search: '?start=5'
  }}>
  Go to Start
</Link>
```

- React router makes it easy to get access to the search string: props.location.search .
- But that will only give you something like ?start=5
- You probably want to get the key-value pair, without the ? and the = . Here's a snippet which allows you to easily extract that information:

```js
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
```

URLSearchParams is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries() method. entries() returns an Iterator - basically a construct which can be used in a for...of... loop (as shown above).

When looping through query.entries() , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

### #(hash param) / Fragment:

You can pass it easily like this:

```js
<Link to='/my-path#start-position'>Go to Start</Link>
```

or

```js
<Link
  to={{
    pathname: '/my-path',
    hash: 'start-position'
  }}>
  Go to Start
</Link>
```

React router makes it easy to extract the fragment. You can simply access props.location.hash

## using Switch to load a single route

- with the router sequence of dynamic after specific (as below) it also causes some problems,
  now all routes are rendered if they match the path,
  `<Route path='/new-post' component={NewPost} /><Route path='/:id' exact component={FullPost} />`
- we can tell react router to load only one route at a time by wraping with <Switch>
- use import {Switch} from 'react-router-dom';
- load only first route from given set of routes and stop after that.
- NOTE: Route switch, with `<Switch>` order is important
- can put Route's inside and outside of Switch to give more flexibility

```js
<Switch>
  <Route path='/' exact component={Posts} />
  <Route path='/new-post' component={NewPost} />
  <Route path='/:id' exact component={FullPost} />
</Switch>
```

## Navigating Programmatically

- taking advantage of the history object of the params to navigate programatically
- goBack(), goForward(),
- push() pushes on stack of navigation, this.props.history.push();
- we can push() props of string `<Link to='/'>` or an Object same prop as when using `<Link to={{pathname:'/'+id}}>Home</Link>`

```js
// Posts.js
// import {Link} from 'react-router-dom';

postSelectedHandler = (id) =>{
  // this.props.history.push({pathname:'/'+id});
  this.props.history.push('/'+id);
}

render (){
  posts = this.state.posts.map(post => {
    return (
    // <Link to={'/'+post.id} key={post.id}>
      <Post key={post.id} title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id)}/>
    // </Link>
    );
  });
}
```

## Additional Information Regarding Active Links

- styling the route / path is tricky if we have `<NavLink to='/' exact>` and a child route needs to be styled

## Understanding Nested Routes

- sometimes you want nested routes, loading something like a component, inside of another component also loaded via routing
- you can use the `<Route>` component wherever you want in the application as long as the part you are using it is wrapped up the hierarchy by `<BrowserRouter>` component
- in the nested Component, the `<Route path={this.props.match.url + '/:id'} exact component={FullPost}>`
- updating code (refactor), Blog.js wont load FullPost anymore,
  - Blog.js has a `<Route path='/' exact component='{Posts}'>` will load Posts
  - Posts.js will load FullPost `<Route path='/:id' exact component={FullPost}/>`
- even though the `<Route>` is inside Posts.js as long as everything that needs access to routing is wrapped by `<BrowserRouter>` component up the DOM
- BUT since implementation of the nested route, route / loads Posts component, and Posts Component loads FullPost, the route will never match because route path='/' is specified as exact, so Post will never get rendered
- FIX, remove 'exact' from `<Route path='/'>` so it matches everything starting with /
- FIX: move it down below the `<Route path='/new-post'>`

### Switch

```
import {Switch } from 'react-router-dom';

```

- wrap with Switch so only single path is called from set

### Nested Route

- the nested routes should be relative ie. path should be appended to whatever the current route is responsible for the nested route (Posts Component)
- Posts.js adjust the nested `<Route path='/:id'>` by getting the current path dynamically `<Route path={this.path.match.url+'/:id'}> exact component={FullPost}/>`

```js
// Blog.js
<Switch>
  <Route path='/new-post' component={NewPost} />
  <Route path='/' component={Posts} />
</Switch>
```

```js
// Posts.js
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

return (
  <div>
    <section className='Posts'>{posts}</section>
    <Route path={this.path.match.url + '/:id'} exact component={FullPost} />
  </div>
);
```

## Creating Dynamic Nested Routes

- if you are loading a component that is already loaded, react router doesnt replace the component everytime, it reuses it,
- so in the previous example, component might not update its data even tho the route in the url updated,
  this is because we were using only componentDidMount() but we need to also use componentDidUpdate()
- also note this component is not receiving an id via props anymore, we are using the this.props.match.params.id directly from url

### Infinite update loops...

- if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) prevents infinite loop
- NOTE: != is single equals denoting just equality..not same type because state.loadedPost.id is a number and params.id passes back a string
- can also use unary operator + to do conversion from string to number type state.loadedPost.id !== +this.props.match.params.id

```js
// FullPost.js
componentDidUpdate() {
  this.loadData();
}

componentDidMount(){
  this.loadData();
}
loadData() {
  //check to prevent infinite loop...
  if(this.props.match.params.id){
    //if the state loadedPost doesnt exist
    if( !this.state.loadedPost ||
    (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
      axios.get('/posts/'+ this.props.match.params.id)
        .then(
          this.setState({loadedPost:response.data})
        )
    }
  }
}

deletePostHandler = ()=>{
  axios.delete('/posts/'+this.props.match.params.id).then(response=>{
    console.log(response);
  })
}

render(){
  if(this.props.match.params.id){}
}

```

## Redirecting Requests

- import { Redirect} from 'react-router-dom';
- inside `<Switch>` statement, use `<Redirect>`
- `<Redirect>` does not render content, it redirects
- prop syntax for route path is from='' to=''
- NB: using `<Redirect>` outside of `<Switch>`, then you cannot specify 'from' property

```js
<Switch>
  <Route path='/posts' component={Posts} />
  <Redirect from='/' to='/posts' />
</Switch>
```

## Conditional Redirects (outside of <Switch>)

- `<Redirect to='/posts'>` can allow us to redirect the url once say a form has submitted or .post() has completed
- import {Redirect} from 'react-router-dom';
- `<Redirect>` used outside `<Switch>` can only have 'to' prop, cant have 'from' prop
- render() method does re-render when redirects so we need some conditional state to determine if we need to render redirect

```js
// NewPost.js

import {Redirect} from 'react-router-dom';
state = {
  submitted: false
}
postDataHandler = () => {
  axios.post().then(response=>{
    this.setState({submitted: true});
  })
}
render(){
  let redirect = null;
  if(this.state.submitted){
    redirect =  <Redirect to='/posts' />
  }
  return (
    <div className='NewPost'>
      {redirect}
      <h1>Add a post</h1>
      ...
      <button onClick={this.postDataHandler}>Add Post</button>
    </div>
  );
}

```

## Using the History Prop to Redirect (Replace)

- its easier enough to redirect with props.history available on every component that is wrapped by `<BrowserRouter>`
- this.props.history.push('/posts');
- difference between .push() and `<Redirect>` is that Redirect replaces the current page on the stack, it doesnt push a new one
- this.props.history.replace('/posts') does same as what `<Redirect>` does, it replaces the current page on the stack

## Working with Guards

- navigation guards is used when you have authentication and only allow certain pages to be visited if they are authenticated
- this translates to rendering `<Route>` conditionally in React by using a property in the store and checking if prop eg. state={auth:false} is true,
- without access to the Route the component is never rendered
- can also do this in the redirected to component's componentDidMount() function, componentDidMount(){ //if unauth => this.props.history.replace('/home');}
- you control routing by the way you render its components
- if the route isnt rendered, you can't reach that route (connected component cant be loaded)

```js
<Switch>
  {this.state.auth ? <Route path='/posts' component={Posts} /> : null}
</Switch>
```

## Handling the 404 Case (Unknown Routes)

- accessing a route that is unknown, we called `<Redirect>`
- handling unknown routes with `<Route>` with NO path='' prop you can define component={} or`render={()=><h1>Not Found</h1>}`
- wont work with root route `<Redirect from='/'>`
- the 404 route should always be last to catch all routes, thats why it wont work with `Redirect from='/'>`

```js
<Route path='/posts' component={Posts}/>
<Route render={()=> <h1>Not Found</h1>}/> //or use this <Route component={}/>
// <Redirect from='/' to='/posts'/>
```

## Loading Routes Lazily

- GOAL: loading when needed
- code gets loaded even tho we have not accessed the path just by defining the <Route component={NewPost}>, it should only load when we access it
- Lazy Loading or code splitting is when we load only when we need it (good for loading different feature areas)
- works with REQUIRED: CRA (create react app) or react router 4

### asyncComponent

- basically this function receives a function, save it in state, the render method checks if the state is set, and if it is, render() the component
- we need a Higher order Component (HOC) create a file hoc/asyncComponent.js should help load component asynchronously (only when needed)
- asyncComponent receives an component argument (we call it eg importComponent) which is a function
- it returns a class that extends Component with render() method
- we set a state with 'component' property which initially is null, and will be set to the dynamically loaded component
- we set 'component' prop in componentDidMount() by calling the passed in function importComponent()
- that function returns a promise which we subscribe to .then(), we receive an argument which will have a .default property which will be the component we want to load dynamically
- assign that to 'component' state
- in render() check if the 'component' state is set, if it is set, then return the component, else return null;

### how to use asyncComponent

- basically we import the asyncComponent, create a const AsyncComponent, that calls the asyncComponent() function and we pass in an anonymous function that returns import(), which is only executed when the calling function is executed, it can be executed in render() by rendering te const we created {AsyncComponent}
- whenever you are importing something with import x from '', you inform webpack about the dependency and it is included in the bundle
- to load when needed, remove the import
- and then import the hoc asyncComponent we created above
- define a const AsyncComponent = asyncComponent(()=>{return import();}) we are returning an anonymous function that returns an import() as a function
- import() is the syntax for dynamic import, we pass in the same path as what we would normally point to with import x from 'x';
- with import(), whatever is passed into import() is only executed when the asnycComponent(()=>{}) return function is executed
- and this function (asyncComponent) is only executed when we render it to the screen usage would be in render() <Route path='/new-post' component={asyncComponent}>
- we can see this works by development tools - Network shows loading chunk.js

```js
// hoc/asyncComponent.js
import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then((comp) => {
        this.setState({ component: comp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
```

```js
// Blog.js
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
});

render (){
  return (
    <Switch>
      {this.state.auth? <Route path='/new-post' component={AsyncNewPost}/> : null}
    </Switch>
  );
}
```

## Lazy Loading with React Suspense (16.6) (ALTERNATIVE METHOD FOR LAZY LOADING)

- REQUIREMENTS react 16.6 and higher, DOES NOT WORK FOR SERVER SIDE RENDERING YET
- has .lazy() to load components asynchronously, defering loading until required
- NOTE: `<React.Framgent>` was added in 16.2 which acts like `<Aux>` in that the dom element is not rendered and acts as a wrapping element
- so instead of importing like `import Posts from './containers/Posts'` we need to use a dynamic import()

1. create a const Reference and assign to React.lazy(); `const Posts=React.lazy;`
2. pass in an anonymous function to lazy(()=> import('./containers/Posts')) that returns dynamic import () call, and we pass into import() the path we want
3. in the render() , we pass to render prop, anonymous function that returns react feature `<Suspense>`
4. eg `<Route path='/posts' render={()=>(<Suspense></Suspense>)}>`
5. and between the Suspense DOM element, we pass it the const we created (Posts) as an element `<Posts/>`
6. `<Suspense>` has a fallback prop which we can set to show something (its essentially a fallback while it is still loading) while react postpones the rendering of the lazy component

- the advantage of using the Suspense method is Async rendering and that it is not tied to routing, can use for conditional rendering

```js
// import Posts from './containers/Posts';
import User from './containers/User';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to='/user'>User Page</NavLink>
            <NavLink to='/posts'>Posts Page</NavLink>
          </nav>
          <Route path='/' component={Welcome} exact />
          <Route path='/user' component={User} />
          // <Route path='/posts' component={Posts} />
          <Route
            path='/posts'
            render={() => (
              <Suspense fallback={<h1>loading...</h1>}>
                <Posts />
              </Suspense>
            )}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
```

### example .lazy() not used for Routing

```js
// App.js

class App extends Component {
  state = { showPosts: false };

  modeHandler = () => {
    this.setState((prevState) => {
      return { showPosts: !prevState.showPosts };
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>

        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
          <User />
        )}
      </React.Fragment>
    );
  }
}
```

## Routing and Server Deployment

- when in development, the server is already setup, but once we have deployed to a server it is important to point all routes to the index.html
- SERVER CONFIGURATION: ALWAYS FORWARD ALL ROUTING TO THE INDEX.html regardless if the route exists,
- this is because the server handles all routes first, but on the server there is only index.html,
- react routing is client side and the server wouldnt know what to do with a route unless it is accessed via index.html

## NB: if the path where we deploy is not the root / like domain.com/ but something else like domain.com/my-app/

- by default `<BrowserRouter>` points to basename='/'
- configure <BrowserRouter basename='/my-app'>

---
