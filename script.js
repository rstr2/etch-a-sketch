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

//Button that asks user for new grid size and draws it 
const newGrid = document.querySelector(".new");
newGrid.addEventListener("click", () =>{
  const newSize = prompt("Enter a new grid size\nNot bigger than 100");
  if (newSize <= 100) {
    grid.innerHTML = "";
    makeGrid(newSize);
  } else {
    alert("You must enter a number not higher than 100");
  }
});