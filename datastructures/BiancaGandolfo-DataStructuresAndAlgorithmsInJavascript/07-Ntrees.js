//N-ary tree (any number of children)
function Tree (value){
    this.value = value;
    this.children = [];
}

//adds child to tree or subtree bound to this keyword
//O(1)
Tree.prototype.addChild = function(value){
    var child = new Tree(value);
    this.children.push(child);
    return child;
};

//testing N-ary tree
//with reference to the node we insert, we can add more items to the node (which becomes a root)
//because each "node" .addChild() returns a node, it means that you can chain these...

var tree = new Tree(1);             //1, []
var branch1 = tree.addChild(2);     //1, [{2,[]}]
var branch2 = tree.addChild(3);     //1, [{2,[]},{3,[]}]
var branch3 = tree.addChild(4);     //1, [{2,[]},{3,[]},{4,[]}]
branch1.addChild(5);    //1, [{2,[{5,[]}]},{3,[]},{4,[]}]
branch1.addChild(6).addChild(9);    //1, [{2,[{5,[]},[{6,[{9,[]}]}]]},{3,[]},{4,[]}]
branch2.addChild(7);//1, [{2,[{5,[]},[{6,[{9,[]}]}]]},{3,[{7,[]}]},{4,[]}]
branch3.addChild(8);//1, [{2,[{5,[]},[{6,[{9,[]}]}]]},{3,[{7,[]}]},{4,[{8,[]}]}]
