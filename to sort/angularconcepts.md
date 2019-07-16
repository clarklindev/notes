!ANGULAR CONCEPTS
to use | json pipe

import { CommonModule } from "@angular/common";

SERVICES

app.module
import { HttpModule } from "@angular/http";
@NgModule({
imports:[HttpModule]
})

<filename>.service.ts
import "rxjs/add/operator/map"; //allows us to take response and map to json
constructor(private http:Http){}
public getBranches() {
return this.http.get(this.url).map(res => res.json());
}

——————————————————————————————————————

UPDATE (REPLACES ABOVE)
app.module
import { HttpClientModule } from "@angular/common/http";
@NgModule({
imports:[HttpClientModule]
})

<filename>.service.ts
import { HttpClient } from '@angular/common/http';
constructor(private http:HttpClient){
return this.http.get(this.url);
}

——————————————————————————————————————
——————————————————————————————————————
form control state

TEMPLATE DRIVEN FORMS vs REACTIVE

TEMPLATE METHOD:

<form #idforform=“ngForm”>
form has a valid property, is true if every contained control is valid
each form control has a ‘name’ property required by anuglar forms to register the control with the form
each input has an ‘id’ property used by label element <label for=“”>
giving a temp reference of #spy <input #spy> we can display the inputs css classes {{spy.className}}

submit with <form (ngSubmit)=“onSubmit()”

disable submit button with <button type=“submit” [disabled]=“!heroForm.form.valid”>Submit</button>
——————————————————————————————

import { FormsModule} from ‘@angular/forms’;
@NgModule({
imports:[FormsModule]
})

COMPONENT:

<form #heroForm=“ngForm”
(ngSubmit)=“onSubmit()”
>
<div class=“form-group’>
<label for=“someId”></label> 	<input type=“” class=“” id=“name” required [(ngModel)]=“model.name” name=“name” #spy>

{{model.name}} //for display purposes only
{{spy.className}}

</div>

//dropdown

<div class=“form-group”>
<label for=“power”></label>
<select class=“” id=“power” required>
<option *ngFor=“let pow of powers” [value]=“pow”>{{pow}}</option>
</select>
</div>

<button type=“submit” [disabled]=“!heroForm.form.valid”>Submit</button>

</form>

REACTIVE METHOD:
With reactive forms, you create a tree of Angular form control objects in the component class.
and bind them to native form control elements in the component template

———————————————
CODEVOLUTION ANGULAR6

\*NgIf and else
OPTION1

<h2 *ngIf=“displayName; else elseBlock”>
coevolution
</h2>
<ng-template #elseBlock>
<h2>name is hidden</h2>
</ng-template>

OPTION2

<div *ngIf=“displayName; then thenBlock; else elseBlock”></div>
<ng-template #thenBlock>
<h2>Codevolution</h2>
</ng-template>

<ng-template #elseBlock>

<h2>Hidden</h2>
</ng-template>

——————————————
\*NgSwitch

<div [ngSwitch]=“color”>
<div *ngSwitchCase=“‘red’”>you picked red</div>
<div *ngSwitchCase=“‘blue’”>you picked blue</div>
<div *ngSwitchCase=“‘green’”>you picked green</div>
<div *ngSwitchDefault>Pick Again</div>
</div>

//class
public color = “blue”;
——————————————
\*NgFor

<div *ngFor=“let color of colors; index as i”>
<h2>{{i}}{{color}}</h2>
</div>

//class
public colors = [“red”, “green”, “blue”, “yellow”];

Accessing check if first element
(returns true or false)

<div *ngFor=“let color of colors; first as f”>
<h2>{{f}}{{color}}</h2>
</div>
Accessing check if last element
(returns true or false)
<div *ngFor=“let color of colors; last as l”>
<h2>{{l}}{{color}}</h2>
</div>

Accessing check if odd/even element (zero indexed)

<div *ngFor=“let color of colors; odd as o”>
<h2>{{o}}{{color}}</h2>
</div>

<div *ngFor=“let color of colors; even as e”>
<h2>{{e}}{{color}}</h2>
</div>

——————————
@Input / @Output

@Input (parent to child)

<app-test [parentData]=“name”></app-test> //sending name to <app-test>

//test component
import { Input } from ‘@angular/core’;

@Input() public parentData;
//in template
{{parentData}}

ALIASING INPUT
@Input(parentData) public name; //now we can use ‘name’
//in template
{{name}}

@Output (child to parent)
import { Output, EventEmitter} from ‘@angular/core’;

@Output() public childEvent = new EventEmitter();

export class TestComponent implements OnInit{
fireEvent(){
this.childEvent.emit(‘Hey Codevolution’);
}
}

//template
<button (click)=“fireEvent()”>send Event</button>

//parent
{{message}}

<app-test (childEvent)=“message=\$event”></app-test>

//parent class
public message = ‘’;
