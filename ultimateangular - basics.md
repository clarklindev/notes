component architecture



---
TEMPLATE FUNDAMENTALS

Interpolation

Expressions
ternary expression


PROPERTY BINDING
property binding [] from class down to template

   ONE-WAY DATA BINDING with []
	<img [src]="{{logo}}"> from class property logo:string = 'img/logo.svg' 
	<input type="text" [value]="name"> from class property name:string = 'Todd'

   2-WAY DATABINDING
	
   ONE-WAY DATA-BINDING listening for change then rebinding
	import { FormsModule} from '@angular/forms' and import to app.module
	<input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)"
	allows replacing [value]="name" binding to [ngModel]="name" which updates from class 'name'
	handleChange(value:string) { this.name = value; }
   TWO-WAY DATA-BINDING
	[(ngModel)]="name"


EVENT BINDING
event binding () listens to event

<input (input)="handleInput($event)" (blur)="handleEvent($event)" from class handleInput(event:any) and handleEvent(event:any)
<button (click)="changeName()"></button> from class changeName()

TEMPLATE REF
create a reference to any part of DOM by using hash variable #ref
then you can reference:

<input type="text" #username>
<button (click)="handleClick(#username.value)">get value: </button>
handleClick(value:string){}

---

import { CommonModule } from "@angular/core"; 
allows us to use ngIf / nfFor 

*ngIf=""
is shorthand for <template [ngIf]=""></template>

*ngFor=""
goes on <li>, <li *ngFor="let passenger of passengers; let i = index;">{{i}}: {{passenger}}</li> 
is shorthand for <template ngFor let-passenger let-i="index" [ngForOf]="passengers"><li>{{i}}: {{passenger}}</li></template>

---
CLASS BINDING
[ngClass] / [class.property] 

BINDING TO SINGLE CLASS
[class.checked-in]="passenger.checkedIn"
 
BINDING TO MULTIPLE CLASSES
[ngClass]="{
  'checked-in':passenger.checkedIn,
  'checked-out':!passenger.checkedIn	
}"

STYLE BINDING (BINDING DIRECTLY TO STYLE - NO CLASS NAMES ADDED TO DOM)
[ngStyle] / [style.property]

BINDING A SINGLE STYLE
[style.backgroundColor]="(passenger.checkedIn)? green : red"

BINDING MULTIPLE STYLES
[ngStyle]="{ backgroundColor: (passenger.checkedIn)? green : red }"

---
PIPES

| json      	- prints out json object
| date:'yMMMMd' - prints date format (see documentation for other formats)
| uppercase	- string to uppercase

pipes can be changed

typescript for optional property gets a ? before type...
interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate?: number	
}

---
SAFE NAVIGATION OPERATOR

typescript also use '?' before property to safely check if property exists

below: checking if the .length property exists on children, otherwise continue to || statement
{{passenger.children?.length || 0 }}

---
COMPONENTS

stateful (smart) / Container component - can communicate with services and renders child components
VS
stateless (dumb) / Presentational component - accept data via input and emit via output

ONE-WAY DATA FLOW




