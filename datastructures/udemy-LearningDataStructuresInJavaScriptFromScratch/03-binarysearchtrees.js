
//binary search tree constructor function
function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

//insert an array item by item into BST
BST.prototype.insertArray = function(value){
  value.map(item=>{
    this.insert(item);
  })
}

BST.prototype.insert = function (value){
  //is value we want to insert less than or equal to root node,
  //move to left
  if(value < this.value){
    //2 cases is there already a left child or is it null
    if(this.left) {
      this.left.insert(value);            
    }
    else{
      this.left = new BST(value);
    }
  }
  //else if it is greater
  //move to right
  else if(value > this.value){
    if(this.right){
      this.right.insert(value);            
    }
    else{
      this.right = new BST(value);
    }
  }
  return this;    //allows chaining
};


BST.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  else if(value < this.value){
    //less than 
    if(!this.left){
      return false;
    }
    else{
      return this.left.contains(value);
    }
    //instead of if/else can also do it like
    //if this.left doesnt exist return false, if it does exist, check if its subtree contains the value
    //return !!this.left && this.left.contains(value);
    //!!, forcing return a boolean
  }
  else if(value > this.value){
    //or greater than
    if(!this.right){
      return false;
    }
    else{
      return this.right.contains(value);
    }
  }
  return false;
}


//receives a function as a parameter
//a function that logs nodes to console
//function traverses through every node of BST, and run iterator function on each node
//starts traversing at top and follow every branch to bottom before moving on to next branch
//- inorder (least to greatest, LEFT->PARENT->RIGHT)
//refactoring depthFirstTraversal(iteratorFunc, order) to traverse in different orders, receives 'order' parameter
//order: INORDER (LEFT->PARENT->RIGHT), PREORDER (PARENT->LEFT->RIGHT), POSTORDER (LEFT->RIGHT->PARENT)
//time complexity O(n) - linear

//inorder traversal - smallest to biggest visits this node after visiting left  
//preorder visits this node first
//postorder visits this node last
BST.prototype.depthFirstTraversal = function(iteratorFunc, order='in-order'){
  if(order==='pre-order'){
    iteratorFunc(this);
  }
  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc, order);
  }
  if(order === 'in-order'){
    console.log('================================')
    iteratorFunc(this);
    console.log('================================')
  }
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
  if(order=== 'post-order'){
    iteratorFunc(this);
  }
};

function log(value){
  console.log(value);
}


//BreadthFirstTraversal
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this]; //this refers to root node of BST ie first element
  while( queue.length){
    var treeNode = queue.shift();   //takes first node out
    iteratorFunc(treeNode);
    //push children into queue
    if(treeNode.left){
      queue.push(treeNode.left);
    }
    if(treeNode.right){
      queue.push(treeNode.right);
    }
  }
}

// log function updated to receive node and output nodes' value
function log(node){
  console.log(node);
}

//returns min node
BST.prototype.getMinValNode = function(root){
  console.log('getMinValNode');
  if(root.left){
    return this.getMinValNode(root.left);
  }
  else{
    return root;
  }
}

//returns min val
BST.prototype.getMinVal = function (){
  if(!this.left){
    return this.value;
  }
  else{
    return this.left.getMinVal();
  }
}

BST.prototype.getMaxVal = function(){
  if(!this.right){
    return this.value;
  }
  else{
    return this.right.getMaxVal();
  }
}


//delete a node - min node
BST.prototype.deleteMin = function(parent){
  if(!this.left && !this.right){
    if(parent){
      parent.left = null;
    }
    else{
      this.value = null;
    }
  }
  else if(!this.left && this.right){
    if(parent){
      parent.left = this.right;
    }
    else{
      this.value = this.right.value;
      this.right = this.right.right;
    }
  }
  if(this.left){
    //go left until left is null    
    this.left.deleteMin(this);
  }
}   

BST.prototype.deleteMax = function(parent){
  if(!this.right && !this.left){
    if(parent){
      parent.right = null;
    }
    else{//if max value is the last node
      this.value = null;  
    }
  }
  else if(!this.right && this.left){
    if(parent){
      parent.right = this.left;
    }
    else{//max val is the root with subtree
      this.value = this.left.value;
      this.left = this.left.left;
    }
  }
  if(this.right){
    this.right.deleteMax(this);
  }
}

BST.prototype.deleteNode = function(current, parent, value){
  console.log('current: ', current)
  //base case: if tree is empty, this cancels recursive calls to deleteNode() that are null
  if(current === null){
    return current;
  }
  //otherwise recur down the tree
  if (value < current.value){
    console.log('less');
    this.deleteNode(current.left, current, value);   //check current nodes LEFT child with the whole deleteNode() function
  }
  else if(value > current.value){ 
    console.log('more');
    this.deleteNode(current.right, current, value);   //check current nodes RIGHT child with the whole deleteNode() function     
  }
  //searched value is same as current value
  else{
    console.log('not null, not greater, not less, \nremove: ', value)
    let childCount = (current.left == null ? 0 : 1) + (current.right ==null ? 0: 1);//figure out how many children  
    console.log('childCount: ', childCount);
    console.log('=======================================')

    switch(childCount){
      case 0://NO CHILDREN
        if(parent === null){    
          console.log('children:0 - root node');   
          //do nothing - minimum one node needed to meet criteria for tree
          console.log('minimum one node needed to meet criteria for tree');
        }
        else{
          console.log('children:0 - leaf node');
          if(parent.left.value === value){
            parent.left = null;            
          }
          else if(parent.right.value === value){
            parent.right = null;
          }
        }
        break;
      case 1://1 CHILD
        console.log('children: 1');    
        let child = (current.left == null) ? current.right : current.left;      //only one child so we check which child is null
        if(parent.left.value === value){
          parent.left = child;   //reconnect the parent to new current
        }
        else if(parent.right.value === value){
          parent.right = child;
        }
        current = null;
        break;
      case 2://2 CHILDREN
        //has 2 children, find successor to the node to be deleted, 
        temp = this.getMinValNode(current.right);
        console.log('here: ', temp);
        current.value = temp.value;
        //delete the original value saved in temp
        this.deleteNode(current.right, current, temp.value);
        break;
    }                  
  }
  return current;
}

//BST delete node
BST.prototype.remove = function(value){
  this.deleteNode(this, null, value);//this referes to the context of the calling object - ie global instance of BST()
}

BST.prototype.checkIfBalanced = function() {
  var heights = [];
  var recurse = function(node, height) {
    if (!node.left && !node.right) return heights.push(height);
    node.left && recurse(node.left, height+1);
    node.right && recurse(node.right, height+1);
  };
  recurse(this, 1);
  var min = Math.min.apply(null, heights);
  var max = Math.max.apply(null, heights);
  return max-min <= 1;
};

//testing delete BST
var bst = new BST(7);
bst.insertArray([3,4,1]);
bst.remove(3);
console.log('=======================================')

bst.breadthFirstTraversal(log)


// var bst = new BST(50);

//testing insert
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
//console.log(bst.left.left.right);

//testing contains()
// console.log(bst.contains(50));
// console.log(bst.contains(59));
// console.log(bst.contains(10));
// console.log(bst.contains(15));

//testing depth first traversal method
//testing INORDER
// bst.depthFirstTraversal(log, 'in-order');
//testing PREORDER
//bst.depthFirstTraversal(log, 'pre-order');
//testing POSTORDER
//bst.depthFirstTraversal(log, 'post-order');

//testing breadthfirst traversal
// bst.breadthFirstTraversal(log);

//testing minVal
// console.log("min: ", bst.getMinVal());
// console.log("max: ", bst.getMaxVal());

//testing balanced
//console.log('balanced: ', bst.checkIfBalanced());
