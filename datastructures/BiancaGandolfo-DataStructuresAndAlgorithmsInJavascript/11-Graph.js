//stack
Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance){
    if(!this._nodes[value] || typeof fn !== 'function')
        return 'invalid value or function';
    visited = visited || {};
    distance = distance || 0;
    fn(value, distance);    //eg log() will log
    visited[value] = true;
    this._nodes[value].forEach(function(neighbor){
        if(visited[neighbor]){
            return;
        }
        this.traverseDepthFirst(neighbor, fn, visited, distance+1);
    }, this);
};

myGraph = new Graph()
myGraph.traverseDepthFirst(1, log);

//queue
Graph.prototype.traverseBreadthFirstSearch = function(value, fn){
    if(!this._nodes[value] || typeof fn !== 'function') return 'invalid value or function';
    var visited = {};
    var queue = [value];
    visited[value] = 0;
    while(queue.length){
        var node = queue.shift();
        fn(node, visited[node]);
        var neighbors = this._nodes[node].filter(function(neighbor){
            if(visited[neighbor] === undefined){
                visited[neighbor] = visited[node]+1;
                return true;
            }
        });
        queue = queue.concat(neighbors);
    }
};

// {
//     A:[B,C,D],
//     B:[E,F,A],
//     E:[I,B],
//     F:[B],
//     C:[D,G,A],
//     D:[C,G,H,A],
//     G:[C,D],
//     H:[D],
//     I:[E]
// }
