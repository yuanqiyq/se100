// q1
// const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// const msftAverage = (msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4]) / msftData.length;
// console.log(msftAverage);



// q2
// const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]

// msftData.push(205.67);
// console.log(msftData);



// q3
// const disneyData = {
// 	open: "120.54",
// 	high: "122.56",
// 	low: "120.54",
// 	close: "121.09"
// }

// const result = parseFloat(disneyData.open) - parseFloat(disneyData.high) + parseFloat(disneyData.low) - parseFloat(disneyData.close);
// console.log(result.toFixed(2));




// q4
// const disneyData = {
// 	open: "120.54",
// 	high: "122.56",
// 	low: "120.54",
// 	close: "121.09",
// }

// disneyData.volum = "1512311";
// console.log(disneyData);




// q5
// const bacData = [190.15, 194.21, 191.07, 192.44, 129000]

// const bacDataObject = {
//     low: 190.15,
//     high: 194.21,
//     open: 191.07,
//     close: 192.44,
//     volume: 129000
// };
// //if close > open
//     // if volume > 100000 → log ‘Strong Bullish’ in your console
//     // else → log ‘Bullish’ in your console

// if (bacDataObject.close > bacDataObject.open) {
//     if (bacDataObject.volume > 100000) {
//         console.log('Strong Bullish');
//     } else {
//         console.log('Bullish');
//     }
// }

// if (bacDataObject.close < bacDataObject.open) {
//     if (bacDataObject.volume > 10000) {
//         console.log('Strong Bearish');
//     } else {
//         console.log('Bearish');
//     }
// }

// if (bacDataObject.close === bacDataObject.open) {
//     console.log('Neutral');
// }





// q6
const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}

disneyData["open"]= parseFloat(disneyData["open"])
disneyData["high"]= parseFloat(disneyData["high"])
disneyData["low"]= parseFloat(disneyData["low"])
disneyData["close"]= parseFloat(disneyData["close"])
disneyData["volume"]= parseFloat(disneyData["volume"])

if (disneyData.close > disneyData.open) {
    if (disneyData.volume > 100000) {
        console.log("Strong Bullish")
    } else {
        console.log("Bullish")
    }
}

if (disneyData.close < disneyData.open) {
    if (disneyData.volume > 10000) {
        console.log("Strong Bearish")
    } else {
        console.log("Bearish")
    }
}

if (disneyData.close === disneyData.open) {
    console.log ("neutral")
}