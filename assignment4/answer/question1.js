const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function findMax() {
    let maxPrice = amdPrices[0];

    for (let price of amdPrices) {
        if (price > maxPrice) {
            maxPrice = price;
        }
    }
    console.log("AMD 52-week high is " + maxPrice);
}

findMax();