/*
//traditional function
function displayName1() {
    console.log('MR Masum 1');
}
displayName1();

function add1(x, y) {
    return x + y;
}
console.log(add1(2, 3));

//arrow function
const displayName2 = () => {
    console.log('MR Masum 2');
}
displayName2();

// const add2 = (x, y) => {
//     return x + y;
// }
const add2 = (x, y) => x + y;
console.log(add2(10, 20));
*/


//filter and map using arrow function(log students name where students cgpa is 3 up)

const students = [
    {
        id: 101,
        name: 'masum',
        cgpa: 3.80
    },
    {
        id: 102,
        name: 'shawan',
        cgpa: 3.33
    },
    {
        id: 103,
        name: 'atik',
        cgpa: 2.80
    },
    {
        id: 104,
        name: 'arman',
        cgpa: 2.45
    }
]

// function studentsName1() {
//     return students.filter(function (x) {
//         return x.cgpa > 3
//     }).map(function (y) {
//         return y.name;
//     })
// }

const studentsName2 = () => {
    return students.filter(x => x.cgpa > 3).map(y => y.name);
}
console.log(studentsName2());
