//Creating a grid
const sq = document.createElement('div');
sq.classList.add("square");
let container = document.querySelector('#container');
const bttn = document.getElementById('clear');

//fills the height and width with squares
let size = 32;


function fillArea(size){
    container.style.setProperty('--grid-size', size);
    for(let i = 0; i<(size * size); i++){
        container.appendChild(sq.cloneNode(true));
    }
    
}

fillArea(size);

container.addEventListener("mouseover", event=>{
    if(event.target.classList.contains("square")){
        event.target.style.backgroundColor = "black";
    }
}
)

bttn.addEventListener("click", event =>{
    size = prompt("Enter number of squares per side (max 100)");
    if(size > 100){
        alert("Grid could not be created!");
    }
    else{
        container.textContent = '';
        fillArea(size);
    }
 
})