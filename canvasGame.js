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

//Squares
// Player One Sqaure
let playerOneX = 0;
let playerOneY = 0;

function playerOneSquare() {
    ctx.fillStyle = "#8C001A";
    ctx.fillRect(playerOneX, playerOneY, 100, 100);

    // Font
    ctx.font = "30px Cursive";
    ctx.fillStyle = "white";
    ctx.fillText("P1", playerOneX + 35, playerOneY + 55)
}

// Player Two Square
let playerTwoX = 300;
let playerTwoY = 300;

function playerTwoSquare() {

    ctx.fillStyle = "#528AAE";
    ctx.fillRect(playerTwoX, playerTwoY, 100, 100);

    // Font
    ctx.font = ("30px Cursive");
    ctx.fillStyle = "white";
    ctx.fillText("P2", playerTwoX + 35, playerTwoY + 55)
}

// Load Squares on page load
window.addEventListener("load", function () {
    playerOneSquare();
    playerTwoSquare();
});

// Keyboard Events for Squares
// Player One
// Left
window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        playerOneLeft();
    }
});

// Up
window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        console.log("One-Up");
        //playerOneUp
    }
});

// Right
window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        playerOneRight();
    }
});

// Down
window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        console.log("One-Down");
        //playerOneDown
    }
});

// Player Two
// Left
window.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
        console.log("Two-Left");
        //playerOneLeft
    }
});

// Up
window.addEventListener("keydown", function (e) {
    if (e.key === "w" || e.key === "W") {
        console.log("Two-Up");
        //playerOneUp
    }
});

// Right
window.addEventListener("keydown", function (e) {
    if (e.key === "d" || e.key === "D") {
        console.log("Two-Right");
        //playerOneRight
    }
});

// Down
window.addEventListener("keydown", function (e) {
    if (e.key === "s" || e.key === "S") {
        console.log("Two-Down");
        //playerOneDown
    }
});
















