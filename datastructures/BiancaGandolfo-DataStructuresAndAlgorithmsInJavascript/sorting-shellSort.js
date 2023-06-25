//shell sort
//https://www.youtube.com/watch?v=1yDcmjLTWOg

function shellSort(data){
    let gap = Math.floor(data.length / 2);
    console.log(`list length: ${data.length}, gap: ${gap}, data: ${data}`);    
    //keep looping while gap > 0 and half gap every time    
    while(gap > 0){
        //this will ensure visit to all positions of data gap apart in array
        for(let visitToEachNodeAtGap = 0; visitToEachNodeAtGap < gap; visitToEachNodeAtGap++){
            //visit each node of data at gap apart
            let visitedPos = null;
            for(let i = visitToEachNodeAtGap; i< data.length; i+=gap){
                console.log("index: ", i);
                if(visitedPos === null){
                    visitedPos = i;
                    console.log('first node, nothing to compare.')
                }
                else{
                    //compare new data to previous, if new is less, swop
                    console.log(`positions: [${visitedPos}, ${i}]`)
                    console.log(`data:      [${data[visitedPos]},${data[i]}]`);
                    if(data[i] < data[visitedPos]){
                        let tempData = data[visitedPos];
                        data[visitedPos] = data[i];
                        data[i] = tempData;
                        console.log(`swapping`);
                    }
                    else{
                        console.log(`dont swap`);
                    }
                    //update memory of 'current node'
                    visitedPos = i;    
                }
            }
        }

        gap = Math.floor(gap/2);
        console.log(`update gap: ${gap}, data: ${data}`);
    }

    console.log("final answer: ", data);
    return data;
}

shellSort([11,5,3,77,31,14,4,2,8,3,6]);