JQUERY
//Jquery notes from w3c

<script src="jquery-1.10.2.min.js"></script>

using these help cos they get cached...
hosted by microsoft <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js">
hosted by google <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

---

jQuery syntax
Basic syntax is: \$(selector).action()

\$ sign to define/access jQuery
(selector) to "query (or find)" HTML elements
action() to be performed on the element(s)

jQuery uses CSS syntax to select elements.

all jQuery methods are inside a document ready event.
This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(function(){}); //short method
$(document).ready(function(){});

---

jQuery selectors - allow you to select and manipulate HTML element(s).

jQuery selectors are used to "find" (or select) HTML elements based on
their id, classes, types, attributes, values of attributes and much more.
It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

All selectors in jQuery start with the dollar sign and parentheses: \$().

The element Selector - The jQuery element selector selects elements based on the element name.
You can select all <p> elements on a page like this: \$("p")

#id Selector - uses the id attribute of an HTML tag to find the specific element.
An id should be unique within a page, so you should use the #id selector when you want to find a single, unique element.
To find an element with a specific id, write a hash character, followed by the id of the element: \$("#test")

.class Selector - finds elements with a specific class.
To find elements with a specific class, write a period character, followed by the name of the class: \$(".test")

other jQuery selectors - More Examples of jQuery Selectors
Syntax Description
$("*")	Selects all elements	
$(this) Selects the current HTML element
$("p.intro")	Selects all <p> elements with class="intro"	
$("p:first") Selects the first <p> element
$("ul li:first")	Selects the first <li> element of the first <ul>	
$("ul li:first-child") Selects the first <li> element of every <ul>
$("[href]")	Selects all elements with an href attribute	
$("a[target='_blank']") Selects all <a> elements with a target attribute value equal to "\_blank"
$("a[target!='_blank']") Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button") Selects all <button> elements and <input> elements of type="button"
$("tr:even")	Selects all even <tr> elements	
$("tr:odd") Selects all odd <tr> elements

For a complete reference of all the jQuery selectors, http://www.w3schools.com/jquery/jquery_ref_selectors.asp
[br /]
Functions In a Separate File...you can put your jQuery functions in a separate .js file.

<head><script src="my_jquery_functions.js"></script></head>

---

jQuery Events - jQuery is tailor-made to respond to events in an HTML page.
[br /]www.w3schools.com_JQuery/www.w3schools.com/jquery/jquery_ref_events.html
[br /]
Here are some common DOM events:
Mouse Events
click
dblclick
mouseenter
mouseleave

Keyboard Events
keypress
keydown
keyup

Form Events
submit
change
focus
blur

Document/Window Events
load
resize
scroll
unload

In jQuery, most DOM events have an equivalent jQuery method.
\$("p").click(function(){
// action goes here!!
});

Commonly Used jQuery Event Methods

\$(document).ready()
click()
dblclick()
mouseenter() - executed when the mouse pointer enters the HTML element
mouseleave() - executed when the mouse pointer leaves the HTML element
mousedown() - executed when the left mouse button is pressed down, while the mouse is over the HTML element
mouseup() - executed when the left mouse button is released, while the mouse is over the HTML element
hover() - takes two functions and is a combination of the mouseenter() and mouseleave() methods

\$("#p1").hover(
function(){ alert("You entered p1!"); },
function(){ alert("Bye! You now leave p1!");
});

focus() -attaches an event handler function to an HTML form field, executed when the form field gets focus
blur() - attaches an event handler function to an HTML form field, executed when the form field loses focus

---

JQUERY EFFECTS

http://www.w3schools.com/jquery/jquery_ref_effects.asp

hide()/show() - hide and show HTML elements with the hide() and show() methods
Syntax:
$(selector).hide( speed(optional:"slow","fast",milliseconds), callback(optional) );
$(selector).show( speed(optional:"slow","fast",milliseconds), callback(optional) );

$("#hide").click(function(){ 
$("p").hide();
});
$("#show").click(function(){
$("p").show();
});

toggle() - toggle between the hide() and show() methods with the toggle() method

- Shown elements are hidden and hidden elements are shown
  Syntax:
  \$(selector).toggle((optional:"slow","fast",milliseconds), callback(optional) );

$("button").click(function(){
$("p").toggle();
});

fadeIn()
Syntax:
\$(selector).fadeIn( speed(optional:"slow","fast",milliseconds), callback(optional) );

$("button").click(function(){
$("#div1").fadeIn();
$("#div2").fadeIn("slow");
$("#div3").fadeIn(3000);
});

fadeOut()
Syntax:
\$(selector).fadeOut(speed(optional:"slow","fast",milliseconds), callback(optional) );

$("button").click(function(){
$("#div1").fadeOut();
$("#div2").fadeOut("slow");
$("#div3").fadeOut(3000);
});

fadeToggle() - toggles between the fadeIn() and fadeOut() methods

- If the elements are faded out, fadeToggle() will fade them in.
- If the elements are faded in, fadeToggle() will fade them out.
  Syntax:
  \$(selector).fadeToggle(speed(optional:"slow","fast",milliseconds), callback(optional) );

$("button").click(function(){
$("#div1").fadeToggle();
$("#div2").fadeToggle("slow");
$("#div3").fadeToggle(3000);
});

fadeTo() - allows fading to a given opacity (value between 0 and 1).
Syntax:
\$(selector).fadeTo(speed(required:"slow","fast",milliseconds), opacity(required), callback(optional) );

$("button").click(function(){
$("#div1").fadeTo("slow",0.15);
$("#div2").fadeTo("slow",0.4);
$("#div3").fadeTo("slow",0.7);
});

animate() - performs a custom animation of a set of CSS properties
Only numeric values can be animated (like "margin:30px").
String values cannot be animated (like "background-color:red").
Tip: Use "+=" or "-=" for relative animations.

By default, all HTML elements have a static position, and cannot be moved.
To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!

color animation is not included in the core jQuery library.
If you want to animate color, you need to download the Color Animations plugin from jQuery.com
http://plugins.jquery.com/project/color

jQuery animate() - Uses Queue Functionality
By default, jQuery comes with queue functionality for animations.
This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls.
Then it runs the animate calls ONE by ONE.
So, if you want to perform different animations after each other, we take advantage of the queue functionality:

Syntax:
(selector).animate({styles},speed,easing,callback)

styles (CSS properties/values to animate)
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent

easing (optional)
"swing" - moves slower at begining/end but faster in middle
"linear" - moves in constant speed

delay() - Sets a delay for all queued functions on the selected elements
$("button").click(function(){
$("#div1").delay("slow").fadeIn();
\$("#div2").delay("fast").fadeIn();
});

finish() - method stops the currently-running animations, removes all queued animations, and completes all animations for the selected elements.
method is similar to the .stop(true,true) method, except that finish() also causes the CSS property of all queued animations to stop.

queue() - shows the queue of functions to be executed on the selected elements.
A queue is one or more function(s) waiting to run.
The queue() method can be used together with the dequeue() method.
Syntax
\$(selector).queue(queueName)

dequeue() - method removes the next function from the queue, and then executes the function

clearQueue() - removes all items from the queue that have not yet been run.

slideDown() - Slides-down (shows) the selected elements
Syntax:
$(selector).slideDown(speed,callback);
$("#flip").click(function(){
$("#panel").slideDown();
});
slideToggle() - Toggles between the slideUp() and slideDown() methods
$(selector).slideToggle(speed,callback);
$("#flip").click(function(){
$("#panel").slideToggle();
});
slideUp() - Slides-up (hides) the selected elements
Syntax:
$(selector).slideUp(speed,callback);
$("#flip").click(function(){
$("#panel").slideUp();
});
stop() - Stops the currently running animation for the selected elements
Syntax
$(selector).stop(stopAll,goToEnd)
stopAll - Optional. Stop All Queued Animations. Default is false
goToEnd - optional. Stop But Complete All Animations Immediately. Default is false

callback - A callback function is executed after the current effect is 100% finished.
JavaScript statements are executed line by line.
However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.
Typical syntax: \$(selector).hide(speed,callback);

$("button").click(function(){
$("p").hide("slow",function(){
alert("The paragraph is now hidden");
});
});

Chaining
you can chain together actions/methods.
Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
Tip: This way, browsers do not have to find the same element(s) more than once.
To chain an action, you simply append the action to the previous action.
The following example chains together the css(), slideUp(), and slideDown() methods.
The "p1" element first changes to red, then it slides up, and then it slides down:
eg. \$("#p1").css("color","red").slideUp(2000).slideDown(2000);

jQuery throws away extra whitespace and executes the lines above as one long line of code.
\$("#p1").css("color","red")
.slideUp(2000)
.slideDown(2000);

---

JQuery HTML - Get Content and Attributes
jQuery HTML / CSS Methods - http://www.w3schools.com/jquery/jquery_ref_html.asp
[br /]
addClass() Adds one or more class names to selected elements
after() Inserts content after selected elements
append() Inserts content at the end of selected elements
appendTo() Inserts HTML elements at the end of selected elements
attr() Sets or returns attributes/values of selected elements
before() Inserts content before selected elements
clone() Makes a copy of selected elements
css() Sets or returns one or more style properties for selected elements
detach() Removes selected elements (keeps data and events)
empty() Removes all child nodes and content from selected elements
hasClass() Checks if any of the selected elements have a specified class name
height() Sets or returns the height of selected elements
html() Sets or returns the content of selected elements
innerHeight() Returns the height of an element (includes padding, but not border)
innerWidth() Returns the width of an element (includes padding, but not border)
insertAfter() Inserts HTML elements after selected elements
insertBefore() Inserts HTML elements before selected elements
offset() Sets or returns the offset coordinates for selected elements (relative to the document)
offsetParent() Returns the first positioned parent element
outerHeight() Returns the height of an element (includes padding and border)
outerWidth() Returns the width of an element (includes padding and border)
position() Returns the position (relative to the parent element) of an element
prepend() Inserts content at the beginning of selected elements
prependTo() Inserts HTML elements at the beginning of selected elements
prop() Sets or returns properties/values of selected elements
remove() Removes the selected elements (including data and events)
removeAttr() Removes one or more attributes from selected elements
removeClass() Removes one or more classes from selected elements
removeProp() Removes a property set by the prop() method
replaceAll() Replaces selected elements with new HTML elements
replaceWith() Replaces selected elements with new content
scrollLeft() Sets or returns the horizontal scrollbar position of selected elements
scrollTop() Sets or returns the vertical scrollbar position of selected elements
text() Sets or returns the text content of selected elements
toggleClass() Toggles between adding/removing one or more classes from selected elements
unwrap() Removes the parent element of the selected elements
val() Sets or returns the value attribute of the selected elements (for form elements)
width() Sets or returns the width of selected elements
wrap() Wraps HTML element(s) around each selected element
wrapAll() Wraps HTML element(s) around all selected elements
wrapInner() Wraps HTML element(s) around the content of each selected element

jQuery DOM Manipulation - the possibility to manipulate the DOM.
jQuery comes with a bunch of DOM related methods that make it easy to access and manipulate elements and attributes.

Get Content - text(), html(), and val()
Three simple, but useful, jQuery methods for DOM manipulation are:

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields

get...
$("#btn1").click(function(){
alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
alert("HTML: " + $("#test").html());
});
$("#btn1").click(function(){
alert("Value: " + $("#test").val());
});

set...
$("#btn1").click(function(){
$("#test1").text("Hello world!");
});
$("#btn2").click(function(){
$("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
$("#test3").val("Dolly Duck");
});

attr() method is used to get attribute values.
$("button").click(function(){
alert($("#w3s").attr("href"));
});

attr() method is also used to set/change attribute values.
$("button").click(function(){
$("#w3s").attr("href","http://www.w3schools.com/jquery");
});

A Callback Function for text(), html(), and val()
All of the three jQuery methods above: text(), html(), and val(), also come with a callback function.
The callback function has two parameters:
-the index of the current element in the list of elements selected
-and the original (old) value.
You then return the string you wish to use as the new value from the function.

The attr() method also allows you to set multiple attributes at the same time.
The following example demonstrates how to set both the href and title attributes at the same time:
$("button").click(function(){
$("#w3s").attr({
"href" : "http://www.w3schools.com/jquery",
"title" : "W3Schools jQuery Tutorial"
});
});

A Callback Function for attr()
The callback function has two parameters:
the index of the current element in the list of elements selected (example multiple select matches)
and the original (old) attribute value.

You then return the string you wish to use as the new attribute value from the function.

jQuery - Add Elements
With jQuery, it is easy to add new elements/content.

append() - Inserts content right AT THE END of the selected elements
prepend() - Inserts content right AT THE BEGINNING of the selected elements
after() - Inserts content AFTER the selected elements
before() - Inserts content BEFORE the selected elements
$("p").append("Some appended text.");
$("p").prepend("Some prepended text.");

jQuery - Remove Elements
With jQuery, it is easy to remove existing HTML elements.
To remove elements and content, there are mainly two jQuery methods:

remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element
$("#div1").remove();
$("#div1").empty();

Filter the Elements to be Removed
The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed.
The parameter can be any of the jQuery selector syntaxes.
The following example removes all <p> elements with class="italic":
\$("p").remove(".italic");

jQuery - Get and Set CSS Classes
With jQuery, it is easy to manipulate the CSS of elements.

addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements
css() - Sets or returns the style attribute

example stylesheet

.important{
font-weight:bold;
font-size:xx-large;
}

.blue{
color:blue;
}

addClass() - The following example shows how to add class attributes to different elements.
Of course you can select multiple elements, when adding classes:
$("button").click(function(){
$("h1,h2,p").addClass("blue");
\$("div").addClass("important");
});

add multiple Classes - you can also specify multiple classes with the addClass Method
$("button").click(function(){
$("#div1").addClass("important blue");
});

removeClass() - The following example shows how to remove a specific class attribute from different elements
$("button").click(function(){
$("h1,h2,p").removeClass("blue");
});

toggleClass() - This method toggles between adding/removing classes from the selected elements:
$("button").click(function(){
$("h1,h2,p").toggleClass("blue");
});

css() - this method sets or returns one or more style properties for the selected elements.

GET
css("propertyname"); - Return a CSS Property
The following example will return the background-color value of the FIRST matched element:
\$("p").css("background-color");

SET
css("propertyname","value");
The following example will set the background-color value for ALL matched elements:
\$("p").css("background-color","yellow");

Set multiple CSS properties
css({"propertyname":"value","propertyname":"value",...});
The following example will set a background-color and a font-size for ALL matched elements:
\$("p").css({"background-color":"yellow","font-size":"200%"});

JQuery Dimensions

width/height - element
innerwidth/innerheight - element + padding*2
outerwidth/outerheight - element + padding*2 + border*2
outerwidth(true)/outerheight(true)- element + padding*2 + border*2 + margin*2

document width -$(document).width()
window (browser viewport) width -$(Window).width()

The following example sets the width and height of a specified <div> element:
$("button").click(function(){
$("#div1").width(500).height(500);
});

---

Jquery Traversing - http://www.w3schools.com/jquery/jquery_ref_traversing.asp
[br /]
jQuery traversing, are used to "find" (or select) HTML elements based on their relation to other elements.
Start with one selection and move through that selection until you reach the elements you desire.

ancestor
|
siblings - siblings
|
descendants

The largest category of traversal methods are tree-traversal.

add() Adds elements to the set of matched elements
addBack() Adds the previous set of elements to the current set
andSelf() Deprecated in version 1.8. An alias for addBack()
children() Returns all direct children of the selected element
closest() Returns the first ancestor of the selected element
contents() Returns all direct children of the selected element (including text and comment nodes)
each() Executes a function for each matched element
end() Ends the most recent filtering operation in the current chain, and return the set of matched elements to its previous state
eq() Returns an element with a specific index number of the selected elements
filter() Reduce the set of matched elements to those that match the selector or pass the functions test
find() Returns descendant elements of the selected element
first() Returns the first element of the selected elements
has() Returns all elements that have one or more elements inside of them
is() Checks the set of matched elements against a selector/element/jQuery object,
returns true if at least one of these elements matches the given arguments
last() Returns the last element of the selected elements
map() Passes each element in the matched set through a function, producing a new jQuery object containing the return values
next() Returns the next sibling element of the selected element
nextAll() Returns all next sibling elements of the selected element
nextUntil() Returns all next sibling elements between two given arguments
not() Remove elements from the set of matched elements
offsetParent() Returns the first positioned parent element
parent() Returns the direct parent element of the selected element
parents() Returns all ancestor elements of the selected element
parentsUntil() Returns all ancestor elements between two given arguments
prev() Returns the previous sibling element of the selected element
prevAll() Returns all previous sibling elements of the selected element
prevUntil() Returns all previous sibling elements between two given arguments
siblings() Returns all sibling elements of the selected element
slice() Reduces the set of matched elements to a subset specified by a range of indices

ancestor - An ancestor is a parent, grandparent, great-grandparent, and so on.
Three useful jQuery methods for traversing up the DOM tree are:

parent() - method returns the direct parent element of the selected element.
method only traverse a single level up the DOM tree.
$(document).ready(function(){
$("span").parent();
});

parents() - returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
$(document).ready(function(){
$("span").parents();
});

- You can also use an optional parameter to filter the search for ancestors.
  The following example returns all ancestors of all <span> elements that are <ul> elements.
  $(document).ready(function(){
$("span").parents("ul");
  });

parentsUntil() - returns all ancestor elements between two given arguments
The following example returns all ancestor elements between a <span> and a <div> element:
$(document).ready(function(){
$("span").parentsUntil("div");
});

descendants - is a child, grandchild, great-grandchild, and so on.
Two useful jQuery methods for traversing down the DOM tree are:

children() - method returns all direct children of the selected element.
The following example returns all elements that are direct children of each <div> elements:
$(document).ready(function(){
$("div").children();
});

You can also use an optional parameter to filter the search for children.
The following example returns all <p> elements with the class name "1", that are direct children of <div>
$(document).ready(function(){
$("div").children("p.1");
});

find() - returns descendant elements of the selected element, all the way down to the last descendant.
The following example returns all <span> elements that are descendants of <div>
$(document).ready(function(){
$("div").find("span");
});

The following example returns all descendants of <div>
$(document).ready(function(){
$("div").find("\*");
});

Siblings - Siblings share the same parent.
Traversing Sideways in The DOM Tree
There are many useful jQuery methods for traversing sideways in the DOM tree

siblings() - returns all sibling elements of the selected element.
The following example returns all sibling elements of <h2>:
$(document).ready(function(){
$("h2").siblings();
});

You can also use an optional parameter to filter the search for siblings.
The following example returns all sibling elements of <h2> that are <p> elements
$(document).ready(function(){
$("h2").siblings("p");
});

next() - returns the next sibling element of the selected element.
method only returns one element.
The following example returns the next sibling of <h2>:
$(document).ready(function(){
$("h2").next();
});

nextAll() - returns all next sibling elements of the selected element.
$(document).ready(function(){
$("h2").nextAll();
});

nextUntil() - returns all next sibling elements between two given arguments
The following example returns all sibling elements between a <h2> and a <h6> element:
$(document).ready(function(){
$("h2").nextUntil("h6");
});

prev(), prevAll(), prevUntil() - methods work just like the methods above but with reverse functionality
they return previous sibling elements (traverse backwards along sibling elements in the DOM tree, instead of forward).

jquery filtering - Narrow Down The Search For Elements
The three most basic filtering methods are
first()
last()
eq()

which allow you to select a specific element based on its position in a group of elements.
Other filtering methods, like filter() and not() allow you to select elements that match, or not match, a certain criteria.

first() - method returns the first element of the selected elements
The following example selects the first <p> element inside the first <div> element
$(document).ready(function(){
$("div p").first();
});

last() - method returns the last element of the selected elements.
The following example selects the last <p> element inside the last <div> element
$(document).ready(function(){
$("div p").last();
});

eq() - method returns an element with a specific index number of the selected elements.
The index numbers start at 0, so the first element will have the index number 0 and not 1.
The following example selects the second <p> element (index number 1):
$(document).ready(function(){
$("p").eq(1);
});

filter() - lets you specify a criteria. Elements that dont match the criteria are removed from the selection,
and those that match will be returned.
The following example returns all <p> elements with class name "intro".
$(document).ready(function(){
$("p").filter(".intro");
});

not() method returns all elements that do not match the criteria
not() method is the opposite of filter().
The following example returns all <p> elements that do not have class name "intro":
$(document).ready(function(){
$("p").not(".intro");
});

---

jQuery AJAX - http://www.w3schools.com/jquery/jquery_ref_ajax.asp
[br /]
AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.
AJAX = Asynchronous JavaScript and XML.
AJAX is about loading data in the background and display it on the webpage, without reloading the whole page
Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs.
view ajax tutorials here: http://www.w3schools.com/ajax/default.asp
[br /]
jQuery provides several methods for AJAX functionality.
you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post

- And you can load the external data directly into the selected HTML elements of your web page!
  Ajax with jQeury is good because it handles cross browser compatibility

load() method loads data from a server and puts the returned data into the selected element.
Syntax:
\$(selector).load(URL,data,callback);

The required URL parameter specifies the URL you wish to load.
The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
The optional callback parameter is the name of a function to be executed after the load() method is completed.

Here is the content of our example file: "demo_test.txt":

<h2>jQuery and AJAX is FUN!!!</h2>
<p id="p1">This is some text in a paragraph.</p>

The following example loads the content of the file "demo_test.txt" into a specific <div> element
\$("#div1").load("demo_test.txt");

It is also possible to add a jQuery selector to the URL parameter.
The following example loads the content of the element with id="p1", inside the file "demo_test.txt", into a specific <div> element:
\$("#div1").load("demo_test.txt #p1");

The optional callback parameter specifies a callback function to run when the load() method is completed.
The callback function can have different parameters:

responseTxt - contains the resulting content if the call succeed
statusTxt - contains the status of the call
xhr - contains the XMLHttpRequest object

The following example displays an alert box after the load() method completes.
If the load() method has succeed, it displays "External content loaded successfully!", and if it fails it displays an error message:

$("button").click(function(){
$("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
if(statusTxt=="success")
alert("External content loaded successfully!");
if(statusTxt=="error")
alert("Error: "+xhr.status+": "+xhr.statusText);
});
});

get()/post() methods are used to request data from the server with an HTTP GET or POST request.
Two commonly used methods for a request-response between a client and server are: GET and POST.

GET - Requests data from a specified resource
POST - Submits data to be processed to a specified resource

GET is basically used for just getting (retrieving) some data from the server.
Note: GET method may return cached data.
POST can also be used to get some data from the server.
POST method NEVER caches data, and is often used to send data along with the request.

http://www.w3schools.com/tags/ref_httpmethods.asp
$.get() method requests data from the server with an HTTP GET request.
Syntax:
$.get(URL,callback);

The required URL parameter specifies the URL you wish to request.
The optional callback parameter is the name of a function to be executed if the request succeeds.
The following example uses the $.get() method to retrieve data from a file on the server:
$("button").click(function(){
\$.get("demo_test.asp",function(data,status){
alert("Data: " + data + "\nStatus: " + status);
});
});

The first parameter of \$.get() is the URL we wish to request ("demo_test.asp").
The second parameter is a callback function. The first callback parameter holds the content of the page requested,
and the second callback parameter holds the status of the request.

Tip: Here is how the ASP file looks like ("demo_test.asp"):
<%
response.write("This is some text from an external ASP file.")
%>

$.post() method requests data from the server using an HTTP POST request.
Syntax:
$.post(URL,data,callback);

The required URL parameter specifies the URL you wish to request.
The optional data parameter specifies some data to send along with the request.
The optional callback parameter is the name of a function to be executed if the request succeeds.
The following example uses the \$.post() method to send some data along with the request

$("button").click(function(){
$.post("demo_test_post.asp", {
name:"Donald Duck",
city:"Duckburg"
},
function(data,status){
alert("Data: " + data + "\nStatus: " + status);
});
});

The first parameter of \$.post() is the URL we wish to request ("demo_test_post.asp").
Then we pass in some data to send along with the request (name and city).

The ASP script in "demo_test_post.asp" reads the parameters, process them, and return a result.
The third parameter is a callback function. The first callback parameter holds the content of the page requested,
and the second callback parameter holds the status of the request.

Tip: Here is how the ASP file looks like ("demo_test_post.asp"):

<%
dim fname,city
fname=Request.Form("name")
city=Request.Form("city")
Response.Write("Dear " & fname & ". ")
Response.Write("Hope you live well in " & city & ".")
%>

---

jQuery Miscellaneous Methods - http://www.w3schools.com/jquery/jquery_ref_misc.asp
[br /]
jQuery uses the $ sign as a shortcut for jQuery.
BUT what if other JavaScript frameworks also use the $ sign as a shortcut?
Some other popular JavaScript frameworks are: MooTools, Backbone, Sammy, Cappuccino, Knockout, JavaScript MVC, Google Web Toolkit,
Google Closure, Ember, Batman, and Ext JS.
Some of the other frameworks also use the \$ character as a shortcut (just like jQuery),
and then you suddenly have two different frameworks using the same shortcut, which might result in that your scripts stop working.

The jQuery team have already thought about this, and implemented the noConflict() method.

noConflict() - method releases the hold on the \$ shortcut identifier, so that other scripts can use it.

You can of course still use jQuery, simply by writing the full name instead of the shortcut:
\$.noConflict();
jQuery(document).ready(function(){
jQuery("button").click(function(){
jQuery("p").text("jQuery is still working!");
});
});

You can also create your own shortcut very easily. The noConflict() method returns a reference to jQuery,
that you can save in a variable, for later use. Here is an example.
var jq = \$.noConflict();
jq(document).ready(function(){
jq("button").click(function(){
jq("p").text("jQuery is still working!");
});
});

If you have a block of jQuery code which uses the $ shortcut and you do not want to change it all, 
you can pass the $ sign in as a parameter to the ready method.
This allows you to access jQuery using $, inside this function - outside of it, you will have to use "jQuery":
$.noConflict();
jQuery(document).ready(function($){
$("button").click(function(){
\$("p").text("jQuery is still working!");
});
});

---

Examples

http://www.w3schools.com/jquery/jquery_examples.asp
