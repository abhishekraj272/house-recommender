import { distanceBw, isHouse, isNotHouse, paintCell } from "./utils";

class HouseRecommender {
  constructor(row, col) {
    this.row = parseInt(row);
    this.col = parseInt(col);
    this.genGrid();
    this.recommended = null;
  }

  genGrid() {
    this.board = new Array(this.row).fill().map((_) => Array(this.col));
    const cells = document.querySelectorAll(".cell");

    for (const cell of cells) {
      const loc = cell.id.split("").map(Number);
      try {
        this.board[loc[0]][loc[1]] = cell.innerHTML;
      } catch (error) {
        // console.log(error);
      }
    }
  }

  setRow(row) {
    this.row = parseInt(row);
    this.genGrid();
  }

  setCol(col) {
    this.col = parseInt(col);
    this.genGrid();
  }

  reset() {
    if (!this.recommended) return;
    this.genGrid();
    paintCell(this.recommended, "#393232");
    this.recommended = null;
  }

  recommend() {
    this.reset();

    const cells = document.querySelectorAll(".cell");
    const houses = [];

    for (const cell of cells) {
      if (isHouse(cell.innerHTML)) {
        houses.push(cell.id.split("").map(Number));
      }
    }
    const distances = [];

    for (let i = 0; i < houses.length; i++) {
      const temp = [];
      for (const cell of cells) {
        if (isNotHouse(cell.innerHTML)) {
          const amenity = cell.id.split("").map(Number);
          temp.push(distanceBw(houses[i], amenity));
        }
      }
      distances.push(temp.reduce((a, b) => a + b, 0));
    }
    const highestValueHouse = houses[distances.indexOf(Math.min(...distances))];
    this.recommended = highestValueHouse.join("");
    paintCell(this.recommended, "green");
  }
}

export default HouseRecommender;
