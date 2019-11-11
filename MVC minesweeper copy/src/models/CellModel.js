export default class CellModel {
    constructor() {
        this.x = null;
        this.y = null;
        this.isRevealed = null;
        this.isMine = null;
        this.isFlagged = null;
    }

    setRevealed(isRevealed) {
        this.isRevealed = isRevealed;
    }

    setMine(isMine) {
        this.isMine = isMine;
    }

    getMine() {
        return this.isMine;
    }
}