//use case using function
function add(x, y, z) {
    return x + y + z;
}
// let numbers = [1, 2, 3];
// console.log(add(numbers[0], numbers[1], numbers[2]));
// console.log(add(...numbers));


// array concat
// let numbers1 = [...numbers, 4, 5];
// console.log(numbers1);

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
// let numbers = numbers1.concat(numbers2);
let numbers = [...numbers1, ...numbers2];
// console.log(numbers);


//object concat
let p1 = {
    name: 'MR Masum',
    age: 27
}
let p2 = {
    occupation: 'Software Engineer',
    nationality: 'Bangladeshi'
}

// let p = { ...p1, ...p2 };
console.log({ ...p1, ...p2 });