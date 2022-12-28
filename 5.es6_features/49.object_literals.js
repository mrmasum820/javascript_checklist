//return object from function without duplication
const studentsInfo = (name, age) => {
    return {
        name,
        age
    }
}
// console.log(studentsInfo('Masum', 27));

//consize method in object
let message = {
    // info: function () {
    //     return `Hi, I am from object function`;
    // }

    info() {
        return `Hi, I am from object function`;
    }
}
// console.log(message.info());

//function name using space with consize method
let firstName = {
    'show name'() {
        return `Hi, My first name is MD Mahbubur`;
    }
}
console.log(firstName['show name']());