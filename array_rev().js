function reverse_array(arr) {
    arr.reverse();
    return arr; 
}


let array = [2,4,6,78,10];
console.log("Original array:", array);//Original array: (5) [2, 4, 6, 78, 10]

let rev_array = reverse_array(array);
console.log("After removing first element:", rev_array);//After removing first element: (5) [10, 78, 6, 4, 2]