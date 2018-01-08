var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//var canvasWidth = canvas.width;
//var canvasHeight = canvas.height;

function filledStar(x,y,a) {
  context.fillStyle = "deeppink";
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x+a, y);
  context.lineTo(x+a/6, y+a/2);
  context.lineTo(x+a/2, y-a/3);
  context.lineTo(x+a-a/6, y+a/2);
  context.strokeStyle = "mediumslateblue";
  context.stroke();
  context.fill();
}
  
filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);