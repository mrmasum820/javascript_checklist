//creating an object
/*
var student1 = {
    name: 'MR Masum',
    age: 27,
    cgpa: 3.20,
    language: ['Bangla', 'English', 'Spanish']
}
var student2 = {
    name: 'MH Shawan',
    age: 28,
    cgpa: 3.00,
    language: ['Bangla', 'English', 'Spanish', 'Hindi']
}

//print an object
console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.language);
*/

//constructor -> is an special function which is a template of an object
var Student = function (name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    //adding function inside a constructor
    this.display = function () {
        console.log(name);
        console.log(age);
        console.log(cgpa);
        console.log(lang);
    }
}
var student1 = new Student('MR Masum', 27, 3.20, ['Bangla', 'English']);
var student2 = new Student('MH Shawan', 28, 3.00, ['Bangla', 'English', 'Hindi']);

// console.log(student1.name);
student1.display();
student2.display();
