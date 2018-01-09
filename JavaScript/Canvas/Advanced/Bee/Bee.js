var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function bee(num, side, space, color) {
  
  var x = canvas.width/2 - 1.5 * side;
  var y = canvas.height / 3; 
  
  for ( var i = 1; i <= num; i++) {
    context.beginPath();
    context.moveTo(x+side/2, y-side);
    context.lineTo(x+side, y);
    context.lineTo(x+side/2, y+side);
    context.lineTo(x-side/2, y+side);
    context.lineTo(x-side, y);
    context.lineTo(x-side/2, y-side);
    context.lineTo(x+side/2, y-side);
    context.strokeStyle = color;
    context.stroke();
    y += 2*side + space*2;

    if (y+side/2 > canvas.height) {
      x = x + 1.5*side + space;
      y = y - 5*side - 5*space;
    }
    
    if (i === num) {
      context.fillStyle = color;
      context.fill();
    }
  }
  
}

bee(7, 55, 10, "orange");