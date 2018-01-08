var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

for (var x = 0; x < canvasWidth; x += 3) {
    context.beginPath();
    context.moveTo(x, canvasHeight/2) ;
    if (x % 2) {
      context.lineTo(canvasWidth/2, 0);
     }
    else {
      context.lineTo(canvasWidth/2, canvasHeight);
    }
    context.strokeStyle = "deeppink";
    context.stroke();
}