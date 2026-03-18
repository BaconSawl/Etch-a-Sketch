const container = document.getElementById("container");
const btn = document.getElementById("newGrid");

function createGrid(size){
    squareSize = 640 / size;
    for (i = 0; i < size; i++){
        for (j = 1; j <= size; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.width = squareSize;
            newDiv.style.height = squareSize;
            newDiv.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })
            container.appendChild(newDiv);        
        }
    }
}

createGrid(16);

btn.addEventListener("click", () => {
    /*
    const x = Number(prompt("How many squares ?"));
    console.log(x);
    if (!(x >= 1 && x <= 100)){
        alert("invalid value");
    }
    else */ {
        container.innerHTML = ""; // Delete everything inside containerW
        createGrid(16);
    }
})

console.log(container.childNodes.length)