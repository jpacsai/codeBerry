var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var x = 0;
var y = 0;
var color = 360;
var colorStep = 360/17;
var step = 10;
var round = 17;

for (var i = 1; i <= round; i++) {
  context.fillStyle = 'hsla('+ color + ', 50%, 45%, 1)';
  context.fillRect(x,y,canvasWidth,canvasHeight);
  canvasWidth -= step*2;
  canvasHeight -= step*2;
  color -= colorStep;
  x += step;
  y += step;
}