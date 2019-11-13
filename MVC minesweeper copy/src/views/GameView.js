export default class GameView {
    constructor() {

    }

    createButton(text, onClick) {
        let divButton = document.createElement('div');
        divButton.classList.add('buttonDiv')
        let button = document.createElement('button');
        document.body.appendChild(divButton);
        divButton.appendChild(button);
        button.innerText = text;
        button.onclick = onClick;
        button.id = text;

        return button;
    }



}