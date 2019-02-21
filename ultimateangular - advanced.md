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
