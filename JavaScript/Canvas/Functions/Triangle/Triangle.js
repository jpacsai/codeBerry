var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function triangle(x,y,a) {
  context.fillStyle = 'rgba(246, 166, 28, 0.67)';
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x+a/2, y+a);
  context.lineTo(x-a/2, y+a);
  context.lineTo(x, y);
  context.strokeStyle = "mediumslateblue";
  context.stroke();
  context.fill();
}
  
triangle(230,160,50);
triangle(270,100,50);
triangle(200,50,150);