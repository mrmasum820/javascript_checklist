var photos = ['images/picture-1.jpg', 'images/picture-2.jpg', 'images/picture-3.jpg'];
var imgTag = document.querySelector('img');

var count = 0;
function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

function previous() {
    count--;
    if (count < 1) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}