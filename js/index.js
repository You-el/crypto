// Burger Menu 
let bMenu = document.querySelector(".burger-menu");
let ul = document.querySelector(".all-links");

bMenu.addEventListener("click",()=> {
    ul.classList.toggle("active");
})


//Date
let test = new Date();
let yearOf = test.getFullYear()
let madeBy = document.querySelector(".colored-bar");
let textOf = document.createTextNode(yearOf)
madeBy.appendChild(textOf)