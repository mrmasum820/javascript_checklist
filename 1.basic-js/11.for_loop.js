/*
for (var x = 1; x <= 10; x++) {
    document.write(" " + x);
}
document.write("<h1>end</h1>");
*/

// for (var i = 1; i <= 99; i += 2) {
//     document.write(" " + i)
// }

// for (var x = 10; x >= 1; x--) {
//     document.write(" " + x)
// }

/*
//1+2+3+4+5 = 
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum = sum + i;
}
document.write('The total number is ' + sum);
*/

/*
// user will give the starting point and ending point and receive the sum
var m = parseInt(prompt('Enter the starting number'));
var n = parseInt(prompt('Enter the ending number'));
var sum = 0;
for (var x = m; x <= n; x = x + 1) {
    sum = sum + x;
}
console.log(sum);
*/

//the sum will be runing 5 times
for (var x = 1; x <= 5; x++) {
    var num1 = parseInt(prompt('Enter first number'));
    var num2 = parseInt(prompt('Enter second number'));
    var sum = num1 + num2;
    console.log(sum);
}