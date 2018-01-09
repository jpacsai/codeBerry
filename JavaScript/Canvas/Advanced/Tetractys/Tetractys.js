var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function tetractys(side,row) {
  
	var height = side * 0.8944;
	var topY = canvas.height/10;
	var topX = canvas.width/2;
	var color = 360;
	var colorStep = 360/10;
	
	var counter = 1;
	
	for (var i = 1; i <= row; i++ ) {
		for (var j = 1; j <= counter; j++) {
			context.fillStyle = 'hsla('+ color + ', 70%, 64%, 1)';
			context.beginPath();
			context.moveTo(topX,topY);
			context.lineTo(topX-side/2, topY+height);
			context.lineTo(topX+side/2,topY+height);
			context.lineTo(topX,topY);
			context.strokeStyle = "white";
			context.stroke();
			context.fill();
			if (j != counter) {	
				topX = topX+side;
			}
		}
		topX = topX-(side/2)-side*i+side;
		topY = topY+height;
		color -= colorStep;
		counter++;
	}
}

tetractys(100,3);