const grid = document.querySelector(".grid");

// Make n columns that contain n cells each
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

// Add a hover effect that turns the cells black when they are hovered over
function addBlackHover() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'black');
  });
}
