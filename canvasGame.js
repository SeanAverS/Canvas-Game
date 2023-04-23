let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Square 
ctx.strokeStyle = "lightgrey";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.lineTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(100, 100)
ctx.lineTo(0, 100);
ctx.closePath();
ctx.stroke();
