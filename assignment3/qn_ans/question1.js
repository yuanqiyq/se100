const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

// ans
const totalmsftData = msftData[0] + msftData[1] + msftData[2]  + msftData[3] + msftData[4];

const lengthmsftData = msftData.length;

const avgmsftData = totalmsftData / lengthmsftData;

console.log(avgmsftData);