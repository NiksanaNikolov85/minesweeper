export default class CellView {
    constructor() {
        this.el = this.createElement();
    }

    createElement() {
        const div = document.createElement('div');
        div.classList.add('cell');
        document.body.appendChild(div);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv')
        div.appendChild(innerDiv);

        return div;
    }

    setRevealed(open) {
        if (open) {
            this.el.classList.add('revealed');
        }
    }

    setMine() {
        this.el.classList.add('isMine');
    }

    bindHandleClick(handle) {
        const callback = ev => handle(ev);

        this.el.addEventListener('click', callback);
    }

    setMineCount(count) {
        this.el.querySelector('.innerDiv').innerText = count;
    }

}