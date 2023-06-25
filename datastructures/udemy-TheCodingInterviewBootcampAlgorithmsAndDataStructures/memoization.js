//generic memoize function 
function memoize(fn){
    const cache = {} //stores fast version of function and its results

    //cater for multi-arguments ...args
    return function(...args){
        //use arg for slowFib(n) as key 
        //can also use like if(...args in cache)
        if(cache[args]){
            //key exists return that result
            return cache[args]
        }

        //if first time, visit this function with arguments
        //result = fn(...args);
        const result = fn.apply(this, args);
        //save result of original fn applied with argument
        cache[args] = result;
        return result;
    };
}

//slow fibonacci function 
function slowFib(n){
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

//resassign fib as the memoization fuctions version of slowFib
fib = memoize(slowFib);
