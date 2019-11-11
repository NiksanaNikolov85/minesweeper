export default class BoardView {
    constructor() {
        this.appendLineBreak();
    }

    appendLineBreak() {
        const lineBreak = document.createElement('div');
        document.body.appendChild(lineBreak);
    }

}