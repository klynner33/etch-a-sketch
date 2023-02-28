const container = document.querySelector(".container");
let squares = document.querySelector(".squares");

 

let numOfSquares = 256;
for (let i = 0; i < numOfSquares; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    container.appendChild(squares);
    squares.addEventListener("mouseover", () => {
    squares.style.backgroundColor = "black";
});
    }



