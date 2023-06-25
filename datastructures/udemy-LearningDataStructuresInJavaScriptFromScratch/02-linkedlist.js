function LinkedList(){
    this.head = null;
    this.tail = null;
}

//having a prev pointer makes this a doubly linked list
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var node1  = new Node(100, 'node2', null);
console.log(node1);
var ll = new LinkedList();

// adding to head
LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    //linkedList is not empty
    if( this.head) {
        this.head.prev = newNode;
    }
    //linkedList is empty
    else{
        this.tail = newNode;
    }
    this.head = newNode;
}
//testing add to head
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

//add to tail
LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    //linkedlist is not empty
    if(this.tail){
        this.tail.next = newNode;
    }
    //linkedList is empty
    else{
        this.head = newNode;
    }
    this.tail = newNode;
}
//testing add to tail
// ll.addToTail(10);
// ll.addToTail(20);
// ll.addToTail(30);

//remove head
LinkedList.prototype.removeHead = function(){
    //linked list empty?
    if(!this.head){
        return null;
    }
    //linked list not empty
    //keep reference to current head
    var val = this.head.value;

    //new head this current head .next
    this.head = this.head.next;

    //if there is now a head
    if(this.head){
        this.head.prev = null;
    }
    //no head, meaning list is empty
    //is list empty after we remove this node
    else {
        this.tail = null;
    }

    return val;
}
//testing remove from head
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
//2000, 1000, 3000
// console.log(ll.removeHead()); //removes 2000

//remove tail
LinkedList.prototype.removeTail = function(){
    //if ll is empty
    if(!this.tail){
        return null;
    }
    //if ll not empty
    var val = this.tail.value;
    //make the tail the node before tail node
    this.tail = this.tail.prev;
    
    //NOTE: without a .prev pointer, 
    //currentNode = this.head
    //finds one element before the tail
    //while(currentNode.next !== this.tail){
    //currentNode = currentNode.next;        
    //}
    //currentNode.next = null;
    //this.tail=currentNode;

    //is new tail existing
    if(this.tail) {
        this.tail.next = null;
    }
    //is list empty after we remove this node
    else{
        this.head = null; 
    }
    return val;
}
//testing remove from tail
// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');
// //three, two, one
// console.log(ll.removeTail()) //removes one

// searches linkedlist, if does not exist return null, else return item
//traversing list, currentNode will update
//using while loop to traverse list
//as long as currentNode is not null, perform the while loop
LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === searchValue){
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
}
//testing searching
// ll.addToHead(123);
// ll.addToHead(70);
// ll.addToHead('hello');
// ll.addToTail(19);
// ll.addToTail('world');
// ll.addToTail(20);
// console.log(ll.search(70));     //returns 70
// console.log(ll.search('world'));    //returns 'world'
// console.log(ll.search(10));     //null not found

//indexOf - returns array of all indexs with a search value
LinkedList.prototype.indexOf = function(searchValue){
    var resultArray = [];
    var currentNode = this.head;
    var counter= 0;
    while(currentNode){
        if(currentNode.value === searchValue){
            resultArray.push(counter);
        }
        counter++;
        currentNode = currentNode.next;
    }
    return resultArray;
}
//testing indexOf
// ll.addToTail(1);
// ll.addToTail(5);
// ll.addToTail(3);
// ll.addToTail(5);
// ll.addToTail(8);
// ll.addToTail(7);
// ll.addToTail(5);
// console.log(ll.indexOf(5));

//forEach function to execute on each node
function sayHi(val){
    console.log('hi: ', val);
}
LinkedList.prototype.forEach = function(callback){
    let node = this.head;
    while(node){
        callback(node.value);
        node=node.next;
    }
}
//testing forEach
// ll.addToTail(1);
// ll.addToTail(5);
// ll.addToTail(3);
// ll.addToTail(5);
// ll.addToTail(8);
// ll.addToTail(7);
// ll.addToTail(5);

// ll.forEach(sayHi);

LinkedList.prototype.print = function(){
    var result = [];
    this.forEach(function(value){
        result.push(value);
    });
    result.join(', ');
    console.log('print: ', result);
    return result;
}
// ll.print();

//insert after
LinkedList.prototype.insertAfter = function(node, value) {
    
    //create new node
    var newNode = new Node(value);
    //attach old.next to newNode.next
    newNode.next = node.next;
    //then set old.next to newNode
    node.next = newNode;

    //if tail, set tail to newNode
    if(this.tail === node){
        this.tail = newNode;
        return newNode; 
    }
}

//testing insert after
// ll.addToTail(3);
// ll.addToTail(4);
// ll.insertAfter(ll.head,5);
// ll.print()