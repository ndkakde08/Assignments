// ================Assignment 10 =========================
/*    Best Time to Buy and Sell Stock
    - You are given an array prices where prices[i] is the price of a given stock on the i
    th day.
    - You want to maximize your profit by choosing a single day to buy one stock and choosing
    a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve
    any profit, return 0.

Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy
before you sell.

Example 2:
    Input: prices = [7,6,4,3,1]
    Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */

let inputPrices:number[] = [7,1,5,3,6,4];
let minPrice:number = inputPrices[0]!
let profit:number = 0;
let maxProfit:number =0;
let buyDay:number=0;
let SellDay:number =0;


//To check every value
for(let i =0; i< inputPrices.length; i++){

    //To check the buy price and update new min price every
    if (inputPrices[i]! < minPrice  )
        {
            minPrice = inputPrices[i]!
            buyDay = i+1
        }

    // To calculate the profit 
        profit =  inputPrices[i]! - minPrice

    //To check the maximum profit
    if (profit > maxProfit)
        {
           maxProfit = profit; 
           SellDay = i+1
        }
}

    // to print the final value
    console.log(`Buying price of share ${minPrice}`)
    console.log(`buy day is:`,buyDay )
    console.log(`sellDay day is:`,SellDay)      
    console.log(`Max profit is ${maxProfit} `)











/* let inputPrices : number [] =  [7,1,5,3,6,4];
let minPrice:number =inputPrices[0]! 
let maxPrice:number =0
let profit:number =0
let buyDay:number = 0
let sellDay:number= 0
let sellPrice:number =0
let buyPrice:number =0

// To iterate over the array  
for (let i = 0; i < inputPrices.length; i++){
    
   // To check the min price and day
        buyPrice = minPrice
   if(inputPrices[i]! < minPrice )
        { 
            minPrice = inputPrices[i]!
            buyDay = i+1
        }  


    for (let j = i ; j <= inputPrices.length; j++){
    
       sellPrice = maxPrice
    if(inputPrices[j]! > maxPrice)
            {
                maxPrice = inputPrices[j]!
                sellDay = j+1
            }  
        }  
    }
    
    // To check the maximum price after buy day so j = i+1  
     //To calculate the profit
    profit = sellPrice -  minPrice
    
    // to print the final value
    console.log(`Buying price of share ${buyPrice}`)
    console.log(`buy day is:`,buyDay )
    console.log(`Selling price of share ${sellPrice}`) 
    console.log(`sellDay day is:`,sellDay )      
    console.log(`Max profit is ${profit} `)
     */