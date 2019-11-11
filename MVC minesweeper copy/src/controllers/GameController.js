import BoardController from './BoardController.js';
import CellController from './CellController.js';

export default class GameController {
    constructor(size, mineCount) {
        this.size = size;
        this.mineCount = mineCount;
        this.createLevel();
    }

    begginerLevel() {
        const board = new BoardController(10, 10);
    }

    mediumLevel() {
        const board = new BoardController(15, 15);
    }

    expertLevel() {
        const board = new BoardController(20, 20);
    }

    createLevel() {
        let beginner = document.createElement('button');
        let medium = document.createElement('button');
        let expert = document.createElement('button');
        const callbackBeginner = () => {
            this.begginerLevel();
        }
        const callbackMedium = () => {
            this.mediumLevel();

        }
        const callbackExpert = () => {

            this.expertLevel();
        }


        beginner.addEventListener('click', callbackBeginner);
        medium.addEventListener('click', callbackMedium);
        expert.addEventListener('click', callbackExpert);
        document.body.appendChild(beginner);
        document.body.appendChild(medium);
        document.body.appendChild(expert);
        beginner.innerText = 'Beginner';
        medium.innerText = 'Medium';
        expert.innerText = 'Expert'

    }

}