let square = document.getElementById('wrapper');

function makeSquare(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = 'row';
        for (let j = 0; j < cols; j++) {
            const col = document.createElement("div");
            col.className = 'col hidden';
            row.appendChild(col);
        }
        square.appendChild(row);
    }
}

makeSquare(10, 10);

square.onclick = function() {
    console.log(this);
}