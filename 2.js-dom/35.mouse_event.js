//MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo> is not work with this elements

//when will work in html then we will use onclick but using javascript will use click / dblclick

const div = document.querySelector('div');
// 1. onclick
div.addEventListener('click', function (e) {
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    // console.log(e.target.innerText);
})

const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

Array.from(buttons).map((button) => {
    button.addEventListener('click', function (e) {
        // console.log('button clicked')
        console.log(e.target.innerText);
    })
})

// 2. ondblclick
// div.addEventListener('dblclick', function () {
//     console.log('dblclicked');
// })

// 3. onmousedown
// div.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// 4. onmouseup
// div.addEventListener('mouseup', function () {
//     console.log('mouseup');
// })

// 5. onmouseenter
// div.addEventListener('mouseenter', function () {
//     console.log('mouseenter');
// })

// 6. onmouseleave
// div.addEventListener('mouseleave', function () {
//     console.log('mouseleave');
// })

// 7. onmousemove
div.addEventListener('mousemove', function (e) {
    // console.log(`clientX: ${e.clientX} and clientY: ${e.clientY}`);
    // console.log(`offsetX: ${e.offsetX} and offsetY: ${e.offsetY}`);
})


// 8. onmouseover
// div.addEventListener('mouseover', function () {
//     console.log('mouseover');
// })