//callback and higherorder function
/*
function square(x) {
    console.log(`${x} square is: ${x * x}`)
}
// const y = square;
// y(5);

function higherorder(num, callback) {
    callback(num);
}
higherorder(5, square);
*/


//another callback example
const task1 = (callback) => {
    console.log('task 1');
    callback();
}
const task2 = (callback) => {
    setTimeout(() => {
        console.log('task 2! data is loading...');
        callback();
    }, 3000)
}
const task3 = (callback) => {
    console.log('task 3');
    callback();
}
const task4 = (callback) => {
    setTimeout(() => {
        console.log('task 4! network call');
        callback();
    }, 2000)
}
const task5 = () => {
    console.log('task 5');
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5();
            });
        });
    });
});


/*
// event listener is asynchronous
console.log('hi');
document.querySelector('button').addEventListener('click', () => {
    console.log('button clicked');
})
console.log('bye');
*/