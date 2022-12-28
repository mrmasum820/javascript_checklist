// document.addEventListener("keypress", function (event) {
//     var text = event.key;
//     document.querySelector('p').innerHTML = 'you have pressed ' + text;
// })

var count = 0;
document.querySelector('#textarea').addEventListener('keypress', function (event) {
    count++;
    var text = event.key;
    document.querySelector('p').innerHTML = 'you have pressed total key' + count;
})