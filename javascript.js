const container = document.getElementById("container");

function createGrid(size){
    for (i = 0; i < size; i++){
        for (j = 1; j <= size; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })
            container.appendChild(newDiv);        
        }
    }
}

createGrid(16);


console.log(container.childNodes.length)