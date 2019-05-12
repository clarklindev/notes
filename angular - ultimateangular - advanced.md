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

## http headers

- note to create a .get() header with options
- const options = new RequestOptions();
- options.headers = new Headers({id:this.config.storeId, token: this.config.storeToken});
- return this.http.get(`/api/stores`, options).map((res) => res.json()[0]);

## http service observables

- `todos$` means we are expecting some sort of observable on the todos property
- we use this with the | async pipe to subscribe to it `todos$ | async`
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

- use wrapper div element to bind events to
- (keydown)="onKeyDown(\$event)"
- (blur)="onBlur(\$event)"
- (focus)="onFocus(\$event)"
- listen to onKeyDown events with `handlers[event.code]` to check if 'ArrowDown' or 'ArrowUp' if it exists call it `handlers[event.code]()`
- call this.onTouch()
- onBlur set focus to false, call event.preventDefault(); event.stopPropagation();
- onFocus set focus to true, call event.preventDefault(); event.stopPropagation();
- bind to `[class.focused]="focus"` when focus is true
- add .focused css to stylesheet
- to get div elements to fire these events we need to add a tabindex="0" to the DOM

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

	onKeyDown(event: KeyboardEvent) {
		const handlers = {
			ArrowDown: () => this.decrement(),
			ArrowUp: () => this.increment()
		};

		if (handlers[event.code]) {
			handlers[event.code]();
			event.preventDefault();
			event.stopPropagation();
		}
		this.onTouch();
	}

	onBlur(event: FocusEvent) {
		this.focus = false;
		event.preventDefault();
		event.stopPropagation();
		this.onTouch();
	}

	onFocus(event: FocusEvent) {
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

- stock-inventory.component import {Validators} from '@angular/forms';
- with reactive forms, form = this.fb.group({store: this.fb.group({branch: '', code: ''})}) we want to make branch and code "required"
- with reactive forms, validation can be done on the form object
- the value of the group is then assigned an array branch:['', Validators.]
- the first argument is the value
- the second argument is the validators object
- example Validators.required
- add validation messages by creating div element below input element, give it class="error"
- use .hasError('invalidBranch') checks against the custom validators' error method eg. StockValidators.checkBranchs' return object {invalidBranch:true}
- target parent then the input and check for error, \*ngIf="parent.get('store.branch').hasError('required')"
- but only when field has been interacted with && parent.get('store.branch').touched
- we can replace the \*ngIf="" by calling a function instead required('') and passing in the name of the form group
- if the ngIf returns true, then show the div, which means if required() returns true, then there are errors and it has been touched

## custom control validator

- second argument in Validator object becomes an array, and we pass in the method
- these are synchronous validators, the 3rd argument is an asynchronous validator
- import {StockValidators } from './stock-inventory.validators';
- note that the validator method is static
- the method has a few arguments, first is of type :AbstractControl, which is a class that all formgroups inherit from
- the control referenced by the validator depends on which property on the form we bind the validator to
- for the function we want to check if branch is valid
- can create a regular expression and test against the control with .test()
- if true, return null, else if invalid return an object { invalidBranch:true} which adds a property to the angular Validator
- \*ngIf's can be moved into a function
- using getter get invalid() you can access the method directly like \*ngIf="invalid" without method brackets ()

## custom formgroup validator

- validator on formgroup to check if its already in the list, if it is then dont add it
- we add a second argument to the form group, which is an object which we can pass in validator or asyncvalidator
- here our example we use .some() which returns a boolean and we can use this to check if the one thing is in the other array and it iterates through all items,
- note the validator returns false if the item is already in the array which returns {stockExists: true}
- add stock selector component is the wrapping component which includes the selector and stock
- we bind to `[disabled]="stockExists"`

## asynchronous custom validator

- asynchronous validator go and communicate with an api, then bring back a response which we can validate against
- update the db.json with "branches"
- update service with `checkBranchId(id: string): Observable<boolean>`, the call should return a response from http call
- the stock-inventory.component imports service and creates an instance in the contructor
- create a function validateBranch() in the component, the function uses the service and calls the service method to check if a branch exists
- import {AbstractControl} from '@angular/forms'

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

export class StockValidators {
	static checkBranch(control: AbstractControl) {
		const regexp = /^[a-z]\d{3}$/i; //what to check against
		const valid = regexp.test(control.value);
		return valid ? null : { invalidBranch: true };
	}

	static checkStockExists(control: AbstractControl) {
		const stockItem = control.get('stock');
		const selector = control.get('selector');

		if (!(stockItem && selector)) {
			return null;
		}
		const exists = stockItem.value.some(stock => {
			return stock.product_id === parseInt(selector.value.product_id, 10);
		});

		return exists ? { stockExists: true } : null;
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

---

# Routing

## enable tracing

- traces out the route event info
- in app.module, turn on enableTracing... imports:[ RouterModule.forRoot(ROUTES, {enableTracing: true})]
- can inject Router in app.component constructor and listen to the events in ngOnInit()

* EVENTS

- NavigationStart event
- RoutesRecognized event
- NavigationEnd event

- NavigationCancel event
- NavigationError event

- RouteConfigLoadStart event
- RouteConfigLoadEnd event

* doing something when navigation has ended,

## Router Event Subscriptions

- we listen to router events in ngOnInit() by subscribing to this.router.events.subscribe()
- we need to import any Routing events we need if we are to subscribe to them
- import { Router, NavigationEnd } from '@angular/router'
- test event instanceof one of the routing Classes
- we can use rxjs filter to first filter the event then if we are sure that it is an instanceof NavigationEnd then subscribe to it

## Routeroutlet events

- adding events to `<router-outlet (activate)="onActivate($event)" (deactivate)="onDeactivate($event)">` provided by angular
- we can then pass through \$event to the listening method
- the router outlet 'activate' event tells us the component has been instantiated
- the router outlet 'deactivate' event tells us the component that has been destroyed
- can use these for analytics, or logging, or running global function when component activated or destroyed..

## Routing resolves

- preloads data before you have navigated to a particular routed component
- learning to configure a resolve from the module
- in the module, add 'resolve' property to the routes mail.module.ts -> export const ROUTES: Routes = [{ path:'', component: MailFolderComponent, resolve: {}}]
- we use db.json as the static json server in our example which holds a property "messages"

- set up service to fetch data mail.service.ts
- later, the resolve will call the service method...
- import { Injectable } from '@angular/core'; and define class as @Injectable()
- create constructor, inject http and import {Http} from '@angular/http'
- make a function getFolder(folder:string):Observable<Mail[]> that returns an observable of type Mail array
- mail is an interface
- use query like this: '?folder' to set different look up data here we are looking up what the folder is

- in the module, regist mailService as a provider

<!-- resolve -->

- create a resolve (mail-folder.resolve.ts) acts as a middleware between component and router
- when it successfully resolves, component will be give the information via router (where resolve is declared)
- make resolve class eg MailFolderResolve @Injectable()
- import { Resolve } from '@angular/router'; and the resolve class must implements Resolve<Mail[]> (and you have to give it a type)
- needs a resolve(){} function and we MUST call it resolve().
- inside we make our service call.
- create constructor() and inject the service
- resolve() must return something, here...return an observable
- resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) receives as parameter an ActivatedRouteSnapshot and RouterStateSnapshot but it must also be imported from '@angular/routes'
- ActivatedRouteSnapshot contains information about our routing (mostly stuff on the url, params, query params, url fragments, and any data that will be used to fetch resolve data)
- state:RouterStateSnapshot represents the state of the router at a particular place in time that this function was called. it also contains information about all the nodes in a particular router tree, because router is generating a tree of nodes which contain information about the current state of the router, we can get these from RouterStateSnapshot
- .getFolder(route.params.name) where 'name' is the particular value on the route
- import resolve into mail.module.ts
- import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
- because MailFolderResolve is injectable, we must add it to our providers:[]
- now we can use it in mail.module.ts resolve:{}
- the resolve property tells angular that we want to resolve some data that will be returned from a resolver,
- here... the result of the resolve() in MailFolderResolve
- we create a property on the router, resolve, and its value is an object with a property we make called 'messages' and we associate this with the response of MailFolderResolve function resolve()
- resolve:{ messages: MailFolderResolve }
- this messages property is then accessible inside MailFolderComponent as this.route.data which is an Observable;
- in mail-folder.component, class MailFolderComponent,
- import { ActivatedRoute } from '@angular/router';
- inject router in constructor and then access that resolve data
- in mail-folder.components we create a property data: Observable<{messages:Mail[]}> it is an observable and it will return an object with our MailFolderResolve resolve 'messages' property inside which is of type Mail array
- we assign this data:Observable<{messages:Mail[]}> = this.route.data;
- now we can access this data's message property in the template `<mail-item *ngFor="let message of (data | async).messages">`
- we can also target specific route.data by pluck messages: Observable<Mail[]> = this.route.data.pluck('messages');
- import 'rxjs/add/operator/pluck';
- we can then pluck specific data from the route `title: Observable<string> = this.route.params.pluck('name');`
- note to display this title in html we need to pipe async `{{ title| async }}`

## auxilary outlets

- aka second router outlet, named-router outlet, auxilary route
- allow a sibling route into our router outlet
- the primary router outlet and a second-router outlet (which is named) exists side by side
- mail-app.component eg name="pane" `<router-outlet></router-outlet> <router-outlet name="pane"></router-outlet>`
- mail.module.ts configure another outlet, create a new sibling route `export const ROUTES: Routes = [{path:'folder/:name', component:MailFolderComponent, resolve:{messages:MailFolderResolve}}, { path: 'message/:id', component:MailViewComponent, outlet:'pane'}]`
- how to tell router-outlet that we want to render our component inside the named router-outlet? refer to 'name' in the router, via outlet property
- when we want to navigate to this route, angular will create the pattern in the url `localhost:4000/folder/inbox(pane:message/1)` ie. url(named of outlet:routing-definition/unique-id)

## auxiliary routerlink navigation

- click on routerlink to navigate to particular router-outlet
- mail-item.component.ts `<a class="mail-item" [routerLink]="" routerLinkActive="active"></a>`
- we pass 'id' data from db.json into the routerLink dynamically by binding a value so that we can navigate to that component,
- [routerLink] = ['', {outlets:{ pane:['message', message.id] }}]
- note the first param is empty string because route path is relative ie (based off /inbox),
- the second param of routerLink is an object with param outlets {outlets:} which references 'pane' from ROUTES, and arguments we give pane is what the router is expecting 'message/:id'
- the id we pass as argument dynamically into the array
- routerLinkActive="active" class given to when in active state

## auxiliary navigation api

- using routerLink makes angular give a elements href="" tags making it valid a tags,
- routerLinkActive adds 'active' class
- using native api / javascript to navigate
- `<a (click)="navigateToMessage()">`
- import { Router} from '@angular/router';
- inject router:Router into constructor
- removeLink and routerLinkActive as we dont benefit from using these routerLink directives
- use this.router.navigate() to navigate, and we pass in the same object as when we used routerLinks value (NOTE: we reference this.message)
- `function navigateToMessage(){this.router.navigate(['', {outlets:{ pane:['message', this.message.id] }}] )}`
- we dont have access to routerLinkActive though
- to navigate by destroying aux outlet `this.router.navigate(['', {outlets:{ pane: null } }] )`

## destroy auxiliary outlets

- removing the auxiliary outlet section from the url this part... '(pane:message/1)'
- switching data in router-outlet doesnt remove the auxiliary outlet data as it persists, then the url still includes the auxiliary outlet part
- we want to clear the second router outlet
- so routerLink="folder/inbox" becomes [routerLink]="[{outlets:{primary:'folder/inbox'}}]"
- we change this by going to the parent app.component and binding [routerLink] to 'primary' to an array and use outlets property
- ="[{outlets:{primary:'folder/inbox', pane:'null'}}]" this allows us to also use the auxiliary outlet eg. 'pane'
- and to reset the url we pass null to reset `this.router.navigate(['', {outlets:{ pane: null } }] )`

## resolving auxiliary outlets

- creating a resolve for the auxiliary outlet and load data in
- mail.module.ts add a resolve property on the auxiliary route,
- the resolve returns a single data entry not an array
- inject service in the constructor
- resolve() calls on services' .getMessage() and we pass in the id of the message which we get from the router ROUTES (ie from route.params.id)
- in the module, import { MailViewResolve } from './components/mail-view/mail-view.resolve';
- register resolve in providers: [MailViewResolve]
- add getMessage() to mail.service.ts NOTE: it returns an Observable<Mail>
- AHA MOMENT!!!! ROUTE's 'resolve' allows us access to its properties..once the Component that is associated within ROUTE has been instantiated
  and we have access to ActivatedRoute we can assign an Observable to this.route.data.pluck('message'),
- so in MailViewComponent we can acess route data via message: Observable<Mail> = this.route.data.pluck('message');
- AHA MOMENT!!!! something that is an instance of Observable in the class needs to have | async in the html

## Lazy loading

- spliting up chuncks of code and requesting code on demand making inital payload smaller
- lazy loading starts with modules and code related to it is lazy loaded on demand
- it starts with defining the routes to have their own paths for the different modules
- we attempt to lazy load the 'dashboard' module
- app.module should import all the modules irrespective if its lazy loaded or no
- import { MailModule} and import { DashboardModule } then import the modules in the NgModule({ imports:[ MailModule, DashboardModule ]})
- the respective modules path:'' starts with defining their respective paths (INSTEAD OF being in the main Router, we change it to path:'dashboard' and path:'mail' in their own modules)
- `<a>` links in main component should [routerLink] to respective modules and the module will handle the pathing from there
- main app modules using `<router-outlet>` means we can use the router to do the routing

UPDATE:

- in app.module, remove the import for the module you want to lazy load
- and remove it from imports:[]
- then we lazy load by adding property to ROUTES in app.module by setting path:'' as the path we want as the root of the module (the custom route),
- AND then ADD for ondemand loading add the module, `loadChildren:'./dashboard/dashboard.module#DashboardModule'` and because there could be multiple modules in one file, reference the name of the module with #nameofmodule
- the loadChildren path is relative to the current file (app.module)
- in the Dashboard.module, we remove the now duplicate path (as it is set in the root ROUTER), and set the initial path:''
- lazyloaded modules show up in the browser 'network' as '0.chunk.js', filename is done via webpack

## preload all

- even with Lazy loading modules code in place, it is possible to override the lazyload code by preloadAll
- import { PreloadAllModules } from '@angular/router';
- in the module, RouterModule.forRoot(ROUTES) gets updated to RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})

# custom preload (requires lazy loading)

- updating preloadingStrategy on RouterModule.forRoot(ROUTES, {preloadingStrategy:PreloadAllModules});
- we update to RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules});
- we import { PreloadingStrategy }
- we remove the import { PreloadAllModules }
- create and export a class, on the `export class CustomPreload implements PreloadingStrategy` and make it implement PreloadingStrategy
- we need to implement the preload function in this customPreload class `preload(route:Route, fn:()=>Observable<any>):Observable<any>{}`
- and inside this method, we say what should happen when we hit this route
- but we need to update the ROUTES first to add a property data:{preload:true} to the object for path:'dashboard'
- then we can test if the route exists and if there is a 'preload' property on the route
- add providers:[CustomPreload], and then replace the preloadingStrategy forRoot with CustomPreload
- the CustomPreload strategy is iterating over our router tree definitions and checking if route.data exists and preload is true, THEN preload() by invoke the function given to us else return an observable of null

<!-- app.module.ts -->

```ts
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';
// import { DashboardModule } from './dashboard/dashboard.module';

export const ROUTES:Routes = [
{ path:'dashboard', data:{preload: true}, loadChildren:'./dashboard/dashboard.module#DashboardModule' },
{ path:'**', redirectTo:'mail/folder/inbox' }
];

export class CustomPreload implements PreloadingStrategy{
	preload(route:Route, fn:()=>Observable<any>): Observable<any>{
		return route.data && route.data.preload ? fn() : Observable.of(null);
	}
}

@NgModule({
	providers:[CustomPreload],
	imports:[
		MailModule,
		// DashboardModule,
		RouterModule.forRoot(ROUTES, {enableTracing: true, preloadingStrategy: CustomPreload});
	]
})
```

<!-- app.component.ts -->

```ts
export class AppComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit() {
		this.router.events.subscribe(event => {
			console.log(event);
			if (event instanceof NavigationEnd) {
				console.log(event);
			}
		});

		// alternative method to first filter (rxjs)
		this.router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe(event => {
				console.log(event);
			});
	}
}
```

<!-- mail-app.component -->

```ts
@Component({
	template: `
		<router-outlet
			(activate)="onActivate($event)"
			(deactivate)="onDeactivate($event)"
		></router-outlet>
	`
})
export class MailAppComponent {
	onActivate(event) {
		console.log('activate: ', event);
	}
	onDeactivate(event) {
		console.log('deactivate: ', event);
	}
}
```

<!-- mail.module -->

```ts
import { MailService } from './mail.service';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';

export const ROUTES: Routes = [
	{
		path: 'folder/:name',
		component: MailFolderComponent,
		resolve: {
			messages: MailFolderResolve
		}
	},
	{
		path: 'messages/:id',
		component: MailViewComponent,
		outlet: 'pane',
		resolve: {
			message: MailViewResolve
		}
	}
];

@NgModule({
	providers:[
		MailService, MailFolderResolve
	]
})
```

<!-- mail.service -->

```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mail } from './models/mail.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {
	constructor(private http: Http) {}

	getFolder(folder: string): Observable<Mail[]> {
		return this.http
			.get(`/api/messages?folder=${folder}`)
			.map(response => response.json());
	}

	getMessage(id: string): Observable<Mail> {
		return this.http
			.get(`/api/messages/${id}`)
			.map(response => response.json());
	}
}
```

<!-- mail-folder.resolve -->

```ts
import { Injectable } from '@angular/core';
import {
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { MailService } from '../../mail.service';

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
	constructor(private mailService: MailService) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.mailService.getFolder(route.params.name);
	}
}
```

<!-- mail-view.resolve -->

```ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
	constructor(private mailService: MailService) {}

	resolve(route: ActivatedRouteSnapshot) {
		return this.mailService.getMessage(route.params.id);
	}
}
```

<!-- mail.folder.component -->

```ts
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	template:`<h2>{{ title| async }}</h2><mail-item
		*ngFor="let message of messages"
		[message]="message">
	</mail-item>`
})
export class MailFolderComponent {
	constructor(private route: ActivatedRoute) {
		data: Observable<{messages:Mail[]}> = this.route.data;

		// OR using pluck to get only messages we rename our data to messages
		messages: Observable<Mail[]> = this.route.data.pluck('messages');
		title: Observable<string> = this.route.params.pluck('name');
		constructor(private route: ActivatedRoute){}
	}
}
```

---

<!-- mail-view.component -->

```ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../../models/mail.interface';

@Component({
	selector: 'mail-view',
	styleUrls: ['mail-view.component.scss'],
	template: `
		<div class="mail-view">
			<h2>{{ (message | async).from }}</h2>
			<p>{{ (full | async).from }}</p>
		</div>
	`
})
export class MailViewComponent {
	message: Observable<Mail> = this.route.data.pluck('message');
	constructor(private route: ActivatedRoute) {}
}
```

---

<!-- mail-item.component -->

```ts
import { Component, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'mail-item',
	styleUrls: ['mail-item.component.scss'],
	template: `
		<a
			class="mail-item"
			[routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
		>
			routerLinkActive="active"
		</a>
	`
})
export class MailItemComponent {
	@Input() message: Mail;

	constructor(router: Router) {}

	navigateToMessage() {
		this.router.navigate([
			'',
			{ outlets: { pane: ['message', this.message.id] } }
		]);
	}
}
```

## route guard

TYPES OF ROUTE GUARD

### canload()

- function that gets called when navigating away from a route we are currently on
- routing guard to disable access to the route if not admin
- the service contains typical functions like checkPermissions() or isLoggedIn()
- in service, we can also store typical info like the particular 'user' for an AuthService
- we create an AuthModule
- import AuthModule into AppModule
- import { AuthService } and add as providers:[ AuthService ]
- we use our service in the AuthGuard to protect access to our module
- the AuthGuard is also imported into AuthModule
- the AuthGuard is registered in AuthModule's providers:[]

AUTH GUARD

- simple function bound to a routing definition
- this function gets called before transitioning to a route or transitioning away
- AuthGuard is an @Injectable and a class
- inject service into constructor of guard class
- depending on the type of guard, the guard class needs to implement a specific type of guard
- AuthGuard is imported into App.Module
- we add the AuthGuard to the ROUTES of app.module by adding canLoad:[AuthGuard]

- canLoad()
  - allows us to decide if current user is allowed to load our module, it is specific to lazy loading
  - import {CanLoad} from '@angular/router';
  - (the class) implements CanLoad
  - needs a canLoad() function, that gets called when the guard is bind to the routing definition
  - we bind guard by adding it to the routing configuration {path:'dashboard', canLoad:[AuthGuard], loadCHildren:''}
  - we can now use Auth.service and its methods to check if something is possible like if user is an admin

### canActivate()

- aims to check in our modules if we are allowed to access some particular routes
- adding it at the parent level of child routes' routing structure
- adding guard canActivate() at parent level to check access to route
- in mail.module we import the AuthModule - import {AuthModule} from '../auth/auth.module';
  - import {AuthGuard} from '../auth/auth.guard';
  - add AuthModule to imports:[AuthModule] - add canActivate:[] on the routing definition and it accepts an array of guards
- auth.guard.ts needs to import { CanActivate } from '@angular/router';
- export class AuthGuard implements CanActivate

### canActivateChild()

- protecting only the children, but the current path in the route is accessible
- mail.module.ts we put the canActivateChild:[AuthGuard], guard on the parent route to see if we can activate the children
- auth.guard.ts canActivateChild(){}

## canDeactivate()

- hooking in deactivate route guard to warn the user that they are leaving the route and may lose changes
- if canDeactivate() returns true, it means we can navigate away
- mail-view.component.ts
- we bind textArea's [value]="reply" to the reply property and (change) event to updateReply(\$event.target.value) which assigns the new value to 'reply' property
- mail-view.guard we want to add an Auth Guard that protects the route,
- the guard is specific for a particular component
- the guard needs to implement CanDeactivate<type> where type is a generic type of the component class that is deactivating <MailViewComponent>
- import {MailViewComponent} from './mail-view.component';
- import { CanDeactivate } from '@angular/router';
- the guard class needs canDeactivate()
- and now because we get access to the component via the function canDeactive(component:MailViewComponent)
- the MailViewComponent adds access to a property hasUnsavedChanges that defaults to false;
  - when updateReply() is called, hasUsavedChanges is set to true
  - when sendReply() is called hasUnsavedChanges is set to false again
  - the ngOnInit() resets the reply = '' and also resets hasUnsavedChanges = false; because angular doesnt destroy the component, it reuses it
- we add the MailViewGuard to the mail.module by import
- and add to the modules' providers:[ MailViewGuard], now we have access to the guard inside the component
- add to the routing definition for that path canDeactivate:[MailViewGuard]

  - mail-view.guard now has access to the properties of the Component class and we can test if(component.hasUnsavedChanges){ return window.confirm('leave?')}

<!-- app/auth.module -->

```ts
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
@NgModule({
	providers: [AuthService, AuthGuard]
})
export class AuthModule {}
```

<!-- app/auth.service -->

```ts
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
	user = { isAdmin: true };

	checkPermissions() {
		return Observable.of(this.user.isAdmin);
	}
	isLoggedIn() {
		return Observable.of(true);
	}
}
```

<!-- app.module -->

```ts
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

export const ROUTES: Routes = [
	{ path: 'dashboard', canLoad: [AuthGuard], loadChildren: 'etc' }
];
@NgModule({
	imports: [AuthModule]
})
export class AppModule {}
```

<!-- auth.guard -->

```ts
import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
	constructor(private authService: AuthService) {}
	/* implements CanLoad Guard */
	canLoad() {
		return this.authService.checkPermissions();
	}

	canActivate() {
		return this.authService.isLoggedIn();
	}

	canActivateChild() {
		return false;
	}
}
```

<!-- mail.module -->

```ts

import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailViewGuard } from './components/mail-view/mail-view.guard';

import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';

export const ROUTES: Routes = [
	{
		path: 'mail',
		component: MailAppComponent,
		canActivate:[AuthGuard],
		children:[
			{
				path:'folder/:name',
				component: MailFolderComponent,
				resolve:{
					messages: MailFolderResolve
				}
			},
			{
				path:'message/:id',
				component: MailViewComponent,
				outlet:'pane',
				canDeactivate:[MailViewGuard],
				resolve:{
					message: MailViewResolve
				}

			}
		]
	}
]

@NgModule({
	imports:[],
	declarations:[],
	providers:[ MailViewGuard],
	exports:[]
})
```

<!-- mail-view.component.ts -->

```ts
@Component({
	template: `
		<div class="mail-reply">
			<textarea
				(change)="updateReply($event.target.value)"
				placeholder="Type your reply..."
				[value]="reply"
			></textarea>
			<button type="button" (click)="sendReply()">Send</button>
		</div>
	`
})
export class MailViewComponent implements OnInit {
	reply = '';
	hasUnsavedChanges = false;
	message: Observable<Mail> = this.route.data.pluck('message');

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe(() => {
			this.reply = '';
			this.hasUnsavedChanges = false;
		});
	}

	updateReply(value: string) {
		this.reply = value;
		this.hasUnsavedChanges = true;
	}

	sendReply() {
		this.hasUnsavedChanges = false;
	}
}
```

<!-- mail-view.guard -->

```ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MailViewComponent } from './mail-view.component';

@Injectable()
export class MailViewGuard implements CanDeactivate {}
```

# Unit Testing

- karma.conf.json gets generated by angular cli
- testing is done using Karma and Jasmine
- package.json add @types/jasmine and @types/karma to devDependencies as well as karma related packages - module has an export which sets up the config
  - browsers:['Chrome'] property which tells where we gonna boot up testing
  - files:[] is list of files necessary to run unit tests
  - files:[] can also have a { pattern: \_\_dirname + '/\*_/_.spec.ts', watched:false} the pattern look for specific matches only
  - preprocessors:{'_.js' :['sourcemap'],'\*\*/_.spec.ts':['sourcemap', 'webpack']} says we using sourcemaps
  - reporters:['spec'], says we gonna have color for tests in terminal for pass or fail

## Structure of a Unit Test

- test files are name.spec.ts
- describe('name', ()=> {}) block
- describe blocks can wrap to indent
- inside the function we call it('description for test', ()=>{}); function
- each test is a it() function call
- we can import the Pipe
- inside the it() we can do expect().toBe() checks

THINGS WE CAN TEST

- pipes, pipes inside Component,
- shallow testing
- services with dependencies
- component methods
- component inputs outputs
- templates
- async providers
- no errors schema
- attribute directives

### SETUP / CONFIG

<!-- package.json -->

    "devDependencies":{
        "@types/jasmine":"2.5.46",
        "@types/karma":"0.13.34",
        "karma":"1.5.0",
        "karma-chrome-launcher": "2.0.0",
        "karma-jasmine":"1.1.0",
        "karma-sourcemap-loader":"0.3.7",
        "karma-spec-reporter":"0.0.30",
        "karma-webpack":"2.0.3"
    }

### karma configuration (karma.conf.js)

<!-- karma.conf.js -->

```ts
const webpack = require('webpack');

module.exports = config => {
	config.set({
		browsers: ['Chrome'],
		files: [
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/zone.js/dist/proxy.js',
			'node_modules/zone.js/dist/sync-test.js',
			'node_modules/zone.js/dist/async-test.js',
			'node_modules/zone.js/dist/jasmine-patch.js',
			'node_modules/zone.js/dist/long-stack-trace-zone.js',
			{ pattern: __dirname + '/**/*.spec.ts', watched: false }
		],
		frameworks: ['jasmine'],
		mime: { 'text/x-typescript': ['ts'] },
		preprocessors: {
			'*.js': ['sourcemap'],
			'**/*.spec.ts': ['sourcemap', 'webpack']
		},
		reporters: ['spec'],
		webpack: {}
	});
};
```

## ISOLATE tests NOT USING angular framework directly - unit test for a pipe

- inside the describe block we can create an instance of the FileSizePipe() and then use this instance in our tests
- expect(pipe.transform(123456789)).toBe('117.74MB');
- run with yarn test or npm test
- the transform method can take a second parameter, the extension

```ts
import {FileSizePipe} fromo './file-size.pipe';

describe('FileSizePipe', ()=>{
	const pipe = new FileSizePipe();

	it('should convert bytes to megabytes', ()=>{
		expect(pipe.transform(123456789)).toBe('117.74MB');
	});

	it('should override the extension when supplied', ()=>{
		expect(pipe.transform(123456789,'myExt')).toBe('117.74myExt');
	});
});
```

---

## template for testing with TestBed

<!-- template for testing with TestBed-->

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/*import the component to test */
import { StockCounterComponent } from './stock-counter.component';

// creating the testbed
TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('StockCounterComponent', () => {
	beforeEach(() => {
		Testbed.configureTestingModule({
			declarations: [StockCounterComponent]
		});
	});
});
```

---

## Shallow testing pipes

- testing within the angular and testing frame
- learning to instantiate the pipe inside a component testing that it works inside the component
- import { TestBed, ComponentFixture } from '@angular/core/testing';
- import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
- create the testbed TestBed.initTestEnvironment(BrowserDynamicTestingModule,platformBrowserDynamicTesting());
- inside the describe() create the component definition @Component({}) and the class with properties
- create references component, fixture, el
  - component references the class we just created
  - fixture is of type ComponentFixture<TestComponent>;
  - generic type TestComponent relates the TestComponent with the fixture
  - ComponentFixture holds info about mounted component, also use it access debug element and native element
  - let el:HTMLElement;
- beforeEach(()=>{}); will be called before each it() test in describe() block
- so for further tests, we configure our testing module to dynamically create our Component with our FilesizePipe and we use these variables to access the things we are binding them to inside the beforeEach()
- need to setup testbed TestBed.configureTestingModule({ declarations:[ FileSizePipe, TestComponent ]}); which allows us to dynamically create a very small module to test a few things against
- then reasign variables
  - fixture = TestBed.createComponent(TestComponent);
  - component = fixture.componentInstance;
  - el = fixture.nativeElement;
- use fixture.detectChanges(); to detect changes
- have access to .toContain()

```ts
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// creating the testbed
TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
	describe('shallow FileSizePipe test', () => {
		@Component({
			template: `
				Size:{{ size | filesize: suffix }}
			`
		})
		class TestComponent {
			suffix;
			size: 123456789;
		}

		let component: TestComponent;
		let fixture: ComponentFixture<TestComponent>;
		let el: HTMLElement;

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [FileSizePipe, TestComponent]
			});

			fixture = TestBed.createComponent(TestComponent);
			component = fixture.componentInstance;
			el = fixture.nativeElement;
		});

		it('should convert bytes to megabytes', () => {
			fixture.detectChanges();
			expect(el.textContent).toContain('Size: 117.74MB');
			component.size = 1029281;
			fixture.detectChanges();
			expect(el.textContent).toContain('Size: 0.98MB');
		});

		it('should override the extension when supplied', () => {
			component.suffix = 'myExt';
			fixture.detectChanges();
			expect(el.textContent).toContain('Size: 117.74myExt');
		});
	});

	describe('isolate FileSizePipe test', () => {});
});
```

## Testing services with dependencies

- testing a service with a dependency (here dependency to http)
- do the initial TestBed.initTestEnvironment() only need to do this once for project
- code as per below to test service...
- do a beforeEach() and TestBed.configureTestingModule({ providers: [ StockInventoryService ] });
- and we pass our service in the providers:[]
- we dont want to inject the real http, we create a mock class that imitates the http with get() method that returns an ObservableResponse
- want to inject StockInventoryService with MockHttp, using token of Http but instead use our class useClass:MockHttp

<!-- stock-inventory.service.spec.ts -->

```ts
import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import {StockInventoryService} from './stock-inventory.service';

TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

function createResponse(body){
	return Observable.of(
		new Response(new ResponseOptions({ body: JSON.stringify(body) }));
	);
}

class MockHttp{
	get(){
		return createResponse([]);
	}
}

const cartItems = [ {product_id:1, quantity:10}, {product_id:2, quantity:5} ];
const productItems = [{id:1, price:10, name:'Test'}, {id:2, price:100, name:'Another Test'} ];

describe('StockInventoryService', ()=>{

	let service: StockInventoryService;
	let http: Http;

	beforeEach(()=>{
		const bed = TestBed.configureTestingModule({
			providers:[
				StockInventoryService,
				{ provide: Http, useClass:MockHttp }
			]
		});

		http = bed.get(Http);
		service = bed.get(StockInventoryService);
	});

	it('should get cart items', ()=>{
		spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));

		service.getCartItems()
		.subscribe((result) => {
			console.log(result);
			expect(result.length).toBe(2);
			expect(result).toEqual(cartItems);
		});
	});

	it('should get product items', ()=>{
		spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

		service.getProducts()
		.subscribe((result)=>{
			expect(result.length).toBe(2);
			expect(result).toEqual(productItems);
		});
	});
}

```

## testing component methods

- testing if methods go above or below our max and min properties checks
- we define component, and fixture inside the describe block
- we override them in the beforeEach()
- to reference the component in the testbed we pass the Component into TestBed.createComponent()
- we access the component with refence to the fixture by fixture.componentInstance;
- set a default value in the beforeEach() component.value = 0;
- our it() test testing the methods of the component
- the test passes or fails if all expect() inside it() passes

## testing component @Input /@Output

- because we have access to the component, we have access to its class properties
- in the example, there is @Input min, @Input max, @Input step
- @Output changed is an event emitter
- and we can acess these via the component

### @Input test

- the test sets initial values on the component.step, and component.max, and then .increment() and then we expect() value to equal the max

### @Output test

- `@Output() changed = new EventEmitter<number>();` is binded to an instance of EventEmitter, it has access to the 'emit' property
- `increment(){ this.changed.emit(this.value); }`
- for @Output, we subscribe to the component inside the body of our it() function
- we spy on the component.changed @Output() property and the method we want to spy on is 'emit'
- spyOn(component.changed, 'emit')
- .and.callThrough(); makes sure this is being called
- expecting emit to have been called with value of 100 expect(component.changed.emit).toHaveBeenCalledWith(100);
- checking the emit value and because our step is 100, the test should pass

<!-- template for testing with TestBed-->

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

/*import the component to test */
import { StockCounterComponent } from './stock-counter.component';

// creating the testbed
TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('StockCounterComponent', ()=> {

	let component : StockCounterComponent;
	let fixture : ComponentFixture<StockCounterComponent>;
	component.value = 0;

	it('should increment correctly', ()=>{
		component.increment();
		expect(component.value).toBe(1);
	}

	if('should decrement correctly', ()=>{
		component.increment();
		expect(component.value).toBe(1);
		component.decrement();
		expect(component.value).toBe(0);
	}

	if('should not decrement below the minimum value', ()=>{
		component.increment();
		expect(component.value).toBe(1);
		component.decrement();
		expect(component.value).toBe(0);
		component.decrement();
		expect(component.value).toBe(0);
	}

	if('should not increment over the maximum value', ()=>{
		for(let i =0; i<200; i++){
			component.increment();
		}
		expect(component.value).toBe(100);
	}

	// testing @Input
	it('should not increment over the maximum value', ()=>{
		component.step = 20;
		component.max = 20;
		component.increment();
		component.increment();
		expect(component.value).toBe(20);
	});

	//testing @Output
	it('should call the output on a value change', ()=>{
		spyOn(component.changed, 'emit').and.callThrough();
		component.step = 100;
		component.increment();
		expect(component.changed.emit).toHaveBeenCalledWith(100);
	});

	beforeEach(()=>{
		Testbed.configureTestingModule({
			declarations:[StockCounterComponent]
		});

		fixture = TestBed.createComponent(StockCounterComponent);
		component = fixture.componentInstance;

	});
});

```

## testing (user interaction) in component template

- button + increments value, button - decrements value
- query DOM elements and trigger events
- import { DebugElement } from '@angular/core';
- create new variable of type DebugElement
- DebugElement has query() for querying nodes and triggerEventHandler()
- el = fixture.debugElement; which gives us access to methods of DebugElement like query()
- import {By } from '@angular/platform-browser'; the By class can be used to match particular elements
- css() matches elements based on css selector
- we are querying element in the template and then .triggerEventHandler('click', null)
- fixture.detectChanges();
- expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');

## testing when key is pressed

- testing interaction via keyboard events
- can test this directly so need to create an event Object
- assigning it a code of 'ArrowUp'
- then we reference our div which is listening to that event and we tell it to trigger a 'keydown' event and we pass it the event object basically says we pressing down on ArrowUp
- then we calling fixture.detectChanges()
- expecting that component value to be 1

<!-- stock-counter.component.spec.ts -->

```ts
import { DebugElement } from '@angular/core';

describe('StockCounterComponent', () => {
	let component: StockCounterComponent;
	let fixture: ComponentFixture<StockCounterComponent>;
	let el: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [StockCounterComponent]
		});
		fixture = TestBed.createComponent(StockCounterComponent);
		component = fixture.componentInstance;
		el = fixture.debugElement;

		// setting initial value
		component.value = 0;
	});

	it('should increment when the + button is clicked', () => {
		el.query(By.css('button:first-child')).triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(component.value).toBe(1);
		expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
	});

	it('Should increment the value when the up arrow is pressed', () => {
		const event = new Event('KeyboardEvent') as any;
		event.code = 'ArrowUp';
		el.query(By.css('.stock-counter > div > div')).triggerEventHandler(
			'keydown',
			event
		);
		fixture.detectChanges();
		expect(component.value).toBe(1);
	});
});
```

## testing components async providers

- learn to test component with asynchronous provider (service)
- import {ReactiveFormsModule} from '@angular/forms';
- spec file starts with default template for testing
- import the debug element
- import all components classes that will be used in our template and add to declarations:[]
- import the service and add to providers:[{provide: StockInventoryService, useClass:MockInventoryService}]
  which makes StockInventoryService going to use the class of MockInventoryService
- create the MockStockInventoryService class which mimics the StockInventoryService class
- let service:StockInventoryService;

* spyOn(service, 'getProducts').and.callThrough(); spyOn(service, 'getCartItems').and.callThrough(); makes sure we are calling these functions
* component.ngOnInit();
* expect(service.getProducts).toHaveBeenCalled();
* expect(service.getCartItems).toHaveBeenCalled();
* testing if the map has the data, and if so, if the object it contains is the same as what is returned from Observable
* testing if the component product value gets assigned, it('should store the products response')
  the test should check if component.products equals a value and if it does, then its the same and the test is a pass
* it('should create a stock item for each cart item') checks if addStock function on Component is being called with correct values
  {product_id:1, quantity:10 }, {product_id:2, quantity:5 }

<!-- stock-inventory.component.spec.ts -->

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { DebugElement } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import {StockInventoryComponent} from '';
import {StockBranchComponent} from '';
import {StockCounterComponent} from '';
import {StockProductsComponent} from '';
import {StockSelectorComponent} from '';
import {StockInventoryService} from '';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/observable/of';

// creating the testbed
TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

class	MockStockInventoryService{
	getProducts(){
		return Observable.of([{id:1, price:10, name:'test'}, {id:2, price:100, name:'another test'}]);
	}
	getCartItems(){
		return Observable.of([{product_id:1, quantity:10 }, {product_id:2, quantity:5 }]);
	}
}

describe('StockCounterComponent', () => {
	beforeEach(() => {
		Testbed.configureTestingModule({
			imports: [ReactiveFormsModule],
			declarations: [
				StockInventoryComponent,
				StockBranchComponent,
				StockCounterComponent,
				StockProductsComponent,
				StockSelectorComponent
			],
			providers:[{provide:	StockInventoryService, useClass:MockInventoryService}]
		});
	});

	fixture = TestBed.createComponent(StockInventoryComponent);
	component = fixture.componentInstance;
	el = fixture.debugComponent;
	service = el.injector.get(StockInventoryService);

	it('should get cart items and products on init', ()=>{
		spyOn(service, 'getProducts').and.callThrough();
		spyOn(service, 'getCartItems').and.callThrough();
		component.ngOnInit();
		expect(service.getProducts).toHaveBeenCalled();
		expect(service.getCartItems).toHaveBeenCalled();
	});

	it('should create a product map from the service response', ()=>{
		component.ngOnInit();
		expect(component.productsMap.get(1)).toEqual({id:1, price: 10, name:'Test'});
		expect(component.productsMap.get(2)).toEqual({id:2, price: 100, name:'Another test'});
	});

	it('should store the products response', ()=>{
		component.ngOnInit();
		expect(component.products).toEqual([{id:1, price: 10, name:'Test'}, {id:2, price:100, name:'Another test'}]);
	});

	it('should create a stock item for each cart item', ()=>{
		spyOn(component, 'addStock');
		component.ngOninit();
		expect(component.addStock).toHaveBeenCalledWith({product_id:1, quantity:10 });
		expect(component.addStock).toHaveBeenCalledWith({product_id:2, quantity:5 });
	}

});
```

## no errors schema

- testing a single component that may have child components,
- not including all the components by not importing AND by not adding to declarations
- import {NO_ERRORS_SCHEMA} from '@angular/core';
- on the module, schemas:[NO_ERROS_SCHEMA]

## testing attribute directives

- creating an event
- and getting the value and making sure the directive is working properly
- unit test example format credit card number with spaces between
- example credit-card.directive.ts
- bind directive 'credit-card' to input
- on the TestComponent, template, we bind to value `<input type="text" [value]="value" credit-card>`

<!-- credit-card.directive.spec.ts -->

```ts
import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { CreditCardDirective } from './credit-card.directive';

// creating the testbed
TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

@Component({
	template: `
		<input type="text" [value]="value" credit-card />
	`
})
class TestComponent {
	value = 123456;
}

describe('CreditCardDirective', () => {
	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let el: DebugElement;

	beforeEach(() => {
		Testbed.configureTestingModule({
			declarations: [CreditCardDirective, TestComponent]
		});

		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
		el = fixture.debugElement;
	});

	it('should format the string with spaces', () => {
		const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
		directive.value = '475123';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toBe('4751 23');
		directive.value = '4751239812019201';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toBe('4751 2398 1201 9201');
	});

	it('should have a max length of 16 characters', () => {
		directive.value = '47512398120192013453534436666666';
		directive.dispatchEvent(new Event('input'));
		expect(directive.value).toBe('4751 2398 1201 9201');
	});
});
```

# Dependency Injection & Zones

### Providers useValue

- dependency injection syntax
- injecting value into the service from a central point (the module)
- helps api's be controlled from single place
- each component currently has its own instance of service in the constructor
- change to: module has providers:[{ provide:'api', useValue:'/api/pizzas'}] which allows us to inject into service

- import {Injectable, Inject} from '@angular/core';
- use the label we gave it in the module, `constructor(private http:Http, @Inject('api') private api:string){}`
- use as normal this.http.get(this.api).map()

<!-- app.module.ts -->

```ts
providers: [{ provide: 'api', useValue: '/api/pizzas' }];
```

<!-- food.service -->

```ts
constructor(private http:Http, @Inject('api') private api:string){}

getFood():Observable<any[]>{
	return this.http.get(this.api).map(response=> response.json());
}

```

## injection tokens (replaces DEPRECATED OpaqueToken which did not have type)

- my understanding is it is a centralized file to declare constants
- helps when we want to use multiple {provide:'',} with different useValues useValue:'' but this causes conflict if provide has same name (naming conflict),
- providers: [
  { provide: 'api', useValue: '/api/pizzas' },
  { provide: 'api', useValue: '/api/pizzassssss' } //only overwrites as we have naming conflict
  ];
- resolve with using injection Token (CONST ALIASes)
- create a token file (eg. token.ts)
- import {InjectionToken} from '@angular/core';
- injection token allows us to pass a string into the instance of the injection token,
- we need to specify the type of the injection token here it is a (string)
- `export const API_TOKEN = new InjectionToken<string>('api');`
- in the module, we import the {API_TOKEN} from './token';
  -we replace hardcoded API string in module with token string providers:[{ provide:API_TOKEN, useValue:'/api/pizzas' }]
- then we change our dependency in the service

<!-- app.module.ts -->

```ts
import { API_TOKEN } from './token';

providers: [{ provide: API_TOKEN, useValue: '/api/pizzas' }];
```

<!-- fix -->
<!-- token.ts -->

```ts
import { InjectionToken } from '@angular/core';

export const API_TOKEN = new InjectionToken<string>('api');
```

<!-- food.service -->

```ts
import {API_TOKEN} from './token';
@Inject(API_TOKEN) private api:String
```

---

## providers useClass

```ts
providers: [{ provide: FoodService, useClass: NewFoodService }];
```

## providers useFactory

- factory object helps us create numerous objects/single object from
- dynamically making an instance of an object instead of using a singleton like the Service class directly
- use useFactory:()=>{ return new FoodService(); } calls a function and it returns an new instance of the Class
- we can use a factory using providers:[{ provide:FoodService, useFactory:()=>{ return new FoodService(); } }]

- we want to dynamically pass a particular url here.. API_TOKEN ... into the contructor of the FoodService Class
  so we change the constructor by removing the @Inject(API_TOKEN) so we can pass this in from outside the class
- deps:[], is used when a factory is dependent of other dependencies, and we need to pass in the dependency to the factory...

- here we need Http, reasign to an alias from the anonymous function here 'http'
- but we need to let angular statically analyze the code (ahead of time) so we need to make the code that useFactory calls into methods
- note how the factory still receives arguments, even tho it is set in deps:[]
- example: `provide: FoodService, useFactory: DrinkFactory, deps: [Http]`

<!-- drink-viewer.component -->

```ts
export function DrinkFactory(http){
	return new FoodService(http, '/api/drinks');
}
@Component({
	providers: [
		{
			provide: FoodService,
			useFactory: DrinkFactory,
			deps: [Http]
		}
	],
	template:``
})
```

<!-- pizza-viewer.component -->

```ts
export PizzaFactory(http){
	return new FoodService(http, '/api/pizza');
}

@Component({
	providers: [
		{
			provide: FoodService,
			useFactory: PizzaFactory,
			deps: [Http]
		}
	],
	template:``
})
```

<!-- side-viewer.component -->

```ts
export function SideFactory(http){
	return new FoodService(http, '/api/side');
}
@Component({
	providers: [
		{
			provide: FoodService,
			useFactory: SideFactory,
			deps: [Http]
		}
	],
	template:``
})
```

<!-- food.service.ts -->

```ts
import { API_TOKEN } from './token';

// constructor(private http:Http, @Inject(API_TOKEN) private api:string){}
constructor(private http:Http, private api:string){}

getFood():Observable<any[]>{
	return this.http.get(this.api).map(response=> response.json());
}
```

---

## providers useExisting

- so for demonstration purposes, food.service now has multiple get() functions getSides(), getPizzas(), getDrinks(),
- we create an abstract class (no implementation just declaration) eg. `export abstract class DrinkService{}`
- and this class lists the method we can call getDrinks() and it returns what the method in the service returns... an Observable<Drink[]>
- in the @Component({}) using 'useExisting' to restrict access
- providers: [FoodService, { provide: DrinkService, useExisting: FoodService }];
- provide the DrinkService (which is our abstract class with limited methods),
- and useExisting: FoodService class
- in the DrinkViewerComponent, we change the feed into the constructor() from type FoodService to DrinkService
- now in the ngOnInit(), typing this.foodService. will limit the methods available to only getDrinks() as was defined in the abstract class
- when using useExisting if the services are part of module, we wouldnt create new instances everytime we create a new provider

<!-- drink-viewer -->

```ts
export abstract class DrinkService {
	getDrinks: () => Observable<Drink[]>;
}
@Component({
	selector: 'drink-viewer',
	providers: [FoodService, { provide: DrinkService, useExisting: FoodService }]
})
export class DrinkViewerComponent implements OnInit {
	items$: Observable<Drink[]>;

	// constructor(private foodService: FoodService) {}
	constructor(private foodService: DrinkService) {}

	ngOnInit() {
		this.items$ = this.foodService.getDrinks();
	}
}
```

<!-- food.service -->

```ts
getSides():Observable<any[]>{
	return this.http.get('/api/sides').map(response=> response.json());
}

getPizzas():Observable<any[]>{
	return this.http.get('/api/pizzas').map(response=> response.json());
}

getDrinks():Observable<any[]>{
	return this.http.get('/api/drinks').map(response=> response.json());
}


```

## Configurable ngModules

- say you want to have some data that you want to use in a particular module, we can define this in @NgModule({})
- in app.module, @NgModule configuring Modules
- in the food-store.module, REMOVE useValue:{ storeId:10292, storeToken: 'eca9843583758743'}
- we use the .forRoot({})- making a module a configurable module, we have to move the data to app.module
- in app.module, imports:[ FoodStoreModule.forRoot({ storeId 10292, storeToken: 'eca9843583758743' })]
- inside the FoodStoreModule, we say we want to get the configuration by creating a static property called forRoot() method that receives config:FoodStoreConfig (see iterface in config.ts) and it returns type ModuleWithProviders
- it forRoot needs to return an object with { ngModule: FoodStoreModule, providers: [FOOD_PROVIDERS, { provide: FOOD_STORE_CONFIG, useValue:}];} and then `providers:[]` we move from the @NgModule({ providers:}) definition to the forRoot() method
  its useValue is passed in from the forRoot(config:FoodStoreConfig) method
    <!-- config.ts -->

```ts
import { InjectionToken } from '@angular/core';

export interface FoodStoreConfig {
	storeId: number;
	storeToken: string;
}
export const FOOD_STORE_CONFIG = new InjectionToken<FoodStoreConfig>(
	'FOOD_STORE_CONFIG'
);
```

<!-- food-store.module -->

```ts
@NgModule({
	// providers: [FOOD_PROVIDERS, { provide: FOOD_STORE_CONFIG, useValue:}];
})
export class FoodStoreModule {
	static forRoot(config: FoodStoreConfig): ModuleWithProviders {
		return {
			ngModule: FoodStoreModule,
			providers: [
				FOOD_PROVIDERS,
				{ provide: FOOD_STORE_CONFIG, useValue: config }
			]
		};
	}
}
```

<!-- app.module -->

```ts
imports: [
	FoodStoreModule.forRoot({ storeId: 10292, storeToken: 'eca9843583758743' })
];
```

---

## Zone / angular's NgZone

- not a comonly used feature,
- execution context that angular can keep an eye on the code that we use
- also keeps track of async code / async events
- angular runs your code inside a zone, to know when something has changed
- DoCheck runs everytime a change detection has been run
- import { NgZone}
- to use a zone to demonstrate what it can do, constructor(private zone:NgZone)
- most common feature is runOutsideAngular(), allows us to leave angulars zone, do the logic and return using zone.run();
- we need to setTimeout() to schedule something from inside the function

```ts
import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

export class AppComponent implements OnInit, DoCheck {
	counter = 0;
	ngOnInit() {
		this.zone.runOutsideAngular(() => {
			for (let i = 0; i < 100; i++) {
				setTimeout(() => this.counter++);
			}
			this.zone.run(() => {
				setTimeout(() => (this.counter = this.counter), 1000);
			});
		});
	}

	ngDoCheck() {
		console.log('change detection has been run');
	}
}
```

## Statemanagement (NGRX)

- Redux / ngrx /store (uses Redux pattern)
- ngrx is observable based
- building our own store

### Benefits of using a store

- state is only changed in a controlled way
- component state is derived from the store
- immutable objects are predictable and no need to have change detection
- avoids data synchronisation problems
- store allows us to server-side render
- without a store - components or services can hold or maintain state
- with a store - we can inject store into container component/smart component
- we can ask for particular properties from the store
- state can be shared between components because state is stored in our store
- a component changing data -> goes @output to parent component, then can go to the service,
- the service updates the store
- once store is updated the components are notified

## Our Observable store

- create a store file (store.ts) - it is a es6 class
- store contain the data for entire application as one big object
- store is added to providers:[] in module
- we will use a set() to save to the store, and retrieve we will use a select()
  the store has a const sate:State = {} property
- properties in the store reside in the state
- to initialize State we have a behavioral subject
- in the store import { BehaviorSubject } from 'rxjs/BehaviorSubject';
- a BehaviorSubject takes/has an initial state and we say its of type State
- with a normal Subject class, it DOESNOT take an initial state
- BehaviorSubject will also pass the last value to new components that subscribers to our store
- .next() how we pass a value to an observable
- a second property called 'store' = this.subject.asObservable().distinctUntilChanged();
- .distinctUntilChanged() needs import 'rxjs/add/operator/distinctUntilChanged'; makes sure only updates with different value get called, repeats of the same value is not called
- the .set() method takes 2 properties, name and state, name is the string ref associated with the state which is the value we want to save
- set() is called like so... `store.set('todos', [{},{}])`
- this.suject.next({}) is how we save to the store
- to access this data we saved, store.select<Todo[]>('todos') //says going to return an array of todos..it is goin to return an observable, because we want to subscribe to things in our components
- we get properties from the store using select(name:string) returns this.store.pluck(name);
- pluck() returns an observable based on the object property and we can retrieve just the one we asking for..
- import 'rxjs/add/operator/pluck';
- import 'rxjs/add/operator/distinctUntilChanged';

<!-- app.module.ts -->

```ts
import { Store } from './store';
@NgModule({
	providers: [Store]
})
export class AppModule {}
```

<!-- state.ts -->

```ts
export interface State {
	playlist: any[];
}
```

<!-- store.ts -->
<!-- store.set('todos', [{},{}]) -->
<!-- store.select('todos') -->

```ts
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State } from './state';

const state: State = {
	playlist: undefined
};

export class Store {
	private subject = new BehaviorSubject<State>(state);
	private store = this.subject.asObservable().distinctUntilChanged();

	get value() {
		return this.subject.value;
	}

	// getting from store
	select<T>(name: string): Observable<T> {
		return this.store.pluck(name);
	}

	// store.set('todos', [{},{}])
	set(name: String, state: any) {
		this.subject.next({
			...this.value,
			[name]: state
		});
	}
}
```

<!-- app.component -->

```ts
import { Component } from '@angular/core';
import { Store } from './store';

@Component({
	selector: 'app-root',
	template: `
		<div>
			<div *ngFor="let todo of todos$ | async">
				{{ todo.name }}
			</div>
		</div>
	`
})
export class AppComponent {
	todos$ = this.store.select<any[]>('todos');

	constructor(private store: Store) {
		console.log(this.store);
		this.store.set('todos', [
			{ id: 1, name: 'eat dinner' },
			{ id: 2, name: 'eat breakfast' }
		]);
	}
}
```

## Angular advanced RXJS containers setup

- setting up a module songs.module
- including container components
- components take in the store in the constructor and import Store

- app/app.module.ts
- app/app.component.ts
- app/songs/songs.module.ts
- app/songs/components/songs-favorites/songs-favorites.components.ts
- app/songs/components/songs-listened/songs-listened.components.ts
- app/songs/components/songs-playlist/songs-playlist.components.ts

## Todd Motto - Angular Pro - 84 - store services.mp4

- creating the service
- app/songs/services/songs.service.ts
- inject http to service constructor
- inject store to constructor
- getPlayList\$ = this.http.get('/api/playlist'); calls json
- the do operator takes the result that gets passed from .map() and uses it as its parameter, here 'next' .do(next)
  so we use the store at this point and we want to save this data 'next' to the property 'playlist'
- in the components, import songs service
- the constructor receives the store and service
- ngOnInit(), `this.playlist$ = this.store.select('playlist');`
- define at class level `playlist$:Observable<any[]>`
- import {Observable } from 'rxjs/Observable';
- `<div class="songs">{{ playlist$ | async }}</div>` | async auto subscribes and auto unsubscribes to observable
- ngOnInit(), this.subscription = this.songsService.getPlaylist\$.subscribe(); calls service, which adds the playlist to the store, then all the other playlists can access the store
- all other components select 'playlist' directly from store `this.favorites$ = this.store.select('playlist');`

## Composing streams

- taking data output from store and filter the result
- eg. songs listened and song favorites in db have boolean values and then we filter
- .filter(Boolean) to check that data is in the playlist so only run the function if data exists from http call
- map results and filter the array by selecting track.favourite
- add this.favourites\$ to SongsFavoritesComponent
- add this.listened\$ to SongListenedComponent

```
	import 'rxjs/add/operator/map';
	import 'rxjs/add/operator/filter';

	ngOnInit(){
		this.favourites$ = this.store.select('playlist')
			.filter(Boolean)
			.map(playlist => playlist.filter(track => track.favourite));
	}
```

## stateless component / presentational component with NGRX

- songs-favorite.components.ts replacing <div \*ngFor="let item of listened\$ | async"> {{item.artist}}{{item.track}}</div> with songs-list.component
- songs.module.ts import SongsListComponent in declarations.
- edit songs-playlist.component, songs-favorite.component, songs-listened.component by replacing above snippet with component code
- `<songs-list [list]="playlist$ | async"></songs-list>`
- in songs-list.component import {Input} , @Input() list:Songs[];
- import { Song} from 'service'
- in service, create the Song interface, update getPlaylist%:Observable<Song[]>
- using classes to with .active `<div class="songs-list__favourite" [class.active]="item.favourite"></div>`

## Todd Motto - Angular Pro - 87 - outputs to service.mp4 (using store)

- hooking up click events
- passing back to service to update database
- update store
- which updates components

- add index as i; to the `*ngFor`,
- add (click) event to favourite and listened icons (click)="toggleItem(i, 'favourite')", (click)="toggleItem(i, 'listened')"
- in songs-list.component, add the toggleItem()
- import {EventEmitter, Output} from '@angular/core';
- inside we emit this.toggle.emit({}); where `@Output() toggle = new EventEmitter<any>();`
- we emit a property called the 'track' (track is the item in the list array) which contains an object, we use the object spread
  and ammend with `track:{...track, [prop]: !track['prop']}`
- SongsPlaylistComponent listens to the (toggle) event and calls `(toggle)="onToggle($event)"` function, which calls songs.service.ts toggle(event:any)
  this.songsService.toggle(event);

## Todd Motto - Angular Pro - 88 - api request store.mp4

- in service, we update the toggle(event:any) and the service communicates back to the api
- we only update the individual track we want to update
- this.http.put(`/api/playlist/${event.track.id}`, event.track).map(res=>res.json()).subscribe((track:Song) =>{ console.log(track); });
- we create a property value = that we assign to the store.value.playlist,
- playlist = value.map(song:Song), if the event.track.id === what is in the store,
  then we update the store with the track in the event emmitted return {...song, ...event.track}
- we end up with an array 'playlist' with all the correct data inside
- then we update the store with the updated playlist this.store.set('playlist', playlist)

<!-- db.json -->

```json
{
	"playlist": [
		{
			"id": 1,
			"artist": "Oasis",
			"track": "Somebody",
			"listened": false,
			"favourite": true
		}
	]
}
```

<!-- app/songs/services/songs.service.ts -->

```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '../../store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

export interface Song {
	id: number;
	name: string;
	listened: boolean;
	favourite: boolean;
}

@Injectable()
export class SongsService {
	getPlayList$: Observable<Song[]> = this.http
		.get('/api/playlist')
		.map(res => res.json())
		.do(next => this.store.set('playlist', next));

	toggle(event: any) {
		console.log(event);
		this.http
			.put(`/api/playlist/${event.track.id}`, event.track)
			.map(res => res.json())
			.subscribe((track: Song) => {
				console.log(track);
				const value = this.store.value.playlist;
				const playlist = value.map((song: Song) => {
					if (event.track.id === song.id) {
						return { ...song, ...event.track };
					} else {
						return song;
					}
				});

				this.store.set('playlist', playlist);
			});
	}

	constructor(private http: Http, private store: Store) {}
}
```

<!-- app/songs/songs.module -->

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavouritesComponent } from './components/songs-favorites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-favorites/songs-playlist.component';

import { SongsService } from './services/songs.service';

@NgModule({
	imports: [CommonModule, HttpModule],
	declarations: [
		SongsFavouritesComponent,
		SongsListenedComponent,
		SongsPlaylistComponent
	],
	exports: [
		SongsFavouritesComponent,
		SongsListenedComponent,
		SongsPlaylistComponent
	],
	providers: [SongsService]
})
export class SongsModule {}
```

<!-- app/songs/components/songs-list/songs-list.component -->

```ts
import { Component } from '@angular/core';
@Component({
	selector: 'songs-list',
	styleUrls: [],
	template: `
		<div class="songs-list">
			<h3><ng-content></ng-content></h3>
			<ul>
				<li *ngFor="let item of list; index as i;">
					<p>{{ item.artist }}</p>
					<span>{{ item.track }}</span>
					<div
						class="songs-list__favourite"
						(click)="toggleItem(i, 'favourite')"
						[class.active]="item.favourite"
					></div>
					<div
						class="songs-list__listened"
						(click)="toggleItem(i, 'listened')
						[class.active]="item.listened"
					></div>
				</li>
			</ul>
		</div>
	`
})
export class SongsListComponent {
	@Input() list: Song[];

	toggleItem(index: number, prop: string) {
		const track = this.list[index];
		this.toggle.emit({
			track: {..track, [prop]: !track[prop]}
		});
	}
}
```

<!-- app/app.module -->

```ts
import { SongsModule } from './songs/songs.module';

imports: [SongsModule];
```

<!-- app.component -->

```ts
import {Component} from '@angular/core';
@Component({
	selector:'app-root',
	template:`<div>
		<songs-playlist></songs-playlist>
		<songs-listened></songs-listened>
		<songs-favorites></songs-favorites>
	</div>`

})
```

<!-- app/songs/components/songs-favorites/songs-favorites.components.ts -->

```ts
import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/';
import { Observable } from 'rxjs/Observable';
import { SongsService } from '../../services/songs.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'songs-favourites',
	template: `
		<div class="songs">
			<songs-list [list]="favourites$ | async" (toggle)="onToggle($event)"
				>favourites</songs-list
			>
		</div>
	`
})
export class SongsFavoritesComponent implements OnInit {
	favourites$: Observable<any[]>;

	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.favourites$ = this.store
			.select('playlist')
			.filter(Boolean)
			.map(playlist => playlist.filter(track => track.favourite));
	}

	onToggle(event) {
		this.songService.toggle(event);
	}
}
```

<!-- app/songs/components/songs-listened/songs-listened.components.ts -->

```ts
import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/';
import { Observable } from 'rxjs/Observable';
import { SongsService } from '../../services/songs.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'songs-listened',
	template: `
		<div class="songs">
			<songs-list [list]="listened$ | async" (toggle)="onToggle($event)"
				>played</songs-list
			>
		</div>
	`
})
export class SongsListenedComponent implements OnInit {
	listened$: Observable<any[]>;

	constructor(private store: Store, private songsService: SongsService) {}

	ngOnInit() {
		this.listened$ = this.store
			.select('playlist')
			.filter(Boolean)
			.map(playlist => playlist.filter(track => track.listened));
	}

	onToggle(event) {
		this.songService.toggle(event);
	}
}
```

<!-- app/songs/components/songs-plalist/songs-playlist.components.ts -->

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'songs-playlist',
	template: `
		<div class="songs">
			<songs-list [list]="playlist$ | async" (toggle)="onToggle($event)"
				>playlist</songs-list
			>
		</div>
	`
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
	playlist$: Observable<any[]>;
	subscription: Subscription;

	constructor(private store: Store, private songsService: SongsService) {}
	ngOnInit() {
		this.playlist$ = this.store.select('playlist');
		this.subscription = this.songsService.getPlaylist$.subscribe();
	}

	onToggle(event) {
		this.songsService.toggle(event);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
```
