class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add to end
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //remove from end
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //shift remove from begining of linkedlist
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  //adding new node at head of list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //receives index, and return value at index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //receives index and value to update to, returns true if successfully updated, or false if not
  set(index, value) {
    var foundNode = this.get(index); //returns null or the node
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  //insert node at index, returns true or false
  insert(index, value) {
    //invalid
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      //push() new node to end of list
      return !!this.push(value);  //!! is true/false
    }

    //add to head
    if (index === 0) {
      return !!this.unshift(value); //!! is true/false
    }

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    new node.next = temp;
    this.length++;
    return true;
  }

  //removing node
  remove(index){
    if(index <0 || index >= this.length){
      return undefined;
    }
    if(index === 0){
      return this.shift();
    }
    if(index === this.length-1){
      return this.pop();
    }
    var previousNode = this.get(index-1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  //reverse singly linked list
  reverse(){
    //swap head/tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for(var i =0; i< this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }  
    return this;
  }

  print(){
    var arr = [];
    var current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
