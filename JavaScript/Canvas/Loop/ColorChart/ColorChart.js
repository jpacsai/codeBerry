var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasHeight = 60;
var canvasWidth = 100;
var size = 30;
var space = 5;
var red = 199;
var blue = 120;

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    context.fillStyle = 'rgb(' + red + ', 79, ' + blue +')';
    context.fillRect(canvasWidth,canvasHeight,size,size);
    canvasWidth += size + space;
    red -= 7;
  }
  canvasHeight += size + space;
  canvasWidth = 100;
  blue += 15;
}
