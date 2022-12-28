//find - (value, index, array) -> return the first item from the array using condition
let numbers = [5, 55, 20, 19, 71, 54];

const evenNumbers = (value, index, arr) => {
    if (value % 2 === 0) {
        return value;
    }
}
// const firstEvenNumber = numbers.find(x => x % 2 === 0)
const firstEvenNumber = numbers.find(evenNumbers);

// console.log(firstEvenNumber);


//findIndex
const firstEvenNumberIndex = numbers.findIndex((value, index, array) => {
    if (value % 2 === 0) {
        return value;
    }
})

// console.log(firstEvenNumberIndex);




//find using object
const students = [
    {
        id: 101,
        gpa: 3.32
    },
    {
        id: 102,
        gpa: 3.80
    },
    {
        id: 103,
        gpa: 4.05
    },
    {
        id: 104,
        gpa: 4.40
    }
]

const studentId = students.find(x => x.gpa > 4);
console.log(studentId);