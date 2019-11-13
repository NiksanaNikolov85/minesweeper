import BoardController from './BoardController.js';
import CellController from './CellController.js';
import GameView from '../views/GameView.js';

export default class GameController {
    constructor(size, mineCount) {
        this.size = size;
        this.mineCount = mineCount;
        this.createLevel();
        this.view = new GameView();
        this.createBut();
    }

    createBoard(size, count) {
        const board = new BoardController(size, count);
    }

    createLevel() {
        let beginner = document.createElement('button');
        let medium = document.createElement('button');
        let expert = document.createElement('button');

        const callbackBeginner = () => {
            // document.body.innerHTML = ''
            this.createBoard(10, 10);
        }
        const callbackMedium = () => {
            this.createBoard(15, 15);

        }
        const callbackExpert = () => {
            this.createBoard(15, 15);
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

        //  { easy: { size: 14, mineCount: 15 } }, { medium: { size: 15, mineCount: 20 } }

    }

    createBut() {
        let butLevel = ['easy', 'medium', 'hard'];
        butLevel.forEach((el) => {
            this.view.createButton(el, this.handleClick);
        });
    }

    handleClick = (ev) => {
        console.log(ev.target.id);

        const difficulty = ev.target.id;
        this.onSelectDifficulty(difficulty);
    }



    onSelectDifficulty(nameDifficulty) {
        switch (nameDifficulty) {
            case 'easy':
                document.body.innerHTML = '';
                this.createBoard(10, 10)
                break;
            case 'medium':
                document.body.innerHTML = '';
                this.createBoard(15, 15)
                break;
            case 'hard':
                document.body.innerHTML = '';
                this.createBoard(18, 18)
                break;
            default:
                console.log('Sorry');
        }
    }

}