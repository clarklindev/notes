`## Forms and Form Validation

### Analyzing the App

- validation
- handling user input

- decide what data we need, store this in the state
- dynamically generate form
- validation of form, with styling based on validation

- moving input elements into custom components

### Creating a Custom Dynamic Input Component

```js
// ContactDetails.js
// <!-- usage: -->
<Input inputtype='input' type='text' name='postal' placeholder='postal code' />
```

```js
// Input.js

import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case 'input':
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case 'inputarea':
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    // dropdown, select
    default:
      inputElement = <input className={classes.InputElement} {...props} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
```

```css
// Input.css

.Input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.Label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}

.InputElement {
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.InputElement:focus {
  outline: none;
  background-color: #ccc;
}
```

### Setting Up a JS Config for the Form

- creating form dynamically
- define how each element should look
- handling form shape in state - js object which defines all form fields, configuration, values
- the state object props should have elementType key and its value should be the name of html dom element without angle brackets
- the idea is to loop through the state object and create the form elements dynamically
- the Input Components in ContactData receive props `<Input elementType='...' elementConfig='...' value='...' />`

```js
// ContactData.js
state = {
  orderForm: {
    name: {
      elementType: 'input',
      elementConfig: { type: 'text', placeholder: 'your name' },
      value: ''
    },
    email: {
      elementType: 'input',
      elementConfig: { type: 'email', placeholder: 'Your email' },
      value: ''
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'cheapest' }
        ]
      },
      value: ''
    }
  }
};
let form = (
  <form>
    <Input elementType='...' elementConfig='...' value='...' />
  </form>
);
```

### Dynamically Create Inputs based on JS Config

- creating `<Input>` components dynamically from state
- with the state setup, we can create an array from the state then loop through each element and create the component
- save orderForm key/value in formElementsArray

```js
// ContactData.js

render(){
  let formElementsArray = [];

  for (let key in this.state.orderForm) {
    formElementsArray.push({ id: key, config: this.state.orderForm[key] });
  }

  let form = (
  <form>
    {formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
      />
    ))}
  )
}
```

### Adding a Dropdown Component

```js
//ContactData.js
state = {
  orderForm: {
    // ...other form content...

    //drop down select
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        type: 'email',
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'cheapest' }
        ]
      },
      value: ''
    }
  }
};
```

```js
// Input.js

case 'select':
  inputElement = (
    <select className={classes.InputElement} value={props.value}>
      {props.elementConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );


```

### Handling User Input

- Input component, each input element gets onChange listener
- in the section using the Input component, pass in as a prop
- changed={(event) => this.inputChangedHandler(event, )}
  but make it an anonymouse function that calls our handler so we can pass in arguments
- the second param is a unique identifier to ref the specific input (inputIdentifier) this is the keys of orderForm in the state...
- this value came from formElementsArray {id:key} value pair
- mutate state with setState()
- make deep copy of state data in inputChangedHandler(), note ...this.state.orderForm only makes a deep copy of the state orderForm, does not make a deep copy the nested keys' objects
- updateOrderKeyObject is now a clone, note: elementConfig is still not a clone,
- update a prop value of updateOrderKeyObject
- reassign back to the key's value `updatedOrderForm[inputIdentifier] = updatedOrderKeyObject`
- set state

#### summary

- form built from state,
- has handler for input
- make a deep copy of the values in the state,
- make copy of object value of key
- spread to new object
- update specific value
- and update a value property of this new object to the event.target.value
  I reassign the key back to the copy of the form `updatedOrderForm[inputIdentifier] = updatedOrderKeyObject`
- set state

```js
  //Input.js definition
  <Input onChange={props.changed}>

  // ContactData.js //usage
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedOrderKeyObject = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedOrderKeyObject.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedOrderKeyObject;
		this.setState({ orderForm: updatedOrderForm });
	};

  const formElementsArray = [];
  for(let key in this.state.orderForm){
  formElementsArray.push({id:key, config: this.state.orderForm[key]})
  }

  let form = (
    <form>
    {formElementsArray.map(formElement)=> {
    <Input key={formElement.id} changed={()=>this.inputChangedHandler(event, formElement.id)}/>
    </form>
  );
}

```

### Handling Form Submission

- there is an onSubmit event handler on `<form onSubmit={}>`, so dont use the handler on the submit button
- in the handler, need to event.preventDefault(); so you can handle manually
- want to extract data, but eveything is already managed by the state,
- create formData object
- for each of state.orderForm, get key/value
- add formData to order as prop

```js
orderHandler = (event) => {
  event.preventDefault();
  this.setState({ loading: true });
  const formData = {}; //get key/value data from state eg. email:value, name:value
  for (let formElementIdentifier in this.state.orderForm) {
    formData[formElementIdentifier] = this.state.orderForm[
      formElementIdentifier
    ].value;
  }
  const order = {
    ingredients: this.props.ingredients,
    price: this.props.price,
    orderData: formData
  };
  axios
    .post('orders.json', order)
    .then((response) => {
      this.setState({ loading: false });
      this.props.history.push('/');
    })
    .catch((error) => {
      this.setState({ loading: false });
    });
};

<form onSubmit={this.orderHandler}></form>;
```

### adding validation feedback

- Input component should get validation css classes if invalid
- change className={classes.InputElement} to css module reference like className={inputClasses}
- inputClasses is an array to hold all associated classes
- then we are checking against the input type we are creating if its invalid or not
- add to Input component form element (where its being used eg. ContactData.js)
- inside the formElementsArray.map(formElement=>{<Input invalid={!formElement.config.valid}/>})
  the json data is 'valid' but we have invalid={} prop, so pass-in the opposite
- this makes everything invalid, for dropdowns we should cater for a shouldValidate property which the json for dropdown does not have, so check for shouldValidate={check on if validation object exists} ie. shouldValidate={formElement.config.validation}

```js
// Input.js
const inputClasses = [classes.InputElement].join(' ');

if (props.invalid && props.shouldValidate) {
  inputClasses.push(classes.Invalid);
}
```

```css
.Invalid {
  /* set up styling */
  border: 1px solid red;
  background-color: salmon;
}
```

```js
// CotactData.js
//reminder: formElementsArray
const formElementsArray = [];
for(let key in this.state.orderForm){
  formElementsArray.push({id:key, config: this.state.orderForm[key]})
}

//reminder: orderForm[key] - formElement
email:{
  elementType:'input',
  elementConfig: {
    type:'email',
    placeholder:'your-email'
  },
  value:'',
  validation:{required:true},
  valid:false
}

// inside the formElementsArray.map(formElement=>{<Input/>})
<Input invalid={!formElement.config.valid} shouldValidate={formElement.config.validation}
```

### Improving Visual Feedback

- form should have 'touched' check,
- add 'touched: false' to json
- and only check validity if touched changed to true
- inside input(),

```js
// ContactData.js
inputChangedHandler = (event, inputIdentifier)=>{
updatedFormElement.touched = true;
}

<Input touched={formElement.config.touched}>

```

```js
// Input.js
if(props.invalid && props.shouldV && props.touched)
```

### Handling Overall Form Validity

- checking overall validity, we can use this to turn order button on/off
- can add formIsValid property to state
- the for-loop iterates trhough all inputs, including the drop-down which doesnt have a valid prop, which makes it undefined,
- hence formIsValid is always undefined, fix by adding .valid to the dropdown and set always true

```js
//ContactData.js
let formIsValid = true;
for (let inputIdentifier in updatedOrderForm) {
  formIsValid - updatedOrderForm[inputIdentifier].valid && formIsValid;
}
this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });

<Button btnType='Success' disabled={!this.state.formIsValid}>
  ORDER
</Button>;
```

```js
//Button.js
<button disabled={props.disabled}>
```

```css
/* Button.css */
.Button:disabled {
  color: #ccc;
  cursor: not-allowed;
}
```

### Working on an Error

- form validation error on dropdown because it doesnt have a validation:{} prop whereas the others do
- fix by adding it

### Fixing a Bug

- drop down select default value, if never set, the default is ''
- fix by adding default value to one of the options

---

`
