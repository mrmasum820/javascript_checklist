//clipboardEvent object
//oncopy
const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('copy', function () {
    p.innerText = 'you have copied the input text';
})

//oncut
input.addEventListener('cut', function () {
    p.innerText = 'you have cut the input text';
})

//onpaste
input.addEventListener('paste', function () {
    p.innerText = 'you have paste the text';
})