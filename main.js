const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const squareSize = 50;
const rows = 8;
const cols = 8;

// Taxtaning bo'limlarini chizish
function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      ctx.fillStyle = (row + col) % 2 === 0 ? "#FFF" : "#000";
      ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
  }
}

// Dama tasvirlarini joylash
function drawPieces() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 !== 0) {
        if (row < 3) {
          ctx.beginPath();
          ctx.arc(col * squareSize + squareSize / 2, row * squareSize + squareSize / 2, squareSize / 3, 0, Math.PI * 2);
          ctx.fillStyle = "red";
          ctx.fill();
        } else if (row > 4) {
          ctx.beginPath();
          ctx.arc(col * squareSize + squareSize / 2, row * squareSize + squareSize / 2, squareSize / 3, 0, Math.PI * 2);
          ctx.fillStyle = "black";
          ctx.fill();
        }
      }
    }
  }
}

function draw() {
  drawBoard();
  drawPieces();
}

draw();
