## Binary Tree
// https://github.com/humanwhocodes/computer-science-in-javascript/blob/master/src/data-structures/binary-search-tree/binary-search-tree.js

* https://github.com/kuychaco/algoClass/blob/solutions/data-structures/binarySearchTree.js
* same as N-ary tree except each node can have max 2 children (LEFT / RIGHT)
* 'Binary search Tree' is same as binary tree except each node is comparable
* BST each node on left subtree is less than parent, 
* BST each node on right is greater than parent

### performance Array VS BST

#### Array
* lookup (sorted arr) - fast
* inserting/delete - slow

#### BST
* value lookup - usually fast
* inserting / deleting - fast

### Pseudocode
//constructor
    //value
    //left
    //right

//methods
    //insert(value) - goal find its proper place
    if value < current
        if(left) go left
        else insert
    if value > current
        if(right) go right
        else insert

//BST delete node
// https://gist.github.com/mycodeschool/9465a188248b624afdbf
// https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/


//search for node/value
        //check if current value === value
            //if so delete(value, current)
            //else seach(value)
    
    //delete(val, parent)
        //if its a root
            //account for this
        //else
            //set relationship from parent L/R
//EDGE-CASE-1:IS-A-LEAF
            //check if it is a leaf, if so
                //delete it
                    //which pointer of parent to we make null?
                    //set var to track parent relationship to delete node to null
                    //ie. 
                    //if the parents left = val, then set that one
                        //parent.left = null
                    //else if the parents right = val then set that one
                        //parent.right = null
//EDGE-CASE-2:HAS-1-NODE
                //current node is the matched node, check if current node has L or R
                //set parents relationship to its parent to either this.left || this.right
                //parent.right = this.left || this.right
//EDGE-CASE-3:HAS-2-NODE
                //node to delete has 2 children, find the smallest value to the right subtree
                //keep track of smallest values parent and its relationship left || right
                //swap the smallest value with the node to delete' value
                //parent of smallest, left or right = null
    

### other types of trees 
BST with optimization:

* AVL tree
* Red-black tree
* splay tree

