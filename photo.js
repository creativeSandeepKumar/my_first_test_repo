
let myIcon = document.getElementById("myicon");
    myIcon.addEventListener('click', myFunction);

function myFunction() {
    let x = document.getElementById("mynavbar");
    if(x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// toggle button

let gridButton = document.getElementById("gridbutton");
    gridButton.addEventListener('click', addGrid);

function addGrid() {
    let gridContainer = document.getElementById("myheading");
    if(gridContainer.className === "heading") {
        gridContainer.className += " heading-grid";
    } else {
        gridContainer.className = "heading";
    }
}