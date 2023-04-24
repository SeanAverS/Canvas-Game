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

// Player One Sqaure
let playerOneX = 0;
let playerOneY = 0;

// Square
ctx.fillStyle = "#8C001A";
ctx.fillRect(playerOneX, playerOneY, 100, 100);

// Font
ctx.font = "30px Cursive";
ctx.fillStyle = "white";
ctx.fillText("P1", playerOneX + 35, playerOneY + 55)

// Player Two Sqaure
let playerTwoX = 300;
let playerTwoY = 300;

ctx.fillStyle = "#528AAE";
ctx.fillRect(playerTwoX, playerTwoY, 100, 100);

// Font
ctx.font = ("30px Cursive");
ctx.fillStyle = "white";
ctx.fillText("P2", playerTwoX + 35, playerTwoY + 55)







