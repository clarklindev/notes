component architecture

- declarations:[] is for components
- imports:[] is for module imports

---

# TEMPLATE FUNDAMENTALS

- Interpolation
- Expressions
- ternary expression

# PROPERTY BINDING

- property binding [] from class down to template

## ONE-WAY DATA BINDING with []

```html
<img [src]="{{logo}}" />
```

- from class property logo:string = 'img/logo.svg'

```html
<input type="text" [value]="name" />
```

- from class property name:string = 'Todd'

## 2-WAY DATABINDING

### ONE-WAY DATA-BINDING listening for change then rebinding

```ts
import { FormsModule } from '@angular/forms';
```

and import to app.module

```html
<input type="text" [ngModel]="name" (ngModelChange)="handleChange(\$event)"
```

- allows replacing [value]="name" binding to [ngModel]="name" which updates from class 'name'

```ts
  handleChange(value:string) { this.name = value; }
```

### TWO-WAY DATA-BINDING

```html
[(ngModel)]="name"
```

## EVENT BINDING

event binding () listens to event

```html
<input (input)="handleInput($event)" (blur)="handleEvent($event)" />
<button (click)="changeName()"></button>
```

from class

```ts
handleInput(event:any){}
handleEvent(event:any){}
changeName();
```

### TEMPLATE REF

create a reference to any part of DOM by using hash variable #ref
then you can reference:

```html
<input type="text" #username />
<button (click)="handleClick(#username.value)">get value:</button>
```

```ts
handleClick(value:string){}
```

---

```
import { CommonModule } from "@angular/core";
```

allows us to use \*ngIf / nfFor

\*ngIf destroys any input data entered into input as it recreates a whole new version of the component and state isnt maintained

```
*ngIf=""
```

is shorthand for <template [ngIf]=""></template>

```
*ngFor=""
```

goes on \<li>,

```
<li *ngFor="let passenger of passengers; let i = index;">{{i}}: {{passenger}}</li>
```

is shorthand for

```
<template ngFor let-passenger let-i="index" [ngForOf]="passengers">
  <li>{{i}}: {{passenger}}</li>
</template>
```

---

## CLASS BINDING

[ngClass] / [class.property]

### BINDING TO SINGLE CLASS

[class.checked-in]="passenger.checkedIn"

### BINDING TO MULTIPLE CLASSES

[ngClass]="{
'checked-in':passenger.checkedIn,
'checked-out':!passenger.checkedIn
}"

## STYLE BINDING (BINDING DIRECTLY TO STYLE - NO CLASS NAMES ADDED TO DOM)

[ngStyle] / [style.property]

### BINDING A SINGLE STYLE

[style.backgroundColor]="(passenger.checkedIn)? green : red"

### BINDING MULTIPLE STYLES

[ngStyle]="{ backgroundColor: (passenger.checkedIn)? green : red }"

---

## PIPES

```
| json //prints out json object
| date:'yMMMMd' //prints date format (see documentation for other formats)
| uppercase //string to uppercase
```

### pipes can be changed

typescript for optional property gets a ? before type...
interface Passenger{
id: number,
fullname: string,
checkedIn: boolean,
checkedInDate?: number
}

---

### SAFE NAVIGATION OPERATOR

typescript also use '?' before property to safely check if property exists

below: checking if the .length property exists on children, otherwise continue to || statement
{{passenger.children?.length || 0 }}

---

# COMPONENTS / FEATURE MODULES

'containers' folder where to put smart components 'components' folder where to put dumb components
'models' folder where to put interfaces

stateful (smart) / Container component - can communicate with services and renders child components

VS

stateless (dumb) / Presentational component - accept data via input and emit via output

- components have 'selector' decorator property

```ts
import { Component } from '@angular/core';
@Component({
selector:'passenger-dashboard',
styleUrls:['passenger-dashboard.component.sass'],
template:`<div></div>`
})
```

ONE-WAY DATA FLOW

- data flows down the hierarchical component tree
- Events emit up

---

# @ngModule

- modules contains self contained logic, inside its own folder
- import modules into app.module.ts
- 'declarations' is for components
- 'imports' is for modules
- 'declarations' is for components
- NOTE: to use a component of a module in another module, it needs to be exported in the module
  <!-- passenger-dashboard.module.ts -->

```ts
import { NgModule } from '@anglar/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[PassengerDashboardComponent],
  imports:[ CommonModule],
  exports:[PassengerDashboardComponent]
})

export class PassengerDashBoardModule(){}
```

<!-- app.module -->

```ts
import { NgModule } from '@anglar/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations:[AppComponent],
  imports:[ BrowserModule, CommonModule,
  // custom modules
  PassengerDashboardModule
  ],
  bootstrap:[AppComponent]
})

export class AppModule(){}
```

---

#Life cycle hooks

- constructor() for service used with http module
- onInit() function, dynamic assign data

```
eport class x implements OnInit{
  constructor(){}
  ngOnInit(){}
}

```

## Stateless Components

- components are added to exports:[] only if the parent isnt already exported, and it will be used in the html.
- dumb components are declared in the declarations of the module

---

## injecting data into component with @Input

- passenger-dashboard has data that we want to inject into a component called passenger-count
- binding to [items] property in passenger-count and assigning it 'passengers' array
  <!-- passenger-dashboard.components.ts -->

```html
<passenger-count [items]="passengers"> </passenger-count>
```

- import Input from @angular/core
  <!-- passenger-count.component.ts -->

```ts
import { Component, Input } from '@angular/core';
@Component({
	selector: 'passenger-count',
	template: `
		Total checkedin: {{ checkedInCount() }} / {{ items.length }}
	`
})
export class PassengerCountComponent {
	@Input()
	items: Passenger[]; //items is a Passenger array
	constructor() {}
	checkedInCount() {
		if (!this.items) return;
		return this.items.filter((passenger: Passenger) => {
			return passenger.checkedIn;
		}).length;
	}
}
```

---

## Emitting changes with @Output

- need to import { Output, EventEmitter } from '@angular/core' to get data out of component
- we attach @Output to the class that is emitting and type the prop to `EventEmitter<any>`
  <!-- passenger-detail.component.ts -->

* call .emit() on the @Output properties to emit to parent

```html
<div *ngIf="editing">
	<input
		type="text"
		[value]="detail.fullname"
		(input)="onNameChange(name.value)"
		#name
	/>
</div>
<div *ngIf="!editing">
	{{detail.fullname}}
</div>
<div>
	<button (click)="toggleEdit()">{{editing ? 'edit' | 'done'}}</button>
</div>
<div>
	<button (click)="onRemove()">remove</button>
</div>
```

```ts
  import { Component, Input, Output, EventEmitter } from '@angular/core';

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Input() //saying we expecting this injected
  detail:Passenger; //binding in passenger-dashboard.component.ts

  editing:boolean = false;

  onNameChange(value:string){
    console.log(value);
    this.detail.fullname = value;
  }
  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);  //emit tells parent
    }
    this.editing = !this.editing;
  }
  onRemove(){
    this.remove.emit(this.detail);  //emit tells parent
  }
```

---

<!-- passenger-dashboard.component.ts -->

- there will be multiple `<passenger-detail>` elements

* it is listening for a 'remove' event

```html
<passenger-detail
	*ngFor="let passenger of passengers"
	[detail]="passenger"
	(edit)="handleEdit($event)"
	(remove)="handleRemove($event)"
>
</passenger-detail>
```

```ts
  handleRemove(event){
    console.log(event);
  }

  handleEdit(event){
    console.log(event);
  }
```

---

## Updating the smart component / Imutable change updates

### removing from list in parent

```ts
handlerRemove(event:Passenger){
  this.passengers.filter((passenger:Passenger)=>{
    return passenger.id != event.id;
  });
}
```

### editing from list in parent

```ts
handleEdit(event){
  this.passengers = this.passengers.map((passenger:Passenger)=>{
    if(passenger.id === event.id){
      passenger = Object.assign({}, passenger, event);  //merge changes of 'event' into 'passenger'
    }
  });
}
```

## ngOnChanges life cycle hook

- implements OnChanges{}
- ngOnChanges(){}
- ngOnChanges() gets called before ngOnInit(), we can use it to break the bindings between parent and child component before component is initialized, this allows us to create a clone of itself and then reasign it to itself so that it is now a clone of the parent, so any changes to child component does not affect the parent directly and we emit events to notify parent of change

```ts
import { OnChanges } from '@angular/core';
export class PassengerDetailComponent implements OnChanges {
	ngOnChanges(changes) {
		this.detail = Object.assign({}, changes.detail.currentValue);
	}
}
```

---

# SERVICES

### working with json

- creating a service
- inside 'models' folder

* service added to the module under providers:[]
* the service is then available to the components listed in the module via dependency injection
* injected via constructor and private declaration
* this is a synchronous call

<!-- passenger-dashboard.service.ts -->

```ts
import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
	constructor() {}
	getPassengers(): Passenger[] {
		//json data here...
		return [
			{
				id: 1,
				fullname: 'Clark',
				checkedIn: true,
				checkedInDate: 1234555555,
				children: null
			},
			{
				//etc
			}
		];
	}
}
```

<!-- passenger-dashboard.component.ts -->

```ts
import { PassengerDashboardService } from '';

export class PassengerDashboardComponent {
	constructor(private passengerService: PassengerDashboardService) {}
	ngOnInit() {
		this.passengers = this.passengerService.getPassengers();
	}
}
```

<!-- passenger-dashboard.module.ts -->

```ts
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
	providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
```

---

## Understanding @Injectable

- we need to import {Injectable} from '@angular/core'; when we are relying on dependencies,
- then mark the class as @Injectable, that tells angular we can inject things into the classes' constructor and allow dependency injection in other classes
- otherwise there will be 'Error: Can't resolve all parameters for PassengerDashboardService: (?). At SyntaxError.BaseError [as constructor]'

<!-- passenger-dashboard.module.ts -->

```ts
import { HttpModule } from '@angular/http';

@NgModule({
  imports:[HttpModule],
})
```

<!-- passenger-dashboard.service.ts -->

```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PassengerDashboardService {
	constructor(private http: Http) {}
}
```

## Data fetching with observables and working with JSON

- webpack.config sets up the json server to setup the api/ and .json
- the path to the end point created is the structure of the object inside the json

  <!-- webpack.config.js extract -->

```json
var jsonServer = require('json-server');
module.exports = {
  devServer: {
    contentBase: cwd,
    compress: true,
    inline: true,
    hot: true,
    port: 4000,
    publicPath: '/build/',
    quiet: true,
    historyApiFallback: true,
    setup: function (app) {
      app.use('/api', jsonServer.router('db.json'));
    },
    stats: {
      chunks: false,
      chunkModules: false
    }
  },
```

- convert data to json and move data out of the service into a .json file,
  <!-- db.json -->

```json
{
	"passengers": [
		{
			"id": 1,
			"fullname": "Stephen",
			"checkedIn": true,
			"checkInDate": 1231234444,
			"children": null
		}
	]
}
```

- http requests return an Observable as a response
- need to import {Observable } from 'rxjs/Observable';
- Response type must be imported to @angular/http;
- map does not exist on type Observable, we need to import
  `import 'rxjs/add/operator/map';`

* the import makes .map available on the observable object
* in Passenger-dashboard.component, we receive the response (which is an observable) and we subscribe to its results which THEN we can assign
* there are errors in debug window from the passenger-count.component,
  because the array 'passengers' is bound directly and injected into the `<passenger-count [items]="passengers">` as an input,
  and the template inside checks items.length which doesnt exist yet,
  so make it a safe navigation by adding '?' on the template assignment
  <!-- passenger-dashboard.service.ts -->

```ts
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerDashboardService {
	PASSENGER_API: string = 'api/passengers';

	constructor(private http: Http) {}
	getPassengers(): Observable<Passenger[]> {
		return this.http.get(PASSENGER_API).map((response: Response) => {
			return response.json();
		});
	}
}
```

<!-- passenger-dashboard.component.ts -->

```ts
export class PassengerDashboardComponent implements OnInit {
	passenger: Passenger[];
	constructor(private passengerService: PassengerDashboardService) {
    ngOnInit(){
      this.passengerService.getPassengers().subscribe((data:Passenger[])=>{
        console.log('data: ', data);
        this.passenger = data;
      })
    }
  }
}
```

<!-- passenger-count.component.ts -->

```ts
@Component({
	template: `
		{{ items?.count }}
	`
})
export class PassengerCountComponent {
	@Input
	items: Passenger[];
}
```

## http 'put', 'delete' with immutable state

- persisting read and write from the .json

* .put() parameters are the api AND also the specific passenger data we get back from the call respose

- the services' updatePassenger() method returns an Observable that we can subscribe to in passenger-dashboard.component.ts

  <!-- passenger-dashboard.service.ts -->

```ts
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PassengerDashboardService {
	PASSENGER_API: string = 'api/passengers';

  updatePassenger(passenger:Passenger):Observable<Passenger>{
    return this.http.put(`${PASSENGER_API} + /${passenger.id}`, passenger)
    .map((response:Response)=>response.json());
  }

  removePassenger(passenger:Passenger):Observable<Passenger>{
    return this.http.delete(`${PASSENGER_API} + /${passenger.id}`)
    .map((response:Response)=>response.json());
  }
```

<!-- passenger-dashboard.component.ts -->

```ts
  handleEdit(event:Passenger){
    this.passengerService.updatePassenger(event).subscribe((data:Passenger)=> {
      //update
      this.passengers = this.passengers.map((passenger:Passenger)=>{
        if(passenger.id === event.id){
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });
  }

  handleRemove(event:Passenger){
    this.passengerService.removePassenger(event).subscribe((data:Passenger)=>{
      //remove
      this.passengers = this.passengers.filter((passenger:Passenger) => {
        return passenger.id !== event.id;
      });
    });
  }
```

## custom header request options (NOTE: THIS STEP IS OPTIONAL)

- import {Headers, RequestOptions } from '@angular/http';
- creating custom headers incase not always using same application type like application json
- Request header options gets added to .put() method

<!-- passenger-dashboard.service.ts -->

```ts
  import { Http, Response, Headers, RequestOptions } from '@angular/http';

  updatePassenger(passenger:Passenger):Observable<Passenger>{
    let headers = new Headers({
      'Content-type':'application/json'
    });

    let options = new RequestOptions({
      headers = headers
    });

    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).map((response:Response)=>response.json());
  }

```

## http promisses (NOTE: PROMISSES ARE OPTIONAL AS OPPOSED TO USING RXJS/SUBSCRIPTIONS)

- instead of importing map, import toPromise;
- method returns a Promise type
- method calls .toPromise().then() instead of .map()
- passenger-dashboard.component uses '.subscribe()' with the service which must be changed to .then()

<!-- passenger-dashboard.service.ts -->

```ts
import 'rxjs/add/operator/toPromise';

getPassengers():Promise<Passenger[]>{
  return this.http.get(PASSENGER_API).toPromise().then((response:Response) => response.json());
}

```

<!-- passenger-dashboard.component.ts snippet-->

```ts
handleRemove(event:Passenger){
  this.passengerService.removePassenger(event).then((data:Passenger)=>{
    this.passengers = this.passengers.fiter(passenger:Passenger) => {
      return passenger.id !=event.id;
    }
  });
}
```

## Observable.throw error handling

- import rxjs/add/operator/catch
- import rxjs/add/observable/throw

* chain on the .catch() to Observable call,
* passenger-dashboard.component.ts which uses passenger-dashboard.service can do errorHandling using the second parameter to the subscribe()

<!-- passenger-dashboard.service.ts -->

```ts
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

getPassengers():Observable<Passenger[]>{
  return this.http.get(PASSENGER_API).map((response:Response) => response.json())
  .catch( (error:any)=> Observable.throw( error.json()) );
}
```

<!-- passenger-dashboard.component.ts -->

```ts
ngOnInit(){
  this.passengerService
  .getPassengers()
  .subscribe((data:Passenger[]) => this.passengers = data, ) //error handling can occur here in second parameter
}
```

---

## Todd Motto - Angular Fundamentals - 08. Template-driven forms, Inputs and Validation

### setting up for forms

- create a smart component (containers folder) called passenger-viewer.component.ts

  <!-- app.components.ts -->

```ts
template: `<div class="app"><passenger-viewer></passenger-viewer></div>`;
```

  <!-- !pasenger-dashboard.module.ts -->

```ts
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

@NgModule({
  declarations:[PassengerViewerComponent],
  exports:[PassengerViewerComponent]
})
```

  <!-- passenger-viewer.component.ts -->

```ts
import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger-interface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	template: `
		<div>{{ passenger | json }}</div>
	`
})
export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;
	constructor(private passengerService: PassengerDashboardService) {}
	ngOnInit() {
		this.passengerService
			.getPassenger(1)
			.subscribe((data: Passenger) => (this.passenger = data));
	}
}
```

<!-- passenger-dashboard.service snippet-->

```ts
  getPassenger(id:number):Observable<Passenger>{
    return this.http.get(`${PASSENGER_API}/${id}`).map((response:Response)=> response.json()).catch((error:any)=> Observable.throw(error.json()));
  }
```

### form stateless component

<!-- passenger-viewer.component.ts snippet-->

```ts
@Component({
  template:`<passenger-form [detail]="passenger">
  </passenger-form>`
})
```

<!-- passenger-form.component.ts -->

```ts
import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-form',
	template: `
		<form>
			Form!
			<div>detail | json</div>
		</form>
	`
})
export class PassengerFormComponent {
	@Input()
	detail: Passenger;
}
```

<!-- passenger-dashboard.module.ts -->

```ts
import { FormsModule } from '@angular/forms';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';


@NgModule({
  imports:[CommonModule, HttpModule,  FormsModule],
  declarations:[
    PassengerFormComponent
  ]
})
```

## ngForm / ngModel

- forms elements get #form="ngForm" which keeps track of state changes. #form is a template ref to the form
- novalidate tells form not to validate as we want to use angular validation
- input name="" is needed in template driven forms, the name value becomes a property on an object representing the form
- add ngModel as a standalone attribute
- create a one way binding to [ngModel]="detail.fullname" which takes the detail object and create a one-way binding from ngModel

<!-- passenger-form.component.ts -->

```ts
@Component({
	selector: 'passenger-form',
	template: `
		<form #form="ngForm" novalidate>
			{{ detail | json }}
			<div>
				Passenger name:
				<input type="text" name="fullname" [ngModel]="detail?.fullname" />
			</div>

			<div>
				Passenger ID:
				<input type="number" name="id" [ngModel]="detail?.id" />
			</div>
			{{ form.value | json }}
		</form>
	`
})
export class PassengerFormComponent {
	@Input()
	detail: Pasenger;
}
```

## binding to radio buttons

- the linked up radio selection buttons all get the same name
- bind to [ngModel] in input element type="radio"
- NOTE: AHA!! MOMENT.. [ngModel] binding is for existing default values that already exist in the class property, like if the radio is supposed to start off saying "true" thats why it is check what is the current value already there. and [value] binds to the current value of the input

```ts
<div>
  <label>
    <input type="radio" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
    yes
  </label>
  <label>
    <input type="radio" [value]="false" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
    no
  </label>
</div>
```

<!-- passenger-form.component.ts -->

```ts
export class PassengerFormComponent {
	@Input()
	detail: Pasenger;
	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}
}
```

## binding to checkbox

- checkbox returns checked (true) or unchecked (false) value
- input type="checkbox", it does not need [value]="true"

```ts
<div>
  <label>
    <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
    yes
  </label>
```

<!-- passenger-form.component.ts -->

```ts
export class PassengerFormComponent {
	@Input()
	detail: Pasenger;
	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}
}
```

## select element with dynamic option ngValue

- using \*ngFor for select

* [ngModel] binds any existing model data that is in the class to the select
* [selected] checks which one is selected in initial data model

<!-- baggage.interface -->

```ts
export interface Baggage {
	key: string;
	value: string;
}
```

  <!-- passenger-form.component -->

```ts
import { Baggage } from '../../models/baggage.interface';
@Component({

template: `
  <select name="baggage" [ngModel]="detail?.baggage">
    <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">
      {{item.value}}
    </option>
  </select>

  <!-- select with ngValue -->
  <select name="baggage" [ngModel]="detail?.baggage">
    <option *ngFor="let item of baggage" [ngValue]="item.key">
      {{item.value}}
    </option>
  </select>
`;

})
export class PassengerFormComponent{
  baggage: Baggage[] = [
  {
    key: 'none',
    value: 'No Baggage'
  },
  {
    key: 'hand-only',
    value: 'Hand Baggage'
  },
  {
    key: 'hold-only',
    value: 'Hold Baggage'
  },
  {
    key: 'hand-hold',
    value: 'Hand and Hold Baggage'
  }]
}
```

# form validation

- use template reference # to track form property

* {{ fullname.errors | json }} access the .errors of the element

* required attribute

* #id="ngModel" binds to [ngModel] value of the current element
* by using template ref #, we are gaining access to the ngModel and have access to validation properties

* form.value property to check all values of the form
* form.valid property checks if value
* form.invalid property checks if invalid

* use .dirty on input element checks to see when user has interacted
  \*ngIf="fullname.errors?.required && fullname.dirty"

* can also use .touched for validation

  <!-- passenger-form.component.scss -->

```scss
div {
	margin: 0 0 20px;
}
.error {
	color: #da6969;
	font-size: 10px;
}
```

  <!-- passenger-form.component.ts -->

```ts
<input type="text" name="fullname" #fullname="ngModel" required [ngModel]="detail?.fullname">
{{ fullname.errors | json }}
<div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
  passenger name is required
</div>

<input type="number" name="id" #id="ngModel" required [ngModel]="detail?.id">
{{ id.errors | json }}

//print out form
{{form.value | json}}
{{form.valid | json}}
{{form.invalid | json}}
```

## Dynamically disable submit

- disable button if form is invalid by binding [disabled]="form.invalid"

* button does not need binding to click as it is type 'submit' which causes event to bubble up to the form and calls the forms' submit handler

<!-- passenger-form.component.ts -->

```ts
<button type="submit" [disabled]="form.invalid">Update Passenger</button>
```

## ngSubmit and stateless @Output (submitting our form)

- (ngSubmit) is prefered over (event), as it also tells form that it has been submitted

* form.valid is the second parameter we pass to our handling submit function because you can inspect element and remove a disabled attribute from a button, with js, we add a second level of control which helps make sure of validation

* create an output event property from stateless component to fire event on submit to parent smart container
* here in our example, we are going to emit an EventEmitter<Passenger> type,

* the forms' handle submit function which checks if form is valid then emits the event this.update.emit(passenger);

* passenger-viewer.component is the parent container of passenger-form.component
  which handles the output event and calls its update OnUpdatePassenger(\$event) function

* the passenger-viewer.component calls the update method of the service, and we then subscribe to the callback

  <!-- passenger-form.component.ts -->

```ts
import { Input, Output, EventEmitter} from '@angular/core';
@Input()
detail: Passenger;

@Output()
update:EventEmitter<Passenger> = new EventEmitter<Passenger>();

<form (ngSubmit)="handleSubmit(form.value, form.valid)">
</form>

handleSubmit(passenger:Passenger, isValid:boolean){
  if(isValid){
    this.update.emit(passenger);
  }
}
```

<!-- passenger-viewer.components.ts -->

```ts
<passenger-form [detail]="passenger" (update)="OnUpdatePassenger($event)"></passenger-form>

OnUpdatePassenger(event:Passenger){
  console.log(event);
  this.passengerService.updatePassenger(event).subscribe((data:Passenger)=>{
    this.passenger = Object.assign({}, this.passenger, event);
  })
}
```

---

# Component routing
