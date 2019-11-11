import CellModel from '../models/CellModel.js';
import CellView from '../views/CellView.js';

export default class CellController {
    constructor(x, y, grid, onGameOver) {
        this.model = new CellModel();
        this.view = new CellView();
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.onGameOver = onGameOver;

        this.view.bindHandleClick(this.handleClick);
    }

    addMine(isMine) {
        this.view.setMine(isMine);
    }

    appendMine() {
        this.model.setMine(true);
        this.addMine(this.model.getMine());
    }

    handleClick = (ev) => {
        if (this.isMine()) {
            // this.view.revealMine();
            this.onGameOver();
            // console.log('MINE !!!');

        } else {
            this.revealField();
            // const count = this.countNeighbour();
            // this.view.setMineCount(count);
            // this.revealNeighbour();
        }
    }

    revealField() {
        this.model.setRevealed(true);
        this.view.setRevealed(true);

        if (this.countNeighbour() === 0) {
            this.revealNeighbour();
        }
    }

    countNeighbour() {
        let countMines = 0;

        for (let i = this.x - 1; i <= this.x + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                if (i < 0 || j < 0 || i >= this.grid.length || j >= this.grid.length) {
                    continue;
                }

                let neighbour = this.grid[i][j];
                if (neighbour.isMine()) {
                    countMines++;
                }
            }
        }

        return countMines;
    }

    revealNeighbour() {
        let nextNeigh;

        for (let i = this.x - 1; i <= this.x + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                if (i < 0 || j < 0 || i >= this.grid.length || j >= this.grid.length) {
                    continue;
                }

                nextNeigh = this.grid[i][j];

                if (!nextNeigh.isRevealed() && !nextNeigh.isMine()) {
                    nextNeigh.revealField();
                }
            }
        }
    }

    isMine() {
        return this.model.getMine();
    }

    isRevealed() {
        return this.model.isRevealed;
    }

    setCount() {
        const count = this.countNeighbour();

        if (count > 0 && !this.isMine()) {
            this.view.setMineCount(count);
        }
    }
}