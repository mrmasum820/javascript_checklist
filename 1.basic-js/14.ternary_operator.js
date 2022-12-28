// var number = Number(prompt('Enter a number'));

// if (number > 0) {
//     console.log('positive');
// } else {
//     console.log('negative');
// }

//using ternary operator
// var result = number > 0 ? 'positive' : 'negative'
// console.log(result);


// if (number > 0) {
//     console.log('positive');
// } else if(number < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// var result = number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero';
// console.log(result);


//get three numbers and print the largest number using ternary operator
var num1 = Number(prompt('Enter first number'));
var num2 = Number(prompt('Enter second number'));
var num3 = Number(prompt('Enter third number'));

// if (num1 > num2 && num1 > num3) {
//     console.log('first number is bigger and that is ' + num1);
// } else if (num2 > num1 && num2 > num2) {
//     console.log('second number is bigger and that is ' + num2);
// } else {
//     console.log('third number is bigger and that is ' + num3);
// }

(num1 > num2 && num1 > num3) ? console.log('first number is bigger and that is ' + num1) : (num2 > num1 && num2 > num3) ? console.log('second number is bigger and that is ' + num2) : console.log('third number is bigger and that is ' + num3)