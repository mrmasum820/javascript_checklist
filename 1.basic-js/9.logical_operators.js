//using logical operator
/*
var marks = prompt('Enter your marks: ');
if (marks > 100 || marks < 0) {
    document.write('Invalid marks');
} else if (marks >= 80 && marks <= 100) {
    document.write('You got A+ and your marks is: ' + marks)
} else if (marks >= 70 && marks <= 79) {
    document.write('You got A and your marks is: ' + marks)
} else if (marks >= 60 && marks <= 69) {
    document.write('You got A- and your marks is: ' + marks)
} else if (marks >= 50 && marks <= 59) {
    document.write('You got B and your marks is: ' + marks)
} else if (marks >= 40 && marks <= 49) {
    document.write('You got C and your marks is: ' + marks)
} else if (marks >= 33 && marks <= 39) {
    document.write('You got D and your marks is: ' + marks)
} else {
    document.write('You have failed..')
}
*/

/*
//find largest number 
var num1 = prompt('Enter first number = ');
var num2 = prompt('Enter second number = ');
var num3 = prompt('Enter third number = ');
if (num1 > num2 && num1 > num3) {
    console.log('First number is large and that is ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('second number is large and that is ' + num1);
} else {
    console.log('third number is large and that is ' + num1);
}
*/


// vowel / consonent
var letter = prompt('Enter a letter: ');

letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    console.log('vowel');
else
    console.log('consonant');