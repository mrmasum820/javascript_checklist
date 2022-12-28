//Error handling - try, catch, finally, throw
//syntax error isn't handle try catch - run time error

/*
try {
    alert('hello');
    console.log(x);
} catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    alert('bye');
}
*/

var button = document.querySelector('#btnId');

button.addEventListener('click', function () {
    var input = document.querySelector('#numberId').value;

    try {
        if (input < 10) {
            throw 'Number is too low'
        } else if (input > 20) {
            throw 'Number is too high'
        }
        console.log(input);
    } catch (err) {
        console.log(err);
    }

})