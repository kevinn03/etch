

function grid(){
    let container = document.querySelector(".container");
    var i;
    for(i = 1; i < 257; i++){
        
        let grid = document.createElement("div");
        grid.classList.add("box");
        grid.classList.add(`box${i}`);
        grid.style.cssText = "background-color: green;";
        grid.textContent = `${i}`;
        container.appendChild(grid);
    }
}

window.onload = function(){
    grid();
}