//forEach
/*
let numbers = [2, 3, 4, 5, 6];
let squareNumbers = [];
numbers.forEach(function (x) {
    squareNumbers.push(x * x);
})
console.log(squareNumbers);
console.log(numbers);
*/

//map - returning a new array
/*
let numbers = [2, 3, 4, 5, 6];
let squareNumbers = numbers.map(function (x) {
    return x * x;
})
console.log(squareNumbers);
console.log(numbers);
*/

//filter - returning a new array using condition
let numbers = [20, 3, 45, 5, 9, 62, 90];
let newNumbers = numbers.filter(function (x) {
    return x > 10;
})
console.log(newNumbers);