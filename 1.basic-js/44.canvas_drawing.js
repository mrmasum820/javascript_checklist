//bangladesh flag using 2d

var canvas = document.getElementById('canvasId');

var flag = canvas.getContext('2d');

flag.lineWidth = 3;
flag.strokeStyle = 'black';
flag.strokeRect(10, 10, 380, 280);

flag.fillStyle = 'green';
flag.fillRect(12, 12, 376, 276);

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

flag.beginPath(); // to make the circle for start
flag.arc(centerX, centerY, 80, 0, 2 * Math.PI, false); // where we start
flag.fillStyle = 'red';
flag.fill(); //to make the circle visible with fillStyle
// flag.strokeStyle = 'yellow';
flag.stroke();