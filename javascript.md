JAVASCRIPT

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="">
  </head>

  <body>
    <p>see source code</p>
  </body>
</html>

<!--
raw javascript
//==============================================================
//DO NOT USE SYNTAX BELOW!!!! USE JQUERY...

var array = document.getElementsByName("a");
var element = document.getElementsById("someID");
var classelement = document.getElementsByClassName('myclass');     //HTML5
var multipleclass = document.getElementByClassName('first second');   //HTML5

//javascript writing HTML
  document.write("hello world!");

new Date();
.getMonth();
.getYear();
.getDate();
.getDay();
.getHours();
.getTime();

.nodeType
.innerHTML
.childNodes.length

.getAttribute("");
.setAttribute("","");

var myNewElement = document.createElement("li");
.appendChild(myNewElement);
myNewElement.innerHTML = "Hello World!";

.insertBefore(newElement, existingElement);

var myText = document.createTextNode("some text");
myNewElement.appendChild(myText);

onload
onclick
onmouseover
onblur
onfocus


<script></script>
<noscript></noscript>   //browser without script support

//================================================================================

//JAVASCRIPT ANONYMOUS FUNCTION
element.event = function(){}; //dont forget semicolon

<button type="button" onclick="myFunction()"> clickme </button>
<p id="demo">bla bla bla</p>
<script>
  function myFunction(){
    document.getElementById("demo").innerHTML="javascript!";
  }
</script>

//================================================================================

//JAVASCRIPT LISTENER non-IE SYNTAX
document.addEventListener('click', myfunction, false); //problems.. not supported prior to IE9
//IE SYNTAX
.attachEvent('onClick', myfunction);

//================================================================================

//CLICK LOADING
function prepareEventHandlers(){
  var myImage = document.getElementById('mainImage');
  myImage.onClick = function(){};
}

window.onload = function(){
  prepareEventHandlers();
}


//================================================================================
//FORM PRETEXT
var emailField = document.getElementById('email');

emailField.onfocus = function(){
  if(emailField.value =="enter your email"){
    emailField.value = "";
  }
};
emailField.onblur = function(){
  if(emailField.value==""){
    emailField.value = "enter your email";
  }
};

//FORMS
<form id="" name="frmContact">
document.forms.frmContact.nameOfElement

textfields have a .value property

.onfocus
.onblur
.onchange
.onkeypress
.onkeydown
.onkeyup

//CHECKBOX + RADIOBUTTONS
.checked
.onclick
.onchange


//SELECT LISTS
.type property can have values:
  select-one
  select-multiple

for single select, access selected via .selectedIndex after .onchange event
for multiple select, acess selected via .options array of that select field and go through options 1-by-1 and check if they have .selected (true/false)
  eg. myselect.options[x].selected


//FORM EVENTS
.onsubmit (instant validation)

//PREVENT SUBMIT
document.getElementById('').onsubmit = function(){
  return false;
  or
  return true;
};

//================================================================================

//SHOW/HIDE DIV
<div id="tourselection"></div>
document.getElementById('brochures').onclick = function(){
  if(document.getElementById('brochures').checked{
    document.getElementById('tourselection').style.display = 'block';
  }
  else{
    document.getElementById('tourselection').style.display = 'none';
  }
};
document.getElementById('tourselection').style.display = 'none';

//================================================================================

//TIMERS
setTimeOut( //name_of_function, //interval(milliseconds) ); //calls function once
var intervalHandle = setInterval( , ); //repeats function call
clearInterval(intervalHandle);

when setting properties in javascript, always set as a string

//================================================================================

//PREDEFINED CLASSES
myElement.className = 'someclass';
eg.
  document.getElementById('myDiv').className="highlight";

myElement.className = ''; //to reset..set as an empty string

//================================================================================

//AJAX - asynchronous javascript and XML
can have javascript communicating back to the server updating parts of the page without page needing to reload
1. create an objet that will call the server (the request)
2. deal with the response


//AJAX REQUEST
  var myRequest = new XMLHttpRequest();

  if(window.XMLHttpRequest){          //firefox/safari
    myRequest = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){        //ie
    myRequest = new ActiveXObject('Microsoft.XMLHTTP');
  }

//AJAX HANDLER
  myRequest.onreadystatechange = function(){}; //deal with the response

//AJAX FIRING OFF REQUEST
  myRequest.open('GET', "http://mysite.com/somedata.php", true);
  myRequest.send(null);

.onreadystatechange = function(){} //gets called multiple times each time at a different stage/state of request and response.

.onreadystatechange = function(){
  if(myRequest.readyState ===4){      //we are interested in state4 (response back)
    var p = document.createElement('p');
    var t = document.createTextNode(myRequest.responseText);    //responseText is a property of request object (what you get back from the call)
    p.appendChild(t);
    document.getElementById('maincontent').appendChild(p);
  }
}

//================================================================================
//OBJECT PROTOTYPES of javascript
  formalising custom objects by
  1.  creating a 'constructor' function (first letter uppercase)
  2.  creating variables using camelcase using 'new' keyword to create new variable from that constructor

  eg. var fred = new Player("Fred", 1000, 5);

    function Player(n, s, r){
      this.name = n;
      this.score = s;
      this.rank = r;
    }

//USING PROTOTYPES to attach new functions to Player object so automatically available if created using 'new' keyword
  class.prototype.newmethod = function(){}

  eg. Player.prototype.logInfo = function(){
      console.log('I am', this.name);
    }

    Player.prototype.promote = function(){
      this.rank++;
      console.log('my new rank is', this.rank);
    }

  usage: fred.loginfo();
      fred.promote();


//BROWSER RESIZE
  window.onresize = function(){
    adjustStyle();
  }

  function adjustStyle(){ //instead of writing all this code, use external javascript library
    var width = 0;
    if(window.innerHeight){
      width = window.innerWidth;
    }
    else if(document.documentElement && document.documentElement.clientHeight){
      width = document.documentElement.clientWidth;
    }
    else if(document.body){
      width = document.body.clientWidth;
    }

    if(width < 600){
      document.getElementById('mycss').setAttribute("href", "css/narrow.css");
    }
    else{
      document.getElementById('mycss').setAttribute('href', "css/main.css");
    }
  }



//==============================================================


-->
