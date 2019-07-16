JQUERY

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="">
  </head>
  <body>
    <p>see source code</p>
    <script src=""></script>
  </body>
</html>

<!--
//JQUERY
simplifies task of creating highly responsive web pages.
cross platform
jquery handles page loading well
jquery indexing is 0 based
jquery has ability to chain multiple functions together to perform several operations in one line of code


JQUERY breaks down into 8 categories
  1. Core functionality - core jquery functions, common utilities
  2. Selection & traversal - extract content from documents & navigating among content
  3. Manipulation & CSS - editing and changing content of document, working with css data (positioning info)
  4. Events - simplifies working with modern DOM events, common event helper functions
  5. Effects - basic animations & effects, hide/show elements, moving objects around, fadein/fadeout
  6. Ajax - utils for working with AJAX eg loading content from pages, dealing with JSON data
  7. User Interface - plugins from jquery that provides common interface widget eg slider, accordion, progressbar
  8. Extensibility - allows construction of Jquery plugins that add-on to functionality of base library

selectors return an array of objects,
array is not a set of DOM elements,
they are Jquery objects wrapped around the dom element (provide predefined functions for further operating on the objects)

//JQUERY CDN HTTP/HTTPS
<script src="//ajax.googleapis.com.ajax/libs/jquery/1.6.1/jquery.min.js"></script> remove protocol (http:) so just //

//JQUERY SYNTAX
$('what to find').someAction;

//JQUERY's ADDCLASS EQUIVALENT
$('#myDiv').addClass('highlight');
$('#myDiv').removeClass('highlight');
$('#myDiv').toggleClass('highlight'); //if class not there, add it, if it is there, remove it

$('p.description'); //returns all paragraphs that have a 'description' property

:first
:last
:contains()
:visible

eg.
  $('li:last').addClass('highlight');

//JQUERY METHODS
hide();
show();
slideDown();
slideUp();
fadeIn();
fadeOut();

//================================================================================
//CSS - JQUERY SETTING CSS
  css(name)       returns the value for the named CSS property for the first matched element

  css(properties)     sets the css properties of every matched element using an object-notation syntax
              eg. var cssObject = {'background-color':'#ddd', 'font-weight':' ', 'color': 'rgb(0,40,244)'};
                $(this).css(cssObject);

  css(property, value)  sets a single style property to a value on all matched elements. if a number is provided, it is automatically converted
              into a pixel value, with the following exceptions:z-index, font-weight, opacity, zoom and line-height
              $('#someId').css("attribute", "value(s)");
              $('.a').css("border", "3px solid red");
//================================================================================
//JQUERY EVENTS
  jquery events dont rely on DOM
  browser independent implementations
  can asign event handlers to group of objects by using selectors and filters
  jquery provides a single event object with most common important properties

  2 CATEGORIES
  1. binding/unbinding      - allows events to be wired up and torn down in cross-browser way (connecting to and disconnecting from elements)
  2. unified event object     - provides an event object that exposes the most common properties in a cross-browser way
  3. convenience features     - provides functions that encapsulate common event features and cross-browser helper routines


  .bind()         eg. $(selector).bind(event, data, handler)     //see .one() for single handling event handler

                event   - the event you want to be bound to each element in the selector's result set
                    possible values: blur, focus, load, resize, scroll, unload, beforeunload, click, dblclick, mousedown, mouseup,
                    mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, error.
                data  - optional, defines piece of data that will be passed to the handler function
                handler - function that will handle the event

  .unbind()       eg. $(selector).unbind(event, handler)


  eg.     .highlighted{background-color: red; }

        $("#evtTarget").bind('click', clickHandler);

        $("#evtTarget").bind("mouseleave", highlight);    //both these lines same as typing
        $("#evtTarget").bind("mouseover", highlight);   //$("evtTarget").hover(highlight, highlight);

        function highlight(evt){    //event functions always takes parameter function
          $("#evtTarget").toggleClass("highlighted");
        }

        function clickHandler(evt){
          $("#evtTarget").unbind("mouseover", highlight);
          $("#evtTarget").unbind("mouseleave", highlight);
          $("#evtTarget").html("<p>you turned off highlighting</p>");

        }

  //CONVENIENT JQUERY EVENT HELPER FUNCTIONS

  $(selector).click(fn)         - there are shortcuts for blur, change, dblclick, error, focus, keydown, keypress, keyup, load, mousedown,
                      mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup, resize, scroll, select, submit, unload
  $(selector).hover(fnOver, fnOut)   - fnOver is function to call when mouse enters, fnOut for when mouse leaves
  $(selector).toggle(fn1, fn2, fn3, fn4) - helper function for implementing toggling behaviour. jquery will call each function on every other click


  $('#pageID').click(function(){
    $('#pageID').text("clicked!"); //can substitute $(this) to refer to current element
  });


  //EVENT HANDLING CODE
    Jquery provides a single event object with most common important properties
    type          type of event (click)
    target          element that issued the event
    data          data passed to bind function
    pageX, pageY      Coordinates of mouse when event happened (relative to document)
    result          value returned by the last handler function
    timestamp         time when event occured
    preventDefault() prevents the browser from executing the default action
    isDefaultPrevented() Returns whether preventDefault() was ever called on this object
    stopPropagation()     stops the bubbling of an event to parent element
    isPropagationStopped() returns whether stopPropagation() was ever called on this object

    eg.   $('div').click(function(evt)){
          $(this).html('pageX:' + evt.pageX);
        });

  //MISC EVENT FUNCTIONS
  one(type, data, handler)      works the same way as bind() but event handler is only executed one time for each matched element

  trigger(event, data)        triggers an event on every matched.
                    passing 'click' to trigger() function will also cause browser to act as though the item were clicked
                    eg. $(selector).trigger('click');

  triggerHandler(event, data)     Triggers all bound event handlers on an element (for a specific event type)
                    without executing the browsers default actions, bubbling, or live events.
                    only works on the first matched element in the result set for selector


  //JQUERY PAGE LOAD EVENT
  $(document).ready();        //can be called multiple times

  //METHOD A      $(document).ready(
              function(){}
            );

  //METHOD B      $(function(){});

//================================================================================
//JQUERY ANIMATIONS & EFFECTS

//HIDING
  show()              display each of the set of matched elements if they are hidden
  show(speed, callback)     speed "slow, normal or fast or use milliseconds" for animation, with optional callback
  hide()              hides each of the set of matched elements if they are shown
  hide(speed, callback)
  toggle()            toggles displaying each of the set of matched elements
  toggle(switch)          toggles displaying each of the set of matched elements based on the switch. (true is show, false is hide)
  toggle(speed, callback)

//FADING
  fadeIn(speed, callback)       //eg.   $('#thediv').fadeIn("normal");
  fadeOut(speed, callback)      //fades opacity to 0, then sets display to 'none'.
  fadeTo(speed, opacity, callback)  //opacity is between 0 and 1

//SLIDING - way to reveal page elements in jquery
  slideDown(speed, callback)      //reveals all matched elements by adjusting their height and firing an optional callback
  slideUp(speed, callback)      //hides...
  SlideToggle(speed, callback)    //toggles visibility of all matched elements by adjusting their heights..

//CUSTOM ANIMATIONS
  to create custom animation for many properties on page elements, call the animate() function
  to stop animations in progress, call the stop() function

  animate(params, duration, easing, callback)       params(properties on the element to animate),
                              duration,
                              easing (type of easing function linear or swing)
                              callback

  animate(params, options)
  stop()

//================================================================================
//SELECTORS
  *           selects all elements
              can be used with child selectors to target every element child of #container eg. #container *{border:1px;}

  p             selects paragraphs
  h2            selects headers
  p span          selects span in paragraph
  #           id selector (add an id attribute to any element. id is unique)
  .           class selector
  .class1.class2 class can be applied to multiple elements
  tag.classname       tag element with class attribute with value of classname
  tag#id.classname    tag element with ID of id and class attribute with value of classname
  ancestor descendant   find all descendant elements that are contained within elements of type ancestor
  $('p, li.b').css();   gets <p> and <li> elements with class b applied
  $('ul li.a').css();   descendent operator, an unordered list and a list of items with an <a> in them
  $('p:not( p:eq(2) )').css(); look for <p> that are not index 2

//PSEUDO SELECTORS
  li:first-child      <li> selection narrowed to first element of a group
  a:link          unvisited links
  a:active        links clicked
  a:hover         hover over links
  a:focus
  a:visited

  p:first-letter      selects first letter of every <p> element
  p:first-line      selects first line of every <p>

  p:before        insert content before every <p>
  p:after         insert content after every <p>
  p:lang(language)    selects every <p> element with a lang attribute value
              eg. p:lang(it) //starting with 'it'


//SUPPORTED PROPERTIES THAT APPLY TO PSEUDO-ELEMENT
              :first-line     :first-letter
font properties         YES         YES
color properties        YES         YES
background properties     YES         YES
margin properties                 YES
padding properties                  YES
border properties                 YES
text-decoration         YES         YES
vertical-align          YES         YES
text-transform          YES         YES
line-height           YES         YES
float                         YES
clear               YES         YES
word-spacing          YES
letter-spacing          YES


//DESCENDANT SELECTOR
  xy

//CHILD SELECTOR
  ul > li         selects all <li> elements(children) inside <ul>, everything to the left of angle bracket is the parent, to the right the child
              only selects direct children
              div#container > ul       //targets ul's that are direct children of the div with an id of container

              eg. <div id="container">
                  <ul>
                    <li> <ul><li></li></ul> </li> //div#container > ul will NOT select this <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

//ADJACENT SELECTOR (next operator)
  h2 + p          selecting any <p> as long as it comes after <h2>
              only selects the element that is immediately after first element
              eg. ul+p{ color:red;}    //only first paragraph after each ul will have red text

//SIBLING SELECTOR
  prev ~ sibling      find all sibling elements that come after prev and match sibling selector
              eg. ul~p {color:red;}    //will select any <p> elements as long as they follow a <ul>

//ATTRIBUTE SELECTORS - selecting elements based on their attributes
  <h2 class="foo">
  <h2 class="foo bar">
  <h2 class="bar">

  h2[class]       attribute selector, selects all h2's with the class attribute
  [title]         styles all elements with a title attribute
eg. a[title]        will only select the anchor tags that have a title attribute


//ATTRIBUTE AND VALUE SELECTOR
  h2[class="foo"]     attribute selector with specific values. selects with specific class attribute of 'foo'
  [title=w3schools]   styles all elements with title="w3schools"
eg. x[href="foo"]     eg. a[href="http://www.google.com"]   will style all anchor tags which have an href linked to www.google.com


//ATTRIBUTE AND VALUE SELECTOR (MULTIPLE VALUES)
  x[href *= 'nettuts']  star designates that the preceding value(value following *) must appear somewhere in the attributes value

  x[href ^="http"]    search begining of attribute value for match
              eg. a[href ^= 'http']     //target all <a> tags that have a href which begins with http

  x[href $=".jpg"]    search for end of the string for a match
              eg. a[href $=".jpg"]      //search all anchors which urls end with .jpg

  x[data -*="foo"]    USING CUSTOM ATTRIBUTE eg. <a href="" data-filetype="image">   //a[data-filetype="image"]

  style all elements with a title attribute that contains a specific value. Works even if the attribute has space separated values.
  [title~=hello]{}
  h2[class ~= 'foo']   matches all class attributes with 'foo' anywhere in the value
              ~ symbol alows us to target an attribute which has a spaced-separated list of values.

              1. create a custom data-info attribute
              2. values are space separated list of anything we need to make note of
              eg. <a href="" data-info="external image">click me</a>
                a[data-info ~="external"]{ color:red; }
                a[data-info ~="image"]{border: 1px; }

  [attribute|=value]    select elements with the specified attribute starting with the specified value
              eg. [lang|=en]{color:blue; }

  x:checked       targets only user interface element that has been checked. like radio button or checkbox
              eg. input[type='radio']:checked{}

  x:not(selector)     you want to select all div containers except the ones with id container
              eg.   div:not(#container){color:blue;}


  attribute selector useful for styling forms without class or id
  input[type="text"]{}
  input[type="button"]{}


  CSS3 PSEUDO ELEMENTS
    consists of 2 colons, for styling fragments of an element

    CSS3         ::
    CSS1, CSS2      :


//FILTERS
1. Basic - basic filter eg. first, last, even, odd
2. Content - filters based of the content eg. whether element contains a particular string
3. Visibility - Filters using visibility of each element as a test
4. Attribute - Examines attribute of an element to determine filtering
5. Child - Selects element based on relationship with parent element
6. Form - filters that operate on form elements

  //BASIC
    :first-child      selects first instance of the selector returned set (matches a specific element that is first child of another)
    :last         selects last
    :even           selects only even-numbered elements (zero-based)
    :odd          selects only odd-numbered elements (zero-based)
    :eq(n)          filters out elements not positioned at index
    :gt(n)          includes elements greater than index
    :lt(n)          includes elements lesser than index
    :header         selects all header elements
    :animated       selects all elements that are currently being animated
    :not(selector)      includes elements that do not match the given selector

  //ATTRIBUTE FILTERS
    [attribute]       if attribute exists
    [attribute=value]   attribute with specific value
    [attribute!=value]    attribute not equal value
    [attribute^=value]    attr starts with value        eg. $('p[id^=para]').css()
    [attribute$=value]    attr ends with value
    [attribute*=value]    attr contains value
    [attrFilter1][attrFilterN]    match all attr Filters    eg. $('p[id^=[para][lang*=en-]').css()

  //CONTENT
    :contains(text)     include elements that contain the text string
    :empty          include only empty elements
    :has(selector)      atleast one element that has the specified selector eg. $('ul:has(li[class=a])').css()
                selects an <ul> if it has <li> that has class attribute = a
    :parent         matches all elements that are parents (contain atleast one other element (including text))

  //VISIBILITY
    :visible        include only visible elements
    :hidden         include hidden elements

  //CHILD FILTERS - refine selector by examining relationship with parent element

    //counting starts at 1 (NOT ZERO-BASED)

    :nth-child(index)   matches elements at index,
    :nth-child(even)    or even
    :nth-child(odd)     or odd increments,
    :nth-child(equation)  or who match an equation of the form Xn+M eg. 2n or 3n+1
                eg. $('ul li:nth-child(2n)').css() n is going to start counting will select every second one (not zero-based)
    x:nth-last-child(n)   begins counting backwards from back of collection
    x:nth-of-type(n)    select according to type of element
                eg. markup which contains 5 <ul>'s if you only wanted to style the third <ul> and didnt have a unique id
                ul:nth-of-type(3){}
    x:nth-last-of-type(n) begin at end of selectors list, to select element of certain type
                eg. ul:nth-last-of-type(3){}

    :first-child
    :last-child
    :only-child       targets elements which are the only child of its parent
                div p:only-child{}

    x:only-of-type      targets elements that do not have any siblings within its parent container
                eg. target all <ul>'s which have only a single list item.
                ul > li:only-of-type{}
    x:first-type-of     allows you to select the first siblings of its type

  eg. targeting "list item 2"

    <div>
      <p>My paragraph</p>
      <ul>
        <li>list item 1</li>
        <li>list item 2</li>
      </ul>
      <ul>
        <li>list item 3</li>
        <li>list item 4</li>
      </ul>
    </div>

    SOLUTIONS 1 (using first-of-type)
      ul:first-of-type > li:nth-child(2){}
      find the first <ul> on page, then find only the immediate children, which are <li>'s, filter down to the second list item in set

    SOLUTION 2 (using adjacent selector)
      p+ul li:last-child{}
      find the <ul> that immediately proceeds <p>, then find the very last child of the element

    SOLUTION 3
      ul:first-of-type li:nth-last-child(1){}
      grab the first <ul> on the page, then the very first item (but start at the bottom)




  //FORM SELECTORS
    :input          finds all input, select, textarea, and buttons
    :text           finds all text elements
    :password         finds all password elements
    :radio          finds all radio elements
    :checkbox         finds all checkbox elements
    :submit         finds all submit elements
    :reset         finds all reset elements
    :image          finds all image elements
    :button         finds all button elements
    :file           finds all file elements

  //ADDITIONAL FORM FILTERS
    :enabled        selects only the enabled eg. $('form :text:enabled').css(); <input type="text" enabled="enabled";
    :disabled
    :checked
    :selected

//================================================================================
//TRAVERSING - Traversing document information
  size(), length        number of elements in the jquery result set
  get()           returns an array of all matched DOM elements (useful if you need to work on the DOM elements themselves)
  get(index)          access single matched DOM element at specific index
  find(expression)      searches for descendent elements that match the specified expression
  each(fn)          execute a function within the context of every matched element
                eg. $('p').each(function(){
                    $(this).css('border', "3px solid red");
                  });

//================================================================================
//ANNOTATING (add notes to (a text or diagram) giving explanation or comment.)
  eg. adding a small image according to extension of the <a href> links

  $('a[href $=.pdf]').after("<img src='images/small_pdf_icon.gif'/>);


//================================================================================
MANIPULATING PAGE CONTENT
  to create html, pass a string containing new html to $() function. eg. var newHeader = $('<h1>New Header</h1>')
  to get and set content on elements
  html()        returns the html content of first matched element eg. $('#list1').html();
  html(newcontent)  sets the HTML content of every matched element     eg. $('#list1').html('<li>This is a new list item</li>');

                                         var newitem = $("<p>this is bla</p>");
                                         $('#para2').html(newitem.html());
  text()        returns the text content of the first matched elements
  text(newtext)   sets the text content for all matched elements       $(p:last).text("this the last");

  main difference between the text() and html()
  - if you pass html code to the html() function, it will create real html for you
  - if you pass string into the text function that contains html, the text function automatically escapes it for you
      eg. change angle brackets to text representations.. it will not create html code

//================================================================================
//ATTRIBUTES
  attr(name)            accesses property on the first matched element,
                  method makes it easy to retrieve a property value from the first matched element
                  if the element does not have an attribute, undefined is returned

  attr(properties)        sets a series of attributes on all matched elements using an object notation syntax,
                  best for setting large numbers of properties at once
                 eg. $('img').attr({src:"/images.hat.gif", title:"some title", alt:"jquery logo"})

 attr(attributename, value); eg. $('a').attr("target", "_blank");

  removeAttr(name)  removes the named attribute from all matched elements

//================================================================================
//INSERTING
  append(content)         append content to the inside of every matched element
  prepend(content)        prepends content to the inside of every matched element

  after(content)          insert content after each of the matched elements
  before(content)         insert content before each of the matched elements

  appendTo(selector)        appends all of the matched elements to another specified set of elements
  prependTo(selector)       prepend all of the matched elemetns to another specified set of elements

  insertAfter(selector)     inserts all of the matched elements after another specified set of elements
  insertBefore(selector)      inserts all of the matched elements before another specified set of elements

//CLEAR-FIX HACK  (UPDATE: rather use display: inline-block; )
  A clearfix is a way for an element to automatically clear after itself, so that you don't need to add additional markup.
  It's generally used in float layouts where elements are floated to be stacked horizontally.
  The clearfix is a way to combat the zero-height container problem for floated elements
  hack uses :after to append a space after the element then clear it.
  excellent when overlap:hidden method not available
  UPDATE: the use of floated elements for layout is getting more and more discouraged with the use of better alternatives (eg. display: inline-block;)

  .clearfix:after {
   content: " "; /* Older browser do not support empty content */
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
  }

  //NORMAL SYNTAX
    <div style="float: left;">Sidebar</div>
    <div style="clear: both;"></div>      // Clear the float

  //WITH CLEARFIX
    <div style="float: left;" class="clearfix">Sidebar</div>

    //NOTE: No Clearing div! here...

  //http://css-tricks.com/all-about-floats/


//================================================================================
//REPLACING (wrapping, replacing, removing content, copying)
  wrap(html)            wraps each matched element with the specified html content
  wrap(element)         wraps each matched element with the specified element
  wrapAll(html)         wraps all the elements in the matched set with the specified HTML content
  wrapAll(element)        wraps all the elements in the matched set into a single wrapper element
  wrapInner(html)         wraps the inner child contents of each matched element (including text nodes) with html structure
  wrapInner(element)        wraps the inner child contents of each matched element (including text nodes) with a DOM structure
  replaceWith(content)      Replaces all matched elements with the specified HTML or DOM elements
  replaceAll(selector)      Replaces the elements matched by the specified selector with the matched elements
  empty()             removes all child nodes from the set of matched elements
  remove()            removes all matched elements from the DOM
  clone()             clone matched DOM elements and selects the clones
  clone(bool)           clone matched DOM elements and all their event handlers and select the clones

//================================================================================
//TABLE OF CONTENTS GENERATOR

  document with a lot of headings
  table of contents contains a bunch of links that jump to various places in the document
  table of contents is built by jquery using headings to build named anchors inside document


  $('document').ready(function(){
    //receives 2 params: type of header tag that we use as TOC locations, id of <div> we want to append the resulting TOC into
    buildBookmarks('h3', 'header');
  });

  function buildBookmarks(strWhichTag, sBookmarkNode){
    var cAnchorCount=0;
    var oList = $("<ul id='bookmarksList'>");
    $("div:not([id=header]) " + strWhichTag).each(function(){
      $(this).html("<a name='bookmark"+cAnchorCount+"'></a>" + $(this).html());
      oList.append($("<li><a href='#bookmark"+cAnchorCount++ +"'>" + $(this.text() + "</a></li>"));
    });

    $("#" + sBookMarkNode).append(oList);
  }

//================================================================================
//JQUERY TABLES
  function will add stripes and hover over/out highlighting

  .stripe1{
    background-color:#0F0;
  }
  .stripe2{
    background-color:#afa;
  }
  .highlight{
    background-color:#FFCC00;
    font-weight:bold;
  }

  $(document).ready(function(){
    $("#thelist tr:even").addClass('stripe1');
    $("#thelist tr:odd").addClass("stripe2");

    $("#thelist tr").hover(
      function(){
        $(this).toggleClass("highlight");
      },
      function(){
        $(this).toggleClass("highlight");
      }
    );
  });
//================================================================================
//IMAGE ROTATOR
  $(document).ready(function(){
    setInterval ( "rotateImages()", 2000); //create the image rotator
  });

  function rotatieImages(){
    var oCurPhoto = $('#photoShow div.current');
    var oNxtPhoto = oCurPhoto.next();
    if(oNxtPhoto.length == 0){
      oNxtPhoto = $('photoShow div:first');
    }
    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({opacity:0.0}).addClass('current').animate( {opacity:1.0}, 1000, function(){ oCurPhoto.removeClass('previous')} );
  }

  //where the magic happens
  <style type="text/css">
    #photoShow{
      height:400px;
      width:400px;
    }
    #photoShow div{
      position:absolute;
      z-index:0;
    }
    #photoShow div.previous{    //below
      z-index:1;
    }
    #photoShow div.current{     //on-top
      z-index:2;
    }
  </style>

  <body>
      <h1></h1>
      <div id="photoShow">
        <div class="current"><img src="images/Grass.jpg" alt="Photo Gallery" width="400" height="400" class="gallery"/></div>
        <div>         <img src="images/Leaf.jpg" alt="Photo Gallery" width="400" height="400" class="gallery"/></div>
        <div>         <img src="images/Spring.jpg" alt="Photo Gallery" width="400" height="400" class="gallery"/></div>
      </div>
  </body>

//================================================================================
//TOOLTIP
    <div class="tooltipContent" id="tooltip1">

    .tooltipContent{
      position:absolute;
      display:none;
      opacity:0.0;
    }

    <p>View larger:<a href="" target="_blank" id="viewlarger">

    $(document).ready(function(){
      $('#viewlarger').hover(
        function(){         //mouseover
          var offset = $('#gearItem').offset(); //gets offset of item
          $('#tooltip1').css("top", offset.top)
                 .css("left", offset.left)
                 .css("display", "block");
          $('#tooltip1').animate({opacity:1.0, 300});
        },
        function(){         //mouseout
          $('#tooltip1').animate( {opacity:0.0, 300, function(){ $('#tooltip1').css("display", "none"); } });
        }
      );
    });
//================================================================================
-->
