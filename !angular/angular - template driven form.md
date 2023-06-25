Angular forms do not have action="post"

# Template driven form

## Creating the form

appModule.ts

import FormsModule

```
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:[FormsModule]
})
```

### Form Control

- include ngModel on the `<input>` to tell angular about the form control
- give a 'name' attribute and value  
  `<input ngModel name="username">`

```
<form>
  <label for="username">Username</label>
  <input
    ngModel
    type="string"
    id="username"
    class="form-control"
    name="username">
</form>
```

---

## Submitting the form

- include button of type='submit'
- all regular buttons type='button'

```
<button type="submit"></button>
```

triggers events, and angular takes advantage of this...

- ngSubmit is fired when submit button is clicked
- giving form reference using #
- set the local reference to 'ngForm'
- gives us access to a NgForm object with 'value' property
- can access name-property/value pairs via value object

app.component.html

```
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
```

app.component.ts

```
import { NgForm } from '@angular/forms';

export class AppComponent{

  onSubmit(form:NgForm){
    const value = form.value;

    //access form username
    = value.username

  }

}
```

---

## Form control properties

- dirty - form has been interacted with and value changed
- disabled/enabled
- invalid/valid
- touched - have we clicked something

## access form via '@ViewChild' (optional)

- allows access via local reference without passing in form to onSubmit()

```
import { ViewChild } from '@angular/core';

app.component.ts
export class AppComponent{
  @ViewChild('f') signupForm:NgForm;  //'f' is the ref from html

  onSubmit(){
    console.log(this.signupForm);
  }
}
```

---

## allow clicking on an item in the list

- use the index of \*ngFor,
- \*ngFor="let ingredient of ingredients; let i = index"
- pass index into function to identify which item to edit

.html

```
<ul class="list-group">
  <a class="list-group-item"
    style=""
    *ngFor="let ingredient of ingredients; let i = index" (click)="onEditItem(i)"
  >

  </a>
</ul>
```

shopping-list.component.ts

- shopping-list.component receives service in constructor
- onEditItem(index) is function called by clicking link
- service calls next(index) to notify change

```
export class ShoppingListComponent implements Oninit, OnDestroy{
  ingredients:Ingredient[];
  private subscription:Subscription;

  constructor(private slService:ShoppingListService){}

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
}
```

shopping-list.service.ts

- add a subject in shopping-list.service

```
import { Subject} from 'rxjs';

export class ShoppingListService{

  startedEditing = new Subject<number>();
}
```

shopping-edit.component.ts

```
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
...
import {ShoppingListService} from '../shopping-list.service';

export class ShoppingEditComponent implement OnInit, OnDestroy{
  subscription:Subscription;

  constructor(private slService:ShoppingListService){}
  editMode = false;
  editedItemIndex:number;

  ngOnInit(){
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
```

## Loading the Shopping List Items into the Form

shopping-list.service.ts

```
getIngredients(){
  return this.ingredients.slice();
}
getIngredient(index:number){
  return this.ingredients[index];
}
```

shopping-edit.component.ts

- update form when in edit mode

```
import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


editedItem:Ingredient;
export class ShoppingEditComponent implements OnInit, OnDestroy{

@ViewChild('f') slForm:NgForm;

ngOnInit(){
  this.subscription = this.slService.startedEditing.subscribe((index:number)=>{
    this.editedItemIndex = index;
    this.editMode = true;

    this.editedItem = this.slService.getIngredient(index);

    this.slForm.setValue({
      name:this.editedItem.name,
      amount:this.editedItem.amount
    })
  });
}
```

shopping-edit.component.html

```
<form (ngSubmit)="onAddItem(f)" #f="ngForm">
</form>
```

## Updating Existing Items

- make button label "add" or "update"
- if in edit mode, update existing item

shopping-edit.component.html

```
<form (ngSubmit)="onAddItem(f)" #f="ngForm">

  <div class="row">

    <div class="btn btn-success">
      <button
        class="btn btn-success"
        type="submit"
        [disabled]="!f.valid">
        {{editMode ? 'Update' : 'Add' }}
      </button>
      <button class="btn btn-danger" type="button" (click)="onDelete() *ngIf="editMode"">Delete</button>
      <button class="btn btn-primary" type="button" (click)="onClear()" >Clear</button>
    </div>

  </div>
```

shopping-edit.component.ts

- reset form with form.reset()

```
onAddItem(form:NgForm){
  const value = form.value;
  const newIngredient = new Ingredient(value.name, value.amount);
  if(this.editMode){
    this.slService.updateIngredient(this.editedItemIndex, newIngredient);
  } else{
    this.slService.addIngredient(newIngredit);
  }

  this.editMode = false;
  form.reset();
}

onClear(){
  this.slForm.reset();
  this.editMode = false;
}

onDelete(){
  this.slService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}
```

shopping-list.service.ts

```
updateIngredient(index:number, newIngredient:Ingredient){
  this.ingredients[index] = newIngredient;
this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredient(index:number){
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}
```

---

## Validation

angular dynamically updates state and auto-adds classes to `<input>`

- ng-dirty
- ng-touched
- ng-invalid / ng-valid

`<input required email>`

available form properties:

- required
- email
- pattern="regular expression"
  - [pattern]="'^[1-9]+[0-9]\*$'" //positive value
    OR
  - no binding,no string ''  
    pattern = "^[1-9]+[0-9]\*$"

---

## Form Improvement

### disable button by binding to [disabled] when form invalid

app.component.html

```
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <input name="username" ngModel required>
  <input name="email" ngModel required email>
  <button [disabled]="! f.valid"></button>
</form>
```

app.component.ts

```
onSubmit(form:NgForm){
  const value=form.value;
}
```

### adding style

app.component.css

```
.container{
  margin-top:30px;
}

input.ng-invalid, select.ng-invalid{
  border:1px solid red;
}
```

## Adding style only to input which has class .ng-touched

```
input.ng-invalid.ng-touched,
select.ng-invalid.ng-touched{
  border:1px solid red;
}
```

### Outputting Validation Error Messages

- giving form inputs reference using # and associate with ngModel
- now we have access to 'email' (see below)
- using \*ngIf to only show error message oly if email is not valid and touched

```
<input #email="ngModel">
<span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email!</span>
```

## Set Default Values with ngModel Property Binding

- [ngModel]=""
- gives input default value
- default values to `<input>` or `<select>` by using [ngModel]=""
- can hardcode value
- or assign value to property in .ts

app.component.ts

```
  defaultQuestion = 'pet';
```

app.component.html

```
<select [ngModel]="defaultQuestion">
  <option value="pet">
  <option value="teacher">
</select>
```

## Using ngModel with Two-Way-Binding [()]

- use two-way-binding for instant feedback

app.component.ts

```
export class AppComponent{
  answer='';
}
```

app.component.html

```
<textarea
  name="questionAnswer"
  rows="3"
  class="form-control"
  [(ngModel)]="answer"
>
</textarea>

<p>your reply: {{answer}}</p>
```

## Grouping form controls

- ngModelGroup attribute assigned a string value
- can check validity of group
- can assign local reference to the object #userData = "ngModelGroup"

```
<div ngModelGroup="userData" #userData="ngModelGroup">
  <div class="form-group">
    <label></label>
    <input>
  </div>
  <div class="form-group">
    <label></label>
    <input>
  </div>
</div>
<p *ngIf="!userData.valid && userData.touched">
  User Data is invalid!
</p>
```

## Handling radio Buttons

app.component.ts

```
  genders = ['male', 'female']
```

app.component.html

```
  <div class="radio" *ngFor="let gender of genders">
    <label>
      <input
        type="radio",
        name="gender",
        ngModel
        [value]="gender"
        required
      >
      {{gender}}
    </label>
  </div>
```

## Setting and Patching Form Values of ALL controls on a form

- putting new values to input area

## 2 methods:

### Method1 - override ALL using .setValue({})

use .setValue({}) to re-create the form object and assign values (this approach need to pass an object exactly representing form and override all values)

app.component.ts

```
export class AppComponent{

  @ViewChild('f') signupForm:NgForm;  //reference to form

  suggestUserName(){
    const suggestedName = 'Superuser',

    this.signupForm.setValue({
      userData:{
        username:suggestedName,
        email:''
      },
      secret:'pet',
      questionAnswer:'',
      gender:'male'
    }
  }
}
```

### Method2 - override some values using .patchValue({})

- available on reference to form's .form property eg. signupForm.form
- use .patchValue({}) to only override certain values

```
suggestUser(){
  const suggestedName = 'Superuser',

  this.signupForm.form.patchValue({
    userData:{
      username:suggestedName
    }
  });
}
```

---

### Using form data

- display the form data

app.component.ts

```
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gneder:''
  }
  submitted = false;

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
```

app.component.html

```
<div class="row" *ngIf="submitted">
  <div class="col-xs-12">
    <h3>Your Data</h3>
    <p>Username: {{ user.username}}</p>
    <p>Mail: {{user.email}}</p>
    <p>Secret Question: {{user.secretQuestion}}</p>
    <p>Answer: {{user.answer}}</p>
    <p>Gender: {{user.gender}}</p>
  </div>
</div>
```

---

## Resetting forms

- use .reset() on the form
- resets value and state (valid, touched etc)
- can also pass the same object we passed to .setValue({}) to reset to default values

app.component.ts

```
  @ViewChild('f') signupForm:NgForm;  //reference to form

  onSubmit(){
    this.signupForm.reset();
  }
```
