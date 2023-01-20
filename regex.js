var str = `Is this This?`;

//CONSTRUCTOR METHOD regex creation
var regex = new RegExp('is'); //'is' = character pattern
//LITERAL METHOD regex creation (regex using /pattern/)
var regex = /is/;

//METHODS
//returns true/false
console.log(regex.test(str));
//getting more info out of regex
//returns ['pattern', index:, input:''] or null when not found
console.log(regex.exec(str));

//global flag to identify different parameters to our pattern
//g - meaning get all instances of is
var regex = new RegExp('is', 'g'); //second param is the flags ( g means global)
var regex = /is/g; //with global
//ignore case
var regex = new RegExp('is', 'gi'); //second param is the flags ( i means ignorecase)
var regex = /is/gi; //i stands for ignore case

//m for multiline
var regex = /gim/; //a line can include a line break

//highlighting - matching regular expression (useful for search matching)
const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};
var str = 'Is this This?';
var regex = /is/g;
output(str, regex, document.querySelector('pre'));

//--------------------------------------------------------------------------------
//returning an array for all .matches
console.log(str.match(regex));

//replace regex pattern with XX
console.log(str.replace(regex, str => 'XX'));

//return index of first pattern found
console.log(str.search(regex));

//--------------------------------------------------------------------------------
//Plain text patterns
//any pattern match with '.'
var regex = /.at/; //match anything (letters, digits, dashes, nonbreak-space ) that ends with 'at' eg. 'cat' 'hat' 'mat',
var regex = /..../; //match 4 character long
var regex = /\./; //using escape to match . (like a fullstop - escaped)

//--------------------------------------------------------------------------------
//finding repeat patterns
var regex = /a{5, }/g; //match atleast 5 a's up to infinity
var regex = /a{5, 6}/g; //match 5 a's to 6 a's
var regex = /a{0,}/g; //0 matches any empty string
var regex = /a*/g; //same as above
var regex = /a+/g; //equavalent of 1 to infinity
var regex = /a{0,1}/g; //equavalent of 0 or 1 instance of all as
//eg. var regex = /https{0,1}/g; //s is optional
//eg. var regex = /https{0,1}:\/\/.{1,}/g; //s is optional and it also needs atleast 1 .

var regex = /a?/g; //a is optional (quantifier) 0 or more instances of 'a'
//--------------------------------------------------------------------------------
//finding set of characters
var regex = /[bc]at/g; //[bc] ie. characters we willing to accept b,c
var regex = /[^bc]/; //negate ie.. not including b or c, before 'at'
var regex = /[a-zA-Z0-9?]/g; //range of valid characters including ?
var regex = /[^a-zA-Z0-9?]/g; //dont include chars in range of valid characters
//--------------------------------------------------------------------------------
//shorthand syntax
var regex = /\w/g; //shorthand for alphanumeric match [a-zA-Z0-9]
var regex = /\d/g; //shorthand for numeric match
var regex = /\s/g; //only match whitespace

var regex = /[^\w]/g; //not matching numbers or letters
var regex = /\W/g; //shorthand for above..
var regex = /\D/g; //not match digits

var regex = /[^\s]/g; //everything not whitespace
var regex = /\S/g; //shorthand for above
//--------------------------------------------------------------------------------
//Capture groups, find group of characters (|) pipe for alternation
var regex = /foo(bar|boo)/; //searches for 'foo' followed with 'bar' or 'boo'
var regex = /foo(bar|boo)?/; //searches for 'foo' followed by 0 or more instances of 'bar' or 'boo'

var str = `foo
foobar
foobaz
fooboo`;

var regex = /foo(bar)/g;

console.log(str.replace(regex), '**$1**'); //replace the 1st reference of the regex capture group (use $)

//trying to identify area-code
var str = `800-456-7890
(555) 456-7890
4564567890`;

//(optional open bracket) 3 digits (optional close bracket) (optional space or dash) followed by 3 digits (optional space or dash) followed by 4 digits
var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
//--------------------------------------------------------------------------------
//Lookaheads - Matching pattern followed by another pattern but we dont want to include the second pattern in our match
var str = `foo
foobar
foobaz
fooboo`;
var regex = /foo(?=bar|boo)/g; //only match foo that is followed by bar or foo
var regex = /foo(?!=bar|boo)/g; //negative lookahead - only match foo that is NOT followed by bar or foo
//--------------------------------------------------------------------------------
//word boundaries - matching the start and end of whole words
var str = `This island is his, it is`;
var regex = /\bis/g; //looking for whole words that start with 'is'
var regex = /\bis\b/g; //looking for whole words that start AND end with 'is'
var regex = /\Bis/g; //negate of word ie DOES NOT start with 'is'
var regex = /is\B/g; //look where 'is' is NOT end of word
//--------------------------------------------------------------------------------
//back references - match same string twice in a row
//useful for stripping html out of content
var str = `it was the the thing`;
var regex = /(the)\s?(?=\1)/g; //capture 'the' followed by maybe a whitespace,
// (?=\1) represents a lookahead and get first instance what we captured first

var regex = /(\w+)\s?(?=\1)/g; //match all first instance of duplicate words (\w+)

//strip out html tags
var regex = /<(\w+)>(.*)<\/\1>/g; //match any letters ,match whatever is inside,match first set of matched letters
console.log(str.replace(regex, '$2\n')); //reference capture group 2 which is (.*) part and split with linebreak \n
//--------------------------------------------------------------------------------
//line anchor - javascript regular expressions match the start and end of a line
//^ used inside of character classes[] ^ means a negation,
//^ used outside means line begining

var str = `12/1/16 12-16-13`;
var regex = /12/g; //gets all 12,
var regex = /^12/g; //line beginning 12

//multiline
var str = `12/1/16  
12-16-13`; //string on multiline, we want to get each 12 on line
var regex = /^12/gm; //m is multiline char, and starts with 12

var str = `12/1/16
12-16-13
11/12/16
12-12-2016`;
var regex = /^12.+16$/gm; //matches all 12, so (.+16) means 12 followed by AND ends with 16
//--------------------------------------------------------------------------------
