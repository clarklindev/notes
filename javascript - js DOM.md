JAVASCRIPT DOM

Interacting with the DOM

* change/remove HTML elements in the DOM/on the page
* change & add CSS styles to elements
* read and change element attributes (href, src, alt, custom)
* create new HTML elements and insert them into the DOM/the page
* attach event listeners to elements (click, keypress, submit)

What we will learn

* Navigating the DOM and the Query Selector
* Changing the DOM / Manipulating HTML elements, content & CSS
* interacting with forms & events (submit, click, keypress)
* creating new elemetns via JS and insert them into the DOM
* creating a mini reading list app

--------------------------------------------------------

getElementById 

In console: 
document.getElementById('page-banner')
var banner = document.getElementById('page-banner')

--------------------------------------------------------

getElementByClassName by class method:
var titles = document.getElementByClassName('title')
usage: titles[0]

var list = document.getElementsByTagName('li')
list[0]

--------------------------------------------------------

traversing the collection

method1:

for( i=0 i< titles.length; i++){
console.log(titles[i])
}

method2:
var titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles)); //false
console.log(Array.isArray(Array.from(titles))); //true

Array.from(title).forEach(function(item){
console.log(item)
})
--------------------------------------------------------

The Query Selector

jquery: 
$('#wrapper')

vanilla js:
const wrap = document.querySelector('#wrapper');
const wrap = document.querySelector('#book-list li:nth-child(2).name');
var books = document.querySelector('#book-list li .name'); //returns first

var books = document.querySelectorAll('#book-list li .name'); //returns all

cycling throught the collection


Array.from(books).forEach(function(book){ //pass through 'book' (a book that it is iterating through at that moment in time)
console.log(book);
}

--------------------------------------------------------

Changing text and html content

using querySelectorAll returns a collection...need to first turn into array
using forEach method works directly with the nodelist without turning it into an array

var books = document.querySelectorAll('#book-list li.name');

textContent
Array.from(books).forEach(function(book){
console.log(book.textContent);
});

change textcontent
Array.from(books).forEach(function(book){
book.textContent = 'test';
});

append
Array.from(books).forEach(function(book){
book.textContent += '(book title)';
});


innerHTML
update html (replace)
const booklist = document.querySelector('#book-list');
console.log(bookList.innerHTML);
bookList.innerHTML = '<h2>Books and more</h2>';
bookList.innerHTML += '<p>Books and more</p>';


--------------------------------------------------------

Nodes

types of nodes:

* element
* text node
* comment
* attribute

const banner = document.querySelector('#page-banner');

Find Type of node
console.log('#page-banner node type is: ', banner.nodeType); //returns a number

what the numbers mean? www.w3schools.com/Jsref/prop_node_nodetype.asp
1. Element
2. Attr
3. Text
4. CDATASection
5. EntityReference
6. Entity
7. ProcessingInstruction
8. Comment
9. Document
10. DocumentType
11. DocumentFragment
12. Notation

Find out element name (what element is called)
console.log('#page-banner node type is: ', banner.nodeName); //returns element name

Has child nodes?
console.log('#page-banner has child nodes:', banner.hasChildNodes()); //returns true or false

Clone a node
const clonedBanner = banner.cloneNode(true) //without the 'true' it doesnt clone the child contents
console.log(clonedBanner);

--------------------------------------------------------

Traversing the DOM

.parentNode
.parentElement

.childNodes	*includes all nodes
.children	*only child elements

.nextSibling *includes all node types
.nextElementSibling * only element siblings

.previousSibling
.previousElementSibling


--------------------------------------------------------

Events
