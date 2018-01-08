var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

for (var x = 0; x < canvasWidth; x++) {
    context.beginPath();
    context.moveTo(x, canvasHeight/2) ;
    if (x % 4 === 0) {
      context.lineTo(0, 0);
     }
    else if (x % 4 === 1) {
      context.lineTo(canvasWidth, 0);
    }
    else if (x % 4 === 2) {
      context.lineTo(0, canvasHeight);
    }
    else {
      context.lineTo(canvasWidth, canvasHeight);
    }
    context.strokeStyle = "mediumslateblue";
    context.stroke();
}  
  