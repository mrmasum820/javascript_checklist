//for of - use for array iterate
/*
let names = ['masum', 'shawan', 'atik', 'arman'];
for (let name of names) {
    console.log(name);
}
*/

//for in  - use for object iterate
/*
let myInfo = {
    name: 'MR Masum',
    age: 27,
    occupation: 'Student',
    address: 'Badda, Dhaka, Bangladesh'
}
for (let x in myInfo) {
    // console.log(x);
    // console.log(myInfo[x]);
    console.log(`${x} : ${myInfo[x]}`);
}
*/


//forEach 

/*
//show array items using forEach
let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// numbers.forEach(showItems);
// function showItems(x) {
//     console.log(x);
// }

numbers.forEach(function (x) {
    console.log(x);
})
*/

/*
//square array items and keep value in another array using forEach
let numbers = [10, 20, 30, 40, 50];
let squareNumbers = [];
numbers.forEach(function (x) {
    squareNumbers.push(x * x);
})
console.log(squareNumbers);
*/


//add 5 in each array items using forEach
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
numbers.forEach(function (x, index, arr) {
    arr[index] = x + 5;
})
console.log(numbers);