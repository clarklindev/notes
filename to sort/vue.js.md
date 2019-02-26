# VUE.JS

## Vue JS 2 Tutorial #33 - GET Requests.mp4

- get requests retrieve data

### App.vue

```
<template>
    <div>
        <add-blog></add-blog>
        <show-blogs></show-blogs>
    </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default{
    components:{
        'add-blog':addBlog,
        'show-blogs':showBlogs
    },
    data(){
        return{
        }
    }
}
</script>
```

### showBlogs.vue

```
<template>
    <div id="show-blogs">
        <h1>All blog articles</h1>
        <div v-for="blog in blogs" class="single-blog"></div>
        <h2>{{blog.title}}</h2>
        <article>{{ blog.body }}</article>
    </div>
</template>

<script>
export default{
    data(){
        blogs:[]
    },
    methods:{
        created(){
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
                console.log(data);
                this.blogs = data.body.slice(0,10); //getting first 10 elements from returned data array
            })
        }
    },
}
</script>
```
