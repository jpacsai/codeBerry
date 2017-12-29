var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var a = 250;
var b = 50;
var cw = 450;
var ch = 300;

context.fillStyle = '#E2080B';
context.fillRect((cw-a)/2,(ch-b*3)/2,a,b);

context.fillStyle = '#FFFFFF';
context.fillRect((cw-a)/2,(ch-b*3)/2+b,a,b);

context.fillStyle = '#0CA120';
context.fillRect((cw-a)/2,(ch-b*3)/2+b*2,a,b);
