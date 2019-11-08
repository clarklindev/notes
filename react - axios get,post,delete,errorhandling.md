# Axios

```
npm install axios --save
```

<!-- GET -->

- uses axios.get();
- clicking on a post
- saving state in the class of the selected id,
- this is passed into the fullpost as a prop
- in fullpost, we do something with the id in componentDidUpdate \*prop updated..

```js
// Blog.js
state={
  posts:[]
}
componentDidMount(){
  //async call with promises
  axios.get('http://url/posts').then(
    response=>{
      console.log(response.data);
      const posts = response.data.slice(0,4);
      const updatePosts =
      this.setState(posts: response.data);
    }
  );
}

postSelectedHandler = (id)=>{

}
render(){
  const posts = this.state.posts.map(post=>{
    return <Post key={post.id} title={post.title} clicked={()=>this.postSelectedHandler(post.id)}>
  })
}
```

<!-- DELETE -->

- delete targets url and specific post (use id)

```js
//Fullpost.js
state={
  loadedPost:null
}
componentDidUpdate(){
  if(this.props.id){

    //to prevent infinite loops
    if( !this.state.loadedPost || this.state.loadedPost &&

    //if we do have the loadedPost and the ids are different
    (this.state.loadedPost.id != this.props.id) ){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.id)
      .then(response=>{
        this.setState({loadedPost: response.data});
      });
    }

  }
}

deletePostHandler = ()=>{
  axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
  .then(response=>{
    console.log(response);
  });

}

render(){
  let post;
  if(this.props.id){
    post=<p>Loading...</p>;
  }
  if(this.state.loadedPost){
    post=(
    <div className="FullPost">
      <h1>{this.state.loadedPost.title}</h1>
      <p>{this.state.loadedPost.body}</p>
      <button onClick={this.deletePostHandler}>delete</button>
    </div>
    )
  }
}
```

<!-- POST -->

- axios.post()
- receives url and data object

```js
// NewPost.js
import axios from 'axios';
state = {
  title: '',
  content: '',
  author: 'Clark'
};
postDataHandler = () => {
  const data = {
    title: this.state.title,
    body: this.state.content,
    author: this.state.author
  };
  axios
    .post('https://jsonplaceholder.typicode.com/posts/', data)
    .then(response => {
      console.log(response);
    });
};

render(){
  return (
    <div className="NewPost">
      <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
      <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
      <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={this.postDataHandler}>add</button>
    </div>
  )
}

<button onClick={this.postDataHandler}></button>;
```

<!-- handling ERRORS -->

- axios uses promises and allows .catch() to chain onto .then() for error handling

```js
// Blog.js
state={
  error: false
}
componentDidMount(){
  axios
  .get()
  .then(response => {})
  .catch(error => {
    this.setState({ error: true });
  });
}
render(){
  let posts = <p>Something went wrong</p>;
  if(!this.state.error){
    posts = this.state.posts.map(post=>{
      return <Post/>
    });
  }
  return (
    <div>
      <section className="Posts">
        {posts}
      </section>
      <section>
        <FullPost id={this.state.selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
}

```
