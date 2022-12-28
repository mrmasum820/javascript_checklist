// document.getElementById("heading").innerHTML = 'Hello world';

var head = document.getElementsByTagName("h1")[0]; //html collections
// head.innerHTML = 'heading changed';

// document.getElementsByClassName("para")[0].innerHTML = 'Good bye'; // html collections


//query selector
// document.querySelector("h1").innerHTML = "Good morning";
// document.querySelector("#heading").innerHTML = "Good morning";
// document.querySelector(".para").innerHTML = "Good morning";

var heading1 = document.querySelectorAll("h1")[0]; //nodelist
heading1.innerHTML = 'Hello javascript';