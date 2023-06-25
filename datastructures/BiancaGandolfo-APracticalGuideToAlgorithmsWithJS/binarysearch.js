//expects sorted array
function binarySearch(list, item){
    var min=0;
    var max=list.length -1;
    var guess;
    //min/max are indexs
    while(min<=max){
        guess = Math.floor((min+max)/2);
        if(list[guess] === item){
            return guess;
        }
        else{
            if(list[guess]<item){
                min = guess + 1;
            }
            else{
                max = guess -1;
            }
        }
    }
    return -1;
}

binarySearch([2,6,7,90,103], 90);