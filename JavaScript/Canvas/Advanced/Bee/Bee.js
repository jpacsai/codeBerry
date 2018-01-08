var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function bee(side, space) {
  var x = canvas.width/2 - 1.5 * side;
  var y = canvas.height / 3; 
  for ( var i = 1; i <= 7; i++) {
    context.beginPath();
    context.moveTo(x+side/2,y-side);
    context.lineTo(x+side,y);
    context.lineTo(x+side/2,y+side);
    context.lineTo(x-side/2, y+side);
    context.lineTo(x-side, y);
    context.lineTo(x-side/2, y-side);
    context.lineTo(x+side/2,y-side);
    context.strokeStyle = "orange";
    context.stroke();
    y += 2 * side + space * 2;
    console.log(y);
    if (y+side/2 > canvas.height) {
       // console.log("igen");
      x = canvas.width / 2 + space;
      y = canvas.height / 3 - side - space;
    }
  }
  
}

bee(55, 10);