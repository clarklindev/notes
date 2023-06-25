// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    //insert at HEAD
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    //get linkedlist size
    size(){
        let counter =0;
        let node = this.head;

        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    //returns first element
    getFirst(){
        return this.head;
    }

    //returns last element in list
    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }

    //clearing the list
    clear(){
        this.head = null;
    }

    //removes first 
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){       
        //edge case - no head 
        if(!this.head){
            return;
        }

        //edge case - only one item
        if(!this.head.next){
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head;

        while(node.next){
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    insertLast(value){
        const last = this.getLast();
        if(last){
            //there are existing nodes
            last.next = new Node(value);
        }else{
            //list is empty
            this.head = new Node(value);
        }
    }

    getAt(index){
        let counter = 0;
        let node = this.head;

        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        //the node before the one we want to remove using getAt()
        const previous = this.getAt(index-1);
        //if previous doesnt exist return
        if(!previous || !previous.next){
            return;
        }

        //edge case - cant assign .next.next to null
        if(!previous || !previous.next){
            return;
        }    
        previous.next = previous.next.next;
    }

    insertAt(data, index){
        //EDGE CASE when list is empty
        if(!this.head){
            this.head = new Node(data);
        }

        //EDGE CASE adding to index of 0
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        //previous is one before node we want to insert
        const previous = this.getAt(index-1) || this.getLast();
        
        //create new node and asign previous nodes nex to new nodes next
        const node = new Node(data, previous.next);

        //repoint previous's next property to our new node
        previous.next = node;

    }

    //iterator function that applies function to every node in the list
    forEach(fn){
        let node = this.head;
        while(node){
            fn(node);
            if(node.next === null){
                return;
            }
            node = node.next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
