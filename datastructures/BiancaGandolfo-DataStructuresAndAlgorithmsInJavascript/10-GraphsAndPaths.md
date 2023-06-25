## Graphs
* collection of vertices connected by edges
* good at representing relationships between nodes
* space complexity O(n^2)
* everytime graph grows, we need to add row/col

### vocabulary
* edges - represent the connection between 2 vertices can be directed or undirected
* vertices - nodes in the graph (that contain data)
* paths - are a sequence of connected vertices, a simple path has no repeated vertices
* cycles - a path that is cyclical. an acyclic graph has no cycles (this is a difference between tree / graph, tree has no cycles)

### Graph Examples
* eg. map - cities / streets connected
* eg. internet connected with links
* eg. maize traversal - pacman
* eg. facebook graphs around relationship between people

### Common operations
* adding an edge
* deleting an edge
* detecting an edge
* finding the neighbors of a vertex
* finding a path between two vertices

## Adjacency Matrix
### Undirected Graph
* 2D array, array in an array
* representing binary relationship between 2 nodes
* putting a 1 where there is an edge between 2 vertices
* add an edge - make it a 1
* remove an edge - make 1 to a 0

### Directed Graph
* instead of 2D matrix reading both directions, only putting a -1 where the direction can go one way

### Weighted Directed Graph
* Weigted Directed means there is direction and weight
* adds the 'cost' between 2 nodes
* maybe eg.. with maps, time to travel between 2 cities
* maybe eg.. size of pipes for water,
* maybe eg.. bandwidth

### Pseudocoding the Matrix Constructor
* matrix is how we represent something on a 2D matrix (array)
* [[1][0]
   [0][1]]

### Pseudocoding a addNode() method
* just as an example assuming all nodes is an integer less than 10
* how do we add the node? do we add to an already existing matrix or row/column everytime
* do the numbers 1-10 represent the order or do the numbers represend the number we are adding

### Pseudocoding adding edges
* what would be pass to an addEdge function? direction? weighted?
* adding vertices (v1, v2) eg. 2,4
// matrix[2,4]=1
// matrix[4,2]=1

```js
Constructor
    initialize matrix

addNode()
addEdge()
```

## Adjacency List
* what we will use for: finding paths, neighbours that arent immediate
* have an array, each item in array represents all vertices connected to that one

1 -> 2 -> 3    //1 connected to 2 and 3
2 -> 4         //2 connected to 4
3 -> 4         //3 connected to 4
4 -> 5         //4 connected to 5
5 -> 6         //5 connected to 6
6              //6

* so in an adjacency list, all you need to look at is the far left number to see all the items connected to it

