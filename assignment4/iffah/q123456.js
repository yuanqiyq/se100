// For questions 3 and 4, you may take a look at the worked solutions using the for (let x of array) alternative method as well, which iterates through the array without requiring a counter.

// // q1
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// let highest = amdPrices[0];

// for (let i = 0; i < amdPrices.length; i++) {
//   if (amdPrices[i] > highest) {
//     highest = amdPrices[i]; 
//   }
// }

// console.log("AMD 52-week high is " + highest);



// // q2
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// // Write your code below

// let sum = 0;

// for (let i = 0; i < amdPrices.length; i++) {
//   sum += amdPrices[i]; 
// }

// let average = sum / amdPrices.length;

// console.log("The 7-day SMA of AMD is " + average.toFixed(2));



// q3
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// // Write your code below

// let sum = 0;

// for (let i = 0; i < amdPrices.length; i++) {
//   sum += amdPrices[i];
// }

// let average = sum / amdPrices.length;

// let count = 0;

// for (let i = 0; i < amdPrices.length; i++) {
//   if (amdPrices[i] > average) {
//     count = count + 1;
//   }
// }

// console.log("Number of days AMD was above the 7-day SMA is: " + count);




// q4
// const msftData = [
// 	[190.15, 196.21, 191.07, 194.44],
// 	[193.61, 195.89, 190.12, 193.40]
// ];

// Write your code below

// let sum = 0;

// for (let i = 0; i < msftData.length; i++) {
//   let dayData = msftData[i];     
//   let closePrice = dayData[3];   
  
//   sum = sum + closePrice;
// }

// let average = sum / msftData.length;

// console.log("Average closing price of MSFT is " + average.toFixed(2));




// q5
// const disneyData = [
// 	{
// 		open: "120.54",
// 		high: "122.56",
// 		low: "120.54",
// 		close: "121.09"
// 	},
// 	{
// 		open: "123.15",
// 		high: "127.76",
// 		low: "123.02",
// 		close: "124.92"
// 	}
// ];

// // Write your code below
// let sumOfDisneyData = 0;

// for (let day of disneyData){
// 	let closePrice = Number(day.close);
// 	sumOfDisneyData += closePrice;
// }

// let average = sumOfDisneyData / disneyData.length;

// console.log("Average closing price of Disney is " + average.toFixed(2));



// q6
// Modify the code below:

// hmmm this answer was a solution from AI, but I don't understand what's going on, even when it attempts to break down the solution: 

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

function findLowestThree(prices) {
  // Step 1: sort numbers from smallest → largest
  let sorted = prices.sort(function(a, b) {
    return a - b;  // compare two numbers, but why need to minus?
  });

  // Step 2: take the first 3 elements
  let lowestThree = sorted.slice(0, 3);

  // Step 3: return the result, what is return?
  return lowestThree;
}

// Use the function
let result = findLowestThree(amdPrices);
console.log("The three lowest prices are " + result.join(", "));