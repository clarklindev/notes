## Recursion
* when a function calls itself
* Recursion is an elegant solution to keep your code DRY (dont repeat yourself)
* loops vs recursion, loops are more performant than recursion, because every function call is added to the stack and state must be preserved
* es6 supports tail-call-optimization (if the last expression in a function is a call to another function, then the engine will optimize so that the call stack does not grow)

### tracing recursive execution
* stack trace
* recursion executes by calling itself until the exit condition returns true,
* when true, it is poped from the stack (POP list in/ first out) and returned to context of where it is called
* default returns undefined;

### Template for a Recursive Function
* base case
* recursive case
* return where appropriate
* write procedures that gets us closer to base case

### looping
* in recursion, the return function will return whatever the base case returns when true

var loopNTimes = function(n){
    console.log('n = ', n);
    if(n<=1){
        return 'complete';
    }
    return loopNTimes(n-1);
}
console.log("returns: ", loopNTimes(3));

//3 n=3
//2 n=2 
//1 n=1 
//complete -> pop -> pop -> pop

### exercise

https://github.com/kuychaco/algoClass

* Start off with some intro to recursion problems
https://github.com/kuychaco/algoClass/blob/master/recursion/recursionIntro.js
If you want a challenge, attempt some popular recursion interview questions:

* https://github.com/kuychaco/algoClass/tree/master/recursion
Note: some of these will only click after we go through sorting, graphs & trees later this week.

