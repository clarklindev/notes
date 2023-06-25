// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

//the idea is to probably not use the array functions,
class Stack{
    constructor(){
        this.stack = {};
        this.length = 0;
    }

    pop(){
        // return this.stack.pop();
        if(this.length>= 1){
            let lastValue = this.stack[this.length-1];
            delete this.stack[this.length-1];
            this.length--;
            return lastValue;
            
        }
    }
    
    push(item){
        this.stack[this.length] = item;
        this.length++;
    }

    peek(){
        if(this.length >0){
            return this.stack[this.length-1];
        }
    }

    size(){
        return this.length;
    }
}

module.exports = Stack;
