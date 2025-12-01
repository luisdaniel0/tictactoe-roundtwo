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

const squares = document.querySelectorAll(".cell");

squares.forEach((square, index) => {
  square.addEventListener("click", (e) => {
    console.log(e.target, index);
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
    console.log(board);
  });
});

// squares.addEventListener("click", (e) => {
//   console.log(e);
// });

function checkWinner(board) {
  winConditions.forEach((winCon) => {
    console.log(winCon);
    let a = winCon[0];
    let b = winCon[1];
    let c = winCon[2];
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      console.log(board[a] + "wins!");
      gameActive = false;
    }
  });
}
