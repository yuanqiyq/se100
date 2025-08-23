// q1
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];


let highestPrice = amdPrices[0];

for (let i = 1; i < amdPrices.length; i++) {
    if (amdPrices[i] > highestPrice) {
        highestPrice = amdPrices[i];
    }
}

console.log("AMD 52-week high price is" , highestPrice)


// q2
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
// let totalPrice = 0;
// for (let i = 0; i < amdPrices.length; i++) {
//      totalPrice += amdPrices[i];
//     }

// const averagePrice = totalPrice / amdPrices.length;
// console.log("The 7-day SMA of AMD is", averagePrice.toFixed(2));



// q3
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// let totalPrice = 0;
// for (let i = 0; i < amdPrices.length; i++) {
//      totalPrice += amdPrices[i];
//     }

// const averagePrice = totalPrice / amdPrices.length

// let count = 0;

// for (let i = 0; i < amdPrices.length; i++) {
//     if (amdPrices[i] > averagePrice) {
//         count+= 1;
//     }
// }

//  console.log("The number of days AMD's price was above the 7-day SMA is:", count);


// q4
// const msftData = [
// 	[190.15, 196.21, 191.07, 194.44],
// 	[193.61, 195.89, 190.12, 193.40]
// ];
// //   Open    High     Low     CLose
// totalClose = 0;
// for (let i = 0; i < msftData.length; i++) {
//     let close = msftData[i][3];
//     totalClose += close;
// }

// const averageClose = totalClose / msftData.length;
// console.log("The average closing price of MSFT is", averageClose.toFixed(2));



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
// let totalClose = 0;
// for (let i = 0; i < disneyData.length; i++) {
//     let closePrice = parseFloat(disneyData[i].close);
//     totalClose += closePrice;
// }

// const averageClose = totalClose / disneyData.length;
// console.log("The average closing price of Disney is", averageClose.toFixed(2));





// q6
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// //collegues code
// // let data = ()
// // for price in data:
// // 	if price < 3:
// //     data.push(price)

// // My Code
// let lowestPrice = Infinity;
// let secondLowestPrice = Infinity;
// let thirdLowestPrice = Infinity;
// for (let i = 0; i < amdPrices.length; i++) {
//     if (amdPrices[i] < lowestPrice) {
//         thirdLowestPrice = secondLowestPrice;
//         secondLowestPrice = lowestPrice;
//         lowestPrice = amdPrices[i];
//     }
//     else if (amdPrices[i] < secondLowestPrice && amdPrices[i] !== lowestPrice) {
//         thirdLowestPrice = secondLowestPrice;
//         secondLowestPrice = amdPrices[i];
//     } else if (amdPrices[i] < thirdLowestPrice && amdPrices[i] !== lowestPrice && amdPrices[i] !== secondLowestPrice) {
//         thirdLowestPrice = amdPrices[i];
//     }
// }
// console.log("The three lowest AMD prices are:", lowestPrice.toFixed(2), secondLowestPrice.toFixed(2), thirdLowestPrice.toFixed(2));