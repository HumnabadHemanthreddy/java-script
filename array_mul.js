function multiply(arr) 
{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
    }
    return result;
}

let numbers = [1, 2, 3, 4];
console.log(multiply(numbers));// [2, 4, 6, 8]