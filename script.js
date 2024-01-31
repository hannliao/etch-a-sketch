function isValid() {
    if (isNaN(userInput) || userInput > 100 || userInput <= 0) {
        return false;
    }
    return true;
}

function createGrid() {
    for (let i = 0; i < userInput * userInput; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
    
        square.addEventListener("mouseenter", () => {
            if (shade == "color") {
                color();
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                square.classList.add("grayscale");
            }
        });
        grid.append(square);
    }
}

function removeSquares() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function clearGrid() {
    removeSquares();
    createGrid();
}

function color() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
}

const grid = document.querySelector("#container");
const btn = document.querySelector("#squaresPerSide");

// create default 16x16 grid
let userInput = 16;
let squareWidth = 40;
let squareHeight = 40;
createGrid();

btn.addEventListener("click", () => {
    do {
        userInput = prompt("enter number of squares per side (max 100): ");
        if (isValid()) {
            break;
        }
    } while (true);

    // create new grid in the same total space as original grid (640px square)
    squareWidth = 640 / userInput;
    squareHeight = 640 / userInput;
    removeSquares();
    createGrid();
});

let r, g, b;
let shade = "gray";
const grayBtn = document.querySelector("#gray");
const colorBtn = document.querySelector("#color");

grayBtn.addEventListener("click", () => {
    clearGrid();
    shade = "gray";
});
colorBtn.addEventListener("click", () => {
    clearGrid();
    shade = "color";
});