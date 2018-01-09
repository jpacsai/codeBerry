var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function check(row, column) {
  
  var sideX = canvas.width / column;
  var sideY = canvas.height / row;
  
  var x = 0;
  var y = 0;
  var color1;
  var color2;
  
  for (var i = 1; i <= row; i++) {
    if (i % 2) {
      color1 = "black";
      color2 = "white";
    }
    else {
      color1 = "white";
      color2 = "black";
    }
    
    for (var j = 1; j <= column; j++) {
      if (j % 2) {
        context.fillStyle = color1;
      }
      else { 
        context.fillStyle = color2;
      }
      context.fillRect(x,y,sideX,sideY);
      x += sideX;
    }
    y += sideY;
    x = 0;
  }
  
  
}

check(8, 8);