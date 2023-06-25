// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    //create an empty array of arrays
    const results = [];
    //number of subarrays is dependant on n
    for(let i=0; i<n; i++){
        results.push([]);
    }
    //create a counter variable starting at 1 
    //(keeps track of what number we are pushing into results[])
    let counter = 1;

    //startColumn and startRow always intialize to 0
    //end column and end row dependent on n    
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
        //first for-loop always responsible for assembing top row of solution
        //top row
        //loop from start column to end column
        for(let i= startColumn; i<=endColumn; i++){
            results[startRow][i] = counter;
            counter++;
        }
        //increment start row
        startRow++;

        //right for-loop always responsible for assembing right column of solution
        //right-most column
        //loop from start row to end row
        for( let i = startRow; i<=endRow; i++){ 
            results[i][endColumn] = counter;
            //increment counter
            counter++;
        }
        //decrement end column
        endColumn--;

        //bottom for-loop always responsible for assembing bottom row of solution
        for(let i= endColumn; i>=startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left for-loop always responsib le for assembing left column of solution
        //start column
        for(let i=endRow; i>= startRow; i--){
            results[i][startColumn]= counter;
            counter++;
        }
        startColumn++;
    }
    return results;
    
}

module.exports = matrix;
