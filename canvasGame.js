let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let squareX = 0;
let squareY = 0;

// Initial Screen
canvas.style.display = "none";

// Turn Generator
// Random number
let randomNum = Math.floor(Math.random() * 10) + 1;

// Player Inputs 
// Player one
let inputOne = document.getElementById("p1-choice");

// Player two 
let inputTwo = document.getElementById("p2-choice");

// Button
let turnButton = document.getElementById('turn-generator-button');
turnButton.addEventListener('click', generateTurn);

// Turn Output / Error Message Display
let turnOutput = document.getElementById('turn-generator-output');

// Start Game Button
let startGameButton = document.getElementById('start-game-button');
startGameButton.style.display = "none";

function startGame() {
    startGameButton.style.display = "block";
    startGameButton.style.margin = "auto";
}

function generateTurn() {
    let p1Choice = +inputOne.value;
    let p2Choice = +inputTwo.value;

    if (p1Choice > 0 && p1Choice <= 10 && p2Choice > 0 && p2Choice <= 10) {
        // Diff between player choice and random number
        let playerOneDiff = Math.abs(p1Choice - randomNum);
        let playerTwoDiff = Math.abs(p2Choice - randomNum);

        // Smallest Diff is winner - gets first turn 
        if (playerOneDiff === playerTwoDiff) {
            turnOutput.textContent = "Same Numbers. Please try again."
        } else if (playerOneDiff > playerTwoDiff) {
            turnOutput.textContent = "Player Two Goes First!"
            startGame();
        } else {
            turnOutput.textContent = "Player One Goes First!";
            startGame();
        }
    } else {
        turnOutput.textContent = "Both Players Must enter a number between 1-10";
    }
}

// Create Grid with Sqaure 
function makeGrid() {
    for (let row = 1; row <= 4; row++) {
        for (let col = 1; col <= 4; col++) {
            ctx.strokeRect(squareX, squareY, 100, 100);
            squareX += 100;
        }
        // New row after inner loop
        squareX = 0;
        squareY += 100;
    }
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
    makeGrid();
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
        playerOneUp();
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
        playerOneDown();
    }
});

// Player Two
// Left
window.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
        playerTwoLeft();
    }
});

// Up
window.addEventListener("keydown", function (e) {
    if (e.key === "w" || e.key === "W") {
        playerTwoUp();
    }
});

// Right
window.addEventListener("keydown", function (e) {
    if (e.key === "d" || e.key === "D") {
        playerTwoRight();
    }
});

// Down
window.addEventListener("keydown", function (e) {
    if (e.key === "s" || e.key === "S") {
        playerTwoDown();
    }
});

// Functions to move player squares w/ Keyboard Events
// Player One
// Left
function playerOneLeft() {
    if (playerOneX >= 100) {
        ctx.clearRect(playerOneX, playerOneY, 99, 99);
        makeGrid();
        playerOneX -= 100;
        playerOneSquare();
    }
}

// Up
function playerOneUp() {
    if (playerOneY >= 100) {
        ctx.clearRect(playerOneX, playerOneY, 99, 99);
        playerOneY -= 100;
        playerOneSquare();
    }
}

// Down
function playerOneDown() {
    if (playerOneY >= 0 && playerOneY <= 200) {
        ctx.clearRect(playerOneX, playerOneY, 99, 99);
        playerOneY += 100;
        playerOneSquare();
    }
}

// Right
function playerOneRight() {
    if (playerOneX <= 200) {
        ctx.clearRect(playerOneX, playerOneY, 99, 99);
        makeGrid();
        playerOneX += 100;
        playerOneSquare();
    }
}

// Player Two
// Left
function playerTwoLeft() {
    if (playerTwoX >= 100) {
        ctx.clearRect(playerTwoX, playerTwoY, 99, 99);
        playerTwoX -= 100;
        playerTwoSquare();
    }
}

// Up
function playerTwoUp() {
    if (playerTwoY >= 100) {
        ctx.clearRect(playerTwoX, playerTwoY, 99, 99);
        playerTwoY -= 100;
        playerTwoSquare();
    }
}

// Down
function playerTwoDown() {
    if (playerTwoY >= 0 && playerTwoY <= 200) {
        ctx.clearRect(playerTwoX, playerTwoY, 99, 99);
        playerTwoY += 100;
        playerTwoSquare();
    }
}

// Right
function playerTwoRight() {
    if (playerTwoX <= 200) {
        ctx.clearRect(playerTwoX, playerTwoY, 99, 99);
        playerTwoX += 100;
        playerTwoSquare();
    }
}

















