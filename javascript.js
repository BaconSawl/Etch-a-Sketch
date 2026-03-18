const container = document.getElementById("container");
const btnNewGrid = document.getElementById("newGrid");
const btnResetGrid = document.getElementById("reset");

function createGrid(size){
    container.innerHTML = "";
    squareSize = 640 / size;
    for (let i = 0; i < size; i++){
        for (let j = 1; j <= size; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.width = squareSize + "px";
            newDiv.style.height = squareSize + "px";
            newDiv.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })
            container.appendChild(newDiv);        
        }
    }
}

btnNewGrid.addEventListener("click", () => {
    const x = Number(prompt("How many squares ?"));
    console.log(x);
    if (!(x >= 1 && x <= 100)){
        alert("invalid value");
    }
    else {
        container.innerHTML = ""; // Delete everything inside container
        createGrid(x);
    }
    
    btnResetGrid.addEventListener("click", () => {
        createGrid(x);
    })
})


console.log(container.childNodes.length)