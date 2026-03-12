function calculate(n1, n2, operator) {
    switch (operator) {
        case "+":
            return "Addition: " + (n1 + n2);
        case "-":
            return "Subtraction: " + (n1 - n2);
        case "*":
            return "Multiplication: " + (n1 * n2);
        case "/":
            return n2 !== 0 ? "Division: " + (n1 / n2) : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}


console.log(calculate(10, 5, "+")); // Output: Addition: 15
console.log(calculate(20, 4, "/")); // Output: Division: 5
console.log(calculate(8, 2, "??")); // Output: Invalid operator