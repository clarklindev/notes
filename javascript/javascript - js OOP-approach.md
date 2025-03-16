# OOP (PROTOTYPE JAVASCRIPT)

### index.html

```
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8">
    <title>OOP javascript</title>
    <script src="js/Car.js"></script>
    <script>
    //global scope

      function init(){
        var car = new Car("Ford", "Ranger", "Blue");
        car.startEngine();

        Console.log(car.mpg);       //public instance variable
        Console.log(Car.num_of_wheels);   //access static variable with CAPITAL Car

      }

    </script>
  </head>
  <body onload="init()">
  </body>
</html>
```

---

## WORKING WITH PUBLIC VARIABLES

### Car.js

```js
(function(window) {
	//public variables
	Car.prototype.mpg = 30;

	//static variables
	Car.num_of_wheels = 4;

	function Car(make, model, color) {
		//creating the class
		//public variables
		this.make = make; //defining public property
		this.model = model;
		this.color = color;
	}

	//public method startEngine
	Car.prototype.startEngine = function() {
		Console.log(getDesc(this) + 'engine started'); //this refers to instance
	};

	//private method
	function getDesc(context) {
		//at this moment, this function is unaware about .make .model .color,
		return context.make + ' ' + context.model;
		//use context to get instance, to access .make .model .color
	}

	//expose Car class to global scope then in index.html we can call Console.log(Car.model)
	window.Car = Car;
})(window); //passing in window(root element in js)
```

---

## WORKING WITH PRIVATE VARIABLES

### Car.js

```
(function(window){
  //public variables
  Car.prototype.mpg = 30;

  //static variables
  Car.num_of_wheels = 4;

  function Car(make, model, color){       //creating the class
    //private variables
    var _make = make;
    var _model = model;
    var _color = color;
    this.getMake = function(){return _make;};
    this.getModel = function(){return _model;};
  }

  //public method startEngine
  Car.prototype.startEngine = function(){
    Console.log(getDesc(this) + "engine started");  //this refers to instance
  };

  //private method
  //at this moment, this function is unaware about .make .model .color,
  function getDesc(context){
    return context.getMake() + " " + context.getModel();
  }

  //expose Car class to global scope then in index.html we can call Console.log(Car.model)
  window.Car = Car;

}(window));//passing in window(root element in js)
```
