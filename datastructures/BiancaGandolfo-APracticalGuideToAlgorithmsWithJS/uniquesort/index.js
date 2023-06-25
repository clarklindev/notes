//SOLUTION 1: MY SOLUTION - using a Set()
// const uniqueSort = function(arr){
//     let unique = Array.from(new Set(arr)).sort((a,b)=> a>b);
//     console.log(unique);
//     return unique;
// }

//SOLUTION 2 - my solution using object
const uniqueSort = function(arr){
    const memory = {};
    for(let i=0; i<arr.length; i++){
        if(! memory[arr[i]]){
            memory[arr[i]]=arr[i];//save value in memory[key]
        }
    } 
    
    arr = Object.keys(memory).map((key)=>memory[key]).sort((a,b)=>a>b);
    console.log(arr);
    return arr;
}


module.exports = {uniqueSort};
