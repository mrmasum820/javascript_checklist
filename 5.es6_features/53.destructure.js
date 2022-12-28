//array destructuring
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0]);
// console.log(numbers[1]);

// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1);
// console.log(num5);

// const [x, y, ...z] = numbers;
// console.log(x);
// console.log(z);


//swap
// let a = 10, b = 20;
// [a, b] = [b, a]
// console.log(a, b);


//object destructuring
const studentsInfo = {
    id: 105,
    name: 'masum',
    gpa: 3.80,
    languages: {
        native: 'bangla',
        intermediate: 'english',
        beginner: 'german'
    }
}
const { id, name, languages } = studentsInfo;

// console.log(id);
// console.log(languages.native);



//destructuring function parameters
const display = ({ name, position }) => {
    console.log(`Name: ${name} and Position: ${position}`);
}

let myInfo = {
    name: 'masum',
    position: 'software engineer',
    country: 'bangladesh'
}

display(myInfo);