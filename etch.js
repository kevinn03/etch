
window.onload = function(){
    reset();
}
const container = document.querySelector(".container");

function hover(){
    if(container.getAttribute("class") === "container default"){
    this.style.cssText = "background-color: rgba(0,0,0,.15);";
    }
    else{
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.cssText = `background-color: rgb(${r}, ${g}, ${b});`;
    }
}

function reset(){
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    let size = prompt("Enter size of grid", 16).trim();
    grid(size);
}

function grid(size){
    
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

function toggleOn(){
    container.classList.remove("default");
    
}

function toggleOff(){
    container.classList.remove("default");
    container.classList.add("default");
}

let res = document.querySelector(".btn");
res.addEventListener("click", reset);
let def = document.querySelector(".def");
def.addEventListener("click", toggleOff);
let ran = document.querySelector(".ran");
ran.addEventListener("click", toggleOn);
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
