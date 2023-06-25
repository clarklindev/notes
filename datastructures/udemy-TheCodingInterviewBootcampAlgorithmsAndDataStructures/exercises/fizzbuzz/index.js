// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


//using mod to find out multiples of a number to find remainder
//but if remainder is 0 then it is a multiple
function fizzBuzz(n) {
    for(let i=1; i<= n; i++){
        //multiple of 3 and 5 //or just a multiple of 15
        if(i%3===0 && i%5===0){ 
            console.log('fizzbuzz');
        }
        //multiple of 3
        else if(i%3===0){
            console.log('fizz');
        }
        //multiple of 5
        else if(i%5===0){
            console.log('buzz');
        }
        //print the number at loop
        else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
