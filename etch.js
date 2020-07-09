
function hover(){
    this.style.cssText = "background-color: black;";
}

function reset(){
    let container = document.querySelector(".container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    let size = prompt("Enter size of grid", 16).trim();
    grid(size);
}

function grid(size){
    let container = document.querySelector(".container");
    let layout = (size * size) + 1;
    var i;
    var frac = "";
    for(i = 1; i < layout; i++){
        
        let grid = document.createElement("div");
        grid.classList.add("box");
        grid.classList.add(`box${i}`);
       
        
        
        
        grid.addEventListener("mouseover", hover)
        container.appendChild(grid);
    }
    var j;
        for(j = 0; j < size; j++){
            frac += "1fr "; 
        }
    container.style.cssText = `grid-template-columns: ${frac}`;
    
}
let booton = document.querySelector(".btn");
booton.addEventListener("click", reset);
/*
let items = document.querySelector(".box7");
items.
console.log(items); 

for (let i = 0; i < items.length, i++;){
    let data = items[i];
    data.addEventListener("mouseover", function(event){
        console.log(items[i]);
        console.log(event.target);
        data.style.cssText = "background-color: blue";
    });
}
*/
window.onload = function(){
    reset();
}