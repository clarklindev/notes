// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

//generic Node
class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(data){
        this.children.push(new Node(data))
    }
    remove(data){
        this.children = this.children.filter((node)=>{
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    //breadth first traversal
    //start with root node inside an array
    //while array has elements, shift() and stick children in array at tail
    traverseBF(fn){
        let arr = [this.root];
        
        while(arr.length){
            //take of first item in array
            const node = arr.shift();

            //OPTION1:
            //iterate through children and add to 'arr'            
            //for (let child of node.children){}
            
            //OPTION2:
            //or use spread operator and push each element one-by-one            
            arr.push(...node.children); 
            fn(node);           
        }
        
    }

    //depth first traversal
    //start with root node inside an array
    //while array has elements, shift() and stick children in array at head
    traverseDF(fn){
        let arr = [this.root];
        
        while(arr.length){
            //take of first item in array
            const node = arr.shift();

            //OPTION1:
            //iterate through children and add to 'arr'            
            //for (let child of node.children){}
            
            //OPTION2:
            //or use spread operator and push each element one-by-one            
            arr.unshift(...node.children); 
            fn(node);           
        }
    }
}

//usage:
// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;

module.exports = { Tree, Node };
