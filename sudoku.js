class Sudoku {

  constructor(array) {
    let board = this.board = [];
    let quadrant;

    // Populate the board
    for (let i in array) {
      board.push([]);
      for (let j in array[i]) {
        board[i].push(new Cell(array[i][j], i, j));
      }
    }
  }

  isCellSolved(i, j) {
    let cell = this.board[i][j];

    if (cell.value !== '.') {
      return true;
    }
    if (cell.impossible.size == 8) {
      // Get the missing number
      let sum = 45;
      let arr = Array.from(cell.impossible);

      // TODO: this is returning invalid numbers

      cell.value = arr
        .reduce((accumulator, val) => {
          return accumulator - parseInt(val);
        }, sum);
      return true;
    }
    return false;
  }

  check(i, j) {
    // Needs refinement, will loop over incrementally
    if (!this.isCellSolved(i, j)) {
      this.assessRow(i, j);
    }
    if (!this.isCellSolved(i, j)) {
      this.assessColumn(i, j);
    }
    if (!this.isCellSolved(i, j)) {
      this.assessQuadrant(i, j);
    }
  }

  assessRow(i, j) {
    let checkCell = this.board[i][j];
    this.board[i].forEach((cell, index, array) => {
      if (cell.value !== '.') {
        checkCell.impossible.add(cell.value);
      }
    });
  }

  assessColumn(i, j) {
    let checkCell = this.board[i][j];

    for (let x = 0; x < 9; x++) {
      let cell = this.board[x][j];
      if (cell.value !== '.') {
        checkCell.impossible.add(cell.value);
      }
    }
  }

  assessQuadrant(i, j) {
    let checkCell = this.board[i][j];
    let startRow = Math.floor(i / 3);
    let startCol = Math.floor(j / 3);

    for (let x = startRow; x < startRow + 3; x++) {
      for (let y = startCol; y < startCol + 3; y++) {
        let cell = this.board[x][y];
        if (cell.value !== '.') {
          checkCell.impossible.add(cell.value);
        }
      }
    }
  }

  // Solve the thing
  solve() {
    for (let i in this.board) {
      for (let j in this.board[i]) {
        this.check(i, j);
      }
    }
  }

  printBoard() {
    let output = '';
    this.board.forEach((row) => {
      output +=
        row.map(cell => cell.value)
          .join(' ') + '\n';
    });
    console.log(output);
  }
}

class Cell {
  constructor(value, row, column, quadrant) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.quadrant = quadrant;
    this.impossible = new Set();
  }
}


let testData = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."],
[".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."],
[".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."],
[".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"],
[".", ".", ".", "2", "7", "5", "9", ".", "."]];

let sudoku = new Sudoku(testData);


sudoku.solve();
sudoku.printBoard();
// console.log(sudoku);
sudoku.solve();
sudoku.printBoard();

sudoku.solve();
sudoku.printBoard();

sudoku.solve();
sudoku.printBoard();
