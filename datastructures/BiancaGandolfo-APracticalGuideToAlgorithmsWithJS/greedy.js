//Q: write a function, makeChange that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5

//coin values 5, 10, 25
const makeChange = ((coins, amount) => {
    coins.sort((a,b)=>b-a); //sort from largest to smallest, greedy always takes largest
    console.log('coins: ', coins);

    let i=0;
    let totalCoins = 0;
    

    while(amount > 0){
        if(coins[i] <=amount){
            amount -= coins[i];
            totalCoins++;
        }
        else{
            i++;
        } 
    }
    console.log('totalCoins: ', totalCoins);
    return totalCoins;

});


makeChange([5,10,25], 40);