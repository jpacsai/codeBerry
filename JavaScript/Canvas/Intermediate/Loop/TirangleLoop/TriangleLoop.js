var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = 50;
var y = 150;
var side = 100;

for (var i = 1; i <= 30; i++) {
  context.beginPath();
  context.moveTo(x, y) ;
  context.lineTo(x+side, y);
  context.lineTo(x+side/2, y-side);
  context.lineTo(x, y);
  context.strokeStyle = "grey";
  context.stroke();
  x += 5;
  y += 5;  
}
