var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var startX = 50;
var startY = 50;

var side = 40;
var step = 20;

var grey = "hsla(233, 0%, 58%, 0.5)";
var blue = "hsla(233, 100%, 48%, 0.5)";
var yellow = "hsla(57, 100%, 48%, 0.5)";
var green = "hsla(115, 100%, 48%, 0.5)";

for (var i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    context.fillStyle = green;
  }
  else if (i % 5 === 0) {
    context.fillStyle = yellow;
  }
  else if (i % 3 === 0) {
    context.fillStyle = blue;
  }
  else {
    context.fillStyle = grey;
  }
  context.fillRect(startX,startY,side,side);
  startX += step;
  startY += step;
}