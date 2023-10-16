const grid = document.querySelector(".grid");

function makeGrid(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");

    for(let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div")
      cell.style.width = `${700 / gridSize}px`;
      cell.style.height = `${700 / gridSize}px`;
      cell.classList.add("cell")
      column.appendChild(cell);
    }
    
    grid.appendChild(column);
  }
}

