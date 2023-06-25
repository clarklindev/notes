// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//count children at each level
function levelWidth(root) {
    let arr = [root, 'stopper'];
    let counters = [0];
    while(arr.length > 1){
        const node = arr.shift();    
        //found a stopper    
        if(node === 'stopper'){
            counters.push(0);
            arr.push('stopper');            
        }

        //else it is a node
        else{
            //push its children into the array
            arr.push(...node.children);    
            //increase the counter for current level
            counters[counters.length-1]++;
        }
    }
    return counters;
    
}

module.exports = levelWidth;
