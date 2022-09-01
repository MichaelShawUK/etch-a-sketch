function rgbVal() {return Math.floor(Math.random() * 256);}

const container = document.querySelector('#container');
const adjust = document.querySelector('#adjust');

const cell = document.createElement('div');
cell.classList.add('square');

for (let i = 0; i < (16*16); i++) {
  container.appendChild(cell.cloneNode());
}

let squares = document.querySelectorAll('.square');

adjust.addEventListener('click', () => {

  let rowSize;
  while (true) {
    rowSize = +prompt('Enter grid size [n]: ', '1 - 100');
    if (rowSize <= 100) break;
  }
 
  // Removes existing squares from grid
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  let cellSize = Math.floor(960 / rowSize);

  let gridWidth = cellSize * rowSize;

  // + 2 for container border of 1px;
  container.style.width = gridWidth + 2 + 'px';
  for (let i = 0; i < (rowSize**2); i++) {
    container.appendChild(cell.cloneNode());
    container.lastChild.style.width = cellSize + 'px';
  }
  squares = document.querySelectorAll('.square');
})

container.addEventListener('mouseover', () => {
  for (const square of squares) {
    square.addEventListener('mouseover', () => {
      square.style.background = `rgb(${rgbVal()}, ${rgbVal()}, ${rgbVal()})`;
    })
  }
})


console.log(`${rgbVal()}, ${rgbVal()}, ${rgbVal()}`);

