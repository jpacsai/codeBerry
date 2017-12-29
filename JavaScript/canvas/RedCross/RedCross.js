var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var canvasHeight = canvas.height;
var canvasWidth = canvas.width;

context.beginPath();
context.moveTo(0, 0) ;
context.lineTo(canvasWidth,canvasHeight);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.moveTo(0, canvasHeight) ;
context.lineTo(canvasWidth,0);
context.strokeStyle = "red";
context.stroke();