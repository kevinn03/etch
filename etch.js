
function hover(){
    this.style.cssText = "background-color: red;";
}

function grid(){
    let container = document.querySelector(".container");
    var i;
    for(i = 1; i < 257; i++){
        
        let grid = document.createElement("div");
        grid.classList.add("box");
        grid.classList.add(`box${i}`);
       
        grid.textContent = `${i}`;
        grid.addEventListener("mouseover", hover)
        container.appendChild(grid);
    }
}
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
    grid();
}