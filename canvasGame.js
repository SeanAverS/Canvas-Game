let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let squareX = 0;

// Create Grid with Sqaure 
for (let row = 1; row <= 4; row++) {
    ctx.strokeRect(squareX, 0, 100, 100);
    squareX += 100;
}
