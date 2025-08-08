// Q1

// const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// // Write your code below
// let sum = msftData[0] + msftData [1] + msftData[2] + msftData[3] + msftData[4];
// let average = sum / 5;

// console.log(average);





// Q2
// const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// // Write your code below
// msftData.push(205.670);
// console.log(msftData);




// Q3
// const disneyData = {
// 	open: "120.54",
// 	high: "122.56",
// 	low: "120.54",
// 	close: "121.09"
// };

// // Write your code below

// const openNum = Number (disneyData.open);
// const highNum = Number (disneyData.high);
// const lowNum = Number (disneyData.low);
// const closeNum = Number (disneyData.close);

// let result = openNum - highNum +lowNum - closeNum;

// result = result.toFixed(2);

// console.log (result);




// Q4
// const disneyData = {
// 	open: "120.54",
// 	high: "122.56",
// 	low: "120.54",
// 	close: "121.09",
// };

// // Write your code below

// disneyData.volume = "1512311";

// console.log(disneyData);




// Q5
// const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// // Write your code below

// const low = bacData[0];
// const high = bacData[1];
// const open = bacData[2];
// const close = bacData[3];
// const volume = bacData [4];

// if (close > open) {
//   if (volume > 100000) {
//     console.log("Strong Bullish");
//   } else {
//     console.log("Bullish");
//   }
// } else if (close < open) {
//   if (volume > 10000) {
//     console.log("Strong Bearish");
//   } else {
//     console.log("Bearish");
//   }
// } else if (close === open) {
//   console.log("neutral");
// }




// Q6
const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

const open = Number (disneyData.open);
const high = Number (disneyData.high);
const low = Number (disneyData.low);
const close = Number (disneyData.close);
const volume = Number (disneyData.volume);

if (close > open) {
	if (volume>1000) {
		console.log ("Stong Bullish");
	} else {
	console.log ("bullish");
}

} else if (close < open) {
	if (volume> 1000) {
		console.log ("Strong Bearish");
} else {
	console.log("bearish");
}

} else if (close === open) {
	console.log("neutral");
}