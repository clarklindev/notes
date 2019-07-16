ANGULAR 4 in 60 MINUTES

# Typescript - allows creating of Class based objects (ES6)

class Greeter{
greeting: string;

//assign values to variables in the constructor
constructor(message:string){
this.greeting = message;
}

greet(){
return 'Hello,' + this.greeting;
}
}

let myClass = new Greeter('World');
myClass.greet();

===============================================
COMPONENTS
===============================================
Angular has a core 'App Component'

import {Component} from '@angular/core';

@Component({
selector: 'my-app',
template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent{
name = 'Angular';
}

======================

<body>
<my-app>Some text here</my-app>	//use the selector
</body>
===============================================
SERVICES - Share data across multiple components
=============================================== 
all services have import {Injectable} from '@angular/core';

//importing an interface/Class
import {User} from './user';

//example of importing JSON data from file
import {USERS} from './mock-users';

@Injectable()
export class UserService{
getUsers():User[]{
return USERS;
}
}

===============================================
Visual Studio Code

- install 'Angular4 typescript snippets' extension
- can use gitbash for windows commandline as opposed to powershell

preferences -> sttings
'terminal.integrated.shell.windows':"c:\\windows\\program files\\git\\bin\\bash.exe"
===============================================
INSTALLING

npm install -g @angular/cli

cd projects

//create new project
ng new <project-name>
eg. ng new a4app

cd a4app

//start server
ng serve

===============================================
package.json

"scripts":{

}

"dependencies":{
"@angular/core":"^4.0.0",
"@angular/forms":"^4.0.0",
"@angular/http":"^4.0.0",
"@angular/router":"^4.0.0",
"rxjs" //react extensions adds observables
}

"devDependencies":{
"@angular/cli":"",
"@angular/compiler-cli":"",
"typescript":""
}

===============================================
angular-cli.json - specific to angular cli
===============================================
src/app/app.module.ts

- meeting place for everything in app (components, services, modules)
- everything needs to be imported into this file
- and then added to NgModule directive

@NgModule({
declarations:[], //"components" go here

imports:[], //"modules" eg. http, forms

providers:[], //"services"

bootstrap:[AppComponent] //Adding main AppComponent

})
export class AppModule{}

===============================================

//the rest of the files have to do with the main 'AppComponent'
src/app/app.component.ts //- where the main class is - the decorator
src/app/app.component.spec.ts //testing
src/app/app.component.html //template
src/app/app.component.css
===============================================
src/app/app.component.ts

import {Component} from '@angular/core';
@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent{
}
===============================================
COMPONENTS (app/components/)

COMMAND: ng g component components/user

command creates a components.user folder with user component files

src/app/components/user/user.component.ts //- where the main class is - the decorator
src/app/components/user/user.component.spec.ts //testing
src/app/components/user/user.component.html //template
src/app/components/user/user.component.css

src/app/components/user/user.component.ts
@Component({
selector:'app-user',
templateUrl:'./user.component.html',
styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
constructor(){}
ngOnInit(){} //runs when component is initialized
}

command then updates src/app/app.module.ts

- auto imports the component
  import {UserComponent} from './components/user/user.component';

- adds component 'UserComponent' to 'declarations'
  @NgModule({
  declarations:[AppComponent, UserComponent]
  })
  ===============================================
  COMPONENT USAGE
  src/app/app.component.html

<app-user></app-user>
===============================================

CREATING INTERFACES

src/app/components/user.component.ts

address:Address;

interface Address{
street:string,
city:string,
state:string
}

===============================================
ARRAYS

src/app/components/user.component.ts
name:string;
age:number;
email:string;
address:Address;
hobbies:string[]; //string array
hello:any; //any type

this.hobbies = ["one", "two", "three"];

//usage 'any' type
this.hello = 1;
this.hello = "string"

src/app/components/user.component.html

<h1>{{name}}</h1>
<ul>
<li>age: {{age}}</li>
<li>email: {{email}}</li>
<li>address: {{address.street}} {{address.city}} {{address.state}}</li>
</ul>
=============================================== 
*NGFOR DIRECTIVE (looping)

\*ngFor=

src/app/components/user/user.component/html
usage:

<ul>
<li *ngFor="let hobby of hobbies">{{hobby}}</li>
<li *ngFor="let hobby of hobbies; let i = index">{{i+1}}: {{hobby}}</li>	//with index starting at 1
</ul>

===============================================
EVENTS

src/app/components/user/user.component.html
<button (click)="onClick()">Click me</button>

src/app/components/user/user.components.ts
onClick(){
console.log('Hello');
this.name="Brad Traversy" //changing .name - event manipulating property
this.hobbies.push("New Hobby");
}

===============================================
FORMS

src/app/components/user/user.component.html

<form (submit)="addHobby(hobby.value)">
<div>
<label for="hobby">Hobby</label>
<input type="text" #hobby> //giving it an id
</div>
</form>
<ul>
<li *ngFor="let hobby of hobbies; let i = index">
{{i+1}}: {{hobby}} <button (click)="deleteHobby(hobby)">x</button>
</li>	
</ul>

src/app/components/user/user.component.ts

addHobby(hobby){
console.log(hobby);
this.hobbies.unshift(hobby); //add to front
return false;
}

deleteHobby(hobby){
console.log(hobby);
for(let i= 0; i< this.hobbies.length; i++){
if(this.hobbies[i] == hobby){
this.hobbies.splice(i, 1); //remove
}
}
}

===============================================
2-WAY DATA BINDING

-binding input to properties (from template-to-component and visa-versa)
-to use 2-way data binding - we need to use ngModel
-to use ngModel, need to import 'FormModule' to app.module.ts -[(ngModel)]="" indicates 2 way data-binding
-reactive

src/app/app.modules.ts
import {FormsModule} from '@angular/forms';

@NgModule({
imports:[
FormsModule
]
})

src/app/components/user/user.component.ts

@Component({
selector:'app-user',
templateUrl:'./user.component.html',
styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit{
name:string;
age:number;
email:string;
address:Address;
hobbies:string[];
hello:any;

constructor(){
}

ngOnInit(){
this.name = 'John Doe';
this.age = 30;
this.email = 'johndoe@email.com';
this.address = {
street:'50 Main st',
city:'Boston',
state: 'MA'
}
this.hobbies = ['hobby1','hobby2','hobby3'];
this.hello = 'hello';
}
}

interface Address{
street:string,
city:string,
state:string
}

src/app/components/user/user.component.html

<form>
<div>
<label for="name">Name: </label><br>
<input type="text" [(ngModel)]="name" name="name">
</div>
<div>
<label for="age">Age: </label><br>
<input type="number" [(ngModel)]="age" name="age">
</div>
<div>
<label for="email">Email: </label><br>
<input type="text" [(ngModel)]="email" name="email">
</div>
<div>
<label for="street">Street: </label><br>
<input type="text" [(ngModel)]="address.street" name="street">
</div>
<div>
<label for="city">City: </label><br>
<input type="text" [(ngModel)]="address.city" name="city">
</div>
<div>
<label for="state">State: </label><br>
<input type="text" [(ngModel)]="address.state" name="state">
</div>
</form>

===============================================
HTTP MODULE / http://jsonplaceholder.typicode.com
[br /]
-creating a service
-how to use the Http Module to fetch posts from jsonplaceholder
-use map from rxjs
-http requests getPosts() returns an observable so we need to subscribe to it
src/app/services

ng g service services/data

creates:
src/app/services/data.service.spec.ts
src/app/services/data.service.ts

doesnt add it to src/app/app.module.ts we have to manually do this...
src/app/app.module.ts
import {DataService} from './services/data.service';
import {HttpModule} from '@angular/http';

@NgModule({
declarations:[],
imports:[HttpModule],
providers:[DataService], //services are providers
bootstrap:[]
})

src/app/components/user/user.components.ts
-bring service into component

import {DataService} from '../../services/data.service';

export class UserComponent implements OnInit{
posts:Post[];

constructor(private dataService:Dataservice){
}

ngOnInit(){
this.dataService.getPosts().subscribe((posts)=>{
console.log(posts);
this.posts = posts;
})
}
}

interface Post{
id:number,
title:string,
body:string,
userId:number
}

src/app/services/data.service.ts
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'; //allows us to take response and map to json

@Injectable()
export class DataService{
constructor(public h:Http){
console.log('Data service connected...');
}

getPosts(){
return this.h.get('https://jsonplaceholder.typicode.com/posts') //use link from jsonplaceholder
.map(res=> res.json()); //returns all posts as json
}
}

src/app/components/user/user.component.html

<h1>Posts</h1>
<div *ngFor="let post of posts">
<h4>{{post.title}}</h4>
<p>{{post.body}}</p>
</div>
=============================================== 
NG-IF

src/app/components/user/user.component.html

<button (click)="toggleEdit()"

<div *ngIf=isEdit>
//form content
</div>

src/app/components/user/user.component.ts

export class UserComponent implements OnInit{
isEdit:boolean = false;

toggleEdit(){
this.isEdit = !this.isEdit;
}
}

===============================================
ROUTER

-import RouterModule, Routes
import {RouterModule, Routes} from '@angular/router';
-then create our routes in a variable eg. 'appRoutes'
-appRoutes is an array, and each
-src/app/app.component.html
<router-outlet></router-outlet>

ng g component components/about

-now we have an about component
-and a user component

src/app/components/about/
src/app/components/user/

src/app/components/about/about.component.html

<h4>this is the about component</h4>

——————————————————————

src/app/app.module.ts
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [

{path:'', component:UserComponent},
{path:'about', component:AboutComponent}

];

@NgModule({
imports:[
RouterModule.forRoot(appRoutes)
]
})

——————————————————————

src/app/app.component.html
<router-outlet></router-outlet>
