var names = ['masum', 'shawan', 'atik', 'arman', 'pranta'];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

/*
//print out the array sum using loop
var numbers = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log('Result is: ' + sum);
*/


//task
var num = new Array();
for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt('Enter a number'));
}

var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum = sum + num[i];
}

console.log('Sum of the numbers is = ' + sum);