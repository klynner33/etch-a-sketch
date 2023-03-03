const container = document.querySelector(".container");
const squares = document.querySelector(".squares");
const resetBtn = document.querySelector("#reset-btn");
const blackBtn = document.querySelector("#black-btn");
const colorBtn = document.querySelector("#color-btn");
const eraseBtn = document.querySelector("#erase-btn");



let size = 16;
let numOfSquares = size * size;
for (let i = 0; i < numOfSquares; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    container.appendChild(squares);
    
    blackBtn.addEventListener("click", () => {
        squares.addEventListener("mouseover", () => {    
            squares.style.backgroundColor = "black";
        });
    });

    colorBtn.addEventListener("click", () => {
        squares.addEventListener("mouseover", () => {    
            squares.style.backgroundColor = generateRandomColor();
        });
    });

    eraseBtn.addEventListener("click", () => {
        squares.addEventListener("mouseover", () => {    
            squares.style.backgroundColor = "white";
        });
    });
}

function generateRandomColor() {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hex;
}

function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr`
    container.style.gridTemplateRows = `repeat(${size}, 1fr`
}

resetBtn.addEventListener("click", function(e) {
    location.reload();
});
