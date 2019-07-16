CSS

body{
margin:0;
background: #90ADB7 url('../images/background.png') repeat-x;
font-family: verdana, sans-serif;
font-size:0.85em;
}

#wrapper{
width: 960px;
margin: 0 auto; /_automatically center itself and anything inside_/
}

p{
line-height: 1.5em;
color:#333;
}

/_pseudo class selector
selector:pseudo-class{ property:value; };
selector.class:pseudo-class{ property:value; };
eg. a.red:visited{ color:#FF0000; };
_/

/_ORDER RULES_/
/_a:hover comes AFTER a:link and AFTER a:visited_/
/_a:active comes AFTER a:hover_/
a:link{
color:#FF0000;
}
a:visited{
color:#00FF00;
}
a:hover{
text-decoration: none; /_removes underlines of default links_/
}
a:active{
color:#0000FF;
}

#nav{
padding:0; /_unordered lists have padding by default_/
float: right;
margin: 40px 0;
list-style: none; /_remove the dots that are next to the unordered list items by default /other option square_/
}

#nav li{
float:left;
margin-right:10px; /_spacing_/
font-size: 1.4em;
font-weight:bold;
}

#header{
font-style: italic;
float:left;
margin:20px 0; /_margin of 20px on top/bottom, 0px left/right_/
}

#header h1{
font-size:3em;
margin:0; /_remove default margin on <h1>_/
}

#header h2{
margin:0;
color:#888;
font-size:1.2em;
}

#content{
float:left;
width:700px;
margin-right:20px;
}

#content .post{
background:#FFF;
padding:10px;
margin-bottom: 20px;
border:2px solid #CCC;
}

#content .post h3{
margin:0;
color:#333;
}

.pic{
margin-left: 10px; /_spacing from paragraphs_/
float:right; /_puts picture on right side_/
}

#sidebar{
float:left;
width:200px;
background:#FFF;
padding:10px;
border:2px solid #CCC;
}

#sidebar h3{
margin:0;
}

#sidebar .section{ /_separate the sections more_/
border-top:2px dashed #CCC;
padding-top:10px;
}

#sidebar .section:first-child{ /_if first section inside sidebar_/
border-top:none;
padding:0;
}

/_image gallery_/
div.img{
margin:5px;
padding:5px;
border:1px solid #0000FF;
height:auto;
width:auto;
float:left;
text-align:center;
}

div.img img{
display:inline;
margin:5px;
border:1px solid #0000FF;
}

div.img a:hover img{
border:1px solid #FF0000;
}

div.desc{
text-align:center;
font-weight: normal;
width:120px;
margin:5px;
}

.HTML

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>

  <body>
    <!-- CSS IMAGE GALLERY -->
    <div class="img">
      <a target="_blank" href="Klematis_big.htm"><img src="klematis_small.jpg" alt="Klematis" width="110" height="90"></a>
      <div class="desc">Add a description here</div>
    </div>

    <!-- HORIZONTAL MENU -->
    <div id="wrapper">
      <div id="header">
        <h1>catching the wave</h1>
        <h2>a surfing site</h2>
      </div>

      <ul id="nav">
        <li></li>
        <li></li>
      </ul>

      <div id="content">
        <div class='post'>    <!-- post1 -->
          <h3>first post</h3>
          <img src="" class="pic"/>
          <p>bla bla</p>
          <p>
            <a href="">text</a>
          </p>
        </div>

        <div class="post">    <!-- post2 -->
        </div>

        <div id="sidebar">
          <div class="section">
            <h3>Daily surf tip</h3>
            <p>bla bla bla</p>
          </div>

          <div class="section">
            <h3>another section</h3>
            <p>bla bla bla</p>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>

————————————————————————————————————————————————————————
————————————————————————————————————————————————————————

<!--
//================================================================================
//DO NOT USE THIS SYNTAX!!! NOT GOOD TO MIX PRESENTATION WITH STRUCTURE


inline css styles can be used on element directly
  eg.
    myElement.style.top = '';
    myElement.style.color = '';
    myElement.style.left = '';
    myElement.style.backgroundRepeat = '';
    myElement.style.position = '';

//================================================================================
CSS SYNTAX
a css rule has 2 main parts: selector + declarations

h1{           //selector
  color:blue;     //declaration
  font-size:12px;   //declaration
}

//================================================================================
RESET CSS

  body{
    font-family:Arial, Helvetica, sans-serif;
    font-size:12px;
    line-height:1.5;
    background:url(images/bg.png);
  }

  #container{
    margin:0 auto;      //auto center (*no effect if width is 100%)
    width: 960px;     //960px is safe lowest
  }

//================================================================================
LOGOS
  h1#logo a{
    background:url('images/logo.png') no-repeat;
    display:block;        //because <a> is an inline element, and we need width/height which does not exist for inline
    width:140px;
    height:140px;
    margin:10px auto 30px;
    text-indent:-9999px;    //trick to hide text
  }

//================================================================================
/*pseudo class selector
  selector:pseudo-class{ property:value; };
  selector.class:pseudo-class{ property:value; };
  eg. a.red:visited{ color:#FF0000; };
*/

/*LINK ORDER RULES*/
/*a:hover comes AFTER a:link and AFTER a:visited*/
/*a:active comes AFTER a:hover*/
a:link{
  color:#FF0000;
}
a:visited{
  color:#00FF00;
}
a:hover{
  text-decoration: none;    /*removes underlines of default links*/
}
a:active{
  color:#0000FF;
}
//================================================================================

MENUS - use <ul> and <li> tag

  float <a> and <ul>
  make <li> {display:inline; }

  <ul> has {width:100%; }       //so nothing to right
  <ul> has {list-style-type:none; } //remove bullet points

  a{
    width:              //width of the button use em to be consistent with font (also em)
    text-decoration:none;     //used to remove underline
    color:white;
    background-color:;
  }
  a.hover{
    background-color:#FF3300;
  }

  <ul id="menu">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
  </ul>

  ul#menu li{
    display:inline;       //menu items display next to each other instead of block level (beneath each other)
  }

//================================================================================
ANOTHER SOLUTION FOR MENUS...

  //STYLING FOR BOTH VERTICAL AND HORIZONTAL NAVIGATION BARS
    ul{
      list-style-type:none;     //removes bullet
      margin:0;           //removes browser default settings
      padding:0;            //removes browser default settings
    }

  //VERTICAL NAVIGATION BAR SPECIFIC
    a{
      display:block;          //makes whole link area clickable and allows us to specify a width
      width:60px;           //by default block elements take up the full width so we specify 60px.
    }

  //HORIZONTAL NAVIGATION BAR SPECIFIC
  2 methods to create horizontal navigation

    INLINE (links have different widths)
      li{
        display:inline;     //by default <li> elements are block elements (here we remove the line breaks before and after each list item)
      }

    FLOATING (links are same size)
    float <li> elements, specify a width for the <a> elements
      li{
        float:left;       //block elements slide next to each other
      }
      a{
        display:block;      //makes whole link area clickable
        width:60px;       //allow specify a width
      }




//================================================================================

CSS LISTS
ul {list-style-type:circle;}
ul {list-style-type:square;}

ol {list-style-type:upper-roman;}
ol {list-style-type:lower-alpha;}

image{list-style-image:url('sqpurple.gif');}
image{list-style-position: ;}          //inside, outside

//================================================================================
CSS TABLES

table, th, td{
  border:1px solid black;
  border-collapse: collapse;      //whether to collapse border to single border
}

width
height
text-align      //left/right/center
verticle-align    //top/bottom/middle
padding       //spacing between border and content in a table


//================================================================================

<head>
  <link rel="stylesheet" href="" type="text/css">
</head>



//INLINE STYLESHEET
'style' attribute for single occurance of element
<p style="color:blue; margin-left:20px;">hello</p>



//INTERNAL STYLESHEETS
used to document has unique style
<style type="text">
  body{ background-color:yellow; }
  p{    color:blue;      }
</style>


//EXTERNAL STYLE
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

//================================================================================
css properties have hypens, BUT in javascript, have camelCase (no hyphens)

<span>                useful for applying styling to small subset of text, use a descendant selector


//================================================================================

BOX MODEL - from inside-> content|padding|border|outlines|margin

outlines does not affect dimesions

MARGIN is added to exterior of a element
  margin: 25px 0px 0px 25px;      //top right bottom left
  margin: 25px 0px 0px;       //top right/left bottom
  margin: 25px 0px          //top+bottom left+right
  margin: 25px            //all values top,right,bottom,left same
  margin: auto;           //brower calculates margin
     : px, pt, cm
     : %               //margin is percent of width of element

PADDING is space added to inside of a element

NOTE: best practice, define margin and padding for <body>, body{ margin:0; padding:0;}

BORDER
  border-width: 5px;          //values can be thin/medium/thick, must be used with border-style
  border-style: solid,dotted,dashed,double,groove,ridge,inset,outset;
  border-color: #0404040;
  border:    10px solid #FF0000; //SHORTCUT (width, style, color)

  border-top-style:         //styling individual side
  border-right-style:
  border-bottom-style:
  border-left-style:

CALCULATIONS
  When calculating width of an element on a page

  width of element + padding + border + margin

  total width = width + (left-padding + right-padding) + (left-border + right-border) + (left-margin + right-margin)
  total height = height + (top-padding + bottom-padding) + (top-border + bottom-border) + (top-margin + bottom-margin)

DIMENSIONS
  width/height:auto;
  max-height: px/cm/etc/% of containing block
  max-width:  px/cm/etc/% of containing block
  min-height: //sets minimum weight
  min-width:  //sets minimum width

DIMENSIONS/VISIBILITY
  display:    inline/block/inline-block       //how and element is displayed
  display:    none;                 //hides element
  visibility:   visible
          hidden                  //hides element but still takes up the space as before (affected by layout)
          collapse                //only for table elements does not affect table layout


BACKGROUNDS
  background-color: #FF0000;
  background-image: url('../images/fox.png');
  background-repeat:  no-repeat, repeat-x, repeat-y;
  background-position:x-offset y-offset;
            left right;
            center center;
            left top;
            //can also use pixels, percentages

  background:     1.background-color 2.background-image 3.background-repeat 4.background-position;
            #FF0000 url('') no-repeat bottom left;

IMAGES
  images part of content, assign via <img>
  images via design, assign through CSS
  eg. background:url(images/10.jpg);
    background:#000;
    background:rgba(255, 255, 255, .5);
  repeat-x;
  repeat-y;
  no-repeat;    //options: top right center bottom left or absolute positioning / fixed / scroll

IMAGE OPACITY
  opacity is part of the W3C CSS3 recommendation
  img{
    opacity:0.4;            //value from 0 to 1
    filter:alpha(opacity=40);     //IE 8 and earlier value from 0 to 100
  }

//THE HOVER EFFECT
  img{
    opacity:0.4;
    filter:alpha(opacity=40);
  }
  img:hover{
    opacity:1.0;
    filter:alpha(opacity=100);
  }

TEXT IN TRANSPARENT BOX
  <style>
      div.background{
        width:500px; height:250px; background:url(klematis.jpg) repeat;
        border:2px solid black;
      }

      div.transbox{
        width:400px; height:180px; margin:30px 5px;
        background-color: #FFFFFF; border:1px solid black;
        opacity:0.6;
        filter:alpha(opacity=60);
      }

      div.transbox p{
        margin:30px 40px; font-weight:bold;
        color:#000000;
      }
  </style>

  <body>
    <div class="background">
      <div class="transbox">
      <p>
        this is text...
      </p>
      </div>
    </div>
  </body>

IMAGE SPRITES
  -collection of images put into a single image
  -web pages with many images can take longer time to load and generate multiple server requests
  -image sprites reduce server requests and save bandwidth
  -using css, show part of image needed

  eg.
  img.home{
    width:46px;
    height:44px;
    background:url(img-navsprites.gif) 0 0;     //0 left 0 top...
  }
  <img class="home" src="img-trans.gif">        //"img-trans.gif" ...small and transparent img cos src cannot be empty


USING IMAGE SPRITES TO CREATE A NAVIGATION LIST

  #navlist{
    position:relative;    //allows absolute positioning inside it
  }

  #navlist li{
    margin:0;
    padding:0;
    list-style:none;
    position:absolute;
    top:0;
  }

  #navlist li, #navlist a{
    height:44px;
    display:block;
  }

  #home{
    left:0px;
    width:46px;
    background:url('img_navsprite.gif') 0 0;
  }
  #prev{
    left:63px;
    width:43px;
    background:url('img_navsprites.gif') -47px 0;
  }
  #next{
    left:129px;
    width:43px;
    background:url('img_navsprites.gif') -91px 0;
  }

img_navsprites.gif
  home normal   prev normal   next normal
  home hover    prev hover    next hover

#home a:hover{background:url('img_navsprites.gif') 0 -45px; }
#prev a:hover{background:url('img_navsprites.gif') -47px -45px; }
#next a:hover{background:url('img_navsprites.gif') -91px -45px; }


//==============================================================================================


//==============================================================================================

FLOATS
  an element is pushed left/right allowing other elements to wrap around it
  elements are floated horizontally (left, right)
  elements after floating element will flow around it
  elements before floating element will not be affected
  eg. if image is float to right, text flows around it to left

FLOAT ELEMENTS NEXT TO EACH OTHER
  placing several floating elements after each other, they will float next to each other if there is room

TURN OFF FLOAT:
  'clear' property specifies which sides of an element other floating elements are NOT allowed

  eg. text_line{
      clear:both;
      margin-bottom:2px;
    }

  <image>                       //float
    <h3 clas="text_line">second row</h3>
  </image>                      //float


  left,right,none     //help layout webpages with positioning
              //when floating an element you need to give it an explicit width

  p{            //to make something horizontal like a menu, float each list item to the left, and space out with margin
    width:  300px;
    float:  left;
    margin-right: 20px;
  }

WRAPPING TEXT
  <div id="myDiv">    //if you want text to wrap, you apply float to the div (not to the text)
    <p></p>       //with float applied, actual text wraps (because is inline) but not the <p> (block-level element),
    <p></p>
  </div>

  #myDiv{
    float:left;     //browser pushses element as far as it can in direction.
    margin:30px;
  }

  p{
    display:inline;   //<p> is a block-level element so fix by make it inline
  }

BLOCK level elements
  takes up full width available
  generate a block box, they have a line break before and after them
  ignore floated elements
  anything that comes after these are pushed onto a new line (create space around itself)
  eg. <h>, <p>, <div>, <li>

INLINE level elements
  takes up as much width as necessary
  has no linebreaks before or after and will flow right around the next inline element (does NOT create space around itself)
  inline elements will respect the floated elements
  can put inline elements inside block elements but CANNOT put block elements in inline elements
  eg. <a>, <span>

BLOCK-> INLINE
  changing elements only changes how it is displayed not what kind of element it is
  eg. li{ display:inline; }

INLINE -> BLOCK
  span {display:block; }


<p> actual text inside of the paragraph element is being pushed over by the floated element
but the <p> element by itself, its border still extends all the way to the edge and completely ignores the floated element
Why?? difference between 'block' and 'inline' elements
Paragraph <p> is a block level element, text inside a <p> is inline,
thats why the borders of the paragraphs extend past the floated element but the text flows around it.


POSITION
  allows you to position an element (top/right/bottom/left)
  also for z-index
  4 position methods

  position:static;          //default html positioning
  position:fixed;           //positioning relative to browser window
                    //does not move even if wondow is scrolled
                    //document and other elements behave as if the fixed position element does not exist
                    //can overlap

  position:relative;          //relative position to normal position
                    //can overlap other elements but reserved space for element still preserved in normal flow

  position:absolute;          //position relative to first parent element that has a position other than static.
                    //if not such element is found block is <html>
                    //absolute positioned elements are removed from normal flow
                    //document and other elements behave like the element does not exist
                    //can overlap

OVERLAPPING
  when elements are positioned outside normal flow, they can overlap other elements
  z-index   - specifies stack order
        - can have positive or negative stack order

  -elements with greater stack order is always in front of an element with a lower stack order
  -if no z-index, element positioned last in html code will be on-top

CLIPPING
  using css, cut image so element is clipped into shape (absolute positioned element)
  position: absolute;
  clip: rect(top, right, bottom, left);

OVERFLOW
  overflow: auto/scroll/hidden;

COLOR
  background-color: rgb(0,255, 0);
  background-color: #00FF00;
  color:           //applies to text only

FONTS

  font:
          1.font-weight 2.font-variant 3.font-style 4.font-size 5.font-family
          bold small-caps italic 3em Helvetica,sans-serif;    //SHORTCUT

  font-size:    25px;
          1em;          //browswer font size (em is relative size to surrounding elements, em=pixels/16)
          2em;          //2x browswer font size
          :0.8em;         //80% browser font size

  font-family:  Georgia, serif;
          Helvetica, Arial, san-serif;
          'Times New Roman', Georgia      //serif (generic family)
          'Times New Roman',Times,serif

          Arial, Verdana            //sans-serif (generic family)
          Arial, Helvetica, sans-serif

          'Courrier New', 'Lucida Console'  //monospace (generic family)
          'Lucida Console', Monaco, monospace

  //font-family should have several names as a fallback, start with font you want, end with generic family,
  //if name of font is more than one word, use quotation marks,
  //font-family separated by comma

  font-style:   normal, oblique, italic
  font-variant: small-caps;
  font-weight:  normal, bold...

TEXT
  line-height:  3em;          //sets leading of paragraphs (space between the lines)
  letter-spacing: 30px;         //spacing between letters
  word-spacing: 3em;
  white-space:  nowrap;         //prevent text from wrapping to next line
  text-align:   left,right,center,justified;
  text-decoration:  none, underline;        //no styling on link, instead of underline, rather use border-bottom:1px solid black;
  text-indent:  50px;
  vertical-align: text-top / text-bottom;


CAPTIONS
  <img src="" alt="" title="this is the caption">     //title is the hover over caption
//================================================================================

CURSOR
  <span style="cursor:auto">
           :crosshair">
           :default">
           :e-resize">
           :help">
           :move">
           :n-resize">
           :ne-resize">
           :nw-resize">
           :pointer">
           :progress">
           :s-resize">
           :se-resize">
           :sw-resize">
           :text">
           :w-resize">
           :wait">

//================================================================================
//DATA TYPES
  relative lengths (scale easier on multiple devices)
      38em      commonly used on fonts to make them scalable accross different devices, the font size
      80ex      x height of font

  absolute lengths
      6in
      15cm
      150mm

      450pt     1point = 1/72th inch
      380pc     1pica = 12 points
      600px     1pixel = .75points
      40%       fills 40% of allocated space

//================================================================================
//COLOR MODELS
  hexidecimal
    -#FF0000;
    -base 16 numbering system (start counting 0-9, then A-F to make up total of 16digits)
    -higher the value of each color the more that color will be represented in the result
    -additive color model

  named colors
    blue, red, green, orange

  rgb
    0-255 range
    background: rgb(255, 150, 0);

//================================================================================
//MEDIA TYPES
@media websites can have a different layout for screen, print, mobile phone, tablet etc
@media rule allows different style rules for different media in the same style sheet.

all     for all media type devices
aural     for speech & sound synthesizers
braille   for braille feedback devices
embossed  for paged braille printers
handheld  for small or handheld devices
print     for printers
projection for projected presentations. like slides for computer screens
screen    for computer screens
tty     for media using a fixed-pitch character grid like teletypes & terminals
tv      for television type devices

<style>
  @media screen {
    p.test {
      font-family:verdana, sans-serif;
      font-size:14px;
    }
  }
  @media print{
    p.test{
      font-family:times, serif;
      font-size:10px;
    }
  }
  @media screen, print{
    p.test{
      font-weight:bold;
    }
  }
</style>


//WEB PRINT FRIENDLY STYLESHEETS

set media="print"

<link rel='stylesheet' href="css/style.css" type="text/css" media="all">
<link rel='stylesheet' href='css/print.css' type="text/css" media="print">

1. remove any backgrounds
  html, body{
    background:none;
  }

2. remove navigation
  #nav{
    display:none;
  }

3. remove sidebars, 2nd level heading
  #nav, #sidebar, #header h2{
    display:none;
  }

4. make header smaller
  #header h1{
    font-size: 2em;
    text-align: center;
  }

5.  make content <span> width of page
  #content{
    width:100%
  }

6. make padding for image+lower font size to 12pts
  #content .post{
    padding:30px;
    font-size:12pt;
  }

7. make urls printed after youcan see the link
  #content .post a:after{
    content:"('attr(href)')";   grabs href attribute of anchor tags, and prints it after the links
  }

//================================================================================


VALIDATION
  http://validator.w3.org/
    validate by url
    validate by file upload
    validate by direct input      *most convenient

CSS VALIDATION
  http://jigsaw.w3.org/css-validator/


//================================================================================
//CSS FRAMEWORKS

parts of CSS framework
1. grid system
2. reset code       //reset all default styles that browsers apply
3. typography     //layout type, scale fonts appropriately
4. forms        //allow form styling
5. print styles     //printing styles
6. plugins        //allow prebuilt widgets

//EXISTING FRAMEWORKS
SASS          //syntactically awesome stylesheets *not really a framework
COMPASS         //framework built ontop of SASS
BLUEPRINT
960 grid
BOOTSTRAP3

//================================================================================






-->
