//let (we can reassign but we cann't access outside block)
/*
let x = 10;
if (true) {
    let x = 20;
}
console.log(x);

let x = 11;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

//const
/*
const x = 20;
x = 50;
console.log(x);
*/

//string literal - concatination
let num1 = 10;
let num2 = 20;
// let sum = num1 + num2;
// console.log('The sum of two num is ' + sum + '.');
console.log(`The sum of two num is ${num1 + num2} .`);

//arrow function
// function add(x, y) {
//     var result = x + y;
//     console.log(result);
// }

const add = (x, y) => {
    let result = x + y;
    console.log(`The sum is: ${result}`);
}

add(5, 10);