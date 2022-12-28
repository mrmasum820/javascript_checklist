const task1 = () => {
    console.log('task 1');
}
const task2 = () => {
    setTimeout(() => {
        console.log('task 2! data is loading...');
    }, 3000)
}
const task3 = () => {
    console.log('task 3');
}
const task4 = () => {
    console.log('task 4');
}
const task5 = () => {
    console.log('task 5');
}

task1();
task2();
task3();
task4();
task5();