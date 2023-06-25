// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//SOLUTION 1: iteration
// function pyramid(n) {
//     const midpoint = Math.floor((2*n-1)/2); 
//     for(let row = 0; row<n;row++){
//         let level="";
//         //what is the relationship between a row and col?
//         //well sample of 3, 3:5, 2:3, 1:1
//         //constant becomes n, then look at other side of : (cols), value is always 2n-1
//         for(let col = 0; col <  (2*n-1); col++){
//             //what is the center point? and take row number of elements of either side midpoint and make #
//             //eg when row is 1, midpoint-1 element on left, midpoint+1 element on right
//             //makes sure current column is less than or greater than midpoint-1 and midpoint+1
//             if(midpoint-row <=col && midpoint+row >=col){
//                 level+='#';
//             }
//             //anything larger or less make ' '
//             else{
//                 level+=' ';
//             }
//         }
//         console.log(level);
//     }
// }

//SOLUTION 2: recursion

function pyramid(n, row=0, level=''){
    //recursion base case
    if(n===row){
        return;
    }
    //max number of columns in a row is (2*n-1), so if our string is === (2*n-1), then we add a row
    if(level.length === 2 * n-1){
        console.log(level);
        return pyramid(n, row+1);
    }
    
    const midpoint = Math.floor((2*n-1)/2);//midpoint index
    
    let add;    //character that we will add to level string
    //in recursive solution we can determine which column we are on by looking at our level string
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    }else{
        add = ' ';
    }
    pyramid(n, row, level+add);
}

module.exports = pyramid;
