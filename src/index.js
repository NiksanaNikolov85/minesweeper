let square = document.getElementById('wrapper');
const ROWS = 10;
const COLS = 10;
let mineIcon;

function makeSquare(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = 'row';
        for (let j = 0; j < cols; j++) {
            const col = document.createElement("div");
            col.className = 'col hidden';
            col.setAttribute('col', j);
            col.setAttribute('row', i);
            if (Math.random() < 0.2) {
                col.className = 'col hidden bomb';
                let mineIcon = document.createElement("I");
                mineIcon.className = 'fa fa-bomb fa-2x';
                col.appendChild(mineIcon);



            }

            row.appendChild(col);
        }
        square.appendChild(row);
    }
}

makeSquare(ROWS, COLS);

let element = document.querySelectorAll('.col.hidden');
console.log(element);


function gameOver(isWin) {
    let message = null;
    if (isWin) {
        message = 'YOU WIN';
    } else {
        message = 'YOU LOST';
    }

    let list;
    list = document.querySelectorAll("I");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('show-bomb');
    }

    setTimeout(function() {
        alert(message);
        const gameWrapper = document.getElementById('wrapper');
        gameWrapper.innerHTML = '';
        makeSquare(10, 10);
    }, 2000);
}

function reveal(cell) {
    cell.classList.remove('hidden');

    const x = cell.getAttribute('row');
    const y = cell.getAttribute('col');

    const neighboursCount = getMineCount(x, y, cell);
    cell.innerText = neighboursCount;

    if (neighboursCount === 0) {
        floodReveal(cell, x, y);
    }
}

function floodReveal(cell, x, y) {
    const numParentX = Number(x);
    const numParentY = Number(y);

    for (let i = numParentX - 1; i <= numParentX + 1; i++) {
        for (let j = numParentY - 1; j <= numParentY + 1; j++) {
            if (i >= ROWS || j >= COLS || i < 0 || j < 0) {
                continue;
            }

            const neighbour = document.querySelector(`.col[row="${i}"][col="${j}"]`);

            if (!neighbour.classList.contains('bomb') && neighbour.classList.contains('hidden')) {
                reveal(neighbour);
            }
        }
    }
}

function getMineCount(parentX, parentY, cell) {
    let count = 0;
    const numParentX = Number(parentX);
    const numParentY = Number(parentY);

    for (let i = numParentX - 1; i <= numParentX + 1; i++) {
        for (let j = numParentY - 1; j <= numParentY + 1; j++) {
            if (i >= ROWS || j >= COLS || i < 0 || j < 0) {
                continue;
            }

            const neighbour = document.querySelector(`.col[row="${i}"][col="${j}"]`);

            if (neighbour.classList.contains('bomb')) {
                count++;
            }
            console.log(`Current ${i}, ${j}`);
        }
    }

    return count;
}

square.onclick = function(e) {
    let cell = e.target;

    if (cell.classList.contains('bomb')) {
        gameOver(false);
    } else {
        reveal(cell);
    }
}