import CellControler from './controllers/CellControler.js';

const arr = [];
for (let i = 0; i < 10; i++) {
    const cell = new CellControler();
    arr.push(cell);
}