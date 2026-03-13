function checkIncludes(arr, element) {
    return arr.includes(element);
}


let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(checkIncludes(fruits, "Mango"));      // true
console.log(checkIncludes(fruits, "Pineapple"));  // false