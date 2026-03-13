function even(numbers) 
{
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if  (numbers[i]%2==0){
        result.push('even:' + numbers[i]);
        }
    }
    return result;
}

let number = [1,2,3,4,5,6,7,8,9];
console.log(even(number));