const columns = 16;
const rows = 16;
const cellNumber = columns * rows
var cellId = 0;
var colorChoice = "#6fffe9";


function makeCell(id) {
    var container = document.getElementById('grid');
    var cell = document.createElement('div');
    cell.style.border = '2px black solid';
    cell.className = 'cells';
    cell.id = id;
    cell.innerHTML = '';
    cell.style.borderRadius = '3px';
    cell.addEventListener('click', colorOnClick);
    container.appendChild(cell);
}

function createGrid() {
    var grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${columns}, 30px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 30px)`;

    for (i = 0; i < cellNumber; i++) {
        makeCell(cellId)
        cellId += 1;
    }

    
}

function colorOnClick() {
    this.style.backgroundColor = colorChoice;
}



createGrid();


