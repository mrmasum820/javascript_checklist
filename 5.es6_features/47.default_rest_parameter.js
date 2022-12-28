"use strict"
/*
//default parameter
function displayName(text = 'Masum') {
    console.log(`${text}`)
}
displayName();
displayName('MR Masum');

const showName = (text = 'Masum') => {
    console.log(`My name is ${text}`);
}
showName('MD Mahbubur Rahman');
*/

//rest parameter
function showNumbers(x, y, ...z) {
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}
showNumbers(10, 20, 30, 40, 50, 60);