function findIndexMessage(arr, element) {
    let index = arr.indexOf(element);
    if (index !== -1) {
    console.log(element + " is at index " + index);
    } else {
    console.log(element + " is not in the array");
    }
}

let fruits = ["Apple", "Banana", "Mango", "Orange"];
findIndexMessage(fruits, "Banana"); // Banana is at index 1
findIndexMessage(fruits, "Pineapple"); // Pineapple is not in the array