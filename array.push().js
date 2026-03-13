function addFruits(fruitArray, newFruits) {
    for (let i = 0; i < newFruits.length; i++) {
    fruitArray.push(newFruits[i]);
    }
    return fruitArray;
}

let fruits = ["Apple", "Banana", "Mango"];
let moreFruits = ["Orange", "Pineapple"];

console.log(addFruits(fruits, moreFruits));