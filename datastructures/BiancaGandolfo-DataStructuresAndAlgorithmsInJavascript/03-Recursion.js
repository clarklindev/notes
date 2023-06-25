var loopNTimes = function(n){
    console.log('n = ', n);
    if(n<=1){
        return 'complete';
    }
    return loopNTimes(n-1);
}
//console.log("returns: ", loopNTimes(3));


// factorial with forloop
// Factorial with Loop
// identify the pattern
// factorial is the result * n-1 


function computeFactorialForloop(num){
    var result = 1;
    for(var i=2; i<=num;i++){
        result *= i;
    }
    return result;
}
//computeFactorialForloop(4);

//factorial with recursion
function computeFactorial(num){
    if(num === 1){
        return num;
    }
    else{
        return num * computeFactorial(num-1);
    }
}
// console.log("computeFactorial: ", computeFactorial(4)); //24


//recursion test examples
//https://github.com/kuychaco/algoClass/blob/master/recursion/recursionIntro.js
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loop(num){
    while(num >=0){
        console.log(num--);
    }
}
//loop(5);

//2. Next, try looping just like above except using recursion
function recursiveLoop(num){
    if(num >=0){
        console.log(num);
        recursiveLoop(num-1);
    }
}
//recursiveLoop(5);
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo){
    let iteration = 0;
    let answer = 0;
    while (iteration< expo){     
        answer += base * base;
        iteration++;
    }
    console.log(answer);
}
// exponent(2,3);//8
// exponent(2,4);//16
// exponent(3,3);//27

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo){
    if(expo === 1){
        return base;
    }
    else{
        return base * recursiveExponent(base, expo-1);
    }

}
// console.log(recursiveExponent(2,3));//8
// console.log(recursiveExponent(2,4));//16
// console.log(recursiveExponent(3,3));//27

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
var recursiveMultiplier = function(arr, num){
    if(arr.length === 0 ){
        return arr;
    }
    var last = arr.pop();
    recursiveMultiplier(arr,num);
    //------
    arr.push(last * num);
    return arr;
}
// console.log(recursiveMultiplier([1,2,3,4], 2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr){
    var reversedArray = [];

    var addItems = function(orderredArr){
        if(orderredArr.length > 0) {
            reversedArray.push(orderredArr.pop())
            addItems(orderredArr);
        }
        return;        
    }
    
    addItems(arr);
    return reversedArray;
}
//testing recursiveReverse
// console.log(recursiveReverse([1,2,3]));
// console.log(recursiveReverse([4,5,6,7]));
