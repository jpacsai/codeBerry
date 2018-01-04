var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;
var triangle = 100;

context.fillStyle = 'rgba(246, 166, 28, 0.67)';
context.beginPath();
context.moveTo(canvasWidth/2-triangle/2, canvasHeight-triangle) ;
context.lineTo(canvasWidth/2+triangle/2, canvasHeight-triangle);
context.lineTo(canvasWidth/2, canvasHeight-triangle*2);
context.lineTo(canvasWidth/2-triangle/2, canvasHeight-triangle);
context.strokeStyle = "grey";
context.stroke();
context.fill();
