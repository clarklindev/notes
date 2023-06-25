// const coins = [10,6,1];

// const makeChange = (value => {
//     if(value ===0){
//         return 0;
//     }
//     let minCoins;
//     coins.forEach(coin=>{
//         if(value-coin >= 0){
//             let currMinCoins = makeChange(value-coin);
//             if(minCoins === undefined || currMinCoins < minCoins){
//                 minCoins = currMinCoins;
//             }
//         }
//     });
//     return minCoins + 1;
// });
// console.log('min coins: ', makeChange(12));

//memoization with recursion
const cache = {};
const coins = [10,6,1];

const makeChange = (c)=>{
    if(cache[c]){
        return cache[c];
    };
    let minCoins = -1;

    //find the best coin
    coins.forEach(coin=>{
        if(c-coin >=0){
            let currMinCoins = makeChange(c-coin);
            if(minCoins === -1 || currMinCoins < minCoins){
                minCoins = currMinCoins;
            }
        }
    });

    //save the value into the cache
    cache[c] = minCoins + 1;
    return cache[c];
}