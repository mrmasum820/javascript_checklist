// import { text } from './external.js';

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }

    get studentInfo() {
        return this.id + ' ' + this.name;
    }
}

const s1 = new Student(101, 'masum');
// console.log(s1.name);
// s1.studentName = 'MD Mahbubur Rahman';
// console.log(s1.name);

console.log(s1.studentInfo);