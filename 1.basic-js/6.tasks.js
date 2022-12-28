//task 1-> make a calculator
/*
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum = num1 + num2;
document.write('Sum of two numbers is: ' + sum + '<br>');

var sub = num1 - num2;
document.write('Sub of two numbers is: ' + sub + '<br>');

var multi = num1 * num2;
document.write('Multiply of two numbers is: ' + multi + '<br>');

var divi = num1 / num2;
document.write('Division of two numbers is: ' + divi + '<br>');

var modulus = num1 % num2;
document.write('Modulus of two numbers is: ' + modulus);
*/

//task 2-> area of various shape
/*
var base = parseFloat(prompt('Enter base: '));
var height = parseFloat(prompt('Enter height: '));

var area = base * height;
var triangle = (base * height) / 2;

document.write('The area is: ' + area + '<br>');
document.write('The triangle is: ' + triangle);
*/

//task 3-> temparature converter
var farn = parseFloat(prompt('Enter Fahrenheit = '));
var cels = (farn - 32) * (5 / 9);
// var farn = (cels * (9/5) + 32);

document.write("Celsius = " + cels);