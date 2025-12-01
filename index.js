let board = ["", "", "", "", "", "", "", "", ""];
let playerTurn = "X";
let gameActive = true;
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const container = document.querySelector(".container");
const squares = document.querySelectorAll(".cell");
const messageBox = document.querySelector(".game-message");
const restartButton = document.querySelector(".restart-btn");
container.appendChild(messageBox);

squares.forEach((square, index) => {
  square.addEventListener("click", (e) => {
    if (!gameActive) {
      return;
    }
    if (board[index] !== "") {
      return;
    }
    board[index] = playerTurn;
    square.textContent = playerTurn;
    if (playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    }
    checkWinner(board);
  });
});

function checkWinner(board) {
  winConditions.forEach((winCon) => {
    //check indices of current winCon array iteration
    let a = winCon[0];
    let b = winCon[1];
    let c = winCon[2];
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      messageBox.textContent = `${board[a]} wins!`;
      gameActive = false;
    }
  });
  if (!board.includes("") && gameActive) {
    messageBox.textContent = "It's a tie!";
    gameActive = false;
  }
}

restartButton.addEventListener("click", (e) => {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTurn = "X";
  gameActive = true;
  messageBox.textContent = "";
  squares.forEach((square) => {
    square.textContent = "";
  });
});

console.log("");
