//DOM events
//1. Event Object - event type(change, submit, load, unload, open, play, canplay, pause, playing, progress, ended, resize, scroll, toggle etc.)

// change event - <input > - type text, email, radio, checkbox, color,  time, date, week, month, url, select, textarea

//input type name, email
document.querySelector('input[type=text]').addEventListener('change', handleName);
function handleName(e) {
    // console.log(e.target);
    // console.log(e.target.type);
    // console.log(e.target.id);
    console.log(e.target.value);
}

//type checkbox
var programs = document.querySelectorAll('input[name=program]');
// console.log(programs);
Array.from(programs).map((program) => {
    program.addEventListener('change', programHandler);
})
function programHandler(e) {
    if (e.target.checked) {
        console.log(e.target.value);
    }
}

//type select
var department = document.querySelector('#department');
department.addEventListener('change', handleDepartment);
function handleDepartment(e) {
    console.log(e.target.value);
}

//2. MouseEvent object
//3. KeyboardEvent Object
//4. FocusEvent object
//5. ClipboardEvent object
//6. DragEvent object

