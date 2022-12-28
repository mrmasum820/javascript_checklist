//creating a function
// function square(num1, num2) {
//     var result = num1 * num2;
//     console.log('Result = ' + result);
// }

//calling a function
// square(5);
// square(6);
// square(5, 6);

function square(num1, num2) {
    var result = num1 * num2;
    return result;
}
// document.write(square(5, 6));
var x = square(4, 5);
console.log(x);


//addition
function add(x, y) {
    var result = x + y;
    document.write('Addition is: ' + result + '<br>')
}

//subtraction
function sub(x, y) {
    var result = x - y;
    document.write('subtraction is: ' + result + '<br>')
}

//multiplication
function multi(x, y) {
    var result = x * y;
    document.write('multiplication is: ' + result + '<br>')
}

//division
function divi(x, y) {
    var result = x / y;
    document.write('division is: ' + result + '<br>')
}

add(10, 20);
sub(10, 20);
multi(10, 20);
divi(10, 20);