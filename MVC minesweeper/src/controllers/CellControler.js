import CellModel from '../models/CellModel.js';
import CellView from '../views/CellView.js';

export default class CellControler {
    constructor() {
        this.model = new CellModel();
        this.view = new CellView();

        // Bind controller function to view
        this.view.bindHandleClick(this.handleClick);
    }

    setRevealed(isRevealed) {
        this.view.setRevealed(isRevealed);
    }

    handleClick = (ev) => {
        // Business logic on the model
        this.model.setRevealed(true);

        // Update view
        this.setRevealed(this.model.isRevealed);
    }
}