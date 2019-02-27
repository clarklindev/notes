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
	@ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

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
- give div a template ref `<div #entry></div>`

<!-- app.component.ts -->

```ts
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
	template: `
		<div #entry></div>
	`
})
export class AppComponent {}
```
