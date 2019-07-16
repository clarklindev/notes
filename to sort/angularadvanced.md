Angular (ADVANCED)

Ultimate Angular

2.  Advanced Components

Content projection with <ng-content> //(step1)
when you project (pass content) into a component
and use the built in angular <ng-content></ng-content> directive to dictate where content should appear

projected content replaces <ng-content> tags

\*PARENT
(app.component)
@Component({
selector:”app-component”,
template:`

<div>
//example1 (step1 using basic <ng-content>)

<auth-form (submitted)=“createUser(\$event)”>

<h3>Create User</h3>	//projecting header //injected into <ng-content> slot in *Child

</auth-form>

=====================================================
//example2 (step2 using projection slot)

<auth-form (submitted)=“LoginUser(\$event)”>

<h3>Login User</h3>	//projecting header //injected into <ng-content> slot in *Child

</auth-form>

</div>
`
})

———————————————
\*CHILD

(auth.form.component) <auth-form>
@Component({
selector:”auth-form”,
template:`

<div>
//(step1)
<ng-content></ng-content>	//projected content goes inside <ng-content></ng-content>
</div>
`
})

———————————————————————————————————
//(step2) projection slots with: select=‘’

injection slot tells Angular where to inject a particular piece of information.
all you have to do is acreate an attribute (select=) on the ng-content telling it what to select
<button type=“submit’></button> activates the <auth-form (submitted)=“createUser(\$event)”>

*CHILD
<ng-content select=“what we are pulling from *Parent ”></ng-content>
select= can be a .class, #i or html element

eg.
\*Parent (app.component)

<auth-form (submitted)=“createUser(\$event)”>

<h3></h3>
<button type=“submit”></button>
</auth-form>

<auth-form (submitted)=“LoginUser(\$event)”>

<h3></h3>
<button type=“submit”></button>
</auth-form>

CHILD
(auth.form.component) <auth-form> component

@Component({
selector:”auth-form”,
template:`

<div>
//(step2)
<form>
<ng-content select=“h3”></ng-content>
<ng-content select=“button”></ng-content> //projected content goes inside <ng-content></ng-content>
</form>
</div>
`
})
———————————————————————————————————
Projecting components into ng-content
and bind to it

\*CHILD
(auth-remember.component.ts) binding to a checkbox,
when checkbox is changed we call ‘onChecked( \$event:boolean )’
onChecked passes in argument whether checked or not (is a boolean)
then in Component (AuthRememberComponent),
we have an output called “checked” which is updated by onChecked method,
which gets emitted to parent

\*PARENT
in the login <auth-form>,
we use the <auth-remember></auth-remember> and project into <auth-form>
we use (checked)=“” to see if user has been checked or not
which calls rememberUser()

\*parent (app.component.ts)

import {Component } from ‘@angular/core’;
import {User} from ‘./auth-form/auth-form.interface’;

@Component({
selector:’app-root’,
template:`

<div>

<auth-form
(submitted)=“loginUser(\$event)”

<h3></h3>
<auth-remember
(checked)=“rememberUser($event)”	//event is a boolean gets passed in
>
</auth-remember>
<button type=“submit”>
</button>
>
</auth-form>

</div>
`
})
…

export Class AppComponent{
rememberMe:boolean = false; //default

rememberUser(remember){
this.rememberMe = remember;  }

createUser(user:User){
console.log(‘create account’, user);
}

loginUser(user:User){
console.log(‘Login’, user, this.rememberMe); //pass in somewhere   }
}

————————————————————
(auth-form.component.ts)
here we target the selector in <ng-content select=‘auth-remember’>

\*PARENT (container)
@Component(
{
selector:’auth-form’,
template:`<div>

<form (ngSubmit)=“onSubmit(form.value)” #form=“ngForm”>
<ng-content select=“h3”></ng-content>
<label>
Email:
<input type=“email” name=“email” ngModel>
</label>
<label>
Password:
<input type=“password” name=“password” ngModel>
</label>
<ng-content select=“auth-remember”></ng-content>
<ng-content select=“button”></ng-content>
</form>
</div>

`
})
export class AuthFormComponent{}

————————————————————

\*child
(auth-remember.component.ts)

import {Component, Output, EventEmitter} from ‘@angular/core’;
@Component({
selector: ‘auth-remember’,
template:`<label> <input type=“checkbox” (change)=“onChecked($event.target.checked)”> </label>`
})

export class AuthRememberComponent{
@Output() checked:EventEmitter<boolean> = new EventEmitter<boolean>();
onChecked(value:boolean){
this.checked.emit(value);
}
}

———————————————————————————————
contentChild
queryList / aftercontentInit

\*PARENT
everything inside a component, counts as a contentChild

<component>	
…everything inside is considered a content child of the component	
</component>

eg.\*PARENT (app.component.ts)
<auth-form (submitted)=“loginUser($event)”>
<auth-remember (checked)=“rememberUser($event)”></auth-remember>
</auth-form>

———————————
\*CHILD

we can listen to changes of our content by querying the content through
content-child

so we want to listen to (checked) from <auth-form>

so inside ngContent, we can look at whats inside, and inside the form,
we can listen to those change
and talk to our projected content directly

create a <div> and \*ngIf when ng-content does something

we want to make showMessage depend on “auth-remember” component

inside component class , we create a property showMessage,
how do we get access to the projected content?
 WE IMPORT the component what we want to query/lookup so we have reference to it
import { AuthRememberComponent} from ‘./auth-remember.component’;

we import ContentChild and AfterContentInit
import { ContentChild, AfterContentInit } from ‘@angular/core’;

the child <ng-content select=“auth-remember”></ng-content> component gets
replaced by whats passed down from the parent
<auth-remember (checked)=“rememberUser(\$event)”></auth-remember>
thats why we imported AuthRememberComponent

then in the class we do a
@ContentChild() remember:AuthRememberComponent;
which allows us to query the <auth-remember> component

and we pass in the AuthRememberComponent
@ContentChild(AuthRememberComponent) remember:AuthRememberComponent;

remember is an instance of the component,
then in ngAfterContentInit() can access remember
and we do if(this.remember){} which means we have access to this component,

we can subscribe to events @output,
so AuthRememberComponent outputs ‘checked’

and we subscribe to it, and assign showMessage to it.
this.remember.checked.subscribe((checked:boolean) =>{
this.showMessage = checked;
});

eg. \*CHILD (auth-form.components.ts)
import { AuthRememberComponent} from ‘./auth-remember.component’;
import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from ‘@angular/core’;
import {User} from ‘./auth-form.interface’;

@Component({
template:`
<ng-content select=“auth-remember”></ng-content> //in parent we listen to ‘checked’

<div *ngIf=“showMessage”>	//we can listen to changes our content by querying the content through coontent-child
you will be logged in for 30 days
</div>
`
})

export class AuthFormComponent implements AfterContentInit{
showMessage:boolean;

@ContentChild(AuthRememberComponent) remember:AuthRememberComponent;

@Output() submitted: EventEmitter<User> = new EventEmitter<User>();

ngAfterContentInit(){
//we can access remember from @ContentChild here..
//remember is a reference to the AuthRememberComponent
if(this.remember){
this.remember.checked.subscribe((checked:boolean) =>{
this.showMessage = checked;
});  }  }

onSubmit(value:User){
this.submitted.emit(value);
}
}
———————————————————————————————
contentChildren
querylists

in this example we duplicate the component <auth-remember> in app.component
we want to make a query on injected content

(app.component.ts)
<auth-form (submitted)=“”>
…
<auth-remember (checked)=“remberUser($event)”></auth-remember>
<auth-remember (checked)=“remberUser($event)”></auth-remember>
<auth-remember (checked)=“remberUser(\$event)”></auth-remember>
…
</auth-form>

———————————
update the import ContentChild to ContentChildren
import QueryList
update rember to return a QueryList each item is of type AuthRememberComponent
(auth-form.component.ts)

import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from ‘@angular/core’;
…
export class AuthFormComponent implements AfterContentInit{
showMessage:boolean;
@ContentChildren(AuthRememberComponent) remember:QueryList<AuthRememberComponent>;
@Output() submitted: EventEmitter<User> = new EventEmitter<User>();

ngAfterContentInit(){
if(this.remember){
console.log(remember); //result is an array
this.remember.forEach((item) => { //item is AuthRememberComponent type
item.checked.subscribe((checked:boolean) => this.showMessage = checked);
});
}  } }
———————————————————————————————
viewChild
we query the view we are currently inside
viewChild is query of the same component

(app.component.ts)
<auth-form>
content child
</auth-form>

BUT….
<auth-message> is a viewChild of auth-form.component
because it is not projected in with <ng-content>

then in \*CHILD (auth-form.components.ts)

we import the class we want to reference
import { AuthMessageComponent } from ‘./auth-message.component’;

we import ViewChild, AfterViewInit

now implement

export class AuthFormComponent implements AfterContentInit, AfterViewIInit{
@ViewChild(AuthMessageComponent) message : AuthMessageComponent;
}

———————————————
\*CHILD (auth-form.component.ts)
we make a component (auth-message.component.ts) out from

<div *ngIf=“showMessage”>	//we can listen to changes our content by querying the content through coontent-child
you will be logged in for 30 days
</div>

and update with

<auth-message
[style.display]=“(showMesage ? ‘inherit’ | ’none’)”

> </auth-message>

———————————————

and create a new class (auth-message.component.ts)
import { Component }

@Component({
selector: ‘auth-message’,
template:`

<div>
you will be logged in for {{days}} days
</div>
`
})
export class AuthMessageComponent{
days: number = 7;
}

———————————————
REVISITED

eg. \*CHILD (auth-form.component.ts)

import { Component, Output, ViewChild, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from ‘@angular/core’;

import { AuthRememberComponent} from ‘./auth-remember.component’;
import { AuthMessageComponent } from ‘./auth-message.component’;

import {User} from ‘./auth-form.interface’;

@Component({
template:`
<ng-content select=“auth-remember”></ng-content> //in parent we listen to ‘checked’

<auth-message
[style.display]=“(showMesage ? ‘inherit’ | ’none’)”

> </auth-message>
> `
> })

export class AuthFormComponent implements AfterContentInit, AfterViewInit{

showMessage:boolean;

@ViewChild(AuthMessageComponent) message : AuthMessageComponent;

@ContentChild(AuthRememberComponent) remember:AuthRememberComponent;

@Output() submitted: EventEmitter<User> = new EventEmitter<User>();

ngAfterViewInit(){
console.log(this.message);
//this.message.days = 30; //error use ngAfterContentInit()
}

ngAfterContentInit(){
if(this.message){
this.message.days = 30; //override default value of 7
}
//we can access remember from @ContentChild here..
//remember is a reference to the AuthRememberComponent
if(this.remember){
this.remember.checked.subscribe((checked:boolean) =>{
this.showMessage = checked;
});  }  }

onSubmit(value:User){
this.submitted.emit(value);
}
}

———————————————————————————————
viewChildren
and how to use QueryList

@ViewChildren is only accessible inside the ngAfterViewInit()

REVISITED (auth-form.component.ts)

import { Component, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from ‘@angular/core’;

import { AuthRememberComponent} from ‘./auth-remember.component’;
import { AuthMessageComponent } from ‘./auth-message.component’;

import {User} from ‘./auth-form.interface’;

this.cd.detectChanges(); tells angular a change has been made after view has been initialized

@Component({
template:`
<ng-content select=“auth-remember”></ng-content> //in parent we listen to ‘checked’
…

<auth-message
[style.display]=“(showMesage ? ‘inherit’ | ’none’)”>
</auth-message>

<auth-message
[style.display]=“(showMesage ? ‘inherit’ | ’none’)”>
</auth-message>

<auth-message
[style.display]=“(showMesage ? ‘inherit’ | ’none’)”>
</auth-message>

`
})

export class AuthFormComponent implements AfterContentInit, AfterViewInit{

showMessage:boolean;

@ViewChildren(AuthMessageComponent) message : QueryList<AuthMessageComponent>;

@ContentChild(AuthRememberComponent) remember:AuthRememberComponent;

@Output() submitted: EventEmitter<User> = new EventEmitter<User>();

constructor(private cd: ChangeDetectorRef){}

ngAfterViewInit(){
if(this.message){
this.message.forEach((message) => {
message.days = 30; //override all the values
});
this.cd.detectChanges(); //removes those errors caused by changing values in production
}

}

ngAfterContentInit(){
if(this.remember){
this.remember.forEach((item) => {
item.checked.subscribe((checked:boolean) => this.showMessage = checked);
});
}
} 
onSubmit(value:User){
this.submitted.emit(value);
}
}

———————————————————————————————
referencing an child Element directly with #
and nativeElement

viewChild available inside ngAfterContentInit(),
viewChildren will not be available because it is a dynamic list.

ElementRef allow us to talk to the nativeElement
@ViewChild(‘email’) email:ElementRef;

giving us the element reference which allows us to access the native elelement
inside the ngAfterViewInit()

which exposes the native element to you,
giving us access to the native DOM nodes,
———————————————
(app.component.ts)

<auth-form>
</auth-form>

—————————

(auth-form.component.ts)
import {ElementRef} from ‘@angular/core’

template:`
…

<label>
Email
<input type=“email” name=“email” ngModel #email>
</label>
`

…

export class AuthFormComponent implements …{

@ViewChild(‘email’) email:ElementRef;

ngAfterViewInit(){

console.log(this.email); //a native element. here it is <input>

//
this.email.nativeElement.setAttribute(‘placeholder’, ‘some value’) //then do something with the native element…
this.email.nativeElement.classList.add(‘email’); //add class ‘email’ to the <input>
this.email.nativeElement.focus(); //auto focus  }

ngAfterContentInit(){
…  }
}
———————————————————————————————
Platform renderer (an alternative to nativeElement)

allows us to distribute code across environments,
keeping code platform safe

import the Renderer
inject renderer into contructor

(auth-form.component.ts)
import {ElementRef, Renderer} from ‘@angular/core’

template:`
…

<label>
Email
<input type=“email” name=“email” ngModel #email>
</label>
`

…

export class AuthFormComponent implements …{

@ViewChild(‘email’) email:ElementRef;

constructor(
private renderer:Renderer,
private cd:ChangeDetectorRef
){}

ngAfterViewInit(){
//renderer method
this.renderer.setElementAttribute(this.email.nativeElement, ‘placeholder’, ‘enter your email address’);
this.renderer.setElementClass(this.email.nativeElement, ‘email’, true);
this.renderer.invokeElementMethod(this.email.nativeElement, ‘focus’);
//nativeElement method
this.email.nativeElement.setAttribute(‘placeholder’, ‘some value’) //then do something with the native element…
this.email.nativeElement.classList.add(‘email’); //add class ‘email’ to the <input>
this.email.nativeElement.focus(); //auto focus  }

ngAfterContentInit(){
…  }
}
———————————————————————————————
