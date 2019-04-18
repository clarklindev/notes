## ultimate angular - angular pro (todd motto)

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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { AppComponent } from './app.component';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, StockInventoryModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

<!-- app.component.ts -->

```ts
import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	template: `
		<div>
			<stock-inventory></stock-inventory>
		</div>
	`
})
export class AppComponent {}
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
export class StockInventoryModule {}
```

<!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.scss -->
<!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.ts -->

```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'stock-inventory',
	styleUrls: ['stock-inventory.component.scss'],
	template: `
		<div class="stock-inventory">
			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<div formGroupName="store">
					<input type="text" placeholder="branch id" formControlName="branch" />
					<input
						type="text"
						placeholder="manager code"
						formControlName="code"
					/>
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
	});

	onSubmit() {
		console.log('Submit: ', this.form.value);
	}
}
```

## formcontrol formgroup (NOTE: later, FORMGROUPS GET BROKEN DOWN INTO FORM COMPONENTS) (see above code)

- template driven, bind ng-model and the template generates the source of truth (model)
- reactive driven, the javascript in the reactive class is the source of truth
- import FormControl, FormGroup, FormArray from @angular/forms
- stock-inventory.component.ts create `<form>` element
- create property on component class called 'form' and assign to FormGroup
- inside FormGroup, we can create other FormGroup
- FormGroups contain FormControl
- bind the form property in the class to the DOM form element [formGroup]="form"
- the correlation gets tied in when you assign a FormGroupName to the class
- the formControls get formControlName binding to the FormGroup class properties,
- the class contructor for FormControl gets the default value
- hooking up submit functionality create a `<button>` element inside the form with a type='submit'
- (ngSubmit)="OnSubmit()" allows us to gain access to all the whole form in 'this.form.value'
- we can preview what is inside the form by `<pre>{{form.value | json }}</pre>`

## componentizing formgroups

- making a selector component, array
- selector is a dropdown
- FormArray allows us to create a collection of FormGroups or FormControls

- create a component 'stock-branch' which has a template `<div formGroupName="store"></div>`
- create a component 'stock-selector' which has a template `<div formGroupName="selector"></div>`
- create a component 'stock-products' which has a template `<div formGroupName="products"></div>`

- we create a binding called 'parent' and pass down the form, as the [parent]="form", this tells this component that its part of the entire form eg. <!-- stock-inventory.component.ts-->template: `<form [formGroup]="form"><stock-branch [parent]="form"></stock-branch></form>`
- we go into the component and import { FormGroup } from '@angular/forms' / on the Class,
- create an @Input() parent:FormGroup / import { Component, Input } from '@angular/core'
- we need to bind the component to the parent so in the component, `<div [formGroup]="parent">`

## binding formcontrols select

- creat a nested formGroup, allows user to select one of our products
- building out 'stock-selector' that allows user to choose a particular product
- and then add it to the form list when user has selected it
- note we create the product.interface
- import into stock-inventory.component.ts
- in Stock-inventory.component we create a products array
- bind to stock-selector `<stock-selector [parent]="form" [products]="products">` here we pass down the products into the component
- inside the component stock-inventory.component, 'selector' which is part of formGroup,
- inside stock-selector, bind formGroupName `<div formGroupName="selector">`, we have 2 controls product_id and quantity
- allow the user to select product `<select formControlName="product_id">`
- iterate through options using ngFor, binding id to the value `<options *ngFor="let product of products" [value]="product.id">{{ product.name }}`
- default with `<option value="">Select stock</option>`
- allow user to choose quantity `<input type="number" step="10" min="10" max="1000" formControlName="quantity">`

## form array

- hooking up FormArray, and iterate over it and render out each item in the FormArray,
- show what the user has selected as a stock item
- stock-products.components
- inside \*ngFor, we use it to iterate through the array, we need to bind to a `[formGroupName]`
- use parseInt(stock.product_id, 10) makes string a number with base 10

## form array add

- here we want to be able to add the item to the array
- also add ability to remove item
- emit event from inside the component to the parent, import { Output, EventEmitter } from '@angular/core'
- create an `@Output() added = new EventEmitter<any>();`
- when the button is clicked, `this.added.emit(this.parent.get('selector').value);`, the parent 'selector' is accessed to gain access to the whole FormGroup
- on the parent stock-inventory.component.ts listen for (added) event, then the parent component can push it into the stock-products components
  `<stock-selector [parent]="form" [products]="products" (added)="addStock($event)"></stock-selector>`
- stock-inventory.component.ts create addStock()
- because we are in the parent we can gain access to the 'stock' FormArray
- const control = this.form.get('stock') as FormArray which allows us access to FormArray, then we can push to it via createStock()

## form array remove

- using index to remove an item
- we are already in the loop of the FormArray so we pass item and the index(i).
- add onRemove() function to stock-products.component `<button type="button" (click)="onRemove(item, i)">Remove</button>`
- import Output and EventEmitter from '@angular/core'
- add to the component `@Output() removed: new EventEmitter<any>()`
- use the child component to emit the data that the parent needs to handle
- in stock-inventory.component, listen to 'removed' event `<stock-products [parent]="form" (removed)="removeStock($event)"></stock-products>`
- removeStock() function calls control = this.form.get('stock') as FormArray and then in angular reactive forms, control.removeAt(index); which is same as splice(index, 1)

## form builder

- Formbuilder is a wrapper for FormGroup, FormControl, FormArray and removes the need for boilder-plate declaration
- import { FormBuilder } from '@angular/forms'
- create a fb:FormBuilder instance in the constructor
- replace declarations of new FormGroup() with this.fb.group
- replace declarations of new FormArray() with this.fb.array
- replace declarations of new FormControl() with this.fb.control

use object destructuring removeStock({group, index})

<!-- app/stock-inventory/stock-inventory.module.ts -->

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

@NgModule({
	declarations: [
		StockInventoryComponent,
		StockBranchComponent,
		StockProductsComponent,
		StockSelectorComponent
	],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [StockInventoryComponent]
})
export class StockInventoryModule {}
```

<!-- models/product.interface.ts -->

```ts
export interface Product {
	id: number;
	price: number;
	name: string;
}
```

- in stock-inventory.component.ts we group the dom into components and replace the current dom
  <!-- app/stock-inventory/containers/stock-inventory/stock-inventory.component.ts -->

```ts
import { Product } from '../../models/product.interface';

	@Component({
		template:`
		<div class="stock-inventory">
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<stock-branch [parent]="form">
			</stock-branch>

			<stock-selector [parent]="form" [products]="products" (added)="addStock($event)">
			</stock-selector>

			<stock-products [parent]="form" (removed)="removeStock($event)">
			</stock-products>

			<div class="stock-inventory__buttons">
				<button
					type="submit"
					[disabled]="form.invalid">
					Order Stock
				</button>
			</div>

		</form>
		`
	})
	export class StockInventoryComponent{
		products:Product[] = [
			{"id": 1, "price":2800, "name":"MacBook Pro"},
			{"id": 2, "price":1000, "name":"Usb"},
			{"id": 3, "price":800, "name":"iPod"},
			{"id": 4, "price":600, "name":"iPhone"},
			{"id": 5, "price":3300, "name":"Apple Watch"},
		];

		form = new FormGroup({
			store: new FormGroup({
				branch: new FormControl(''),
				code: new FormControl('')
			}),
			selector: new FormGroup(this.createStock({}),
			stock: new FormArray([
				this.createStock({ product_id: 1, quantity: 3}),
				this.createStock({ product_id: 3, quantity: 50})
			])
		});

		createStock(stock){
			return new FormGroup({
				product_id: new FormControl(stock.product_id || ''),
				quantity: new FormControl(stock.quantity || 10)
			});
		}

		addStock(stock){
			const control = this.form.get('stock') as FormArray;
			this.control.push(this.createStock(stock));
		}

		removeStock({group, index}){
			const control = this.form.get('stock') as FormArray;
			control.removeAt(index);
		}

		onSubmit(){
			console.log('Submit: ', this.form.value);
		}

	}

```

- the below becomes a component

<!-- html -->

```html
<div formGroupName="store">
	<input type="text" placeholder="branch id" formControlName="branch" />
	<input type="text" placeholder="manager code" formControlName="code" />
</div>
```

<!-- becomes -->

```html
<stock-branch></stock-branch>
```

<!-- app/stock-inventory/components/stock-branch/stock-branch.component.ts -->

```ts
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'stock-branch',
	styleUrls: ['stock-branch.component.scss'],
	template: `
		<div [formGroup]="parent">
			<div formGroupName="store">
				<input type="text" placeholder="branch id" formControlName="branch" />
				<input type="text" placeholder="manager code" formControlName="code" />
			</div>
		</div>
	`
})
export class StockBranchComponent {
	@Input()
	parent: FormGroup;

	@Input()
	products: Product[];
}
```

---

<!-- html -->

```html
<stock-selector></stock-selector>
```

<!-- app/stock-inventory/components/stock-selector/stock-selector.component.ts -->

```ts
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector:'stock-selector',
	styleUrls:['stock-selector.component.scss'],
	template:`<div class="stock-selector" [formGroup]="parent">
		<div formGroupName="selector">
			<select formControlName="product_id">
				<option
				*ngFor="let product of products" [value]="product.id">
				{{product.name}}
				</option>
			</select>
			<input type="number" step="10" min="10" max="1000" formControlName="quantity">
			<button type="button" (click)="onAdd()">Add stock
			</button>
		</div>
	</div>`
})
export class StockSelectorComponent{
	@Input()
	parent: FormGroup;

	@Input()
	products: Product[];

	@Output()
	added: EventEmitter<any>();

	onAdd(){
		this.added.emit(this.parent.get('selector').value);
	}

})

```

---

<!-- becomes -->

```html
<stock-products></stock-products>
```

<!-- app/stock-inventory/components/stock-products/stock-products.component.ts -->

```ts
import {Component, Output, EventEmitter } from '@angular/core';
@Component({
	selector:'stock-products',
	styleUrls:['stock-products.component.scss'],
	template:`<div class="stock-product" [formGroup]="parent">
	<div formArrayName="stock">
		<div *ngFor="let item of stocks; let i = index;">
			<div class="stock-product__content" [formGroupName]="i">
				<div class="stock-product__name">
					{{ item.value.product_id }}
				</div>
				<input type="number" step="10" min="10" max="1000" formControlName="quantity">
				<button type="button" (click)="onRemove(item, i)">
				Remove
				</button>
			</div>
		</div>
	</div>
	</div>`
})
export class StockProductsComponent{
	@Input()
	parent: FormGroup;

	@Input()
	products: Product[];

	@Output()
	removed: new EventEmitter<any>();

	onRemove(group, index){
		this.removed.emit({group, index});
	}

	get stocks() {
		return (this.parent.get('stock') as FormArray).controls;
	}
}
```

## http service observables

- replacing static products list to the db.json (db json entries are like endpoints with array as value)
- make api requests
- setup service allows us to inject it into our component,
- angular service gets the data from .json
- use observables to merge api request
- Observable.subscribe(()=>{ //do the stuff you want to observer here });
- refactor by removing data out of stock-inventory.component and moving to db.json
- "stock" becomes an empty array in the component and the data moves to db.json
- import {HttpModule} @angular/http into stock-inventory.module then we can use http api
- register in the module the service under 'providers'
- import {Injectable } in the service @Injectable says we can inject this into another component
- import {Http, Response } from '@angular/http'
- the angular is set up so end point points to api/ and anything after is the property from the .json
- import service in the module into the component `import {StockInventoryService } from '../services/stock-inventory.service'`
- in the component, import 'rxjs/add/observable/forkJoin', forkJoin joins multiple services
- in the constructor create an instance of the service
- using a map uses key/value lookup, `productMap: Map<number, Product>`
- each product returns [product.id, product], `const myMap = products.map<[number, Product]>(product => [product.id, product]);`
  the above says .map<[number, Product]> means type returning an array with number
- `this.productMap = new Map<number, Product>(myMap);` //returns something like {1: {product details}}
- then assign `this.products = products;`
- pass map down into `<stock-products>`
- in stock products, `@Input() map: Map<number, Product>;`
- add `getProduct(id){return this.map.get(id);}`

## value change observers

- create a total with calculation and value change observable
- subscribing to the changes of our form
- .valueChanges() observable, we subscribe to it
- to set an initial value, call the calculateTotal

## reset update form controls /patchValue

- can reset a whole form or a particular control
- call .reset({}) pass in an object and tell it which properties on the form object we want to reset
- add to onAdd(){} function after the emit, this.parent.get('selector').reset({'product_id':'', quantity: 10})
- the form classes also get reset when calling the .reset(),
  resets the classes ng-pristine, ng-touched, ng-dirty, ng-valid
- reset resets every single value,
- to reset a specific value on the form, use .patchValue() or .setValue({}) allows us to say just reset 'product_id' but does not reset the classes ng-pristine, ng-touched, ng-dirty, ng-valid etc
- setValue() you have to redefine values for every property on the group/control or form object

<!-- db.json -->

```json
{
	"cart": [
		{ "product_id": 1, "quantity": 10 },
		{ "product_id": 3, "quantity": 50 }
	],
	"products": [
		{ "id": 1, "price": 400, "name": "macbook pro" },
		{ "id": 2, "price": 100, "name": "ipod" },
		{ "id": 3, "price": 60, "name": "iphone" }
	]
}
```

<!-- models/product.interface -->

```ts
export interface Product {
	id: number;
	price: number;
	name: string;
}
export interface Item {
	product_id: number;
	quantity: number;
}
```

<!-- services/stock-inventory.module -->

```ts
import {StockInventoryService } from '../services/stock-inventory.service'

@NgModule({
	imports: [ HttpModule],
	providers: [StockInventoryService]
})
```

<!-- services/stock-inventory.service -->

```ts
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/thow';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
	constructor(private http: Http) {}

	getCartItems(): Observable<Item[]> {
		return this.http
			.get('/api/cart')
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	getProducts(): Observable<Product[]> {
		return this.http
			.get('/api/products')
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}
}
```

<!-- stock-inventory.component -->

```ts

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { StockInventoryService } from '../../services/stock-inventory.service';

@Component({
	template:`
		<stock-products [map]="productMap" [parent]="form" (removed)="removeStock($event)"></stock-products>

		<div class="stock-inventory__price">total: {{ total | currency: 'USD': true}}</div>

		<div class="stock-inventory__buttons"><button type="submit" [disabled]="form.invalid">Order stock</button></div>
	`
})
export class StockInventoryComponent implements OnInit{

	products: Product[];
	productMap: Map<number, Product>;

	total: number;

	constructor(private stockService:StockInventoryService){}

	// any bindings will be fully available here...
	ngOnInit(){
		const cart = this.stockService.getCartItems();
		const products = this.stockService.getProducts();

		Observable.forkJoin(cart, products)
		.subscribe( [cart, products]: [Item[], Product[]] ) => {
			const myMap = products.map<[number, product]>(product => [product.id, product]);

			this.productMap = new Map<number, Product>(myMap);
			this.products = products;
			cart.forEach(item => this.addStock(item));

			this.calculateTotal(this.form.get('stock').value);
			this.form.get('stock')
			.valueChanges.subscribe(value=> {
				console.log(value);
				return this.calculateTotal(value);
			});
		}
	}

	calculateTotal(value:Item[]){
		const total = value.reduce((prev, next)=>{
			return prev + (next.quantity * this.produceMap.get(next.product_id).price);
		}, 0); //sets inital value of reduce to 0
		this.total = total;
	}

	createStock(stock){}
	addStock(stock){}
	removeStock({group, index}){}

}

```

<!-- stock-selector.component -->

```ts
@Component({
	selector: 'stock-selector',
	template: `<div class="stock-selector" [formGroup]="parent">
		<div formGroupName="selector">
			<select formControlName="product_id">
				<option
				*ngFor="let product of products" [value]="product.id">
				{{product.name}}
				</option>
			</select>
			<input type="number" step="10" min="10" max="1000" formControlName="quantity">
			<button type="button" (click)="onAdd()">Add stock
			</button>
		</div>
	</div>`
})
export class StockSelectorCompnent {
	@Input()
	parent: FormGroup;

	@Input()
	products: Product[];

	@Output()
	added: EventEmitter<any>();

	onAdd(){
		this.added.emit(this.parent.get('selector').value);

		//variations of form reset
		this.parent.get('selector').reset({product_id:'', quantity:10});
		this.parent.get('selector').patchValue({product_id:''});
		this.parent.get('selector').setValue({product_id:'', quantity:10});
	}
}
```

<!-- stock-product.component -->

```ts
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'stock-products',
	styleUrls: ['stock-products.component.scss'],
	template: `
		<div class="stock-products" [formGroup]="parent"></div>
	`
})
export class StockProductsComponent {
	@Input()
	parent: FormGroup;

	@Input()
	map: Map<number, Product>;

	getProduct(id) {
		return this.map.get(id);
	}
}
```

---

## custom form components

- import into the module the component
- add it to the declarations array
- set up the properties on the class and add increment/decrement methods to mimic the 'input'
- now you can use stock-counter.component in stock-selector.component
- note it binds the data to the class properties with `[prop]` rather than assigning with string like in the html 'input' sytnax
- disable or enable button by binding to disabled property `[disabled]="value===max"`

## control value accessor

- control value accessor allows us to use our own component and talk directly to our reactive form (whereas it usually uses the input element)
- stock-counter.component `import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';`
- register CounterComponent, and extend NG_VALUE_ACCESSOR to allow us to use our own component to talk to the form groups
- angular uses NG_VALUE_ACCESSOR to go into the input and allows us to update the values
- so we tell angular we have a component that want to do something similar,
- create a object that we will pass into our component as a provider `const COUNTER_CONTROL_ACCESSOR = {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=> StockCounterComponent)};`
- 'useExisting' tells Angular which component we will use to control the read and write access to our form control
- we need to use a forwardRef which we need to `import { forwardRef } from '@angular/core'`
- we return from a forwardRef our component, StockCounterComponent
- forwardRef it allows us to hoist the class/wait for the StockCounterComponent to become available, meaning giving us access to the class.
- add prop `multi: true` means we are extending NG_VALUE_ACCESSOR with our own StockCounterComponent
- in stockCounterCompnent, add `providers: [COUNTER_CONTROL_ACCESSOR],`
- the StockCounterComponent needs to implements ControlValueAccessor which needs us to implement the following functions:

- writeValue(value){ this.value = value || 0 } , we are writing the value of the formcontrol into our own custom component
- we create 2 property functions `private onTouch:Function;`
  `private onModelChange: Function;` we assign these properties to the functions that angular reactive forms are exposing
- we call onModelChange when our counter changes, this happens in the increment() and decrement()

  registerOnChange(fn){
  	this.onModelChange = fn;
  }

- onTouch notifies formControl that the component has been interacted with/ it has been touched
  this registers ng-touched, ng-pristine, ng-valid and when component is touched ng-valid ng-touched, ng-dirty
  this ties in with validation

  registerOnTouched(fn){
  	this.onTouch = fn;
  }

## keyboard events

* use wrapper div element to bind events to
* (keydown)="onKeyDown($event)"
* (blur)="onBlur($event)"
* (focus)="onFocus($event)" 
* listen to onKeyDown events with `handlers[event.code]` to check if 'ArrowDown' or 'ArrowUp' if it exists call it `handlers[event.code]()`
* call this.onTouch()
* onBlur set focus to false, call event.preventDefault(); event.stopPropagation();
* onFocus set focus to true, call event.preventDefault(); event.stopPropagation();
* bind to `[class.focused]="focus"` when focus is true 
* add .focused css to stylesheet
* to get div elements to fire these events we need to add a tabindex="0" to the DOM

<!-- stock-inventory.module.ts -->

```ts
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';

@NgModule({
	declarations:[StockCounterComponent],
})
```

<!-- stock-counter/stock-counter.component.ts -->

```ts
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => StockCounterComponent),
	multi: true
};

@Component({
	selector: 'stock-counter',
	styleUrls: ['stock-counter.component.scss'],
	providers: [COUNTER_CONTROL_ACCESSOR],
	template: `
		<div class="stock-counter">
			<div>
				<div 
					(keydown)="onKeyDown($event)"
					(blur)="onBlur($event)"
					(focus)="onFocus($event)"	
				>
					<p>{{ value }}</p>
					<div>
						<button
							type="button"
							[disabled]="value === max"
							(click)="increment()"
						>
							+
						</button>
						<button
							type="button"
							[disabled]="value === min"
							(click)="decrement()"
						>
							-
						</button>
					</div>
				</div>
			</div>
		</div>
	`
})
export class StockCounterComponent implements ControlValueAccessor {
	private onTouch: Function;
	private onModelChange: Function;

	registerOnTouched(fn) {
		this.onTouch = fn;
	}
	registerOnChange(fn) {
		this.onModelChange = fn;
	}

	writeValue(value) {
		this.value = value || 0;
	}

	@Input() step: number = 10;
	@Input() min: number = 10;
	@Input() max: number = 1000;

	value: number = 0;

	onKeyDown(event: KeyboardEvent){
		const handlers = {
			ArrowDown: () => this.decrement(),
			ArrowUp: () => this.increment()
		};

		if(handlers[event.code]){
			handlers[event.code]();
			event.preventDefault();
			event.stopPropagation();
		}
		this.onTouch();
	}

	onBlur(event:FocusEvent){
		this.focus = false;
		event.preventDefault();
		event.stopPropagation();
		this.onTouch();
	}

	onFocus(event:FocusEvent){
		this.focus = true;
		event.preventDefault();
		event.stopPropagation();
		this.onTouch();
	}

	increment() {
		if (this.value < this.max) {
			this.value = this.value + this.step;
			this.onModelChange(this.value);
		}
		this.onTouch();
	}

	decrement() {
		if (this.value > this.min) {
			this.value = this.value - this.step;
			this.onModelChange(this.value);
		}
		this.onTouch();
	}
}
```

<!-- stock-selector.component -->

```ts
template: `
	<stock-counter [step]="10" [min]="10" [max]="1000">
	</stock-counter>
`;
```

## validators object

* stock-inventory.component import {Validators} from '@angular/forms';
* with reactive forms, form = this.fb.group({store: this.fb.group({branch: '', code: ''})}) we want to make branch and code "required"
* with reactive forms, validation can be done on the form object
* the value of the group is then assigned an array branch:['', Validators.] 
* the first argument is the value
* the second argument is the validators object
* example Validators.required
* add validation messages by creating div element below input element, give it class="error" 
* use .hasError('invalidBranch') checks against the custom validators' error method eg. StockValidators.checkBranchs' return object {invalidBranch:true}
* target parent then the input and check for error, *ngIf="parent.get('store.branch').hasError('required')" 
* but only when field has been interacted with && parent.get('store.branch').touched
* we can replace the *ngIf="" by calling a function instead required('') and passing in the name of the form group
* if the ngIf returns true, then show the div, which means if required() returns true, then there are errors and it has been touched

## custom control validator
* second argument in Validator object becomes an array, and we pass in the method
* these are synchronous validators, the 3rd argument is an asynchronous validator
* import {StockValidators } from './stock-inventory.validators';
* note that the validator method is static
* the method has a few arguments, first is of type :AbstractControl, which is a class that all formgroups inherit from
* the control referenced by the validator depends on which property on the form we bind the validator to
* for the function we want to check if branch is valid
* can create a regular expression and test against the control with .test()
* if true, return null, else if invalid return an object { invalidBranch:true} which adds a property to the angular Validator
* *ngIf's can be moved into a function
* using getter get invalid() you can access the method directly like *ngIf="invalid" without method brackets ()

## custom formgroup validator

* validator on formgroup to check if its already in the list, if it is then dont add it
* we add a second argument to the form group, which is an object which we can pass in validator or asyncvalidator
* here our example we use .some() which returns a boolean and we can use this to check if the one thing is in the other array and it iterates through all items,
* note the validator returns false if the item is already in the array which returns {stockExists: true}
* add stock selector component is the wrapping component which includes the selector and stock
* we bind to `[disabled]="stockExists"`

## asynchronous custom validator

* asynchronous validator go and communicate with an api, then bring back a response which we can validate against
* update the db.json with "branches"
* update service with `checkBranchId(id: string): Observable<boolean>`, the call should return a response from http call
* the stock-inventory.component imports service and creates an instance in the contructor
* create a function validateBranch() in the component, the function uses the service and calls the service method to check if a branch exists
* import {AbstractControl} from '@angular/forms' 

<!-- stock-inventory.component -->
```ts
import {StockValidators} from './stock-inventory.validators';

@Component({

})

export class StockInventoryComponent{
 
	form = this.fb.group({
		store: this.fb.group({
			branch: [
				'', 
				[Validators.required, StockValidators.checkBranch], 
				[this.validateBranch.bind(this)]
			],
			code: ['', Validators.required]
		}),
		selector: this.createStock({}),
		stock: this.fb.array([])
	}, {validators: StockValidators.checkStockExists });

	constructor(private fb: FormBuilder, private stockService: StockInventoryService){}

	validateBranch(control:AbstractControl){
		return this.stockService
		.checkBranchId(control.value)
		.map((response:boolean)=>{
			return response ? null : {unknownBranch: true}
		});
	}
```

<!-- stock-inventory.validators.ts -->
```ts
import { AbstractControl } from '@angular/forms';

export class StockValidators{
	static checkBranch(control:AbstractControl){ 
		const regexp = /^[a-z]\d{3}$/i;			//what to check against
		const valid = regexp.test(control.value);			
		return valid ? null : { invalidBranch: true };
	}

	static checkStockExists(control: AbstractControl){
		const stockItem = control.get('stock');
		const selector = control.get('selector');

		if(! (stockItem && selector)){
			return null;
		}
		const exists = stockItem.value.some((stock) => {
			return stock.product_id === parseInt(selector.value.product_id, 10);
		});
		
		return exists ? {stockExists: true} : null;
	}
}

```

<!-- stock-branch.component -->
```ts

import {Validators} from '@angular/forms'; 	
@Component({
	template: 
	`<input type="text" placeholder="Branch ID" formControlName="branch">
	<div class="error" *ngIf="parent.get('store.branch').hasError('required') && parent.get('store.branch').touched">Branch Id is required</div>
	<div class="error" *ngIf="parent.get('store.branch').hasError('invalidBranch')>Invalid branch code: 1 letter, 3 numbers</div>`
	// can be replaced with...0
	// if ngIf returns true 
	template:
	`<input type="text" placeholder="Branch ID" formControlName="branch">
	<div class="error" *ngIf="required('branch')">Branch ID is required</div>
	<div class="error" *ngIf="invalid">Invalid branch code: 1 letter, 3 numbers</div>
	<div class="error" *ngIf="unknown">Unknown branch, please check the ID</div>

	<input type="text" placeholder="manager code" formControlName="code">
	<div class="error" *ngIf="required('code')">Manager ID is required</div>`
})

export class StockBranchComponent{
	@Input parent:FormGroup;

	get unknown(){
		return(
			this.parent.get('store.branch').hasError('unknownBranch') &&
			this.parent.get('store.branch').dirty
		);
	}

	// if required returns true
	required(name:string){
		return(
			this.parent.get(`store.${name}`).hasError('required') && 
			this.parent.get(`store.${name}`).touched
		);
	}

	get invalid(){
		return (
			this.parent.get('store.branch').hasError('invalidBranch') &&
			this.parent.get('store.branch').dirty && 
			!this.required('branch')
		);  
	}
}

```
<!-- stock-selector.component -->
```ts
`
<button type="button" [disabled]="stockExists || notSelected" (click)="onAdd()">Add stock</button>
<div class="stock-selector__error" *ngIf="stockExists">Item already exists in the stock</div>
`
get notSelected(){
	return (
		!this.parent.get('selector.product_id').value
	);
}

get stockExists(){
	return (
		this.parent.hasError('stockExists') && 
		this.parent.get('selector.product_id').dirty
	);
}
```
<!-- stock-inventory.service -->
```ts
import { Http, Response, URLSearchParams } from '@angular/http';

	checkBranchId(id:string):Observable<boolean>{
		let search = new URLSearchParams();
		search.set('id', id);
		
		//the first map maps the response to json
		//the second map checks if the response that has been parsed from json actually exists...if it exists we get the branch else, there wont be a length
		return this.http
		.get('/api/branches', {search} )
		.map((response:Response) => response.json() )
		.map((response:any[]) => !! response.length )
		.catch( (error:any) => Observable.throw(error.json()) );
	}
```

<!-- db.json -->
```ts
"branches": [
	{"id": "B182"},
	{"id": "A779"},
	{"id": "C390"},
	{"id": "R262"}
]
```