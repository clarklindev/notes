class Graph {
  constructor() {
    //store edges (connection between vertices)
    this.adjacencyList = {};
  }

  //adding a vertex, doesnt handle duplicates - overwrites existing vertex's
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //this is for an undirected graph
  //function accepts 2 vertices v1, v2
  //function finds adjacencyList[v1] push v2
  //function finds adjacencyList[v2] push v1
  //no error handling
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //function receives 2 vertices
  //adjacencyList[v1] will not have v2
  //adjacencyList[v2] will not have v1
  //no error handling....
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  //removing vertex
  //first remove all edges, from the vertex we want to remove, this removes the connections v1/v2
  //then remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]; //delete the prop entirely
  }

  //with recursion - receives starting node
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  //iterative approach to DFS
  depthFirstIterative(start) {
    const result = []; //list of all visited vertices
    const visited = {}; //marks which nodes are visited
    const stack = [start]; //add starting vertex
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          //make sure its visited
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visted[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('Aspen');

// g.addEdge('Dallas', 'Tokyo');
// g.removeEdge('Dallas', 'Tokyo');

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.depthFirstRecursive('A');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
