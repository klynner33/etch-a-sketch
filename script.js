const container = document.querySelector(".container");
const squares = document.querySelector(".squares");
const clearBtn = document.querySelector("#clear-btn");
 

let numOfSquares = 256;
for (let i = 0; i < numOfSquares; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    container.appendChild(squares);
    squares.addEventListener("mouseover", () => {
    squares.style.backgroundColor = "black";
    });
}

clearBtn.addEventListener("click", function(e) {
    location.reload();
});

