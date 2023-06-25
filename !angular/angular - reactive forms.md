# Angular Forms - Reactive approach

Form is created programmatically and synchronized with the DOM

### app.component.ts file

- create a property that will hold our form
  of type FormGroup
- import FormGroup from '@angular/forms'

```
import {FormGroup} from '@angular/forms';
```

### app.module.ts

- remove FormsModule (template driven approach)
- add ReactiveFormsModule (reactive approach)

```
import {ReactiveFormsModule} from '@angular/forms';

imports:[ReactiveFormsModule]
```

### setting up the form

- import OnInit
- create attribute / value(of type FormControl) pairs
- FormControl arguments (initial state, validator(s), asynchronous validators)

```
import {Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

AppComponent implements OnInit{
  ngOnInit(){
    this.signupForm = new FormGroup({
      'username':new FormControl(null),
      'email':new FormControl(null),
      'gender':new FormControl('male'),
    });
  }
}
```

### syncing form to html

- add directive to override default behavior
- [formGroup] property bind to our formGroup
- formControlName='username' - connecting controls to template using formControlName
- \*OPTIONAL to use property binding, wrap name in single quotes '', eg. [formControlName]="'username'"

app.component.html

```
<form [formGroup]='signupForm'>
  <input formControlName='username'>
  <input formControlName='email'>
  <input formControlName='gender'>
</form>
```

### submitting form

- use (ngSubmit)='onSubmit()'
- already have access to form in .ts
- form values accessed via 'value' object of FormGroup

```
<form (ngSubmit)='onSubmit()'>
</form>
```

app.component.ts

```
signUpForm:FormGroup;

ngOnInit(){
  this.signupForm =
}

onSubmit(){
  console.log(this.signupForm);
}
```

### Adding Validation

- import {Validators} from '@angular/forms';
- validation happens on FormControl() in the 2nd argument
- Validators.required
- can pass in an array of Validators [] as second argument

```
new FormGroup({
  'username':new FormControl(null, Validators.required),
  'email':new FormControl(null, [Validators.required, Validators.email])
})
```

### CSS for ng-invalid, ng-touched

- ng-touched so that user has to click into the control first before validation happens

```
input.ng-invalid.ng-touched,

textarea.ng-invalid.ng-touched{
  border:1px solid red;
}
```

### Getting access to the controls

- use .get() helper method on the form
- get() takes a path to the control, especially if there is grouping involved

app.component.html

```
<span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched" class='help-block'>Please enter a valid username!
</span>
```

### Grouping controls

- allows nesting of FormGroup() inside FormGroup()
- this may throw out the synchronisation with html
  to fix this, we replicate the structure of the form in the .ts by wrapping the html form controls in another `<div>` and place the html inside,
- give the directive formGroupName `<div formGroupName="">`
- within `<div formGroupName="">`, .get()
  should adhere to the pathing replicating the form object in the .ts eg. .get('userData.username')

```
  this.signupForm = new FormGroup({

    'userData': new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    }),

    'gender': new FormControl('male')

  });
```

.html

```
<form [formGroup]='signupForm' (ngSubmit)='onSubmit()'>
  <div formGroupName='userData'>
    <div class='form-group'>
      <label for='username'>Username</label>
      <input
        type='text'
        id='username'
        formControlName='username'
        class='form-control'
      >
      <span *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched"
      >
      </span>
    </div>
  </div>
</form>
```

### Arrays of Form Controls (by using FormArray)

- dynamically adding inputs to the form with reactive approach

.html

```
<div formArrayName='hobbies'>
  <h4>Your Hobbies</h4>
  <button
    class="btn btn-default"
    type="button" (click)="onAddHobby()">Add Hobby</button>

  <div class='form-group'
    *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index">
    <input type='text' class="form-control" [formControlName]="i">
  </div>
</div>
```

.ts

- adding the control to form
- control is part of FormArray()
- import {FormArray} from '@angular/forms';
- by accessing hobbies we tell typescript by explicitly casting to <FormArray> so we can push to array
- then we sync with html by using `<div formArrayName='hobbies'>` on the wrapping div
- add a `<div class='form-group'></div>` to loop through all controls with \*ngFor
- dont forget index for the for loop
- add `<input>` and bind to the index [formControlName]="i"

```
import {FormArray} from '@angular/forms';

  this.signupForm = new FormGroup({
    'hobbies': new FormArray([])
  })

  onAddHobby(){
    const control = new FormControl(null, Validator.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
```

---

### in the ...service.ts

- to deal with non-updating of value, this is caused by the way we use the slice() of the array
- fix by use of Subject

```
import { Subject } from 'rxjs';

export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    //emmit a new value "copy" of recipe
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
```

### in the recipe-edit.component.ts

- instead of creating a newRecipe Object like below, we can use the this.recipeForm.value to reference the existing object

```
onSubmit(){
  const newRecipe = new Recipe(
    this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients']
  );

  if(this.editMode){
    this.recipeService.updateRecipe(this.id, newRecipe);
  }else{
    this.recipeService.addRecipe(newRecipe);
  }
}
```

### Method2:

```
onSubmit(){
  if(this.editMode){
    this.recipeService.updateRecipe(this.id, this.recipeForm.value);
  }else{
    this.recipeService.addRecipe(this.recipeForm.value);
  }
}
```

### in recipe-list.component.ts

```
ngOnInit(){
  this.recipeService.recipesChanged
  .subscribe(
    (recipes:Recipe[])=>{
      this.recipes = recipes;
    }
  );
  this.recipes = this.recipeService.getRecipes();
}
```

### deleting

#### recipe.service.ts

```
deleteRecipe(index:number){
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
```

#### recipe-detail.component.html

```
<a (click)="onDeleteRecipe()">Delete Recipe</a>
```

#### recipe-detail.component.ts

- after deleting an item, redirect

- make sure you import {Router} from '@angular/router'

```
onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);
}
```

### Canceling

#### recipe-edit.component.html

```
<button type="button" (click)="onCancel()"></button>
```

#### recipe-edit.component.ts

- if user cancels, navigate away

```
import {ActivatedRoute, Params, Router} from '@angular/router';

constructor(
  private route:ActivatedRoute,
  private recipeService:RecipeService,
  private router:Router){

}
onSubmit(){
  ...
  this.onCancel();
}
onCancel(){
  //goes up 1 level
  this.router.navigate(['../'], {relativeTo:this.route});
}
```

#### recipe-edit.component.html

- bind to `<img [src]>` value of #imagePath

```
<input
  type="text"
  id="imagePath"
  formControlName="imagePath"
  class="form-control"
  #imagePath
>

//display preview
<div class='row'>
  <div class="col-xs-12">
    <img [src]='imagePath.value' class='img-responsive'>
  </div>
</div>
```

### Correcting the sharing of service

- move service to the app.module

### deleting ingredients

- make sure buttons have `type='button'`

#### recipe-edit.component.html

```
<button type="button" class="btn btn-danger" (click)="onDeleteIngredient(i)">X</button>
```

#### recipe-edit.component.ts

```
onDeleteIngredient(index:Number){
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
}
```

### Make sure you unsubscribe to not cause memory leaks

#### recipe-list.component.ts

- on the ngOnInit(){} we .subscribe() so we need to manage this with onDestroy()

```
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class RecipeListComponent implements OnInit, OnDestroy{
  subscription:Subscription;

  ngOnInit(){
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes:Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
```

---

---

### Validators with Regular Expression using .pattern()

- allows us to use a regular expression
- expression is put between the '//' characters
- we execute the pattern() and pass in the expression

```
Validators.pattern(/regularexpression/)
```

### Creating custom validators

- validator is a function that gets executed when checking validity of form control
- REQUIRED - validator receives the control to check as a parameter
- RETURN - validator needs to return a js object key/value pair {[s:string]:boolean}
- checking if control value is part of forbiddenUsernameArray
- if found, return object {'key':true} where key is error code and value is true,
- if Validation succesful ie. not found, then return null or nothing..
- update the validator list by passing a reference to the function - DO NOT call it eg forbiddenNames()
- NB: bind(this) to refer to class
- note: this.forbiddenUsernames.indexOf(control.value) checks if control is part of array, if it is not, it returns -1, but -1 is interpretted as true, so check needs to be !== -1, which means it is found, which means it is invalid

.ts

```
ngOnInit(){
  this.signupForm = new FormGroup({
    'userData': new FormGroup({
      'username':new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email':new FormControl(null, [Validators.required, Validators.email])
    })
  });
}
forbiddenUsernames = ['Chris', 'Anna'];

//create the validator. note: 'this' scope needs to be binded..

forbiddenNames(control:FormControl):{[s:string]:boolean}{
  if(this.forbiddenUsernames.indexOf(control.value) !== -1){
    return {'nameIsForbidden': true};         //if found, error code
  }
  return null;    //if validation successful, return null
}
```

### Using Error codes within our own Validator

- angular adds the error codes to the individual controls' on the 'errors' object
- so we added forbiddenNames validator with message 'nameIsForbidden', we access this to do error check on the .errors object
- we also also use the 'required' error code of the control to show error

.html

```
<input>
<span
  *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched"
  class="help-block"
>
  <span *ngIf="signupForm.get('userData.username').errors['nameIsForbidden']">This name is invalid!</span>
  <span *ngIf="signupForm.get('userData.username').errors['required']">This field is required!</span>
</span>
```

## Creating a custom Async Validator

- when response is not instant for our validator
- create the method that returns a Promise or Observable
- if Observable, need to import {Observable} from 'rxjs';
- create a promise in the validator, with receive a function with (resolve, reject) as arguments we can call.
- simulate server response by using setTimeout() which is called after 1.5sec
- when using Promise(), we resolve({'errorcode'}) or resolve(null)
- then return the promise;
- add to 3rd parameter of FormControl (reserved for async validators) as reference to async validator

.ts

```
import {Observable} from 'rxjs';

ngOnInit(){
  this.signupFOrm = new FormGroup({
    'userData':new FormGroup({
      'username': ...etc same as before

      'email':new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
    })
  })
}

//async validator
forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{

  const promise = new Promise<any>((resolve, reject)=>{

    //immitate server response, anonymous function executed after 1.5sec
    setTimeout(()=>{
      if(control.value === 'test@test.com'){
        //if true, validation fails
        resolve({'emailIsForbidden':true});
      } else{
        resolve(null);
      }
    }, 1500);

  });
  return promise;
}
```

### Reacting to status or value changes

- there is a form state we can track
- can also track individual controls states

- there are 2 observables we can listen and subscribe to,
  - .statusChanges //track status
  - .valueChanges //whenever an input value updates
- value is the callback when data arrives

```
ngOnInit(){
  this.signupForm.valueChanges.subscribe(
    (value)=> console.log(value);     // value of form(object) is printed
  );
  this.signupForm.statusChanges.subscribe(
    (value)=> console.log(value);     //eg. valud, invalid, pending
  )
}
```

### Setting and Patching Values and Resetting

- can update form on our own,
- setValue() passing in object which resembles form
- patchValue() passing in only what needs to be changed
- this.signupForm.reset(), to keep radio button values you can pass an object to reset() to reset specific values

.js

setting the form with values

```
this.signupForm.setValue({
  'userData':{
    'username':'Max',
    'email':'max@test.com'
  },
  'gender':'male',
  'hobbies':[]
})
```

patching values

```
this.signupForm.patchValue({
  'userData':{
    'username':'Anna'
  }
})
```

reset values
.js

```
onSubmit(){
  this.signupForm.reset();
}
```

---
