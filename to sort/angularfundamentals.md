Angular (FUNDAMENTALS)

Ultimate Angular


- OLD: npm install -g angular-cli
- NEW: npm install -g @angular/cli
- npm install --save-dev @angular/cli@latest
- ng <command>
- go to directory to install angular-cli
- ng new <name of project>
- eg.
- ng new ninja-directory
- NOTE: src/ folder
- http://localhost:4200[br /]ng serve
- <li *ngFor=“let hero of heroes”></li>
class binding [class.some-css-class]="some-condition"

service
import { Injectable } from '@angular/core';

Observable.subscribe()

The JavaScript (+) operator converts the string to a number

In-memory Web API package from npm (npm install angular-in-memory-web-api --save)

creating angular cli project in a git repository
ng new appName --directory project_folder

or 
clone repo angular-fundamental-routing-and-navigation, then go one directory up.. 
ng new angular-fundamental-routing-and-navigation --directory angular-fundamental-routing-and-navigation

The $ is a convention that indicates heroes$ is an Observable, not an array.


git push -u origin master

getting route from url
ngOnInit() {
this.hero$ = this.route.paramMap.pipe(
switchMap((params: ParamMap) => this.service.getHeroes(params.get("id")))
);
}
You might think to use the RxJS map operator. But the HeroService returns an Observable<Hero>. So you flatten the Observable with the switchMap operator instead.
The switchMap operator also cancels previous in-flight requests. If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id, switchMap discards that old request and returns the hero for the new id.
In this example, you retrieve the route parameter map from an Observable. That implies that the route parameter map can change during the lifetime of this component.
You don't want the router to remove the current HeroDetailComponent instance from the DOM only to re-create it for the next id. That could be visibly jarring. Better to simply re-use the same component instance and update the parameter.
Unfortunately, ngOnInit is only called once per component instantiation. You need a way to detect when the route parameters change from within the same instance. The observable paramMap property handles that beautifully.

ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
———————————————

<ul>
<li *ngFor=“let person of persons; let i= index”>
{{i+1}}{{person}}
</li> </ul>

conditional directives 
*ngIf 

*ngSwitch

<div [ngSwitch]=“greeting”>
<div *ngSwitchCase =“‘1’”>Hello world</div>
<div *ngSwitchCase =“‘2’”>Hi there</div>
<div *ngSwitchCase =“‘3’”>Whats up</div>
<div *ngSwitchDefault>Hello</div>
</div>

greeting:number = 88;	//calls switch default

PROPERTY BINDING
3 ways to bind to properties
<div><img src=“{{imageUrl}}”></div>
<div><img [src]=“imageUrl”></div>
<div><img bind-src=“imageUrl’></div>

<h4>Image location: <span [textContent]=“imageUrl”></span>	//prints actual string

<p [hidden]=“isUnchanged”>Post has been changed</p>
<button [disabled]=“isUnchanged”>Save</button>

imageUrl:string = “http://lorempixel.com/400/200”;	//random image with width/height
isUnchanged:boolean = false;

ngClass
allows us to dynamically assign classes to elements

single class
<h4 [class.special]=“isSpecial”></h4>	//adds special class if isSpecial is true
isSpecial = false;

multiple class
ngClass allows assigning multiple classes to elements
<h4 [ngClass] = “{ 
‘checked-in’ : passenger.checkedIn,	//adding checked-in class if checkedIn true
‘checked-out’ : !passenger.checkedIn	//adding checked-out class if checkedIn false
}”

ngStyles
ngStyle doesnt add the class to the element
single class
<div [style.font-size]=“isSpecial ? ‘x-large’ : ‘smaller’”>font size</div>

multiple class
<div [ngStyle]=“{
‘font-style’:this.canSave? ‘italic’ | ‘normal’,
‘font-size’:this.isSpecial? ’24px’ | ’12px’
}”></div>

—————————
named outlets are the targets of secondary routes


//install dependencies
npm install <git url>

changing project to use scss (angular.json)
"schematics": {
"@schematics/angular:component":{
"styleext":"scss"
}
}


setting angular to use default scss:
ng config schematics.@schematics/angular:component.styleext scss
————————————————————————————

- generating components
- *components support relative paths ../ <component name>
- *goto src/app folder

SAME
- ng generate component my-new-component
- ng g component my-new-component

- Component	ng g component my-new-component
- Directive	ng g directive my-new-directive
- Pipe	ng g pipe my-new-pipe
- Service	ng g service my-new-service
- Class	ng g class my-new-class
- Guard	ng g guard my-new-guard
- Interface	ng g interface my-new-interface
- Enum	ng g enum my-new-enum
- Module	ng g module my-module

————————————————————————————


STYLE GUIDE

Apply the single responsibility principle (SRP) to all components, services, and other symbols
use dashes to separate words in the descriptive name.
use dots to separate the descriptive name from the type.
//import {class} from ‘(./(no .ts) )’;
use consistent type names for all components following a pattern that describes the component's feature then its type. 
A recommended pattern is feature.type.ts.
conventional type names including .service, .component, .pipe, .module, and .directive.
use a hyphenated, lowercase element selector value (e.g. admin-users).
use custom prefix for components
use a prefix that identifies the feature area or the app itself.

sudo npm install -g @angular/cli
(in folder) ng new <project-name>
ng serve
Object.assign({}, changes.detail.currentValue); //object literal improvements
@NgModule({ }) //decorator
angular safe navigation char ‘?’
0ne way data flow from class to template, use [] square bracket  (in the class) title:string;  (then in template) <h1 [innerHTML]=“title”></h1>


ADD
using spread operator … add 
addItem(item){  this.groceries = […this.groceries, item]; }

REMOVE
using .filter to remove. 
removeItem(item){  this.groceries = this.groceries.filter( (grocery) => item !== grocery); }

————————————————————————————
ANGULAR FUNDAMENTALS (ULTIMATE ANGULAR)

BUILDING BLOCKS

modules
components
directives
routing
services

Module
main building block of an application (can have single, multiple, module-depending-on-other-modules)
can contain:
components,
routes,
services etc

Components
contains a template
data
logic
forms part of a DOM tree
creates subtree node

Directive
something we can …to an existing DOM element, html element, component or a <template> on its own
aim is to extend or transform an Element or its children

Service
data layer
passing data into a component
logic thats not component related
api requests

Routing
navigation for application
tells angular which component to render

————————————————————————————

package.json

“scripts”: {}
“dependencies”: {}
“devDependencies” : {}

————————————————————————————

Interfaces

InterfaceAddress : Address {
street: string,
city: string,
state: string,
hobbies: string[],
hobbies: number[],
hobbies:any[]
}

Go in models folder ‘app/passenger-dashboard/models/passenger.interface’

usage: 

import { Passenger } from ‘../../models/passenger.interface’;

————————————————————————————
*(old) prototype javascript (non-angular)

function ShoppingList(){
this.groceries = [];
}

ShoppingList.prototype.addItem = function(item){
this.groceries = this.groceries.concat(item);	//immutable way to add };

ShoppingList.prototype.removeItem = function(item){
this.groceries = this.groceries.filter(function(grocery){
return item !== grocery;
});	 };

var mylist = new ShoppingList();
mylist.addItem(‘banana’);
mylist.addItem(‘apple’);

console.log(mylist.groceries);

mylist.removeItem(‘banana’);
console.log(mylist.groceries);

————————————————————————————
Typescript Class

class ShoppingList2{
groceries : string[];	//array of type string
constructor() {
this.groceries = []; 	}

addItem(item){
this.groceries = […this.groceries, item];	//spread operator
}

removeItem(item){ 	this.groceries = this.groceries.filter(function (grocery) {
return item !== grocery;
}

//OR ARROW FUNCTION
this.groceries = this.groceries.filter( (grocery) => item !== grocery);	// filter returns array items, where item !== grocery

}
}

————————————————————————————

Basic Class structure

class Greeter {
greeting:string;

constructor(message:string){
this.greeting = message;
}

greet(){
return “Hello” + this.greeting;
}
}

let greeter = new Greeter(‘World’);
let button = document.createElement(‘button’);
button.onClick = function() {}
document.body.appendChild(button);

————————————————————————————
IMPORTS AND EXPORTS (ES6 + typescript)

import and export allows us to import something (modules) from another file

class exports ‘module’,
(./formatter.js)
export function uppercase(){}

other class imports module (main.ts) import { uppercase} from ‘./formatter’


————————————————————————————
GETTING STARTED

PROJECT SETUP
yarn install (install dependencies)
yarn start	(adds dependencies in ‘vendor’ folder)
 FIRST COMPONENT WITH @COMPONENT

(app/app.component.ts)

import {Component} from ‘@angular/core’;

@Component({	
//decorator	
selector:’app-root’,

styleUrls:[‘app.component.scss’],	//reference to SCSS

template:`<div class=“”>{{ title }}</div>`,	//{{}} interpolation

//OR 
templateUrl: ‘./app.component.html’
})
export class AppComponent{
//DECLARE
title:string;	//declare property

//INITIALIZE
constructor(){
this.title = ‘HELLO WORLD!’;	//initialize data here…
}
}

———————————————
USAGE

(index.html)

<body>
<app-root></app-root>	//base root component
</body>

———————————————————————————
ROOT APP MODULE

AppModule 

(app/app.module.ts)

//import modules
import {NgModule} from ‘@angular/core’;

import {BrowserModule} from ‘@angular/platform-browser’;
import {CommonModule} from ‘@angular/common’;	//for directives

//import components
import {AppComponent} from ‘./app.component’;


@NgModule({ 
//special angular decorator	declarations:[	//components
AppComponent, 

//future components go here
],	

imports:[	//modules
BrowserModule, 
CommonModule
],	

bootstrap:[AppComponent]	//main root component
})
export class AppModule{}


————————————————————————————

Main 
(main.ts)
import {platformBrowserDynamic} from ‘@angular/platform-browser-dynamic’;
import {AppModule} from ‘./app/app.module’;

platformBrowserDynamic().boostrapModule(AppModule)	
//tell it which module to boostrap.then(success => console.log(`Bootstrap success`))
.catch(err => console.error(err));


————————————————————————————
————————————————————————————
TEMPLATE FUNDAMENTALS

INTERPOLATION AND EXPRESSIONS
interpolation {{ }} allows binding properties in the class with the template
can do calculations inside {{ here }}
can do iternary expression {{ isHappy ? ‘yes’ : ‘no’}}
can do addition of strings

————————————————————————————


PROPERTY BINDING
passing data from a component class -> into a template
0ne way data flow ———————————————from class to template, use [] square bracket to bind to class 

(in the class) 
(app.component.ts) 	title:string; 	logo: string = ‘img/logo.svg’;
name: string = ’Todd’;

———————————————
 (then in template)
(app.component.html) 	<h1 [innerHTML]=“title”></h1>
<img [src]=‘logo’>
<input type=“text” [value] =‘name’>
{{ name }}	//initial bind, but does not update…

————————————————————————————

EVENT BINDING
events use round brackets () 
———————————————

(in the class)
(app.component.ts)

@Component({
templateUrl:’app.component.html’
})
export class AppComponent{

name:string = ‘Todd’;

handleInput(event:any){
this.name = event.target.value;	//in console, ‘target’ property
}

handleBlur(event:any){
this.name = event.target.value;	//in console, ‘target’ property
}

handleClick(){
this.name=“Motto”; 	}
}

———————————————

(in the template)
(app.component.html)

<div class=“app”>
<input 
type=“text”
[value]=“name”


(input)=“handleInput($event)”	//when user types(blur)=“handleBlur($event)”>	//round brackets, function listening to blur event, pass in $event

<button (click)=“handleClick()”>	//click event
change name
</button> </div>

————————————————————————————

TWO-WAY BINDING (ngModel)

an angular directive that will allow 2-way data binding
———————————————

(app.module.ts)
import {FormsModule} from ‘@angluar/forms’;

@NgModule({
imports:[
FormsModule
]
})
export class AppModule{}

———————————————

(in the class)
(app.component.ts)
@Component({
templateUrl:’app.component.html’ })
export class AppComponent{
name:string = ‘Todd’;

handleChange(value: string){
this.name = value;
}
}

———————————————

(in the template)
(app.components.html)

<input 
type=“text”
[ngModel]=“name”	//binding using ngModel to ‘name’	- property binding
(ngModelChange)=“handleChange($event)”	//listening to ngModelChange event - event binding
>


[(ngModel)] is the same as [ngModel] [ngModelChange] combination

<input 
type=“text”
[(ngModel)]=“name”	//does both property and event binding
>

————————————————————————————

TEMPLATE #REF VARIABLES

allows us to create a reference to a particular DOM node, and access it from anywhere

———————————————

in the template
(app.component.html)

<button (click)=“handleClick(username.value)”>	//gets reference to what is in ‘input’ (#username) when clicked
Get value
</button>
<input type=“text’ #username>	//setting up a ref

———————————————

in the class
(app.component.ts)
@Component({
templateUrl:’app.component.html’ })
export class AppComponent{
name:string = “Todd”;
handleClick(value:string){
console.log(value);
}
}

————————————————————————————
————————————————————————————
RENDERING FLOWS (angular directives)

ngIf, SYNTAX and TEMPLATE

ngIf (ngIf show/delete actually destroys element and re-creates element)

(in the template)
(app.component.html)

<div class=“app”>
<input type=“text” [value]=“name” (input)=“handleChange($event.target.value)”>

<div *ngIf=“name.length”>	//when name has a length... ngIf check becomes true amd div shows
Searching for… {{ name }}
</div>
</div>
———————————————

(in the class)
(app.component.ts)

export class AppComponent{
name:string=‘’;

handleChange(value:string){
this.name = value;	//when input occurs we are re-assigning name value 	} }

————————————————————————————
ngFor


interface Passenger{
id:number,
fullname:string,
checkedIn:boolean
}

(in the template)
(app.component.html)

<div class=“app”>
<h3>Airline Passengers</h3>
<ul>
<li *ngFor=“let passenger of passengers; let i = index“> //using index
{{ i }} : {{passengers.fullname}}	
</li>	 	</ul>	
</div>


(in the class) (app.component.ts)


@Component({
selector:’app-root’,
styleUrls:[],
templateUrl:’app.component.html’
})
export class AppComponent {

passengers: Passenger[] = [
{
id:1,
fullname:’Clark’,
checkedIn:true
},
…
] }

————————————————————————————
ngClass and ClassName binding


(styling in app.component.scss)
.app{
}

.status{
width:10px;
height::10px;
background:red;
display:block;
margin:8px 10px 0 0;
float:left;
border-radius:50%;

&.checked-in{
background:green; 	}	
}

———————————————
Using ClassName binding

<li *ngFor=“let passenger of passengers; let i = index“> //using index

//good for single class name bind
<span 
class=“status”
[class.checked-in]=“passenger.checkedIn”>
</span>	

{{ i }} : {{passengers.fullname}}	
</li>

OR

Using ngClass binding (PREFERRED METHOD)

<li *ngFor=“let passenger of passengers; let i = index“> //using index

//same as above but allows multiple class binding
<span 
class=“status”
[ngClass] = “{ 
‘checked-in’ : passenger.checkedIn,	//adding checked-in class if checkedIn true
‘checked-out’ : !passenger.checkedIn	//adding checked-out class if checkedIn false
}”
>
</span>

{{ i }} : {{passengers.fullname}}	
</li>

————————————————————————————
ADDING STYLES WITHOUT ADDING CLASSNAMES

ngStyle and style binding 
//note binding is javascript equivalent: ‘background-color’ becomes ‘backgroundColor’

<span 
class=“status”
[style.backgroundColor] = “(passenger.checkedIn ? ‘green’ : ‘red’)”
>
</span> 

OR USING ngStyle (PREFERRED METHOD)
//allows multiple binding of classes

<span 
class=“status”
[ngStyle] = “{ 
backgroundColor: (passenger.checkedIn ? ‘green’ : ‘red’)
}”
>
</span> 
————————————————————————————
PIPES FOR DATA TRANSFORMATION

pipe - function that returns something new

interface Passenger{
id:number,
fullname:string,
checkedIn:boolean,
checkedInDate
}?: number | null	//? means optional // value can be number or null

function uppercase(string){
return string.toUpperCase(); }

(in the template)
(app.component.html)

JSON PIPE
<p>{{ passenger | json }}</p>	//json pipe	gives us the entire object in json


DATE PIPE}}	//using date pipe to format
</div>


<div class=“date”>
check in date: 
{{passenger.checkinDate ? (passenger.checkInDate | date :’yMMMMd’) : ‘not checkedin’ UPPERCASE PIPE
| uppercase


————————————————————————————
SAFE NAVIGATION OPERATOR

allows safety check before they are parsed

interface Child{
name: string,
age: number }

interface Passenger{
id:number,
fullname:string,
checkedIn :boolean,
checkInDate: number | null,
children: Child[] | null }


(in the template)
(app.components.html)

<div class=“children”>
children: {{ passenger.children?.length || 0 }}	//using safe navigation operator to check if children exists
</div>


————————————————————————————

COMPONENT ARCHITECTURE 
AND FEATURE MODELS

CONTAINER VS PRESENTATIONAL COMPONENT

STATEFULL VS STATELESS

SMART COMPONENT VS DUMB COMPONENT

———————————————

SMART/CONTAINER Component
can communicate with services
can render child components

DUMB / PRESENATIONAL Component
accept data via @Inputs
Emit data changes via event outputs

ONE WAY DATA-FLOW
data flows down
Events emit up

FEATURE MODULES
custom ngModule

———————————————


FEATURE MODULE
we create a folder and add the feature module with the same name
(FOLDER)app/passenger-dashboard.module.ts) (feature module)	
(passenger-dashboard/

import { NgModule } from ‘@angular/core’;
import { CommonModule } from ‘@angular/common’;

@NgModule({
declarations:[],	//components

imports:[
CommonModule
]
})

export class PassengerDashboardModule{} 

———————————————
IMPORT FEATURE MODULE IN app.module.ts

(app/app.module.ts)
import { NgModule } from ‘@angular/core’;
import { BrowserModule } from ‘@angular/platform-browser’;
import { CommonModule } from ‘@angular/common’;
import {AppComponent} from ‘./app.component’;

import {PassengerDashboardModule} from ‘./passenger-dashboard/passenger-dashboard.module’;
@NgModule({
declarations:[AppComponent],	//components

imports:[	//modules
//angular modules
CommonModule, 
BrowserModule	

//customModule
PassengerDashboardModule	
],

boostrap:[AppComponent]
})

export class AppsModule{} 

————————————————————————————
MOVING OUR PASSENGER INTO SMART/CONTAINER COMPONENT

app/app.component.scss
app/app.component.ts
app/module.ts
app/passenger-dashboard/passenger-dashboard.module.ts
app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.html
app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts
app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.scss
app/passenger-dashboard/models/passenger.interface.ts	(contains interfaces)
———————————————

(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts)
import {Component} from ‘@angular/core’;
import {Passenger} from ‘../../models/passenger.interface’;

@Component({ 
selector: ‘passenger-dashboard’,
styleUrls: [‘passenger-dashboard.component.scss’],
templateUrl:’passenger-dashboard.component.html’
})
export class PassengerDashboardComponent{
passengers:Passenger[] = [
{
id:1, fullname:’Clark’, checkedIn:true, checkInDate:20010403, children:null
}, 
{…}
]
}

———————————————
(app/passenger-dashboard/models/passenger.interface)
export interface Child{
name:string,
age:number }

export interface Passenger{
id:number,
fullname:string,
checkedIn:boolean,
checkInDate:number | null,
children: Child[] | null }

———————————————
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.scss)
…
———————————————

REVISITED
(app/passenger-dashboard/passenger-dashboard.module.ts) (feature module)


import { NgModule } from ‘@angular/core’;
import { CommonModule } from ‘@angular/common’;

import { PassengerDashboardComponent } from ‘./containers/passenger-dashboard/passenger-dashboard.component’;

@NgModule({
declarations:[	//components
PassengerDashboardComponent
],	

imports:[
CommonModule
],

exports:[
PassengerDashboardComponent
]
})

export class PassengerDashboardModule{} 

————————————————————————————
ngOnInit life cycle hook
a life cycle hook gets called by angular when something happens 

OnInit life cycle hook is when the component is initialized

dynamic data should be initialized inside the OnInit (data fetching)

constructor function can be used for services
———————————————
REVISITED
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts)
import {Component , OnInit } from ‘@angular/core’;
…
export class PassengerDashboardComponent implements Oninit{
passengers:Passengers[];

constructor(){}
ngOnInit(){
this.passengers = [{… put data here}] 	} }

———————————————
PRESENTATIONAL (DUMB) COMPONENTS)

breaking up the passenger component
REVISITED
(app/passenger-dashboard/passenger-dashboard.module.ts)

import { NgModule } from ‘@angular/core’;
import { CommonModule } from ‘@angular/common’;

//containers
import { PassengerDashboardComponent } from ‘./containers/passenger-dashboard/passenger-dashboard.component’;

//components
import { PassengerCountComponent} from ‘./components/passenger-count/passenger-count.component’;
import { PassengerDetailComponent} from ‘./components/passenger-detail/passenger-detail.component’;

@NgModule({
declarations:[	//components
PassengerDashboardComponent,
PassengerCountComponent,	
PassengerDetailComponent
],	

imports:[
CommonModule
],

exports:[
PassengerDashboardComponent
]
})

export class PassengerDashboardModule{} 

containers
container component - contains data
- renders stateless child components	
REVISITED
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts )
(in the template)
<div>
<passenger-count></passenger-count>
<passenger-detail></passenger-detail>
</div>
———————————————
state-less child components (DUMB COMPONENTS)
setup…

(app/passenger-dashboard/components/passenger-count/passenger-count.component.ts)
import { Component } from ‘@angular/core’;
@Component({
selector:’passenger-count’,
template:`<div>Count Component</div>`
})
export class PassengerCountComponent{
constructor(){}
}
———————————————

(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)
import { Component } from ‘@angular/core’;
@Component({
selector:’passenger-detail’,
template:`<div>Detail Component</div>`
})
export class PassengerDetailComponent{
constructor(){}
}
————————————————————————————
PASSING DATA INTO COMPONENTS WITH @INPUT

<component [property-to-bind-to]=“data”></component>	//property inside component

to pass in data into a component we bind to it using property binding
import { Input } from ‘@angular/core’;
then inside the component, add @Input above the property we binding to


———————————————

REVISITED (in the template)
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts )

@Component({
template:`
<div>
<passenger-count [items]=“passengers”></passenger-count>	//pass-in data by binding to a property inside passenger-count component
<passenger-detail></passenger-detail>
</div>
`
})
export class PassengerDashboardComponent{
passengers:Passenger[] = [{}]
}

———————————————
(app/passenger-dashboard/components/passenger-count/passenger-count.component.ts )
REVISITED

import { Component, 
items:Passenger[];

constructor(){}

Input } from ‘@angular/core’;
import { Passenger } from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-count’,
template:`
<div>
<h3>Airline Passengers</h3>
<div>
Total passengers: {{ checkedInCount}} / {{ items.length }}
</div>
</div>
`
})
export class PassengerCountComponent{
@Input()	//add @Input() tells angular we passing this information as a binding through decorator @Input checkedInCount(){
if(!this.items) return; 
return this.items.filter((passenger:Passenger) => passenger.checkedIn).length;  }
}
————————————————————————————

DYNAMIC @INPUT VALUES WITH NGFOR

make dynamic input values by using *ngFor directly on the component

then each ‘passenger’ of the ngFor will get a <passenger-detail> component 

we are allowed to bind to the same component if we use *ngFor, below we bind to [detail]

<passenger-detail *ngFor=“let passenger of passengers;” [detail]=“passenger”>
</passenger-detail>

———————————————

REVISITED (in the template)
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts )

@Component({
styleUrls:[‘passenger-dashboard.component.scss’],
template:` 
<div>
<passenger-count></passenger-count>	
[items]=“passengers”//pass-in data by binding to a property inside passenger-count component

//we move the template data passenger-detail related code into its own component

<passenger-detail *ngFor=“let passenger of passengers;”	//foreach passenger	[detail]=“passenger”>	//pass the passenger in passenger-detail component by binding to ‘detail’
</passenger-detail>

</div>
`
})
export class PassengerDashboardComponent{
passengers:Passenger[] = [{}]
}

———————————————

(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)

REVISITED

import {Component , Input} from ‘@angular/core’;	//import Input from angular core
import {Passenger} from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-detail’,

styleUrls:[‘passenger-detail.component.scss’],

template:`<div>
<span class=“status” [class.checked-in]=“detail.checkedIn”></span>
{{detail.fullname}}

<div class=“date”>
Check in date: 
{{ detail.checkInDate ? (detail.checkInDate | date: ‘YYYYMMd’) }}
</div>
<div class=“children”>
Children: {{detail.children?.length || 0 }}
</div>
</div>
`
})
export class PassengerDetailComponent{
@Input()	
//mark it as expecting input data	detail:Passenger;
constructor(){}
}

———————————————

(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.scss)
.status{
width:10px;
height:10px;
background:red;
display:block;
margin: 9px 10px 0 0;
float:left;
border-radius:50%;
&.checked-in{
background:green; 	} }

————————————————————————————
EMITTING CHANGES WITH @OUTPUT AND EVENTEMITTER
(editing , removing)
manipulate data in local stateless component
and when we make a change we notify parent component

*(parent)
one-way data flow into ‘stateless’ component using @Input

*(child)
use event output to tell parent when something has changed using @Output
we need to import Output, EventEmitter for output
import {Output, EventEmitter} from ‘@angular/core’;
@Output()	//mark as an output
property: EventEmitter<any> = new EventEmitter();	


*(CHILD)
(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)
REVISITED

import {Component ,Passenger} from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-detail’,

styleUrls:[‘passenger-detail.component.scss’],

template:`<div>
<span class=“status” [class.checked-in]=“detail.checkedIn”></span>

Input, Output, EventEmmiter} from ‘@angular/core’;	//import Input from angular core
import {	<div>
<input *ngIf=“editing”	//when ‘editing’ show input
type=“text” 
[value]=“detail.fullname”

EVENT OCCURS (input)
(input)=“onNameChange(name.value)”	//when input changes we call the onNameChange function
#name	//keep reference to input called #name
>
</div>
<div *ngIf=“!editing”>	//when ‘not editing’ show text
{{detail.fullname}}
</div>

<div class=“date”>
Check in date: 
{{ detail.checkInDate ? (detail.checkInDate | date: ‘YYYYMMd’) }}
</div>
<div class=“children”>
Children: {{detail.children?.length || 0 }}
</div>
<button (click)=“toggleEdit()”>
{{editing ? ‘Done’ : ‘Edit’}}	//label depends on state of ‘editing’ 	</button>

<button (click) = “onRemove()”>	//remove
Remove
</button>
</div>
`
})
export class PassengerDetailComponent{
@Input()	//mark it as expecting input data
detail:Passenger;

@Output()
edit:EventEmitter<any> = new EventEmitter();	//emitter for editing

@Output()	//mark as an output
remove: EventEmitter<any> = new EventEmitter();	//emit any type of event, create an event emitter

editing:boolean =false;

constructor(){}

onNameChange(value:string){
console.log(‘value: ’ , value);
this.detail.fullname = value;	//persist by updating component with ‘value’
}

toggleEdit(){	
if(this.editing){	//have access to input
this.edit.emit(this.detail);	//commit to parent…  	}
this.editing = != this.editing;	//toggle
}

onRemove(){
EVENT OCCURS (output)
this.remove.emit(this.detail);	//need to tell parent something has changed to remove from array in parent	//emit entire passenger detail 	}
}

———————————————
*(PARENT)
REVISITED (in the template)
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts )

@Component({
styleUrls:[‘passenger-dashboard.component.scss’],
template:` 
<div>
<passenger-count 
[items]=“passengers”
></passenger-count>	//pass-in data by binding to a property inside passenger-count component


//we move the template data passenger-detail related code into its own component
<passenger-detail 
*ngFor=“let passenger of passengers;”	//foreach passenger

[detail]=“passenger”	enger-detail component by binding to ‘detail’
//pass the passenger in pass
(edit) = “handleEdit($event)”	//Expect an EVENT OCCURS (‘edit’ event)

(remove)=“handleRemove($event)”	//Expect an EVENT OCCURS (‘remove’ event)
></passenger-detail>

</div>
`
})
export class PassengerDashboardComponent{
passengers:Passenger[];
constructor(){}
ngOnInit(){
this.passengers = [{}];	
}
IMMUTABLE STATE CHANGES
handleEdit(event){
this.passengers = this.passengers.map((passenger:Passenger) => {
if(passenger.id === event.id){
passenger = Object.assign({}, passenger, event); 	}
return passenger;
});
}
IMMUTABLE STATE CHANGES
handleRemove(event){	
this.passengers = this.passengers.filter((passenger:Passenger) => {
return passenger.id !== event.id; 	});
}
}
 ————————————————————————————
ONCHANGES LIFECYCLE HOOK
want to prevent the updating of display field when typing, this happens because we are getting a reference
to the object
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts )
*PARENT
<div *ngFor = “let passenger of passengers;“>
{{ passenger.fullname }}
</div>

<passenger-detail></pasenger-detail>	//updates in <passenger-detail> get reflected above..we only want it to update when we done

*CHILD
(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)
REVISITED
ngOnChanges gets called before ngOnInit
bindings and data is setup or available in ngOnChanges before component is initialized
allows us to intercept that ‘detail’ binding
which is why we create a clone of ‘this.detail’ and reassign it to itself

import {OnChanges, OnInit } from ‘@angular/core’;
…
export class PassengerDetailComponent implements OnChanges, OnInit{
constructor(){}
ngOnChanges(changes){	//using onChanges lifecycle hook to break the binding between child and parent
if(changes.detail){
this.detail = Object.assign({}, changes.detail.currentValue);	//merging the current value
}
}	
ngOnInit(){ 	}
}

————————————————————————————
————————————————————————————
SERVICES, HTTP and OBSERVABLES

DATA SERVICES AND DEPENDENCY INJECTION

1.create our service
{import { Passenger} from ‘./models/passenger.interface’; 
export class PassengerDashboardService{
constructor(){}
getPassengers() : Passenger[]{
return [
{
id:1,
fullname:’Clark’,
checkedIn:true,
checkInDate:1390742000000,
children:null
},
… //rest of the entries
] 	}
}

add to module

we make the service available to any Components that need it

(app/passenger-dashboard/passenger-dashboard.module.ts)

import { NgModule } from ‘@angular/core’;
import { CommonModule } from ‘@angular/common’;

//containers
import {PassengerDashboardComponent} from ‘./containers/passenger-dashboard/passenger-dashboard.component’;
//components
…
//services
import {PassengerDashboardService} from ‘./passenger-dashboard.service’;
@NgModule({
//components
declarations:[
PassengerDashboardComponent,
PassengerCountComponent,
PassengerDetailComponent
],	
//modules
imports:[
CommonModule
],	
//exports
exports:[
PassengerDashboardComponent
],	
//services
providers:[
PassengerDashboardService
]	
})
export class 
PassengerDashboardModule{} 
inject dependency into container
(app/passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component.ts)

…
import {Passenger } from ‘../../models/passenger.interface’;
import{ PassengerDashboardService } from ‘../../passenger-dashboard.service’;

@Component({

})
export class PassengerDashboardComponent implements OnInit{
passengers:Passenger[];

//use private and inject assign to our created property passengerService
constructor(private passengerService: PassengerDashboardService){
}

ngOnInit(){
this.passengers = this.passengerService.getPassengers(); 	}
}

————————————————————————————
HTTP Request (@injectable)

http requests require the HttpModule
(inside our component.module.ts or app.module.ts)

//imports
import {HttpModule} from ‘@angular/http’;

@NgModule({
imports:[
HttpModule	
]
})

—————————
(then in the service… component.service.ts)

Inject http service 

when services rely on a dependency, like an provider, such as the http,
we need to import Injectable, and @Injectable() above the class, 
it tells angular we can inject things into the constructor

import {Injectable} from ‘@angular/core’;	//needed to inject service into constructor
import {Http} from ‘@angular/http’;

@Injectable()	//mark service as its injectable, it tells angular we can inject things into its constructor so it can be used in other classes
export class ComponentService {

constructor(private http: Http){}

console.log(this.http);	//all avail object properties (for XHR requests) are on the __proto__ Object }
————————————————————————————
Observables (how to use HttpModule with Observables)

(Http data fetching with Observables)

//put data in data.json
{
“key”: [
{ “key”:value},
{ “key”:value},
{ “key”:value}
]
}

———————————
EXAMPLE

//db.json
{
“passengers”: [{“id”:value, “fullname”:value}]	//json data with object property called ‘passengers’:[ //data ] } 

PassengerDashboardService (app/passenger-dashboard/passenger-dashboard.service.ts)

import {Injectable} from ‘@angular/core’;
import {Http, Response } from ‘@angular/http’;
import {Passenger} from ‘./models/passenger.interface’;

import {Observable} from ‘rxjs/Observable’;

import ‘rxjs/add/operator/map’;	//needed to import and add properties to observable things

const PASSENGER_API:string = ‘/api/passengers’;	//depending on Passenger api

@Injectable()
export class PassengerDashboardService {

constructor(private http: Http){}

getPassenger(): Observable<Passenger[]> {	//function now returns Observable with type Passenger
return this.http	//http is an observable object
.get(PASSENGER_API)	//this.http.get() needs to return an Observable BUT ‘PASSENGER_API’ returns an array so we use . map
.map((response: Response)	=> {	
//with map..we can get the response object ..but it does not exist on the http which is an observable) so we import ‘rxjs/add/operator/map’
return response.json();	//.json() extracts data as a json object
})	//map object has response object

//OR with arrow functions
return this.http
.get(PASSENGER_API)
.map((response: Response) => response.json()); 	}
}

———————————
PassengerDashboardComponent (app/passenger-dashboard/containers/passenger-dashboard.component.ts)

.subscribe()

//imports
import {Component, OnInit} from ‘@angular/core’;
import {PassengerDashboardService} from ‘../../passenger-dashboard.service’;
import {Passenger} from ‘../../models/passenger.interface’;
@Component(){
selector: ‘passenger-dashboard’,
styleUrls: [‘passenger-dashboard.component.scss’],
template: `<div>
//data binded to the passengers property value directly into the component
<passenger-count>[items]=“passengers”</passenger-count>
</div>` 
}
export class PassengerDashboardComponent implements OnInit{

passengers: Passenger[];

constructor(private passengerService : PassengerDashboardService) {}

ngOnInit() {	//initialization logic

//getPassenger() returns an observable, suscribe(passing the data:Passenger[] thats returned)
this.passengerService.getPassenger().subscribe((data:Passenger[]) => {	
console.log(‘Data’, data);
this.passengers = data;	//assign the data to our array
});

//OR with arrow functions 

this.passengerService
.getPassenger()
.subscribe((data:Passenger[]) => this.passengers = data); 	}

handleEdit( event: Passenger ){
this.passengerpassenger.id === event.id){
passenger = Object.assign({}, passenger, event);
}
return passenger;
}); 	});
}

handleRemove( event: Passenger ){
this.passengerpassenger.id !==event.id;
}
}); 	}Service
. (event)	//pass in the event, the event is of type Passenger, 
.subscribe((data:Passenger) => {	//if request was successful
this.passengers = this.passengers.map((passenger: Passenger) => {
if( Service
.removePassenger(event)
.subscribe( (data:Passenger) => {	
this.passengers = this.passengers.filter( (passenger: Passenger)=> {
return 
}

———————————

PassengerCountComponent (passenger-count.component.ts)

import { Component, Input } from ‘@angular/core’;
import { Passenger } from ‘../../models/passenger.interface’;

@Component({
selector: ‘passenger-count’,
template: `<div>
<h3>Airline Passengers!</h3>
<div>
Total checked in: {{ checkedInCount() }} / {{ items?.length }}	//safe navigation, when length value becomes available, then change detection will fire, input will get rebound, and properties will display in browser
</div>
</div>
`
}) 
export class PassengerCountComponent {
@Input()
items: Passenger[];
checkedInCount():number{
if(!this.items) return;
return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
} }

————————————————————————————

Http put, delete with immutable state

(passenger-dashboard.service.ts)

import {Injectable} from ‘@angular/core’;
import {Http, Response } from ‘@angular/http’;
import {Passenger} from ‘./models/passenger.interface’;

import {Observable} from ‘rxjs/Observable’;

import ‘rxjs/add/operator/map’;	//needed to import and add properties to observable things

const PASSENGER_API:string = ‘/api/passengers’;	//depending on Passenger api

@Injectable()
export class PassengerDashboardService {
constructor(private http: Http){}
getPassengers(): Observable<Passenger[]> {	//function now returns Observable with type Passenger
return this.http	//http is an observable object
.get(PASSENGER_API)	//this.http.get() needs to return an Observable BUT ‘PASSENGER_API’ returns an array so we use . map
.map((response: Response)	=> {	//with map..we can get the response object ..but it does not exist on the http which is an observable) so we import ‘rxjs/add/operator/map’
return response.json();	//.json() extracts data as a json object
})	//map object has response object

//OR with arrow functions
return this.http
.get(PASSENGER_API)
.map((response: Response) => response.json()); 	}

UPDATES to (passenger-dashboard.service.ts)

updatePassenger(passenger: Passenger): Observable<Passenger> {
return this.http
.put(PASSENGER_API + ‘/‘ + passenger.id)

//OR ES6 syntax allows composition strings with Javascript properties inside
.put(`${PASSENGER_API}/${passenger.id}`, passenger)	//pass passenger.id that we are making the request to so it knows which one to talk to, then pass the passenger that gets returned via ‘passenger’
.map((response:Response) => response.json());	
}

removePassenger(passenger: Passenger): Observable<Passenger> {
return this.http
.delete(`${PASSENGER_API}/${passenger.id}`)	//pass passenger.id that we are making the request to so it knows which one to talk to
.map((response:Response) => response.json());	
}


}


———————————

(see passenger-dashboard.component.ts)

————————————————————————————

Observable.throw error handling

(passenger-dashboard.service.ts)
…
import ‘rxjs/add/operator/catch’;
import ’rxjs/add/observable/throw’;
...

getPassengers(): Observable<Passenger[]> {	
return this.http	
.get(PASSENGER_API)
.map((response: Response) => response.json())
.catch( (error:any) => Observable.throw( error.json() ) );	//error type we just set as Any
}


———————————

(passenger-dashboard.component.ts)
…
ngOnInit(){
this.passengerService
.getPassengers()
.subscribe( (data: Passenger[]) => this.passengers = data, error-handling-here); //subscribe() has 2 arguments, response and error
}



————————————————————————————

Custom Headers and RequestOptions

sometimes you need to change the content type 

(passenger-dashboard.service.ts)
updatePassenger(passenger:Passenger):Observable<Passenger> {
let headers = new Headers({
‘Content-Type’ : ‘application/json’
});

let options = new RequestOptions({
headers: headers
});passenger.id}`, passenger, 

return this.http
.put(`${PASSENGER_API}`/ ${options)
.map((response: Response) => response.json());
}


————————————————————————————

OPTIONAL
Http Promises (using promises as an alternative option to using RXJS Observables)

import ‘rxjs/add/operator/toPromise’;

(app/passenger-dashboard.services.ts)


import {Injectable} from ‘@angular/core’;
import {Http, Response } from ‘@angular/http’;

import {Observable} from ‘rxjs/Observable’;

import ‘rxjs/add/operator/map’;	
import ‘rxjs/add/operator/toPromise’; Promise//instead of import ‘rxjs/add/operator/map’;	

import {Passenger} from ‘./models/passenger.interface’;

const PASSENGER_API:string = ‘/api/passengers’;	//depending on Passenger api

@Injectable()
export class PassengerDashboardService {
constructor(private http: Http){}

getPassengers(): Observable<Passenger[]> {	//function now returns Promoise with type Passenger
return this.http	//http is an observable object
.get(PASSENGER_API)	//this.http.get() needs to return an Observable BUT ‘PASSENGER_API’ returns an array
.map
.toPromise()

.toPromise()
.then	.then((response: Response)	=> {	
return response.json();	//.json() extracts data as a json object
})	//map object has response object

//OR with arrow functions
return this.http
.get(PASSENGER_API)	
.map((response: Response) => response.json()); 	}
updatePassenger(passenger: Passenger): ObservablePromise<Passenger> {
return this.http
.put(`${PASSENGER_API}/${passenger.id}`, passenger)	//pass passenger.id that we are making the request to so it knows which one to talk to, then pass the passenger that gets returned via ‘passenger’
.map
.toPromise()
.then((response:Response) => response.json());	
}
removePassenger(passenger: Passenger): ObservablePromise<Passenger> {
return this.http
.delete(`${PASSENGER_API}/${passenger.id}`)	//pass passenger.id that we are making the request to so it knows which one to talk to
.map
.toPromise()
.then((response:Response) => response.json());	
}
}


———————————

PassengerDashboardComponent (passenger-dashboard.component.ts)

//imports
import {Component, OnInit} from ‘@angular/core’;
import {PassengerDashboardService} from ‘../../passenger-dashboard.service’;
import {Passenger} from ‘../../models/passenger.interface’;
@Component(){
selector: ‘passenger-dashboard’,
styleUrls: [‘passenger-dashboard.component.scss’],
template: `<div>
<passenger-count>[items]=“passengers”</passenger-count>	//data binded to the passengers property value directly into the component
</div>` 
}
export class PassengerDashboardComponent implements OnInit{

passengers: Passenger[];

constructor(private passengerService : PassengerDashboardService) {}

ngOnInit() {	//initialization logic
this.passengerService.getPassenger().subscribe((data:Passenger[]) => {	//getPassenger() returns an observable, suscribe(passing the data:Passenger[] thats returned)
console.log(‘Data’, data);
this.passengers = data;	//assign the data to our array
});
//OR with arrow functions 
this.passengerService
.getPassenger()
.subscribe.then((data:Passenger[]) => this.passengers = data); 	}

handleEdit( event: Passenger ){
this.passengerService
. (event)	//pass in the event, the event is of type Passenger, 
.subscribe.then((data:Passenger) => {	//if request was successful
this.passengers = this.passengers.map((passenger: Passenger) => {
if( passenger.id === event.id){
passenger = Object.assign({}, passenger, event);
}
return passenger;
}); 	});
}

handleRemove( event: Passenger ){
this.passengerService
.removePassenger(event)
.subscribe.then( (data:Passenger) => {	
this.passengers = this.passengers.filter( (passenger: Passenger)=> {
return passenger.id !==event.id;
}
}); 	}
}


————————————————————————————
Template-driven forms, Inputs and Validation

FORM CONTAINER COMPONENT
*containers folder (container component)
import service
import passenger interface
going to inject service
also import {Oninit} from ‘@angular/core’;
ngOnInit() make data request

inside ngOnInit() inject passenger service, make a call to specific Passenger
call getPassenger():Observable<type> //returns an observable
assign returned data from getPassenger() to our passenger property

then display in template


container components provide data to state-less component
(app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.ts)

//PassengerViewer is a stateful component (container component) it will provide data to a state-less component

import {Component, OnInit} from ‘@angular/core’;
import { PassengerDashboardService } from ‘../../passenger-dashboard.service’;	//1 service will deal with Passengers
import { Passenger } from ‘../../models/passenger-interface’;	//2 so import Passenger service

@Component({
selector: `passenger-viewer`,
styleUrls:[‘passenger-viewer.component.scss’],
template:`
<div>{{passenger | json}}	//prints single passenger	//6
</div>
`
})

export class PassengerViewerComponent implements OnInit {
passenger:Passenger;	//4 singular reference for a single passenger

constructor(private passengerService: PassengerDashboardService ){}	//3 inject service

ngOnInit(){
//inject passenger service
//make a call to specific passenger
//display in the template..and we going to use some forms inside a stateless component

this.passengerService
.getPassenger(1)	//takes in a unique id ..for passenger to return

.subscribe((data: Passenger) => this.passenger = data );	// 5. =data; is what is passed back, assign	}
}
———————————
(app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.scss)
———————————
UPDATES to (passenger-dashboard.service.ts)

import {Injectable} from ‘@angular/core’;
import {Http, Response } from ‘@angular/http’;
import {Passenger} from ‘./models/passenger.interface’;

import {Observable} from ‘rxjs/Observable’;

import ‘rxjs/add/operator/map’;	//needed to import and add properties to observable things

const PASSENGER_API:string = ‘/api/passengers’;	//depending on Passenger api

@Injectable()
export class PassengerDashboardService {

constructor(private http: Http){}

//returns array of passengers
getPassengers(): Observable<Passenger[]> {	//4. function now returns Observable with type Passengers

return this.http
.get(PASSENGER_API)
.map((response: Response) => response.json()); 	}

//returns single passenger
getPassenger(id:number): Observable<Passenger> {	//called by the container
return this.http	
.get(`${PASSENGER_API}/${id}`)	//path using ES6 string, id eg. 1, 2 or 3
.map((response: Response) => response.json())
.catch( (error:any) => Observable.throw(error.json() ) );	
})

…

}
———————————
(app/app.component.ts)

@Component({
selector:’app-root’,
styleUrls:[‘app.component.scss’],
template:`
<div class=“app”>
<passenger-dashboard></passenger-dashboard>	//temporarily remove to test <passenger-viewer>
<passenger-viewer></passenger-viewer>	//just hardcoding because we dont have a router
</div>
`
})
export class AppComponent{
}
———————————

ADD <passenger-viewer> to MODULE
after imports, to use in our app, 
then include in declarations in NgModule
then to use it in our app, we need to export it in NgModule

(app/passenger-dashboard/passenger-dashboard.module.ts)
…
//containers
import { PassengerDashboardComponent} from ‘./containers/passenger-dashboard/passenger-dashboard.component’;
import {PassengerViewerComponent} from ‘./containers/passenger-viewer/passenger-viewer.component’;
…
@NgModule({
declarations:[
PassengerDashboardComponent,
PassengerViewerComponent,
PassengerCountComponent,
PassengerDetailComponent
]
exports:[
PassengerDashboardComponent
PassengerViewerComponent	//allows us to use <passenger-viewer></passenger-viewer> in app.components.ts
],
providers:[
PassengerDashboardService
]
})
export class PassengerDashboardModule{}
————————————————————————————
Form Stateless Component

we make a few changes to our data structure

———————————
UPDATE (editing the passenger interface for purpose of the example)
(app/passenger-dashboard/models/passenger.interface.ts)

export interface Child{
name:string,
age:number
}

export interface Passenger{
id:number,
fullname:string,
checkedIn:boolean,
checkInDate: number | null,
children:Child[] | null
baggage:string
}

———————————
update (db.json)  update db.json data structure:
by removing “children” and adding “baggage”

{
“passengers”: [
{
“id”:1,
“fullname”:”Steve”,
“checkedIn”:true,
“checkedInDate”:12343243232,
“children”:[{“name”:”Ted”, “age”:12}]
“baggage”:””
},
{} //etc
] }
———————————
remove the ‘children’ element  in passenger-detail component

(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)
REVISITED

import {Component , ‘@angular/core’;	
import {Passenger} from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-detail’,

styleUrls:[‘passenger-detail.component.scss’],

template:`<div>
<span class=“status” [class.checked-in]=“detail.checkedIn”></span>

Input, Output, EventEmmiter, OnChanges, OnInit} from	<div>
<input *ngIf=“editing”	//when ‘editing’ show input
type=“text” 
[value]=“detail.fullname”

//EVENT OCCURS (input)
(input)=“onNameChange(name.value)”	//when input changes we call the onNameChange function
#name	//keep reference to input called #name
>
</div>
<div *ngIf=“!editing”>	//when ‘not editing’ show text
{{detail.fullname}}
</div>

<div class=“date”>
Check in date: 
{{ detail.checkInDate ? (detail.checkInDate | date: ‘YYYYMMd’) }}
</div>
<div class=“children”>
Children: {{detail.children?.length || 0 }}
</div>
<button (click)=“toggleEdit()”>
{{editing ? ‘Done’ : ‘Edit’}}	//label depends on state of ‘editing’ 	</button>

<button (click) = “onRemove()”>	//remove
Remove
</button>
</div>
`
})
export class PassengerDetailComponent implements OnChanges, OnInit{
@Input()	//mark it as expecting input data
detail:Passenger;

@Output()
edit:EventEmitter<any> = new EventEmitter();	//emitter for editing

@Output()	//mark as an output
remove: EventEmitter<any> = new EventEmitter();	//emit any type of event, create an event emitter

editing:boolean =false;

constructor(){}

ngOnChanges(changes){	//using onChanges lifecycle hook to break the binding between child and parent
if(changes.detail){
this.detail = Object.assign({}, changes.detail.currentValue);	//merging the current value
}
}	

ngOnInit(){}

onNameChange(value:string){
console.log(‘value: ’ , value);
this.detail.fullname = value;	//persist by updating component with ‘value’
}

toggleEdit(){	
if(this.editing){	//have access to input
this.edit.emit(this.detail);	//commit to parent…  	}
this.editing = != this.editing;	//toggle
}

onRemove(){

}//EVENT OCCURS (output)
this.remove.emit(this.detail);	//need to tell parent something has changed to remove from array in parent	//emit entire passenger detail 	}
———————————
create passenger-form.component *passing in data into the form  (app/passenger-dashboard/components/passenger-form/passenger-form.component.ts)

import { Component} from '@angular/core';
import { Passenger } from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-form’,
styleUrls:[‘passenger-form.component.scss'],
template:`
<form #form=‘ngForm’>
Form!
<div>
{{detail | json }}
</div>
</form>
`
})
export class PassengerFormComponent{
@Input()	//input binding - passed in from step5 (below) 
detail:Passenger;
}

———————————
pass in data into the passenger-viewer component

REVISITED (app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.ts)


UPDATE: 
remove the {{passenger | json }} in the template
add the <passenger-form></passenger-form> component

//PassengerViewer is a stateful component (container component) it will provide data to a state-less component

import {Component, OnInit} from ‘@angular/core’;
import { PassengerDashboardService } from ‘../../passenger-dashboard.service’;	//service will deal with Passengers
import { Passenger } from ‘../../models/passenger-interface’;	//so import Passenger service

@Component({
selector: `passenger-viewer`,
styleUrls:[‘passenger-viewer.component.scss’],
template:`
//prints single passenger	
<div>
{{passenger | json}}	<passenger-form
[detail]=“passenger”;	//pass-in passenger property into the component
>
</passenger-form>
</div>
`
})

export class PassengerViewerComponent implements OnInit {
passenger:Passenger;	//singular reference for a single passenger

constructor(private passengerService: PassengerDashboardService ){}	//inject service

ngOnInit(){
//inject passenger service
//make a call to specific passenger
//display in the template..and we going to use some forms inside a stateless component

this.passengerService
.getPassenger(1)	//takes in a unique id ..for passenger to return
.subscribe((data: Passenger) => this.passenger = data );	//=data; is what is passed back, assign
}
}

———————————
add to passenger dashboard module
note: we only have to import it in the module, dont have to export

must also import ‘FormsModule’ - will give us access to directives such as ngModel

REVISITED
(app/passenger-dashboard/passenger-dashboard.module.ts)

//modules
import {NgModule} from ‘@angular/core’;
import {CommonModule} from ‘@angular/common’;
import {HttpModule} from ‘@angular/http’;
import {FormsModule}	from ‘@angular/forms’;

//containers
import { PassengerDashboardComponent} from ‘./containers/passenger-dashboard/passenger-dashboard.component’;
import {PassengerViewerComponent} from ‘./containers/passenger-viewer/passenger-viewer.component’;

//components
import {PassengerFormComponent} from ‘./components/passenger-form/passenger-form.component’;
…

@NgModule({
declarations:[
PassengerDashboardComponent,
PassengerViewerComponent,
PassengerCountComponent,
PassengerDetailComponent,
PassengerFormComponent
],
imports:[
CommonModule,
HttpModule,
FormsModule
],
exports:[
PassengerDashboardComponent
PassengerViewerComponent	//allows us to use <passenger-viewer></passenger-viewer> in app.components.ts
],
providers:[
PassengerDashboardService
]
})
export class PassengerDashboardModule{}
————————————————————————————
ngForm and ngModel

setup a template ref #form=“ngForm”

novalidate //tells browser we want to use angulars validation

{{form.somevalue}}	//use binding to show our input 

each input needs to have a name, the name we create will create a property on the form
for you as an object

ngModel	//add to input

to set the initial value, we bind to the ngModel with ‘detail’ object and create a one way binding
[ngModel]=“detail.fullname”

REVISITED  (app/passenger-dashboard/components/passenger-form/passenger-form.component.ts)

import { Component} from '@angular/core';
import { Passenger } from ‘../../models/passenger.interface’;
import { Baggage } from ‘../../models/baggage.interface’;

@Component({
selector:’passenger-form’,
styleUrls:[‘passenger-form.component.scss'],
templateUrl:`
<form #form=‘ngForm’ novalidate>
{{detail | json }}

//fullname
<div>
Passenger name:	
<input 
type=“text” 
name=“fullname”
[ngModel]=“detail?.fullname”	
>
</div>

//id
<div>
Passenger id:	
<input 
type=“number” 
name=“id”
//just add ngModel and bind	[ngModel]=“detail?.id”	
>
</div>

//just add ngModel and bind	Binding to radio buttons	
<div>
<label>
<input
type=“radio”
value=“true”	//set value
[value]=“true”	//set value by binding to boolean
name=“checkedIn”	//property the passenger will have…	
[ngModel]=“detail?.checkedIn”	//when checked in, angular will set model value

(ngModelChange)=“toggleCheckIn($event)”	//gives us event back (true or false)
>
yes
</label>
</div>

<div>
<label>
<input
type=“radio”
value=“false”	//set value
[value]=“false”	//set value by binding to boolean
name=“checkedIn”	//property the passenger will have…	
[ngModel]=“detail?.checkedIn”	//when checked in, angular will set model value	(ngModelChange)=“toggleCheckIn($event)”	//gives us event back (true or false)
>
no
</label>
</div>

//adding checkedInDate 
<div *ngIf=“form.value.checkedIn”>	//referencing form.value checkedIn is available
check in date:
<input
type=“number”
name=“checkInDate”
[ngModel]=“detail?.checkInDate”	
>
</div>

//binding to checkbox
//returns a true or false value, once checked - returns true, un-checked - returns false
<div>
<label>
<input
type=“checkbox”
name=“checkedIn”	
[ngModel]=“detail?.checkedIn”	//when checked in, angular will set model value	(ngModelChange)=“toggleCheckIn($event)”	//gives us event back (true or false)
>
no
</label>
</div>

//select option rendering, and ngValue
//how to create a select menu with a dynamic option element
//in models folder create Baggage interface
//we import Baggage interface
//we can use [ngValue] to replace [value]=item.key [selected]=“item.key === detail?.baggage”

<div>
Luggage:
<select
name=“baggage”
[ngModel] = “detail?.baggage”	//show if there is default data
>

<option	//all options
*ngFor=“let item of baggage”

//THIS
[value]=“item.key”
[selected]=“item.key === detail?.baggage”	//setting an option to default selected value
//SAME AS THIS
[ngValue]=“item.key”	//using ngValue replaces [value]= [selected]=
>


{{ item.value }}
</option>
</div>


</form>
`
})
export class PassengerFormComponent{
@Input()
detail:Passenger;

{{form.value | json}}baggage : Baggage[] = [
{
key:’none’,
value:’No baggage’
},
{
key:’hand-only’,
value:’hand baggage’
},
{
key:’hold-only’,
value:’hold baggage’
},
{
key:’hand-hold’,
value:’hand and hold baggage’
},
];

toggleCheckIn(checkedIn:boolean){
if(checkedIn){
this.detail.checkInDate = Date.now(); 	} 	}
}

———————————

UPDATE
(app/passenger-dashboard/models/passenger.interface.ts)

export interface Child{
name:string,
age:number
}

export interface Passenger{
id:number,
fullname:string,
checkedIn:boolean,
checkInDate?: number | null,	//remove null and make optional	
children:Child[] | null
baggage:string
}

——————————


(app/passenger-dashboard/models/baggage.interface.ts)

export interface Baggage{
key:string,
value:string }
————————————————————————————
FORM VALIDATION AND ERROR STATES

using template reference #property on the elements themselves
ngModel keeps track of validation states
add an required attribute and tie it to ngModel
without a value for passenger id, we get an error: {“required”:true} or if no error: null
can add min-length
{{form.value | json}}
{{form.valid | json}}
{{form.invalid | json}}

dirty vs touched
property.dirty	//when not interacted with
property.touched //user clicks on input

min Length
property.minLength=“0”

<form #form=“ngForm” novalidate>
<div>
Passenger name:
<input
type=“text”
name=“fullname”
required
#fullname=“ngModel”	//ngModel keeps track of validation states
[ngModel]=“detail?.fullname”
>
<div *ngIf=“fullname.errors?.required && fullname.dirty”>	//.dirty only after user interacted
Passenger name is required
</div>
</div>

<div>
Passenger id:
<input
type=“number”
name=“id”
required	
min-length:”0”
#id=“ngModel”
[ngModel]=“detail?.id”	
>
<div *ngIf=“id.errors?.required && id.dirty” class=“error”>	//.dirty only after user interacted
Passenger id is required
</div>
</div>

DYNAMICALLY DISABLING SUBMIT
[disabled]=“form.invalid”
an invalid form disables the clicking of the submit button if validation in place

<button type=“submit” [disabled]=“form.invalid”>
Update passenger
</button>
</form>

————————————————————————————
ngSubmit and stateless@Output
ngSubmit is preffered, it does extra stuff for you, like telling the ngForm has been submitted

(how to create a submit event,
pass event back up to parent container component,
which then communicates with service
and then updated our backend api)


import {Component, Input, Output, EventEmitter} from ‘@angular/core’;

<form (ngSubmit)=“handleSubmit(form.value, form.valid)” #form=“ngForm” novalidate>

export class PassengerFormComponent{
@Output()
update:EventEmitter<anyPassenger> = new EventEmitter<Passenger>();	//correct way to setup event emitter	

handleSubmit(passenger:Passenger, isValid:boolean){
if(isValid){
this.update.emit(passenger);	//emit passenger object to parent
} 	}
}

———————————

REVISITED (app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.ts)

import {Component, OnInit} from ‘@angular/core’;
import { PassengerDashboardService } from ‘../../passenger-dashboard.service’;	//service will deal with Passengers
import { Passenger } from ‘../../models/passenger-interface’;	//so import Passenger service

@Component({
selector: `passenger-viewer`,
styleUrls:[‘passenger-viewer.component.scss’],
template:`
<div>
<passenger-form
[detail]=“passenger”;	
(update)=“onUpdatePassenger($event)”	
>
</passenger-form>
</div>
`
})

export class PassengerViewerComponent implements OnInit {
passenger:Passenger;	//singular reference for a single passenger

constructor(private passengerService: PassengerDashboardService ){}	//inject service

ngOnInit(){
//inject passenger service
//make a call to specific passenger
//display in the template..and we going to use some forms inside a stateless component

this.passengerService
.getPassenger(1)	//takes in a unique id ..for passenger to return
.subscribe((data: Passenger) => this.passenger = data );	//=data; is what is passed back, assign
}

onUpdatePassenger(event:Passenger){
console.log(event);
//update particular passenger

this.passengerService
.updatePassenger(event)
.subscribe((data:Passenger) => {
this.passenger = Object.assign({}, this.passenger, event)
});
}
}
————————————————————————————
COMPONENT ROUTING 

Base Href and Route Module


need to always have <base href=“/”> for router to work

(index.html)
<!doctyle html>
<html>
<head>
<base href=“/“>
<title></title>
<link rel=“stylesheet” ref=“”>
</head>
<body>
<app-root></app-root>
</body>
</html>
———————————
ROOT MODULE ROUTES AND OUTLET

WHAT WE WILL LEARN
setting up all routes for module, and submodule
work out how to render data,
style navigation
dynamically create navigation
use routing api
——————————

(app/app.module.ts)

import {NgModule} from ‘@angular/core’;
import {BrowserModule} from ‘@angular/platform-browser’;
import {CommonModule } from ‘@angular/common’;
import {RouterModule, Routes } from ‘@angular/router’;

import {PassengerDashboardModule} from ‘./passenger-dashboard/passenger-dashboard.module’;

import {HomeComponent} from ‘./home.component’;
import { AppComponent } from ‘./app.component’;

const routes:Routes = [
//component we want to render is HomeComponent, pathMatch:’full’ is for the path:’’ with empty string
{ path:’’ , component:HomeComponent, pathMatch: ‘full’ }
];

@NgModule({
declarations: [
AppComponent, 
HomeComponent
],
imports:[
BrowserModule,
CommonModule,
RouterModule.forRoot(routes),
PassengerDashboardModule
],
bootstrap:[AppComponent]
}) 

———————————

(home.component.ts)
import {Component} from ‘@angular/core’;

@Component({
selector:’app-home’,
template:`
<div>
Airline passenger app!
</div>
`
})
export class HomeComponent{}

———————————
REVISITED
(app/app.component.ts)

<router-outlet> is a directive via the Router,
is a placeholder, for where component will be injected
when we route to component, the router tells component where to go

@component({
selector:’app-root’,
styleUrls:[‘app.component.scss’],
template:`
<div class=“app”>
<passenger-viewer></passenger-viewer>
<router-outlet></router-outlet>	//outlet for router where components will be injected
</div>
`
})
export class AppComponent{}

————————————————————————————
Wildcard routes for 404 handling

angular provides 2 different location strategies (ie the url)

(app/app.module)
imports:[
RouterModule.forRoot(routes, {useHash:true}),	
]

HashLocation strategy
{useHash:true} adds # in URL

vs

Push-location-strategy (NORMAL MODE)
normal way of routing (without hash #) 
Benefit is server side render.
uses history.push state

————————————————————————————
UNDERSTANDING routerLink 
making links with routerLink to navigate
adding navigation
done through routerLink
<a routerLink=“/”> home </a>
<a routerLink =“/oops”> 404 </a>
and STYLING ACTIVE ROUTES
add attribute routerLinkActive=“active”	//can call it whatever class we like, ’active’ makes sense
home button stays active because it is still matching the ‘/’ in “/oops”, 
FIX we use attribute [routerLinkActiveOptions]=“{exact:true}” , which wants to ingnore anything not exactly “/“ 
(only adds active class if we are at /)

——————————

(app.component/scss)
.nav{
margin:0 0 10px;
padding:0 0 20px;
border-bottom:1px solid #dce5f2; }
a{
background:#3a4250;
color:#fff;
padding:4px 10px;
margin:0 2px;
border-radius:2px;
&.active{
color:#b690f1;
background-color:363c48;	
} }
——————————

REVISITED
(app/app.component.ts)

import {Component } from ‘@angular/core’;
@Component({
selector:’app-root’,
styleUrls:[‘app.component/scss’],
template:`

<div class=“app”>

<a 
routerLink=“/”
routerLinkActive=“active”	//for styling
[routerLinkActiveOptions]=“{exact:true}”
>
Home
</a>

<a 
routerLink=“/oops”
routerLinkActive=“active”	//for styling
>
404
</a>

<router-outlet></router-outlet>
</div>
`
})

——————————
(app/not-found.components.ts)


import {Component} from ‘@angular/core’;
@Component({
selector:’not-found’,
template:`
<div>
Not found, <a routerLink=“/”>go home</a>?
</div>
`
})
export class NotFoundComponent{}


————————————————————————————
Dynamic Navigation with ngFor
DYNAMICALLY CONSTRUCT NAVIGATION WITH NGFOR AND AN ARRAY

REVISITED
(app.component)

import {Component} from ‘@angular/core’;

interface Nav{
link: string,
name: string,
exact:boolean
}

@Component({
selector:’app-root’,
styleUrls:[‘app.component.scss’],
template:`
<div class=“app”>
<nav class=“nav”>
<a 
*ngFor=“let item of nav“
[routerLink] = “item.link”
routerLinkActive=“active”
[routerLinkActiveOptions]=“{exact:item.exact}”	
>
{{item.name}}
</a>
</nav>
<router-outlet></router-outlet>
</div>
`
})

export class AppComponent{
nav:Nav[] = [
{
link:’/’,
name:’Home’,
exact:true
}, 
{
link:’/oops’,
name:’404’,
exact:false
},

STEP: implement navigation from child in parent 
{
link:’/passengers’,
name:’Passengers’,
exact:true
}
];
}

————————————————————————————
FEATURE-MODULE ROUTES WITH forChild()
how to hook up Passenger-dashboard (module, container, stateless components) into application routes

every module that you have needs to import the router
because module is a child module
we import RouterModule.forChild(routes); //instead of forRoot(routes)

*FEATURE MODULE
REVISITED
(app/passenger-dashboard/passenger-dashboard.module.ts)

//modules
import {NgModule} from ‘@angular/core’;
import {CommonModule} from ‘@angular/common’;
import {HttpModule} from ‘@angular/http’;
import {FormsModule}	from ‘@angular/forms’;
import {RouterModule, Routes } from ‘@angular/router’;

//containers
import { PassengerDashboardComponent} from ‘./containers/passenger-dashboard/passenger-dashboard.component’;
import {PassengerViewerComponent} from ‘./containers/passenger-viewer/passenger-viewer.component’;

//components
import {PassengerFormComponent} from ‘./components/passenger-form/passenger-form.component’;
import {PassengerDetailComponent} from ‘./components/passenger-detail/passenger-detail.component’;
import {PassengerCountComponent} from ‘./components/passenger-count/passenger-count.component’;

const routes:Routes = [
{
path:’passengers’,
component:PassengerDashboardComponent	//component we want to route to…
}
];

@NgModule({
declarations:[
PassengerDashboardComponent,
PassengerViewerComponent,
PassengerCountComponent,
PassengerDetailComponent,
PassengerFormComponent
],
imports:[
CommonModule,
HttpModule,
FormsModule,
RouterModule.forChild(routes)
],	
exports:[	//we dont need to export elements in other modules, they get pulled in with route module
PassengerViewerComponent	
],
providers:[
PassengerDashboardService
]
})
export class PassengerDashboardModule{}
————————————————————————————
STEP: implement navigation in the parent 
(app.component.ts)
————————————————————————————
CHILD AND DYNAMIC ROUTES

in the child module, we create child routes
we already have a path of /passengers
but what if we want child routes?

we create an array called ‘children’ on the routes, 
then move the component into the children
navigating to dynamic route eg. /1
add new object with path: with id: property which is fetched from the params in the url
and the component associated is PassengerViewerComponent

localhost:4000/passengers/1
localhost:4000/passengers/2
localhost:4000/passengers/3

(passenger-dashboard.module.ts)

const routes:Routes = [
{
path:’passengers’,
component:PassengerDashboardComponent	//component we want to route to…
children:[
{path:’’, component:PassengerDashboardComponent},
{path:’ :id’, component: PassengerViewerComponent}	//dynamic route :id property
]
}
];


Route Params, data-fetching with switchMap
Using the Router to get the information to make the right service call to fetch the right data

todo:
subscribe to the route params,
and when the location changes, we can pull in the correct data for our service
and then render the correct data for that passenger



REVISITED (app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.ts)

import {Component, OnInit} from ‘@angular/core’;
import {Router, ActivatedRoute } from ‘@angular/router’; 2. make the required imports

import ‘rxjs/add/operator/switchMap’;	4. import switchMap rxjs operator

import { PassengerDashboardService } from ‘../../passenger-dashboard.service’;	//service will deal with Passengers
import { Passenger } from ‘../../models/passenger-interface’;	//so import Passenger service

@Component({
selector: `passenger-viewer`,
styleUrls:[‘passenger-viewer.component.scss’],
template:`
<div>
//9.	</div>
`
})


<button (click)=“goBack()”	
>&lsaquo; go back</button>
<passenger-form
[detail]=“passenger”;	
(update)=“onUpdatePassenger($event)”	
>
</passenger-form>
export class PassengerViewerComponent implements OnInit {
passenger:Passenger;	//singular reference for a single passenger

constructor(	
private router:Router,	//1. inject the router and route
private route:ActivatedRoute,	
private passengerService: PassengerDashboardService 
){}	//inject service

ngOnInit(){
//3. we can now subscribe to the changes of the route, we can also read the route params that come back,
this.route.params
.subscribe( (data:Params) => {
console.log(data);	//outputs 1, 2, 3 etc depending on the url(1)
})	

this.passengerService
.getPassenger	//5. making this passenger passed in dynamic
.subscribe((data: Passenger) => this.passenger = data );	//=data; is what is passed back, assign


//6. merging router.params.subscribe with passengerService
REPLACE ABOVE (step3 and step5) by using switchMap
this.route.params
//switchMap expecting an observabledata.id)	//then we pass this data into the service which will fetch the correct Passenger via our routing
})

.switchMap((data:Passenger) => {	//switchMap returns route data, which is an id
return this.passengerService.getPassenger(	//we are subscribing to an observable
.subscribe((data:Passenger) => this.passenger = data)

//7. REPLACE (step6) ABOVE …USING ARROW FUNCTIONS
data.id))	this.route.params
.switchMap((data:Passenger) => this.passengerService.getPassenger(//data returns the id
.subscribe((data:Passenger) => this.passenger = data);	//route params passed dynamically into our service	 
}

onUpdatePassenger(event:Passenger){
console.log(event);
//update particular passenger
this.passengerService
.updatePassenger(event)
.subscribe((data:Passenger) => {
this.passenger = Object.assign({}, this.passenger, event)
});
}

//8.IMPERATIVE ROUTING
//takes an array, we pass in string and tell it where to go (IMPERATIVE ROUTING because we are using the native API) rather than routerLink. we telling component to use the router
goBack(){
this.router.navigate(	
[‘/passengers’]
);	
}
}

————————————————————————————
IMPERATIVE ROUTING
we have injected the router but havent used it

localhost:4000/passengers/1

when at localhost:4000/passengers 
(we cannot go to the individual passenger)
(and we need a ‘go back’ button)
<button (click)=“goBack()”>&lsaquo; go back</button>

see above class
(app/passenger-dashboard/containers/passenger-viewer/passenger-viewer.component.ts)

————————————————————————————

we also want to view a specific passenger
<button (click)=“gotoPassenger()”>
</button>

(app/passenger-dashboard/components/passenger-detail/passenger-detail.component.ts)
REVISITED

import {Component , ‘@angular/core’;	
import {Passenger} from ‘../../models/passenger.interface’;

@Component({
selector:’passenger-detail’,

styleUrls:[‘passenger-detail.component.scss’],

template:`<div>
<span class=“status” [class.checked-in]=“detail.checkedIn”></span>

Input, Output, EventEmmiter, OnChanges, OnInit} from	<div>
<input *ngIf=“editing”	//when ‘editing’ show input
type=“text” 
[value]=“detail.fullname”

(input)=“onNameChange(name.value)”	//when input changes we call the onNameChange function
#name	//keep reference to input called #name
>
</div>
<div *ngIf=“!editing”>	//when ‘not editing’ show text
{{detail.fullname}}
</div>

<div class=“date”>
Check in date: 
{{ detail.checkInDate ? (detail.checkInDate | date: ‘YYYYMMd’) }}
</div>
<button (click)=“toggleEdit()”>
{{editing ? ‘Done’ : ‘Edit’}}	//label depends on state of ‘editing’ 	</button>

<button (click) = “onRemove()”>	//remove
Remove
</button>
//9.
<button (click) = “goToPassenger()”>
View
</button>
</div>
`
})
export class PassengerDetailComponent implements OnChanges, OnInit{
@Input()	//mark it as expecting input data
detail:Passenger;

@Output()
edit:EventEmitter<Passenger> = new EventEmitter<Passenger>();	//emitter for editing

@Output()	//mark as an output
remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();	//emit any type of event, create an event emitter

//10.
@Output()
view: EventEmitter<Passenger> = new EventEmitter<Passenger>();	

editing:boolean =false;

constructor(){}

ngOnChanges(changes){	//using onChanges lifecycle hook to break the binding between child and parent
if(changes.detail){
this.detail = Object.assign({}, changes.detail.currentValue);	//merging the current value
}
}	

ngOnInit(){}

onNameChange(value:string){
console.log(‘value: ’ , value);
this.detail.fullname = value;	//persist by updating component with ‘value’
}

toggleEdit(){	
if(this.editing){	//have access to input
this.edit.emit(this.detail);	//commit to parent…  	}
this.editing = != this.editing;	//toggle
}

onRemove(){
this.remove.emit(this.detail);	//need to tell parent something has changed to remove from array in parent	
//emit entire passenger detail 	}

//11
gotoPassenger(){	
this.view.emit(this.detail);	//emits to parent (Passenger-dashboard.component.ts) 	}
}

—————————

PassengerDashboardComponent (passenger-dashboard.component.ts)

//imports
import {Component, OnInit} from ‘@angular/core’;
//15. import the router
import { Router } from ‘@angular/router’;

import {PassengerDashboardService} from ‘../../passenger-dashboard.service’;
import {Passenger} from ‘../../models/passenger.interface’;
@Component(){
selector: ‘passenger-dashboard’,
styleUrls: [‘passenger-dashboard.component.scss’],
template: `<div>
<passenger-count>[items]=“passengers”</passenger-count>	//data binded to the passengers property value directly into the component
//we move the template data passenger-detail related code into its own component

<passenger-detail 
*ngFor=“let passenger of passengers;”	//foreach passenger

[detail]=“passenger”	//pass the passenger in passenger-detail component by binding to ‘detail’

//12.	
(view) = “handleView($event)”

(edit) = “handleEdit($event)”	//Expect an EVENT OCCURS (‘edit’ event)

(remove)=“handleRemove($event)”	//Expect an EVENT OCCURS (‘remove’ event)
></passenger-detail>

</div>
`
})
export class PassengerDashboardComponent{
passengers:Passenger[];
constructor(){}
ngOnInit(){
this.passengers = [{}];	
}
//IMMUTABLE STATE CHANGES
handleEdit(event){
this.passengers = this.passengers.map((passenger:Passenger) => {
if(passenger.id === event.id){
passenger = Object.assign({}, passenger, event); 	}
return passenger;
});
}
//IMMUTABLE STATE CHANGES
handleRemove(event){	
this.passengers = this.passengers.filter((passenger:Passenger) => {
return passenger.id !== event.id; 	});
}
}
</div>` 
}
export class PassengerDashboardComponent implements OnInit{

passengers: Passenger[];

constructor(
//14. inject the router
private router:Router;
private passengerService : PassengerDashboardService
) {}

ngOnInit() {	//initialization logic
this.passengerService.getPassenger().subscribe((data:Passenger[]) => {	//getPassenger() returns an observable, subscribe(passing the data:Passenger[] thats returned)
console.log(‘Data’, data);
this.passengers = data;	//assign the data to our array
});
//OR with arrow functions 
this.passengerService
.getPassenger()
.then((data:Passenger[]) => this.passengers = data); 	}

handleEdit( event: Passenger ){
this.passengerService
. (event)	//pass in the event, the event is of type Passenger, 
.then((data:Passenger) => {	//if request was successful
this.passengers = this.passengers.map((passenger: Passenger) => {
if( passenger.id === event.id){
passenger = Object.assign({}, passenger, event);
}
return passenger;
}); 	});
}

handleRemove( event: Passenger ){
this.passengerService
.removePassenger(event)
.then( (data:Passenger) => {	
this.passengers = this.passengers.filter( (passenger: Passenger)=> {
return passenger.id !==event.id;
}
}); 	}

//13. imperative dynamaic routing
handleView(event:Passenger){

//16. second argument… pass function arguments as parameters
this.router.navigate([‘.passengers’, event.id])	//event.id will be like 1, 2, 3 etc…
}
}
————————————————————————————
Hash location strategy

‘wild card selector’ **
create a ‘NotFoundComponent’
any routes that do not exist in our application, we will use the NotFoundComponent
{ path:’**’ , component:NotFoundComponent}	


REVISITED
(app/app.module.ts)

import {NgModule} from ‘@angular/core’;
import {BrowserModule} from ‘@angular/platform-browser’;
import {CommonModule } from ‘@angular/common’;
import {RouterModule, Routes } from ‘@angular/router’;

import {PassengerDashboardModule} from ‘./passenger-dashboard/passenger-dashboard.module’;

import {HomeComponent} from ‘./home.component’;

import {NotFoundComponent} from ‘./not-found.component’;

import { AppComponent } from ‘./app.component’;

const routes:Routes = [
//component we want to render is HomeComponent, pathMatch:’full’ is for the path:’’ with empty string
{ path:’’ , component:HomeComponent, pathMatch: ‘full’ },
{ path:’**’ , component:NotFoundComponent}	//using the wildcard
];

@NgModule({
declarations: [
AppComponent, 
HomeComponent,
NotFoundComponent
],
imports:[
BrowserModule,
CommonModule,
RouterModule.forRoot(routes),
PassengerDashboardModule
],
bootstrap:[AppComponent]
}) 

———————————

(home.component.ts)
import {Component} from ‘@angular/core’;

@Component({
selector:’app-home’,
template:`
<div>
Airline passenger app!
</div>
`
})
export class HomeComponent{}
———————————

(not-found.component.ts)

import {Component} from ‘@angular/core’;

@Component({
selector:’not-found’,
template:`
<div>
Not found
</div>
`
})
export class NotFoundComponent{}

————————————————————————————
Applying redirects

so if instead of going to the HomeComponent, we want to go straight to the ‘passengers’,
we can use a redirectTo:
to redirect directly to eg. ‘passengers’


REVISITED
(app/app.module.ts)

const routes:Routes = [
//component we want to render is HomeComponent, pathMatch:’full’ is for the path:’’ with empty string
{ path:’’ , component:HomeComponent, pathMatch: ‘full’ },
{ path:’’ , redirectTo:’passengers’, pathMatch: ‘full’ },
{ path:’**’ , component:NotFoundComponent}	//using the wildcard
];


————————————————————————————