function toUpperCaseArray(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
    result.push(words[i].toUpperCase());
    }
    return result;
}

// Example usage
let words = ["apple", "banana", "cherry"];
console.log(toUpperCaseArray(words));//(3) ['APPLE', 'BANANA', 'CHERRY']