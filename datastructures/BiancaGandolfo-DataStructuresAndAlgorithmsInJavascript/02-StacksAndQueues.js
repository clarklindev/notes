//Stack
// created an example of a stack with string as storage container
//stack is last in - first out

var StringStack = function(){
    this.storage = "";
};

//pushing value to stack
StringStack.prototype.push = function(val){
    var separator = "."
    //concat to current storage
    this.storage = this.storage.concat(separator, val);
};

//returns the popped off string
StringStack.prototype.pop = function(){
    //find last index of delimitor
    var index = this.storage.lastIndexOf(".");
    //find what to pop, from index to end,
    var popping = this.storage.slice(index);
    //update storage without last item
    this.storage = this.storage.slice(0, index);
    //return the string we popped
    return popping;
}

//Testing string Stack
// var myWeeklyMenu = new StringStack();
// myWeeklyMenu.push('RedBeans');
// console.log('inside: ', myWeeklyMenu);
// console.log('pop: ', myWeeklyMenu.pop());
// console.log('inside: ', myWeeklyMenu);

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

//Stack with an Object as Data storage
// can add a capacity for stack
var Stack = function(capacity=100){
    this.storage = {};
    this.keyIndex = 0;
    this.capacity = capacity;
};

//O(1)
//returns length of stack
Stack.prototype.push = function(val){
    if(this.keyIndex < this.capacity){
        this.storage[this.keyIndex++] = val;
        console.log('pushed onto stack...', 'length:', this.keyIndex);
        return this.keyIndex;
    }
    console.log('max capacity reached');
    return this.keyIndex;
}

//0(1)
//remove item from stack, returns popped off item or null
Stack.prototype.pop = function(){
    if(this.keyIndex > 0){
        var value = this.storage[--this.keyIndex];
        delete this.storage[this.keyIndex];
        console.log('popped off stack...', 'length:', this.keyIndex);
        return value;
    }
    console.log('empty stack');
    return null;
}

//views the whole stack
Stack.prototype.viewStack = function(){
    console.log(Object.keys(this.storage).map(item=>{
        return this.storage[item];
    }));
}

//view last element in Stack
Stack.prototype.peek = function(){
    return this.storage[this.keyIndex-1];
}

Stack.prototype.count = function(){
    console.log("count: ", this.keyIndex);
    return this.keyIndex;
}

//testing Object Stack
// var objStack = new Stack(2);
// objStack.push('apple');
// objStack.push('orange');
// objStack.push('pear');
// objStack.count();
// objStack.viewStack();
// objStack.pop();
// objStack.viewStack();
// objStack.pop();
// objStack.viewStack();
// objStack.pop();
// objStack.viewStack();
// objStack.count();

//Queue
//https://github.com/kuychaco/algoClass
//First in / First Out

var Queue = function(capacity){
    this.storage = {};
    this.size = 0;
    this.capacity = capacity;
}

//returns size of queue
Queue.prototype.enqueue = function(val){
    if(this.size < this.capacity){
        this.storage[this.size] = val;
        this.size++;
        return this.size;
    }
    console.log("queue is full...")
}

//returns deleted element
Queue.prototype.dequeue = function(){
    if(this.size > 0){
        var remove = this.storage[0];
        delete this.storage[0];
        this.size--;
        return remove;
    }
    console.log("queue is empty...")
    return null;
}

Queue.prototype.count = function(){
    console.log("count: ", this.size);
}

//peek returns the next item to be removed from queue (queues remove elements from front)
Queue.prototype.peek = function(){
    return this.storage[0];
}

Queue.prototype.viewQueue = function(){
    console.log(Object.keys(this.storage).map(key=>{
        return this.storage[key];
    }));
}

//testing queue
var queue = new Queue(3);
queue.enqueue('apple');
queue.enqueue('banana');
queue.enqueue('grapes');
queue.count();
queue.viewQueue();
queue.dequeue();
queue.viewQueue();
console.log('queue: ', queue);

//min stack
// Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
function MinStack(capacity){
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack(capacity);
}

//O(1)
MinStack.prototype.push = function(value){
    //if there is stack capacity to store more items
    if(this._count < this._capacity){
        //if last item is less than compared prop 'value'
        if(this._min.peek() < value){
            //keep pushing what is min
            this._min.push(this._min.peek());
        }
        else{
            this._min.push(value);
        }
        //store the added value in normal storage object
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Max capacity reached';
}

//O(1)
MinStack.prototype.pop = function(){
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if(this._count < 0){
        this._count = 0;
    }
    return value;
};

//O(1)
//last element on stack
MinStack.prototype.peek = function(){
    return this._storage[this._count-1];
};

//O(1)
//elements on stack
MinStack.prototype.count = function(){
    return this._count;
}

//O(1)
//min value on stack
MinStack.prototype.min = function(){
    return this._min.peek();
}

//testing MinStack
// var myStack = new MinStack(10);
// myStack.push(6); //6 is min
// myStack.push(23); //6 is min
// myStack.push(9); //6 is min
// myStack.push(5); //5 is min

// console.log("last on stack: ", myStack.peek());
// console.log("count: ", myStack.count());
// console.log("min on stack: ", myStack.min());

//Implementing a Queue with Two Stacks - constraining it to Stack methods - push() and pop()
function Queue_TwoStacks() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val){
    this._stackIn.push(val);
}

Queue_TwoStacks.prototype.transferStacks = function(){
    while(this._stackIn.count() > 0){
        this._stackOut.push(this._stackIn.pop());
    }
}

Queue_TwoStacks.prototype.dequeue = function(){
    if(this._stackOut.count() === 0) {
        this.transferStacks();
    }
    return this._stackOut.pop();
}

Queue_TwoStacks.prototype.count = function(){
    return this._stackIn.count() + this._stackOut.count();
}