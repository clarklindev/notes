HTML

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="">
  </head>
  <body>
    <table border="1">
      <caption>table description</caption>            
      <tr>
        <th>Firstname:</th>
        <td>Bill Gates</td>
      </tr>
      <tr>
        <th>Telephone</th>
        <td>5100000</td>
      </tr>
      <tr>
        <th>Telephone</th>
        <td>5133000</td>
      </tr>
    </table>

<table border="1">
      <caption>table description</caption>            
      <tr>
        <th>Name</th>
        <th>Telephone</th>
        <th>Telephone</th>
      </tr>
      <tr>
        <td>Fred</td>
        <td>2342343243</td>
        <td>5325235323</td>
      </tr>
    </table>

<h3>lists</h3>
      <ol>          //ordered list
        <li></li>
        <li></li>
      </ol>

<ul>          //unordered list
        <li></li>
        <li></li>
      </ul>

<dl>          //description list
        <dt>coffee</dt>
        <dd>black hotdrink</dd>
        <dt>milk</dt>
        <dd>white cold milk</dd>
      </dl>

<h3>Fieldsets</h3>
    <form>
      <fieldset>
          <legend>personal info:</legend>
          name:<input type="text" size="30"><br>
          email:<input type="text" size="30"><br>
      </fieldset>
    </form>

<h3>datalist</h3>
      <input list="browsers">
      <datalist id="browsers">
        <option value="IE">
        <option value="Firefox">
        <option value="Chrome">
      </datalist>
  </body>

</html>

<!-- html4.01 doctype

//TRANSITIONAL This DTD contains all HTML elements and attributes, INCLUDING presentational and deprecated elements (like font). Framesets are not allowed. 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

//STRICT This DTD contains all HTML elements and attributes, but does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed.
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
-->

<!--
HTML 5


<em>            emphasis point in text
<strong>           bolding word in text
<span>            inline element divide up text rather than sections
<div>           block level element (push other elements out the way), division of document.
<p>             paragraph (browser automatically adds an empty line before and after a paragraph)
<hr>            horizontal rule
<img src="">        image tag
<ol><li></li>       ordered list
<ul><li></li>       unordered list
<br>
<h1></h1>         heading tags, browser adds empty space (margin) before and after each heading
              search engines use headings to index structure+ content
<b>
<i>
<small>           small text
<sub>           subscript
<sup>           superscript
<abbr title="">WHO</abbr> tool tip text for title text
<pre></pre>         preformatted tet tag preserves text format (spaces + line breaks)
<blockquote cite="">sometext</blockquote> //cite defites title of the work
<q></q>           browser inserts quotation marks around this element
<del></del>         deleted text (strike through)
<ins></ins>         underline inserted
<mark></mark>       browser highlights text


//================================================================================
//HEAD base + metatags

<head>
  <base href="location directory" target="_blank">  //default url and target for all links on page
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="author" content="">
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="30">      //refresh doc every 30 seconds
  <title></title>                   //title in browser, title for when page added to fav, title for page in search engine result
  <link rel="stylesheet" type="text/css" href="">   //defines relationship between a doc and external source, used to link stylesheets
</head>
//================================================================================

<script></script>     
//defines client-side code

//================================================================================
//TABLE

attributes:   
  border
  cellpadding   //spacing within a cell and its border
  cellspacing   //spacing around a cell

  
<table>
  <caption>table description</caption>        //like a header

  <colgroup>      //specifies a group of one or more columns in a table for formatting
    <col>       //specifies column properties for each column
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>

  <thead>
    <tr><th></th></tr>
  </thead>
  <tbody>
    <tr><td></td></tr>
  </tbody>

  <tfoot>
  </tfoot>
</table>

//================================================================================
//FORMS

  used to pass data to a server
  can contain input elements like:
    checkboxes
    textfields
    radio buttons
    submit buttons
    select list
    textarea
    fieldset
    legend
    label elements

  <label> defines a label for an <input> element
  eg. <label for="male">Male</label>
     <input type="radio" name="sex" id="male" value="male">

  <input> element is the most important
  attributes:
    type="text, checkbox, password, radio, submit"

  <input type="text">
  
  <input type="password">

  <input type="button" value="Hello World!">

  <input type="radio" name="sex" value="male">Male<br>
  <input type="radio" name="sex" value="female">Female<br>

  <input type="checkbox" name="vehicle" value="bike">bike<br>
  <input type="checkbox" name="vehicle" value="car">car<br>

  <input type="submit" value="submit">    
          //the submit button sends form data to a server
          //data is sent to the forms&apos; action attribute
          //file in action attribute does something with received input

  <select name="cars">
    <optgroup label="africa">
      <option value="volvo">volvo</option>
      <option value="saab">saab</option>
      <option value="fiaat">fiaat</option>
    </optgroup>
  </select>
  
  //setting selected attribute eg. <option selected> will make it selected by default

  <textarea rows="10" cols="30">bla</textarea>

  <datalist>
    html5
    specifies a list of predefined options for input controls
    supported in ie10, firefox, opera, chrome
    
    //binds inputs&apos; list attribute with <datalist>
    <input list="browsers">
    <datalist id="browsers">
      <option value="IE">
      <option value="Firefox">
      <option value="Chrome">
    </datalist>


  //FIELDSET
    create a border around elements in a form
eg. 
  <form>
    <fieldset>
        <legend>personal info:</legend>
        name:<input type="text" size="30"><br>
        email:<input type="text" size="30"><br>
    </fieldset>
  </form>

  


  //SENDING EMAIL FROM A FORM
  <form action="mailto:someone@xp.com" method="POST" enctype="text/plain">
    name:<br>
    <input type="text" name="name" value="your name"><br>

    email:<br>
    <input type="text" name="email" value="your email"><br>

    comment<br>
    <input type="text" name="comment" value="your comment" size="50"><br>

    <input type="submit" value="send">
    <input type="reset" value="reset">
  </form>


//================================================================================
//DIV AND SPAN
helps with grouping elements

<div>
  block-level element (browser displays line break before and after it)
  container for grouping other html
  used for document layout (replaces tables)
  eg. <h1>,<p>,<ul>,<table>   //most html elements are block level


<span>
  inline-element
  no special meaning
  used with css to style attributes to part of text
  eg.<b>,<td>,<a>,<img>
  

//HTML layouts
  uses CSS to position elements
  create backgrounds, color with css

  <body>
    <div id="container" style="width:500px;">
      <div id="header" style="background-color:#FFA500;">
        <h1 style="margin-bottom:0;">Main title of webpage</h1>
      </div>

      <div id="menu" style="background-color:#FFD700; height:200px; width:100px; float:left;">
        <b>Menu</b><br>
        HTML<br>
        CSS<br>
        javascript<br>
      </div>
      
      <div id="content" style="background-color:#EEEEEE; height:200px; width:400px; float:left;">
        content goes here
      </div>

      <div id="footer" style="background-color:#FFA400; clear:both; text-align:center;">
        Copyright C w3schools.com
      </div>

    </div>
  </body>

//================================================================================
//IFRAMES
  <iframe src="URL"></iframe>
  properties:
    width
    height
    frameborder="0"
    name=""

  can be used as target frame for a link

//================================================================================
//COLORS
http://www.w3schools.com/html/html_colors.asp
http://www.w3schools.com/html/html_colornames.asp
http://www.w3schools.com/html/html_colorvalues.asp

//================================================================================
//LINKS

<a href="" target="">link text</a>

//using ID attribute as bookmark
<a href="#tips">

//MAILTO
<a href="mailto:bla@bla.com?subject=bla%20bla&body=bla" target="_top">send</a>

//================================================================================
//LISTS
  ordered list
  unordered list
  description list
  
  <ol>          //ordered
    <li></li>
    <li></li>
  </ol>

  <ul>          //unordered list
    <li></li>
    <li></li>
  </ul>

  <dl>
    <dt>coffee</dt>
    <dd>black hotdrink</dd>
    <dt>milk</dt>
    <dd>white cold milk</dd>
  </dl>

//================================================================================

//IMAGES
  <img>           //open tag (no closing tag)


//IMAGE MAP
<img src="planets.gif" width="145" height="126" alt="" usemap="#planetmap">
<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="sun" href="">
  <area shape="circle" coords="90,58,3" alt="mercury" href="">
  <area shape="circle" coords="123,58, 8" alt="venus" href="">
</map>

//================================================================================

//VIDEO
<video id="myvideo" controls preload=&apos;auto&apos;>
    <source src="video.mp4" type="video/mp4"/>
    <source src="video.webm" type="video/webm"/>
    <source src="video.ogg" type="video/ogg"/>
your browser does not support html5 video
</video>

myvideo.addEventListener(&apos;ended&apos;, function(){}, false); //if browswer supports video tag, it will support addEventListener

//VIDEO METHODS
HTML Audio and Video DOM Reference {http://www.w3schools.com/tags/ref_av_dom.asp[br} /]
//STORAGE
localStorage[&apos;username&apos;] = name;      //set
var name = localStorage[&apos;username&apos;];    //get

//================================================================================

//WEB WORKERS
load javascript and make it run in the background regardless of what is going on in your page (multithreading)
worker objects cannot directly affect the DOM so have to allow it to generate events and send them back.
not supported in IE

var worker = new Worker(&apos;another.js file&apos;);

worker.onmessage = function(e){};   //receiving/reacting to a message event from the worker (note not camelcase)
worker.postMessage();       //send a message to worker
worker.terminate();         //stops worker

//================================================================================

//BROWSER SUPPORT
use Modernizr2      http://modernizr.com/

//================================================================================

//REGULAR EXPRESSIONS
Pattern matching in strings
eg.
  var myRE = /hello/;     //first / marks begining. second / marks end
  OR
  var myRE = new ReExp("hello");  //just looks if word &apos;hello&apos; exists

var mystring = "some sentince with word hello in it";

.test             //test returns true/false
.search             //returns position of first match

eg                if( myRE.test(mystring)){}    

var myRE = /^hello/;      ^ at start meaning hello would have to appear at start of string
     /hello$/;      $ at end meaning hello has to appear at end of string
     /hel+o/;       previous character before + has to occur once or more
     /hel*o/;       previous character before * has to occur zero or more
     /hel?o/;       previous character before ? has to occur zero or one
     /hello|goodbye/;   true if string contains either/or eg. hello or goodbye
     /he..o/;       any character match
     /\wello/;      must be alphanumeric or _ character
     /\bhello/;     word boundary (space/newline) eg hello would have to appear after a space or newline
     /[crnld]ope/;    [...] range of characters to match on
     \d          match a digit

//================================================================================


-->
