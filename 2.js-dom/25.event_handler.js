const handleElement = document.querySelector("#para");
function firstButton() {
    handleElement.innerHTML = 'you have clicked button 1'
}
function secondButton() {
    handleElement.innerHTML = 'you have clicked button 2'
}

function firstPicture() {
    document.getElementById("myImage").src = "images/doyel.jpg";
}
function secondPicture() {
    document.getElementById("myImage").src = "images/tiya.jpg";
}