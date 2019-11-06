CSS3

most important modules of css3

- selectors
- box model
- background+borders
- image values + replaced content
- text effects
- 2D/3D transformations
- Animations
- Multiple Column layout
- user interface

//=======================================================================================

CSS Borders

- css3 can make rounded borders
- add shadow to boxes
- use an image as a border

CSS3 BORDER-RADIUS (ROUNDED CORNERS)
div{
border: 2px solid;
border-radius:25px;
}

CSS3 BOX-SHADOW
div{
box-shadow:10px 10px 5px #888888;
}

CSS3 BORDER-IMAGE (using an image to create a border around a <div>)
div{
border-image:url(border.png) 30 30 round;
-webkit-border-image:url(border.png) 30 30 round; //safari
-o-border-image:url(border.png) 30 30 round; //opera
}

//=======================================================================================

CSS3 BACKGROUNDS
BACKGROUND-SIZE
-specifies a size of the background image allows us to re-use background images in different contexts.
-can specify size in pixels or percentage.
-if specified as percentage, size is relative to width and height of parent element

    eg. resize a background image
    div{
      background:url(img_flwr.gif);
      background-size:80px 60px;
      background-repeat:no-repeat;
    }

    eg. stretch background to fill content area
    div{
      background:url(img_flwr.gif);
      background-size: 100% 100%;
      background-repeat:no-repeat;
    }

BACKGROUND-ORIGIN
-specifies the positioning area of the background images
-values can be in
content-box
padding-box
border-box

    eg. div{
        background:url(img_flwr.gif);
        background-repeat:no-repeat;
        background-size:100% 100%;
        background-origin:content-box;
      }

CSS3 MULTIPLE BACKGROUND IMAGES
css3 allows you to use several images for an element

body{
background:url(img_tree.gif), url(img_flwr.gif);
background-size:100% 100%;
background-repeat:no-repeat;
}
//=======================================================================================
CSS3 GRADIENTS (http://www.w3schools.com/css/css3_gradients.asp)

display smooth transitions between 2 or more colours
-linear gradient (up/down/left/right/diagonal)
-radial gradient (defined by their center)
  
 FUNCTIONS

linear-gradient()
must define atleast 2 color stops (color to transition)
syntax:
background:linear-gradient(direction, color-stop1, color-stop2); //this standard syntax must appear last (after -webkit, -o-, -moz-)

    TOP/DOWN LINEAR GRADIENT
    #grad{
      background:-webkit-linear-gradient(red, blue);    //safari 5.1 to 6.0
      background:-o-linear-gradient(red, blue);     //opera 11.1 to 12.0
      background:-moz-linear-gradient(red, blue);     //firefox 3.6 to 15
      background:linear-gradient(red, blue);        //default
    }

    LEFT/RIGHT LINEAR GRADIENT (LEFT TO RIGHT)
    #grad{
      background:-webkit-linear-gradient(left, red, blue);  //safari 5.1 to 6.0
      background:-o-linear-gradient(right, red, blue);    //opera 11.1 to 12
      background:-moz-linear-gradient(right, red, blue);    //firefox 3.6 to 15
      background:linear-gradient(to right, red blue)      //default
    }

    LINEAR GRADIENT-DIAGONAL
    specfify both horizontal and vertical starting positions example below;
    top left to bottom right (red to blue)

    #grad{
      background:-webkit-linear-gradient(left top, red, blue);  //safari 5.1 to 6.0
      background:-o-linear-gradient(bottom right, red, blue);   //opera 11.1 to 12
      background:-moz-linear-gradient(bottom right, red, blue); //firefox 3.6 to 15
      background:linear-gradient(to bottom right, red, blue);   //default
    }

    GRADIENTS USING ANGLES
      for more control over direction of gradient

      SYNTAX:
      background:linear-gradient(angle, color-stop1, color-stop2);
      #grad {
       background: -webkit-linear-gradient(180deg, red, blue);     /* For Safari 5.1 to 6.0 */
       background: -o-linear-gradient(180deg, red, blue);      /* For Opera 11.1 to 12.0 */
       background: -moz-linear-gradient(180deg, red, blue);      /* For Firefox 3.6 to 15 */
       background: linear-gradient(180deg, red, blue);         /* Standard syntax */
      }

      the angle is the angle between a horizontal line and the gradient line, going counter-clockwise
      ie.

      0 degrees creates a bottom to top gradient
      90 degrees creates a left to right gradient
      180 degrees creates a top to bottom gradient
      -90 degrees creates a right to left gradient

    USING MULTICOLOR STOPS
      #grad{
        background:-webkit-linear-gradient(red, green, blue);   //safari 5.1 to 6
        background:-o-linear-gradient(red, green, blue);      //opera 11.1 to 12
        background:-moz-linear-gradient(red, green, blue);      //firefox 3.6 to 15
        background:linear-gradient(red, green, blue);       //default
      }

    USING TRANSPARENCY
    css3 can be used to create fading effect
      - use rgba() function to define colour stops
      - alpha value is bet 0 and 1

      #grad{
        background:-webkit-linear-gradient(left, rgba(255, 0, 0, 0), rgba(255,0,0,1));    //safari 5.1 to 6
        background:-o-linear-gradient(right, rgba(255,0,0,0), rgba(255,0,0,1));       //opera 11.1 to 12
        background:-moz-linear-gradient(right, rgba(255,0,0,0), rgba(255, 0,0,1));      //Firefox 3.6 to 15
        background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));       //default
      }

repeating-linear-gradient()
#grad{
background:-webkit-repeating-linear-gradient(red, yellow 10%, green 20%); //safari 5.1 to 6
background:-o-repeating-linear-gradient(red, yellow 10%, green 20%); //opera 11.1 to 12
background:-moz-repeating-linear-gradient(red, yellow 10%, green 20%); //firefox 3.6 to 15
background:repeating-linear-gradient(red, yellow 10%, green 20%); //default
}

radial-gradient()
-radial gradient is defined by its center
-must also define atleast 2 colour stops
-can specify the gradients - center - shape (circle/ ellipse) - size

    default values
        center - center
        shape - ellipse
        size - farthest-corner

    syntax: background:radial-gradient(center, shape, size, start-color, last-color);

    Radial Gradient - Evenly Spaced Color Stops (this is default)
    #grad {
      background: -webkit-radial-gradient(red, green, blue);      /* Safari 5.1 to 6.0 */
       background: -o-radial-gradient(red, green, blue);         /* For Opera 11.6 to 12.0 */
       background: -moz-radial-gradient(red, green, blue);       /* For Firefox 3.6 to 15 */
       background: radial-gradient(red, green, blue);          /* Standard syntax */
    }

    Radial Gradient - Differently Spaced Color Stops
    (A radial gradient with differently spaced color stops)
    #grad {
       background: -webkit-radial-gradient(red 5%, green 15%, blue 60%);   /* Safari 5.1-6.0 */
      background: -o-radial-gradient(red 5%, green 15%, blue 60%);    /* For Opera 11.6-12.0 */
       background: -moz-radial-gradient(red 5%, green 15%, blue 60%);    /* For Firefox 3.6-15 */
       background: radial-gradient(red 5%, green 15%, blue 60%);       /* Standard syntax */
    }

    Set shape
    can be circle or ellipse (default)
    background:-webkit-radial-gradient(circle, red, yellow, green);     //safari
    background:-o-radial-gradient(circle, red, yellow, green);        //opera 11.6 to 12
    background:-moz-radial-gradient(circle, red, yellow, green);      //firefox 3.6 to 15
    background:radial-gradient(circle, red, yellow, green);         //default

    Use of Different Size Keywords (tries to match the occupied space of the radial to the sides of an image)
    The size parameter defines the size of the gradient.
    It can take four values:
      -closest-side
      -farthest-side
      -closest-corner
      -farthest-corner (default)

      background:radial-gradient(60% 55%, closest-side, blue, green, yellow, black);

repeating-radial-gradient()
The repeating-radial-gradient() function is used to repeat radial gradients
#grad {  
 background: -webkit-repeating-radial-gradient(red, yellow 10%, green 15%); /_ For Safari 5.1 to 6.0 _/
background: -o-repeating-radial-gradient(red, yellow 10%, green 15%); /_ For Opera 11.6 to 12.0 _/
background: -moz-repeating-radial-gradient(red, yellow 10%, green 15%); /_ For Firefox 3.6 to 15 _/
background: repeating-radial-gradient(red, yellow 10%, green 15%); /_ Standard syntax _/
}

//=======================================================================================
Text-Effects

text-shadow
word-wrap

css3 text shadow:
-horizontal shadow
-vertical shadow
-blur distance
-color

    eg..
    h1{
      text-shadow:5px 5px 5px #FF0000;
    }

CSS3 word wrap
in css3, word-wrap allows you to force text to wrap (even if it means splitting the word in the middle)
syntax:
p{
word-wrap:break-word;
}

Other CSS3 text properties (mostly unsupported by major browsers) - hanging-punctuation - punctuation trim - text-align-last - text-emphasis - text-justify - text-outline - text-overflow: clip|ellipsis|starting //supported - text-shadow //supported - text-wrap - word-break //supported except opera (specifies line breaking rules for non asian script) - word-wrap //supported

//=======================================================================================
CSS3 fonts
-using Css3. designers can use any fonts
-include the font file on web server,
-use @font-face rule
-IE9, firefox, chrome, safari, opera support WOFF (web open font format) - firefox, chrome, safari, opera support TTF and OTF

HOW TO USE @font-face

1. must first define a name for the font
2. then point to the font file (use lowercase letters for font file name)
3. your own fonts are defined in the CSS3 @font-face rule
4. to use the font for an HTML element, refer to the name of the font (eg. myFirstFont) through the font-family property

  <style>
    @font-face{             (3.)
      font-family: myFirstFont;   (1.)      
      src:url(sansation_light.woff);  (2.)
    }

    div{
      font-family:myFirstFont;    (4.)
    }
  </style>

USING BOLD TEXT
-you must add another @font-face rule containing descriptors for bold text.
-file sensation_bold.woff is another font file that contains bold characters for the sansation font
-browsers will use this when a piece of text with font-family 'myFirstFont' should render bold
-many @font-face rules for same font

@font-face{
font-family:myFirstFont;
src:url(sansations_bold.woff);
font-weight:bold;
}

CSS3 font descriptors

- font-family (required)
- src (required)

- font-stretch(optional) normal/condensed/ultra-condensed/extra-condensed/semi-condensed/expanded/semi-expanded/ultra-expanded/extra-expanded
- font-style (optional) normal/italic/oblique
- font-weight (optional) normal/bold/100/200/300/400/500/600/700/800/900
- unicode-range(optional) range of UNICODE characters font supports default is 'U+0-10FFFF'

//=======================================================================================
CSS3 2D transformations
using css3 we can - move - stretch - turn - spin - scale elements

TRANSFORM property - supported by IE10, firefox, opera - chrome/ safari require -webkit- - IE9 requires prefix -ms-

2D transform methods - translate() - transform: translate(X px; Y px);

    - rotate()   - clockwise at a degree

            transform:rotate(30deg);

    - scale()  - transform:scale(1,2);

    - skew()   - transform:skew(30deg, 20deg);

    - matrix()   - combines all 2d transform methods into 1
           - takes 6 parameters (a,b,c,d,e,f)

    - translateX()
    - translateY()
    - scaleX()
    - scaleY()
    - skewX()
    - skewY()

//=======================================================================================
3D Transformations

support: IE10, firefox support 3d transform
chrome/safari require -webkit-
opera - does NOT support 3d transform (only 2D)

transform: rotateX(120deg); element rotates around x-axis at given degree
transform: rotateY(120deg); element rotates around y-axis

CSS3 transform properties

- transform
- transform-origin
- transform-style (how nested elements are rendered in 3d space)
- perspective
- perspective-origin
- backface-visibility (whether or not an element should be visible when not facing the screen)

3D transform methods

- matrix3d()
- translate3d(x,y,z)
- translateX(x) / translateY(y) / translateZ(z)
- scale3d(x,y,z)
- scaleX(x), scaleY(y), scaleZ(z)
- rotate3d(x,y,z,angle)
- rotateX(angle), rotateY(angle), rotateZ(angle)
- perspective(n)

//=======================================================================================
CSS3 Transitions
support:IE10, firefox, chrome, opera support transition
safari requires prefix -webkit-
ie9 and earlier DONT support transition
chrome 25 and earlier need -webkit-

Need to specify - property to add effect to - duration of effect (required??)

eg. div{
transition:width 2s;
-webkit-transition: width 2s;
}

eg. div:hover{ //note when mouse moves out of div area <div> returns to initial state
width:300px
}

    div{
      width:100px;
      height:100px;
      background:red;
      transition:width 2s;
      -webkit-transition:width 2s;
    }

MULTIPLE CHANGES - to add multiple transitional effect for more than one style - add more properties separate by comma

    eg. div{
          transition:width 2s, height 2s, transform 2s;
       }

       div:hover{
           width:200px;
           height:200px;
           transform:rotate(180deg);
       }

CSS3 transition properties - transition shorthand property for setting the 4 transition properties in a single property - transition-property CSS property which transition is applied - transition-duration defines length of time transition takes - transition-timing-function default "ease" / linear / ease-in / ease-out / ease-in-out / cubic-bezier(n,n,n,n) - transition-delay defines when transition will start default 0

    eg. div{
        transition-property:width;
        transition-duration:1s;
        transition-timing-function:linear;
        transition-delay:2s;
      }

      or

      div{
        transition:width 1s linear 2s;
      }

//=======================================================================================
CSS3 Animations
to create animations in CSS3, you learn the @keyframe rule

@keyframe rule - is when animation is created

- specify a CSS style inside the @keyframes rule and animation will change from current style to new style

support
ie10, firefox, opera support @keyframe rule and animation property
chrome/safari need -webkit-
ie9 and less dont support this property

THE ANIMATION:
@keyframes myfirst
{
from{background:red;} //from same as 0%, can specify 25%, 50%, 75%, etc
to{background:yellow;} // to same as 100%
}

bind animation to a selector
specify: name of animation
duration of animation

div{
animation:myfirst 5s;
-webkit-animation:
}

CSS3 ANIMATION PROPERTIES

-     @keyframe
- animation (shorthand property for all animation properties except animation-play-state property)
- animation-name (name of @keyframes animation)
- animation-duration (default 0)
- animation-timing-function (linear/ ease / ease-in / ease-out / ease-in-out / cubic-bezier(n,n,n,n) )
- animation-delay (default 0)
- animation-iteration count (no. of times animation is played) default 1 / or infinite
- animation-direction (normal(default) /reverse/alternate/alternate-reverse)
- animation-play-state (running (default) / paused)

div{
animation-name:myfirst;
animation-duration:5s;
animation-timing-function:linear;
animation-delay:2s;
animation-iteration-count:infinite;
animation-direction:alternate;
animation-play-state:running;
}

same as:
div{
animation: myfirst 5s linear 2s infinite alternate
}

//=======================================================================================
CSS3 MULTIPLE COLUMNS
can create multiple columns for laying out text - column-count - column-gap - column-rule

support
IE10, opera support multiple column properties
firefox requires -moz- prefix
chrome / safari -webkit-
ie9 + earlier do not support this feature

div{
column-count:3; //no. of columns
column-gap:40px; //gap between columns
column-rule:3px outset #FF00FF; //sets the width, style, color of the rule between columns
//style can be: none/ hidden / dated / dashed/ solid / double / groove / ridge / inset / outset
}

CSS3 multiple column properties

- column-count
- column-fill
- column-gap
- column-rule (shorthand for setting all column-rule properties)
- column-rule-color
- column-rule-style
- column-rule-width
- column-span
- column-width
- columns (shorthand propety for setting column-width and column-count)

//=======================================================================================
CSS3 User Interface

- appearance (normal/icon/window/button/menu/field)
- icon
- nav-down/nav-index/nav-left/nav-right/nav-up specifies where to navigate when user presses these keys

new CSS3 features - resizing elements (resize) supported by: firefox / chrome / safari - box-sizing (box-sizing) //ie / chrome / safari / opera / ff requires -moz- - outlining (outline-offset) not supported by ie

CSS3 resizing (specifies whether or not an element should be resizable by the user.)
div{
resize:both; //values: none/both/horizontal/vertical
overflow:auto;
}

CSS3 box-sizing allows you to define certain elements to fit an area in a certain way
(used to tell the browser what the sizing properties (width and height) should include)

    div{
      box-sizing:border-box;    //values: content-box(default)/border-box/inherit
      width:50%;
      float:left;
    }

CSS3 outline offset
-offsets an outline, and draws it beyond the border edge
-outlines do not take up space
-outlines may be non-rectangular

    div{
      border:2px solid black;
      outline:2px solid red;
      outline-offset:15px;
    }

//=======================================================================================
//=======================================================================================
