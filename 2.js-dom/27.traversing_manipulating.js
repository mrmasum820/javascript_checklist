//Downwords (querySelector / querySelectorAll)
const studentList = document.querySelector('.students-list');
const studentA = studentList.querySelector('.student-a');
//Downwords (children)
const studentB = studentList.children[0];


//Upwords (parentElement)
const studentC = document.querySelector('li');
const studentList = studentC.parentElement;


//sideways
const studentA = document.querySelector('li');
const studentB = studentA.nextElementSibling;
const studentC = studentB.previousElementSibling;
