var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasHeight = 20;
var canvasWidth = 20;
var size = 40;
var space = 10;

var counter = 1;

for (var i=1; i<=5; i++) {
  for (var j=1; j<=counter; j++) {
    context.fillStyle = 'rgba(246, 28, 141, 0.5';
    context.fillRect(canvasWidth,canvasHeight,size,size);
    canvasWidth += size + space;
  }
  canvasHeight += size + space;
  canvasWidth = 20;
  counter ++;
}
