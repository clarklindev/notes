// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let count = {};
    let highest = null;
    let highestChar = '';

    str.split('').map(char=>{        
        count[char] = count[char]+1 || 1;

        if(count[char] > highest){
            highestChar = char;
            highest = count[char];
        }
    })     
    return highestChar;   
}

module.exports = maxChar;
