// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//SOLUTION 3 - memoization
//improving recursive fibonacci with memoization
//memoization is called with slow version of fibonacci, memoization returns with fast version of fibonacci
//generic memoize function 
function memoize(fn){
    const cache = {} //stores fast version of function and its results

    //cater for multi-arguments ...args
    return function(...args){
        //use arg for slowFib(n) as key 
        if(cache[args]){
            //key exists return that result
            return cache[args]
        }

        //if first time, visit this function with arguments
        const result = fn.apply(this, args);
        //save result of original fn applied with argument
        cache[args] = result;
        return result;
    };
}

//slow fibonacci function 
function fib(n){
    if(n<2){
        return n;
    }
    //these fib calls are a reference to the memoized fib()
    return fib(n-1) + fib(n-2);
}

//resassign fib as the memoization fuctions version of slowFib
fib = memoize(fib);


//SOLUTION2 - recursion
//time complexity - exponential runtime O(2^n)
//improve solution with memoization (remembering function call and arguments storing results of that function call)
// function fib(n){
//     if(n<2){
//         return n;
//     }
//     else{
//         return fib(n-1) + fib(n-2);
//     }
// }

//SOLUTION1- forloop -return that specific entry
//runtime - O(n)
// function fib(n) {
    
//     let result = [0,1];
//     //for-loop from i=2 to n
//     for(let i = 2; i<=n; i++){
//         const a = result[i-1];//1st previous item
//         const b = result[i-2];//2nd previous item
//         result.push(a+b);
//     }
//     return result[n];
    
// }

module.exports = fib;
