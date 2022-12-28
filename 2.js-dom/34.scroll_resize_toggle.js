//load, unload
window.addEventListener('unload', function () {
    console.log('unload');
})
window.addEventListener('load', function () {
    console.log('load');
})

//scroll
window.addEventListener('scroll', function () {
    console.log('scrolling');
})

//resize
window.addEventListener('resize', function () {
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`width: ${width} and height: ${height}`);
})

//toggle - details -> summary tag
const details = document.querySelector('details');

details.addEventListener('toggle', function (e) {
    if (e.target.open == true) {
        console.log('you have opened the file');
    } else {
        console.log('you have closed the file');
    }
})