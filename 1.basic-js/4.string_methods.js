//length, prompt, charAt, toUppercase, toLowercase, string concat, slice

//length
// var text = 'Bangladesh';
// var length = text.length;
// console.log('Number of character is ' + text.length);

//prompt
// var text = prompt("Enter your name: ");
// document.write('Your name is: ' + text);
// console.log('Name length is ' + text.length);

//charAt
// var name = 'Mahbubur Rahman';
// name = name.charAt(5);
// console.log(name);

//toUppercase & toLowerCase
// var countryName = 'Bangladesh';
// console.log(countryName.toUpperCase());
// console.log(countryName.toLowerCase());

//concationation
// var text1 = 'Bangladesh';
// var text2 = ' is a beautiful country';
// var text = text1.concat(text2);
// console.log(text);

//slice method
// var country = 'Bangladesh';
// var newCountry = country.slice(2, 5);
// console.log(newCountry);


//task 2
var firstName = prompt('Enter your first name: ');
var lastName = prompt('Enter your last name: ');

var fullName = firstName + lastName;
var length = fullName.length;

document.write('Your Fullname is: ' + fullName + '<br>');
document.write('Fullname Length is: ' + length + '<br>');
document.write('Uppercase of fullname: ' + fullName.toUpperCase() + '<br>');
document.write('Lowercase of fullname: ' + fullName.toLowerCase());