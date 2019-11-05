export default class CellView {
    constructor() {
        this.el = this.createElement();
    }

    createElement() {
        const div = document.createElement('div');
        div.classList.add('cell');
        document.body.appendChild(div);

        return div;
    }

    bindHandleClick(handle) {
        this.el.addEventListener('click', (ev) => {
            console.log('view handle');
            handle(ev);
        });
    }

    setRevealed(isRevealed) {
        this.el.classList.add('revealed');
    }
}