# ultimate angular - angular pro (todd motto)

## Content projection

- injecting content into the component by placing content between the component tags,
- the content inside the component is displayed in the `<ng-content></ng-content>` area

## projection slots

- putting content from outside (by the html DOM level) into a specific area inside the component
- the content is still displayed inside the `<ng-content>` element but with the addition of select attribute `<ng-content select=""></ng-content>` and select syntax is css selectors of what to select from the DOM.

## projecting components

- auth-remember.component.ts is a simple class that emits theinput checkbox event when checked.
- app.component.ts just uses the auth-remember component by projecting it inside
- inside app.component.ts, there is a var rememberMe which keeps track of the boolean status of checked or not
- app.component.ts has auth-form component with auth-remember component inside
- the auth-form.component ng-content projects auth-remember inside itself

<!-- auth-remember.component.ts -->

```ts
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'auth-remember',
	template: `
		<label
			><input type="checkbox" (change)="onChecked($event.target.checked)" />Keep
			me logged in</label
		>
	`
})
export class AuthRememberComponent {
	@Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
	onChecked(value: Boolean) {
		this.checked.emit(value);
	}
}
```

<!-- app.component.ts -->

```ts
@Component({
	template: `<div>
	<auth-form>
	<h3>heading</h3>
	<auth-remember (checked)="rememberUser($event)"></auth-remember>
	<button type="submit">click me</button>
	</auth-form>
	</div>`;
})
export class AppComponent {
	rememberMe: boolean = false;
	rememberUser(remember: boolean) {
		this.rememberMe = remember;
	}
}
```

<!-- auth-form.component -->

```ts
template: `
<ng-content select="h3"></ng-content>
<ng-content select="auth-remember"></ng-content>
	<ng-content select="button">
`;
```

##contentchild

- contentchild - definition is all html content projected into a component element and how angular allows us to listen to this with aftercontentinit()

- we want to gain access to this projected content, frpm the inside of the component class

* import the component as a class to the component using it to reference it import { AuthRememberComponent } from './auth-remember.component';
* import { ContentChild, AfterContentInit } from '@angular/core';

* we create an @ContentChild() and reference it by passing it the class name of the component we imported AND assign a local variable called 'remember'
* we safeguard that the component is actually injected in and we have access by using if(){}
  <!-- auth-form.component.ts -->

```ts
import { ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
	template: `
		<ng-content select="auth-remember"></ng-content>
		<div *ngIf="showMessage">show this text</div>
	`
})
export class AuthFormComponent implements AfterContentInit {
	showMessage: boolean;
	@ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
	ngAfterContentInit() {
		if (this.remember) {
			this.remember.checked.subscribe((checked: boolean) => {
				this.showMessage = checked;
			});
		}
	}
}
```

## contentchildren querylist

- import { ContentChildren, QueryList } from '@angular/core';
- @ContentChildren(SomeComponent) type is QueryList<SomeComponent>
- the list (eg. remember) is a QueryList array which you can subscribe to during ngAfterContentInit(){} call

<!-- app.component.ts -->

```ts
<auth-remember (checked)="rememberuser($event)"></auth-remember>
<auth-remember (checked)="rememberuser($event)"></auth-remember>
<auth-remember (checked)="rememberuser($event)"></auth-remember>
```

<!-- auth-form.component.ts -->

```ts
import {ContentChildren, QueryList} from '@angular/core';
export class AuthFormComponent implements AfterContentInit{
	@ContentChildren(AuthRememberComponent) remember:QueryList<AuthRememberComponent>;

	ngAfterContentInit(){
		if(this.remember){
			this.remember.forEach(item)=>{
				item.checked.subscribe((checked:boolean)=>{
					this.showMessage = checked;
				});
			}
		}
	}
}
```

## viewchild / afterviewinit

- ViewChild because it lives inside the existing view of the component.

- ViewChild queries a component from the Class that it is in

* import { ViewChild, AfterViewInit }

* import the component that we associate with the viewChild

* pass @ViewChild(AuthMessageComponent)

* use ngAfterContentInit() for ssetting properties before view has been initialized

```ts
import { ViewChild, AfterViewInit } from '@angular/core';
import { AuthMessageComponent } from '';
export class AuthFormComponent implements AfterViewInit {
	@ViewChild(AuthMessageComponent) message: AuthMessageComponent;
	ngAfterViewInit() {}
}
```

## viewChildren querylist

- QueryList is a live collection and will update when add/remove components from that queryList

- viewChildren is only available inside ngAfterViewInit()

* can assign value in ngAfterViewInit() with setTimeOut because of Angular's change detection (only problem in development mode)
* using change detection to tell angular that something updated, can fix setTimeout with ChangeDetectorRef (and remove setTimeOut)

```js
import { ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
	template: `<auth-message [style.display]="(showMessage ? 'inherit' | 'none')"></auth-message>
	<auth-message [style.display]="(showMessage ? 'inherit' | 'none')"></auth-message>
	<auth-message [style.display]="(showMessage ? 'inherit' | 'none')"></auth-message>`
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
	@ViewChildren(AuthMessageComponent)
	message: QueryList<AuthMessageComponent>;

	constructor(cd: ChangeDetectorRef) {}

	ngAfterViewInit() {
		if (message) {
			// setTimeOut(() => {
			// 	this.message.forEach(message => {
			// 		//message
			// 		message.days = 30;
			// 	});
			// });

			this.message.forEach(message => {
				//message
				message.days = 30;
			});
			this.cd.detectChanges();
		}
	}
}
```

## viewChild template ref

- ElementRef allows us to query an element directly
- import { ViewChild, ElementRef} from '@angular/core';
- attach the #ref to the template element:`<input type="email" name="email" ngModel #email>`
- reference with @ViewChild('email') email:ElementRef

```js
import { ViewChild, ElementRef} from '@angular/core';

@Component({
	template:`<input type="email" name="email" ngModel #email>`
})
export clas AuthFormComponent{
	@ViewChild('email') email:ElementRef
}
```

## elementref nativeelement

- using ElementRef, we get access to the dom element,
- email:ElementRef gives us access to the native DOM api's .nativeElement

* this method is good if building just for the web, else use renderer

```ts
@Component({
	styles:[`
		.email{ border-color:red; }
		`]
})
ngAfterViewInit(){
	this.email.nativeElement.setAttribute('placeholder', 'enter your email address');
	this.email.nativeElement.classList.add('email');
	this.email.nativeElement.focus();
}

```

## platform renderer

- used for distribution to various different platforms
- rendering native elements
- inject renderer into constructor
- import { Renderer} from '@angular/core';
- this.renderer.setElementAttribute()
- this.renderer.setElementClass()
- this.renderer.invokeElementMethod()

```ts
import { Renderer} from '@angular/core';

constructor(private renderer:Renderer){}
ngAfterViewInit(){
	this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'enter your email address');
	this.renderer.setElementClass(this.email.nativeElement, 'email', true);
	this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
}
```

## dynamic components

- create a placeholder div which acts as a container that we inject the component into
- import the component, import { AuthFormComponent } from './auth-form/auth-form.component'
- use resolver to dynamically create a factory for the component and inject into the div
- give div a template ref `<div #entry></div>` that acts as a container that we will inject the component into
- use viewchild to communicate directly with DOM
- use ViewContainerRef to create the component and inject into #entry
- import AfterContentInit, because then we can import our component, subscribe to the outputs and change the data, before actual view has been initialised in ngAfterContentInit()
- import ComponentFactoryResolver from angular/core
- in constructor, inject resolver of type ComponentFactoryResolver
- in ngAfterContentInit() creates a variable authFormFactory which is a result of the factory call
- call .createComponent()
- create the component `const component = this.entry.createComponent(authFormFactory);`
- ERROR? with dynamically created components, needs to be imported in the .module under entryComponents:[AuthFormComponent] which tells angular these components might not
  as well as declarations:[AuthFormComponent]

      		<!-- app.component.ts -->

```ts
import { AuthFormComponent } from './auth-form/auth-form.component';
import { Component, ViewContainerRef, ViewChild } from 'angular/core';

@Component({
	template: `
		<div #entry></div>
	`
})
export class AppComponent {
	@ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
	constructor(private resolver: ComponentFactoryResolver) {}

	ngAfterContentInit() {
		const authFormFactory = this.resolver.resolveComponentFactory(
			AuthFormComponent
		);

		const component = this.entry.createComponent(authFormFactory);
	}
}
```

<!-- auth-form.component.ts -->

```ts
export class AuthFormComponent {
	title = 'Login';
	@Output() submitted: EventEmitter<User> = new EventEmitter<User>();
}
```

<!-- auth-form.module.ts -->

```ts
@NgModule({
	declarations:[
		AuthFormComponent
	],
	entryComponents:[
		AuthFormComponent
	]
})
```

## dynamic input data

- dynamic components cannot access data in the class with @Input()
- dynamic components can access the public properties via .instance
- .instance exposes the public properties

```ts
	ngAfterContentInit(){
		const component = this.entry.createComponent(authFormFactory);
		console.log(component.instance);
		component.instance.title = "new header";
	}
```

## dynamic output subscriptions

- subscribing to the outputs of the component instance using .subscribe()
- in our example, we subscribe to the Output() event emitter of the component
- use .destroy(); on the copmonent

<!-- auth-form.component.ts -->

```ts
@Output() submitted:EventEmitter<User> = new EventEmitter<User>();
```

<!-- app.component.ts -->

```ts
	ngAferContentInit(){
		component.instance.submitted.subscribe(this.loginUser);
	}
```

## destroy dynamic component

<!-- app.component.ts -->

```ts
template: `
	<div>
		<button (click)="destroyComponent()">
		</button>
	</div>
`
component: ComponentRef<AuthFormComponent>;

ngAfterContentInit(){

}

destroyComponent(){
	this.component.destroy();
}
```

## reorder component

- in the .createComponent() method, pass the order as the second parameter (0-indexed)
- call .move() on the component passing in the ref this.component.hostView, and then new index

```ts
<button (click)="moveComponent()">move</button>

this.entry.createComponent(authFormFactory, 0);
this.component = this.entry.createComponent(authFormFactory, 0);

moveComponent(){
	this.entry.move(this.component.hostView, 1);
}
```

## Todd Motto - template viewcontainerRef

- using `<template>`tag instead of dynamic component
- import {TemplateRef} from '@angular/core'
- give it a templateref # eg. `<template #tmpl></template>`
- with components, we called .createComponent / BUT with templates, we call .createEmbeddedView
- GOAL: inject template into `<div #entry></div>` which puts dynamic content under placeholder div

```ts
	<template #tmpl>
		Todd Motto : England, UK
	</template>

	@ViewChild('tmpl') tmpl:TemplateRef<any>
	export class AppComponent implements AfterContentInit{
		ngAfterContentInit(){
			this.entry.createEmbeddedView(this.tmpl);
		}
	}
```

## template context

- how to pass a context to a particular `<template>`
- we use let-property eg. let-name `<template let-name>{{name}}</template>`, here angular asigns the variable name to {{name}}
- context is the second argument to createEmbeddedView() and it is optional
- we can dynamically create properties, by creating an \$implicit inside createEmbeddedView()
- \$implicit will bind to any let- we pass in from the template that doesnt have a value here we called it let-name (but it could be anything)

<!-- app.component.ts -->

```ts
template: `<template #tmpl let-name let-location="location">{{name}} - {{location}}</template>`;

export class AppComponent implements AfterContentInit {
	@ViewChild('tmpl') tmpl: TemplateRef<any>;

	ngAfterContentInit() {
		this.entry.createEmbeddedView(this.tmpl, {
			$implicit: 'Todd Motto',
			location: 'England, UK'
		});
	}
}
```

##ng-template outlet

- instead of injecting template into dom element with the api to create view like so, this.entry.createEmbeddedView(),
- we use a declarative way to do the same thing by creating a placeholder container called `<ng-container></ng-container>`, and this does not get rendered to DOM
- use directive ngTemplateOutlet which references the template (removes the need to use api methods)
- template gets renderered to `<ng-container>`

      	<!-- app.component.ts -->

```ts
template: `
<ng-container [ngTemplateOutlet]="tmpl"></ng-container>
<template #tmpl>Todd Motto: England, UK</template>
`;

export class AppComponent {}
```

#ng-template outlet context

- if we want to pass data dynamically into the template, we use context
- create an object ctx that we bind to
- using [ngTemplateOutletContext] on `<ng-container>`

<!-- app.component.ts -->

```ts
@Component({
	template: `
		<div>
			<ng-container
				[ngTemplateOutletContext]="ctx"
				[ngTemplateOutlet]="tmpl"
			></ng-container>
			<template #tmpl let-name let-location="location"
				>{{name}}{{location}}
			>
		</div>
	`
})
export class AppComponent {
	ctx = {
		$implicit: 'todd motto',
		location: 'England, UK'
	};
}
```

## view encapsulation

- 3 types (Emulated, Native, None)
- encapsulation: ViewEncapsulation.Emulated (default)
- encapsulation: ViewEncapsulation.Native
- encapsulation: ViewEncapsulation.None

- Emulated has a random hash after component, it emulates the effect of shadow dom,

- Native allows you to create a dom tree inside a dom tree, it creates a #shadow-root, it copies styles across from example 1. has no random hash

- None - opens up component to pass and inherit styles to other components, can get quite messy to manage, all components get the same shared style

## change detection strategy

- how it works and how to make it faster
- change detection runs everytime we change something
- we can change the strategy to .OnPush
- with Default angular checks each property and notifies DOM when property changes
- the idea is to use immutable data structures as it is faster with .OnPush when a new object is swapped out
- onPush is good for stateless components/dumb components faster rendering and calculations

<!-- app.component.ts -->

```ts
changeDetection: ChangeDetectionStrategy.Default;
or;
changeDetection: ChangeDetectionStrategy.OnPush;
```

# Directives

## Directives - attribute directives

- how to make custom directives
- eg. formatting the credit card numbers to insert space automatically after every 4th number and cap at 16 digits
- similar to creating a component, a component can have a template BUT a directive cannot have a template
- use @Directive({})
- we are using an attribute ('credit-card') to bind the directive to the input DOM element, so selector:'' uses query selector []
- inject access to the DOM element in the constructor: constructor(private element: ElementRef) {}
  <!-- app.module -->

```ts
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
	declarations: [CreditCardDirective]
})
export class AppModule {}
```

<!-- app.component.ts -->

```ts
import { Component } from '@angular/core';
@Component({
	selector:'app-root',
	template: `<div><label>Credit card number<input name="credit-card" type="text" placeholder="Enter your 16 digit card number" credit-card></label></div>`
})
```

<!-- credit-card.directive.ts
 -->

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: `[credit-card]`
})
export class CreditCardDirective {
	constructor(private element: ElementRef) {
		console.log(this.element);
	}
}
```

## Directives - host listeners

- import HostListener
- we pass in the name of the event we want to listen to
- its an event listener for the host (the element we have bound the directive to)
- say what we want to listen to: @HostListener('input'), ie. an event listener for the host. here..input event
- if we want to listen to the $event we put it in an array like ['$event']
- then we create our function that gets called when the even happens

<!-- credit-card.directive.ts
 -->

```ts
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: `[credit-card]`
})
export class CreditCardDirective {
	@HostListener('input', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		console.log(event);
		const input = event.target as HTMLInputElement;

		// regular expression removes white space and apply globally and replace with empty string, this removes white space
		let trimmed = input.value.replace(/\s+/g, '');
		if (trimmed.length > 16) {
			trimmed = trimmed.substr(0, 16);
		}

		let numbers = [];
		for (let i = 0; i < trimmed.length; i += 4) {
			numbers.push(trimmed.substr(1, 4));
		}
		//reasign value back
		input.value = numbers.join(' ');
	}
}
```

## host binding

- binding to a specific property on the host
- import HostBinding
- @HostBinding() allows us to communicate with host node and change a property via this directive, pass it what we want to bind to
- if we wanted to bind classes @HostBinding('class') classes = 'a b c';

<!-- app.component -->

```ts
@Component({
	selector:'app-root',
	template:`<div><label>Credit card number<input name="credit-card" [value]="foo" type="text" credit-card></label></div>`
})
```

<!-- credit-card.directive.ts -->

```ts
import {
	Directive,
	HostListener,
	HostBinding,
	ElementRef
} from '@angular/core';

@Directive({
	selector: '[credit-card]'
})
export class CreditCardDirective {
	@HostBinding('style.border')
	border: string;

	@HostListener('input', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		this.border = '';
		//check that it only contains numbers
		if (/[^\d]/.test(trimmed)) {
			this.border = '1px solid red';
		}
	}
}
```

## 'exportAs' property of a directive

- using @Input() 'set' we allow assigning a value to the directive from the outside
- eg. app.component.ts `<label tooltip="3 digits, back of your card">`
- exportAs a name we want to export our public directive as
- which allows us to use this alongside a templateRef
- in app.component.ts, can give a template ref (#myTooltip) to the label
- now because we used 'exportAs' on the directive, we can assign this to the templateRef (#myTooltip="tooltip")
- now everything inside directive is accessible via #myTooltip
- we can now create and listen to events and call the directive methods (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()"

<!-- tooltip.directive.ts -->

```ts
@Directive({
	selector: '[tooltip]',
	exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
	tooltipElement = document.createElement('div');
	visible = false;

	@Input()
	set tooltip(value) {
		this.tooltipElement.textContent = value;
	}

	hide() {
		this.tooltipElement.classList.remove('tooltip--active');
	}

	show() {
		this.tooltipElement.classList.add('tooltip--active');
	}

	constructor(private element: ElementRef) {}

	ngOnInit() {
		this.tooltipElement.className = 'tooltip';
		this.element.nativeElement.appendChild(this.tooltipElement);
		this.element.nativeElement.classList.add('tooltip-container');
	}
}
```

<!-- app.component.ts -->

```ts
template: `<div>
	<label>
		Credit card number
		<input name="credit-card" type="text" placeholder="Enter your 16 digit card number" credit-card>
	</label>
	<label tooltip="3 digits, back of your card" #myTooltip="tooltip">
		Enter your security code
		<span 
			(mouseover)="myTooltip.show()"
			(mouseout)="myTooltip.hide()"
		>(?)</span>
		<input type="text">
	</label>
</div>`;
```

## Todd Motto - Angular Pro - 27 - custom structural directives

- everything resides in template element
- making our own directive by replacing ngFor by replacing with something like 'myFor' and 'myForOf'
- create the directive and import Directive from @angular/core
- selector syntax for attribute selector '[myFor][myforof]'
- in constructor import ViewContainerRef and TemplateRef<any>, and import from @angular/core allows us to create our own instances of template using ViewContainerRef
- for each item inside our input, we want to embed a view inside our templateRef
- note [MyForOf] the Of part comes from let item of items, if it was let item in items, then it will read [MyForIn] as it is set by Angular
- in our example below, we use a setTimeout then add another item to the items list
- remember to call this.view.clear(); first when setting myForOf(collection)
  <!-- app.component.ts -->

```ts
template: `
	<li *ngFor="let item of items"; let i = index;">
	{{i}} Member: {{item.name | json}}
	</li>

	<template myFor [myForOf]="items" let-item let-i="index">
		<li>{{i}} Member of: {{item.name | json}}
		</li>
	</template>
	`
export class AppComponent{
	items = [{
		name:'',
		age:,
		location: ''
	}];
	constructor(){
		setTimeout(()=>{
			this.items = [...this.items, {name:'Clark', age:22, location:'California'}]
		}, 2000);
	}
}
```

<!-- my-for.directive.ts -->

```ts
import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[myFor][myForOf]'
})
export class MyForDirective {
	@Input()
	set myForOf(collection) {
		this.view.clear();
		collection.forEach((item, index) => {
			this.view.createEmbeddedView(this.template, {
				$implicit: item,
				index
			});
		});
	}

	constructor(
		private view: ViewContainerRef,
		private template: TemplateRef<any>
	) {}
}
```

---

## Custom Pipes

- | json
- | date

- creating a custom pipe | filesize
- import {Pipe, PipeTransform } from '@angular/core'
- custom class implements PipeTransform
- implement function called transform(value){} where 'value' parameter corresponds to anything we pass before the pipe
- to register the pipe, we give it a name @Pipe({name:''})
- in app.module.ts import the Class, and add to declarations
- to pass a second parameter into the pipe, after the name of the pipe, we add : then what we want to pass in,'megabytes'
  <!-- filesize.pipe.ts / filesize pipe -->

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
	transform(size: number, extension: string = 'MB') {
		return (size / (1024 * 1024)).toFixed(2) + extension;
	}
}
```

<!-- app.module.ts -->

```ts
import { FileSizePipe } from './filesize.pipe';
@NgModule({
	declarations:[FileSizePipe]
})
```

<!-- app.component.ts -->

```ts
@Component({
	selector:'app-root',
	template:`
	<div>
		<div *ngFor="let file of files">
			<p>{{file.name}}</p>
			<p>{{file.size | filesize:'megabytes'}}
		</div>
	</div>
	`
})
```

## pipe providers

- allows us to use pipe inside our component class rather than inside the dom
- this allows us to manipulate data in iteration before it gets to DOM
- register pipe to the component using providers:[FileSizePipe]
- we iterate through collection and update with pipe to return new data
- note how template iternates with ngFor through 'mapped' and not 'files' as before
- we can access the pipe through .transform() eg. this.fileSizePipe.transform(file.size, 'mb')
  <!-- app.component.ts -->

```ts
import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

interface File {
	name: string;
	size: any;
	type: string;
}

@Component({
	template: `<div>
		<div *ngFor="let file of mapped">
			<p>{{file.name}}</p>
			<p>{{file.size}}</size>
		</div>
	</div>`,
	providers: [FileSizePipe]
})
export class AppComponent implements OnInit {
	files: File[];
	mapped: File[];
	constructor(private fileSizePipe: FileSizePipe) {}

	ngOnInit() {
		this.files = [{ name: 'logo.svg', size: 21232313, type: 'image/svg' }];
		this.mapped = this.files.map(file => {
			return {
				name: file.name,
				type: file.type,
				size: this.fileSizePipe.transform(file.size, 'mb')
			};
		});
	}
}
```

---

## reactive angular forms

### setup stock-inventory

- create a new module that will hold our reactive form (stock-inventory.module.ts)
- import CommonModule, ReactiveFormsModule
- import the component into the module
- to use the component in our app-component, we exports:[StockInventoryComponent]

<!-- app/stock-inventory/app.module.ts -->
```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StockInventoryModule} from './stock-inventory/stock-inventory.module';
import {AppComponent} from './app.component';
@NgModule({
	declarations:[AppComponent],
	imports:[BrowserModule, StockInventoryModule],
	bootstrap:[AppComponent]
})
export class AppModule{}
```

<!-- app.component.ts -->
```ts
import {Component} from '@angular/core';
@Component({
	selector:'app-root',
	template:`<div>
		<stock-inventory></stock-inventory>
	</div>`
})
export class AppComponent{}
```


<!-- app/stock-inventory/stock-inventory.module.ts -->

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
@NgModule({
	declarations: [StockInventoryComponent],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [StockInventoryComponent]
})
export class StockInventoryModule {
	
}
```

<!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.scss -->
<!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.ts -->
```ts
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
	selector: 'stock-inventory',
	styleUrls: ['stock-inventory.component.scss'],
	template: `
		<div class="stock-inventory">
			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<div formGroupName="store">
					<input type="text" placeholder="branch id" formControlName="branch">
					<input type="text" placeholder="manager code" formControlName="code">
				</div>
				<div class="stock-inventory__buttons">
					<button type="submit" [disabled]="form.invalid">Order Stock</button>
				</div>

				<pre>{{ form.value | json }}</pre>
			</form>
		</div>
	`
})

export class StockInventoryComponent {
	form = new FormGroup({
		store: new FormGroup({
			branch: new FormControl(''),
			code: new FormControl('')
		}),
		selector: new FormGroup({
			product_id: new FormControl(''),
			quantity: new FormControl(10)
		}),
		stock: new FormArray([])
	})

	onSubmit(){
		console.log('Submit: ', this.form.value);
	}
}
```

## formcontrol formgroup (NOTE: later, FORMGROUPS GET BROKEN DOWN INTO FORM COMPONENTS) (see above code)

- template driven, bind ng-model and the template generates the source of truth (model)
- reactive driven, the javascript in the reactive class is the source of truth
- import FormControl, FormGroup, FormArray from @angular/forms 
- stock-inventory.component.ts create ```<form>``` element
- create property on component class called 'form' and assign to FormGroup
- inside FormGroup, we can create other FormGroup
- FormGroups contain FormControl
- bind the form property in the class to the DOM form element [formGroup]="form"
- the correlation gets tied in when you assign a FormGroupName to the class
- the formControls get formControlName binding to the FormGroup class properties, 
- the class contructor for FormControl gets the default value
- hooking up submit functionality create a ```<button>``` element inside the form with a type='submit'
- (ngSubmit)="OnSubmit()" allows us to gain access to all the whole form in 'this.form.value'
- we can preview what is inside the form by ```<pre>{{form.value | json }}</pre>```

## componentizing formgroups
- making a selector component, array
- selector is a dropdown
- FormArray allows us to create a collection of FormGroups or FormControls

- create a component 'stock-branch' from formGroupName="store" 
- create a component 'stock-selector' from formGroupName="selector"
- create a component 'stock-products' from formGroupName="products"

- we pass down the 

<!-- app/stock-inventory/stock-inventory.module.ts -->

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

import {StockBranchComponent } from './components/stock-branch/stock-branch.component';
import {StockProductsComponent} from './components/stock-products/stock-products.component';
import {StockSelectorComponent} from './components/stock-selector/stock-selector.component';

@NgModule({
	declarations: [StockInventoryComponent, StockBranchComponent, StockProductsComponent, StockSelectorComponent],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [StockInventoryComponent]
})
export class StockInventoryModule {
}
```

- in stock-inventory.component.ts we group the dom into components and replace the current dom 
<!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.ts -->
```ts
	template:`
	<div class="stock-inventory">
	<form [formGroup]="form" (ngSubmit)="onSubmit()">
		<stock-branch></stock-branch>
		<stock-selector></stock-selector>
		<stock-products></stock-products>

		<div class="stock-inventory__buttons">
			<button
				type="submit"
				[disabled]="form.invalid">
				Order Stock
			</button>
		</div>
	</form>
	`
```

- the below becomes a component 
---
<!-- html -->
```html
<div formGroupName="store">
	<input type="text" placeholder="branch id" formControlName="branch">
	<input type="text" placeholder="manager code" formControlName="code">
</div>
```
<!-- becomes -->
```html
<stock-branch></stock-branch>
```
<!-- app/stock-inventory/components/stock-branch/stock-branch.component.ts -->
```ts
import {Component} from '@angular/core';
@Component({
	selector:'stock-branch',
	styleUrls:['stock-branch.component.scss'],
	template:`<div>
		<div formGroupName="store">
			<input type="text" placeholder="branch id" formControlName="branch">
			<input type="text" placeholder="manager code" formControlName="code">
		</div>
	</div>`
})
export class StockBranchComponent{}
```


---
<!-- html -->
```html
```
<!-- becomes -->
```html
<stock-selector></stock-selector>
```
<!-- app/stock-inventory/components/stock-selector/stock-selector.component.ts -->
```ts
import {Component} from '@angular/core';
@Component({
	selector:'stock-selector',
	styleUrls:['stock-selector.component.scss'],
	template:`<div></div>`
})
export class StockSelectorComponent{}
```


---
<!-- becomes -->
```html
<stock-products></stock-products>
```
<!-- app/stock-inventory/components/stock-products/stock-products.component.ts -->
```ts
import {Component} from '@angular/core';
@Component({
	selector:'stock-products',
	styleUrls:['stock-products.component.scss'],
	template:`<div></div>`
})
export class StockProductsComponent{}
```


