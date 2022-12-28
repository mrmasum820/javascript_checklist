//keyboardEvent object

// 1. keydown - pressing a key then repeat
const textarea = document.querySelector('textarea');

// textarea.addEventListener('keydown', function (e) {
//     // console.log(e.repeat);
//     if (e.repeat) {
//         alert('do not press and hold the key')
//     }
// })

// 2. keypress (may not supported by some browers)
// textarea.addEventListener('keypress', function () {
//     console.log('keypress');
// })

// 3.keyup - some properties -> key, keyCode, code, shiftKey, ctlKey, repeat
textarea.addEventListener('keyup', function (e) {
    // console.log(e.key);
    // console.log(e.shiftKey);
    if (e.shiftKey) {
        console.log(`shift+ ${e.key}`)
    }
})