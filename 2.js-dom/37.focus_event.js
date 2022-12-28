// 1. onblur
const input = document.querySelector('input');
input.addEventListener('blur', function (e) {
    // console.log('blur occured');
    // input.style.backgroundColor = 'transparent';
    input.value = e.target.value.toUpperCase();
})

// 2. onfocus
input.addEventListener('focus', function () {
    // console.log('focus occured');
    // input.style.backgroundColor = 'red';
})

// 3. onfocusin
// input.addEventListener('focusin', function () {
//     console.log('focusin occured');
// })

// 4. onfoucsout
// input.addEventListener('focusout', function () {
//     console.log('focusout occured');
// })