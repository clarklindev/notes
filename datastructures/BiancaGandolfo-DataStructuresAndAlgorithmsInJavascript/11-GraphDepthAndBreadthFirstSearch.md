## Depth and Breadth-First Search

### Graph Traversing and Depth-First Search
* the core of DEPTH FIRST SEARCH is a stack
* traversing graphs, we have to flag if 
    -explored (black) -done state
    -visited (gray), -here, maybe its adjacent vertices arent visited yet so not set as explored. only when all adjacent vertices are done we set as explored
    -undiscovered (white)
* explored is all adjacent nodes are visited, but not explored
* undiscovered is when we havent gotten there yet

### Pseudocode Depth-first-search
* perform DFS on graph that is an adjacency matrix
* directed graph nodes are visited with direction in mind


//visit 1
    //visit 2
        //visit 4
            //visit 5
                //visit 6
* once there are no more unexplored nodes, return
* at every return from recursion complete, look for undiscovered
* each node needs to be visited AND explored
* can be set via flags, where do you put flags? how many flags? explored? visited?

```psuedocode
base case: if it has been explored, 
    like no where to go (empty list)
    or if visited/explored already
for i, loop through arr of edges
    traverse(this._nodes[values][i])

```

## Breadth-First Search
- Procedure for breadth first search is a queue
- some order by layer such that the least deep nodes are processed first
- mark v as discovered (grey) and enqueue v into Q
- while Q is not empty, perform the following steps:
- how do we find our first queue? vertices' adjacency list [], 

    1. dequeue u from Q
    2. mark u as discovered (grey)
    3. enqueue all unvisited (white) neighbors w of u
    4. mark u as explored (black)

eg 4:[2,3,5]
start with currentNode
    proccess adjacency list for currentNode
then process next layers by looping through adjacency list[] again 
    recurse(nodes[])