const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Sort Ascending
let sortedPrices = amdPrices.sort((a, b) => a - b);

console.log("The three lowest prices are " + sortedPrices[0] + ", " + sortedPrices[1] + ", and " + sortedPrices[2]);

//// Alternative using format strings:
// let formattedOutput = `${lowestThree[0]}, ${lowestThree[1]}, and ${lowestThree[2]}`;
// console.log("The three lowest prices are " + formattedOutput);