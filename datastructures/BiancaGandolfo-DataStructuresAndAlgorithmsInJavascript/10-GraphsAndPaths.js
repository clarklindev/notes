//adjacency matrix
//initialize 2d array with 0 as starting data
//the size of the matrix tells us how many elements we have
//the index represents the node
//the value represents the edge

// constructor()
// this._nodes =
// [
// [0][0][0][0]
// [0][0][0][0]
// [0][0][0][0]
// [0][0][0][0]
// ];

// addNode(){}

// addEdge(){}

//--------------------------------------------------

//adjacency list
// constructor()
// nodes = [];

// addNode(val)
//     nodes[val] = nodes[val] || []   //already something there, or initialize

// //graph.addNode(1)
// //graph.addNode(2)
// //graph.addNode(5)
// //[undefined, [],[],undefined,undefined, []]

// addEdge(v1, v2)
//     nodes[v1].push(v2)  //only the one will give us only direction
//     nodes[v2].push(v1)  //having both they become unidirectional

function Graph() {
	this._nodes = {}; //object is more flexible with array as the lookup on array can only be numbers
}

Graph.prototype.addNode = function(value) {
	if (value === undefined) {
		return;
	}
	this._nodes[value] = this._nodes[value] || [];
};

Graph.prototype.addEdge = function(value1, value2) {
	if (!this._nodes[value1] || !this._nodes[value2]) return "Invalid node value";
	this._nodes[value1].push(value2);   //added to the other ones list
	this._nodes[value2].push(value1);   //added to the other ones list
};


//usage example
myGraph = new Graph()
//visual representaion of graph {_nodes:{}}

myGraph.addNode('pickle');  //each will be added as {'pickle':[]}
//visual representaion of graph {_nodes: {'pickle':[]} }
myGraph.addNode('dobby');  
//visual representaion of graph {_nodes: {'pickle':[], 'dobby':[]} }
myGraph.addNode('gibson'); 
//visual representaion of graph {_nodes: {'pickle':[], 'dobby':[], 'gibson':[]} }

//adding edges
myGraph.addEdge('dobby', 'pickle');
//visual representaion of graph {_nodes: {'pickle':['dobby'], 'dobby':['pickle'], 'gibson':[]} }

myGraph.addEdge('gibson', 'dobby');
//visual representaion of graph {_nodes: {'pickle':['dobby','gibson'], 'dobby':['pickle','gibson'], 'gibson':['dobby','pickles']} }

myGraph.addEdge('gibson', 'pickles');