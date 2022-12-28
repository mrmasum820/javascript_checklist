//changing html elements
//find the element using getElementById, getElementsByClassName, getElementsByTagName, querySelector
var link = document.getElementsByTagName('a')[0];

//property
//Element.innerHTML = new HTML content
//Element.attribute = new value
//Element.style.property = new style
link.innerHTML = 'mr masum';
link.style.textDecoration = 'none';
link.style.fontSize = '20px';
link.href = "https://mrmasum.netlify.app";

//creating html elements
//document.createElement()
//document.createTextNode()
var heading2 = document.createElement('h2');
var text = document.createTextNode('This heading is created using javascript');
heading2.appendChild(text);

//find parent element and add html element in parent element
//appendChild()
var myDiv = document.getElementById('my-div');
myDiv.appendChild(heading2);

//create an html element with insertBefore(before, after)
var heading3 = document.createElement('h3');
var headingText = document.createTextNode('this heading text will place before last heading');
heading3.appendChild(headingText);

myDiv.insertBefore(heading3, heading2);


//remove html element
//removeChild()
var delElement = document.getElementsByTagName('h1')[1];
myDiv.removeChild(delElement);

//replace html element
//replaceChild(newChild, oldChild)

//add, remove using classList
//classList.add()
//classList.remove()
myDiv.classList.add('secondStyle');
myDiv.classList.remove('secondStyle');