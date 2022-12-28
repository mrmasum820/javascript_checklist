/*
var myHeading = document.querySelector("h1");

myHeading.addEventListener("mouseover", function () {
    myHeading.classList.add('my-style');
})

myHeading.addEventListener("mouseout", function () {
    myHeading.classList.remove('my-style');
})
*/

/*
//event listeners with multiple elements
var length = document.querySelectorAll(".myButton").length;

for (var i = 0; i < length; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h2").innerHTML = text + " is clicked";
    })
}
*/


//audio player
var length = document.querySelectorAll('.myButton').length;

for (var i = 0; i < length; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener("click", function () {
        var text = this.innerHTML;
        playAudio(text);
    })

}

function playAudio(text) {
    switch (text) {
        case 'a':
            var audio = new Audio('./sounds/a.mp3');
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 5000)
            break;
        case 'alphabet':
            var audio = new Audio('./sounds/alphabet.mp3');
            audio.play();
            break;
        case 'fifa':
            var audio = new Audio('./sounds/fifa.mp3');
            audio.play();
            break;
        default:
            console.log('no audio is selected');
    }
}



