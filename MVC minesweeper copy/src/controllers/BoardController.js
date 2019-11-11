import CellController from './CellController.js';
import BoardView from '../views/BoardView.js';

export default class BoardController {
    constructor(size, minesCount) {
        this.size = size;
        this.grid = this.createGrid();
        this.view = new BoardView();
        this.populateGrid();
        this.appendMines(minesCount);
        this.setMineCount();
    }

    createGrid() {
        let grid = [];
        for (let i = 0; i < this.size; i++) {
            grid[i] = new Array(this.size);
        }

        return grid;
    }

    populateGrid() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j] = new CellController(i, j, this.grid, this.onGameOver);
                if (j === this.size - 1) {
                    this.view.appendLineBreak();
                }
            }
        }
    }

    appendMines(minesCount) {
        for (let i = 0; i < minesCount; i++) {
            let mineIndexX = Math.floor(Math.random() * this.size);
            let mineIndexY = Math.floor(Math.random() * this.size);
            const cellMine = this.grid[mineIndexX][mineIndexY];
            cellMine.appendMine();
        }
    }

    setMineCount() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j].setCount();
            }
        }
    }

    onGameOver = () => {
        this.revealAllCells();
    }

    revealAllCells() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const cell = this.grid[i][j];
                if (!cell.isRevealed()) {
                    cell.revealField();
                }
            }
        }
    }
}