const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const squareSize = 50;
const rows = 8;
const cols = 8;

// Dama ob'ektlari va holatlari
let pieces = [
  { row: 0, col: 1, color: "red" }, { row: 0, col: 3, color: "red" },
  { row: 0, col: 5, color: "red" }, { row: 0, col: 7, color: "red" },
  { row: 1, col: 0, color: "red" }, { row: 1, col: 2, color: "red" },
  { row: 1, col: 4, color: "red" }, { row: 1, col: 6, color: "red" },
  { row: 2, col: 1, color: "red" }, { row: 2, col: 3, color: "red" },
  { row: 2, col: 5, color: "red" }, { row: 2, col: 7, color: "red" },
  
  { row: 5, col: 0, color: "black" }, { row: 5, col: 2, color: "black" },
  { row: 5, col: 4, color: "black" }, { row: 5, col: 6, color: "black" },
  { row: 6, col: 1, color: "black" }, { row: 6, col: 3, color: "black" },
  { row: 6, col: 5, color: "black" }, { row: 6, col: 7, color: "black" },
  { row: 7, col: 0, color: "black" }, { row: 7, col: 2, color: "black" },
  { row: 7, col: 4, color: "black" }, { row: 7, col: 6, color: "black" }
];

// Tanlangan damaning koordinatalari
let selectedPiece = null;

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

// Dama qismlarini chizish
function drawPieces() {
  pieces.forEach(piece => {
    ctx.beginPath();
    ctx.arc(piece.col * squareSize + squareSize / 2, piece.row * squareSize + squareSize / 2, squareSize / 3, 0, Math.PI * 2);
    ctx.fillStyle = piece.color;
    ctx.fill();
  });
}

// Bosilgan joyga qarab dama tanlash
canvas.addEventListener('click', function(event) {
  const col = Math.floor(event.offsetX / squareSize);
  const row = Math.floor(event.offsetY / squareSize);

  if (selectedPiece) {
    // Tanlangan dama joylashtiriladi
    selectedPiece.row = row;
    selectedPiece.col = col;
    selectedPiece = null;
  } else {
    // Bosilgan joyda dama bormi?
    selectedPiece = pieces.find(piece => piece.row === row && piece.col === col);
  }

  draw();
});

// Taxta va damalarni chizish
function draw() {
  drawBoard();
  drawPieces();
}

draw();

