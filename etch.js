

function grid(){
    let container = document.querySelector(".container");
    var i = 0;
    for(i = 0; i < 256; i++){
        
        let grid = document.createElement("div");
        grid.classList.add(`box${i}`);
        
        container.appendChild(grid);
    }
}

window.onload = function(){
    grid();
}