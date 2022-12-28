//IIFEs (Immediately  Invokeable Function Expressions)

// (function display() {
//     console.log('hello');
// })();

// (function display(message) {
//     console.log(message);
// })('good afternoon.');

//create an IIFEs that print sum of 2 numbers
(function sum(x, y) {
    var result = x + y;
    console.log(result);
})(2, 3)


//Function Expressions

// const displayMessage = function display() {
//     console.log('Hi, I am a message');
// }
// displayMessage();

const displayMessage = function display(msg) {
    console.log(msg);
}
displayMessage('Hi, i am a message');