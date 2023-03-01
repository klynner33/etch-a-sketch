const container = document.querySelector(".container");
const squares = document.querySelector(".squares");
const resetBtn = document.querySelector("#reset-btn");
const blackBtn = document.querySelector("#black-btn");
const colorBtn = document.querySelector("#color-btn");




function gridSize(num) {
    let totalSquares = num * num;
    return totalSquares;
}

console.log(gridSize(16));
let numOfSquares = gridSize();
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
}

function generateRandomColor() {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hex;
}

resetBtn.addEventListener("click", function(e) {
    location.reload();
});
