var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasHeight = 20;
var canvasWidth = 20;
var size = 40

for (var i=1; i<=10; i++) {
  context.fillStyle = 'rgba(246, 28, 141, 0.5';
  context.fillRect(canvasWidth,canvasHeight,size,size);
  canvasWidth += size/2;
  canvasHeight += size/2;
}