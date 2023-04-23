let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let squareX = 0;
let squareY = 0;

// Create Grid with Sqaure 
for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 4; col++) {
        ctx.strokeRect(squareX, squareY, 100, 100);
        squareX += 100;
    }
    // New row after inner loop
    squareX = 0;
    squareY += 100;
}

