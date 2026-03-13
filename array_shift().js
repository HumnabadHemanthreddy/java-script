function removeFirst(arr) {
    arr.shift();
    return arr; 
}


let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Original array:", fruits);

let updatedFruits = removeFirst(fruits);
console.log("After removing first element:", updatedFruits);