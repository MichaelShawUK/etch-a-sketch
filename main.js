const container = document.querySelector('#container');
const adjust = document.querySelector('#adjust');

const cell = document.createElement('div');
cell.classList.add('square');

for (let i = 0; i < (16*16); i++) {
  container.appendChild(cell.cloneNode());
}

const squares = document.querySelectorAll('.square');

adjust.addEventListener('click', () => {
  let rowSize = +prompt('Enter grid size [n x n]: ', 16);
 
  // Removes existing squares from grid
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  let cellSize = Math.floor(960 / rowSize);

  // Grid width will be cellSize * rowSize
  let gridWidth = cellSize * rowSize;

  container.style.width = gridWidth + 2 + 'px';
  for (let i = 0; i < (rowSize**2); i++) {
    container.appendChild(cell.cloneNode());
    container.lastChild.style.width = cellSize + 'px';
  }

})