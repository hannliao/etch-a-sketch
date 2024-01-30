const grid = document.querySelector("#container");
let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.append(square);
}