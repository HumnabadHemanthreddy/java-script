function formatPrices(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
    result.push("$" + numbers[i].toString());
    }
    return result;
}

// Example usage
let prices = [10, 25, 7, 100];
console.log(formatPrices(prices));// ['$10', '$25', '$7', '$100']