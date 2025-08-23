const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let totalPrice = 0;
let count = 0;

for (let price of disneyData) {
	totalPrice += parseFloat(price.close);
	count++;
}

let avg = totalPrice / count;

console.log("Average closing price of Disney is " + avg.toFixed(2));