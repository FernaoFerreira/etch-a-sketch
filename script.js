//Creating a grid
const sq = document.createElement('div');
sq.classList.add("square");
let container = document.querySelector('#container');




//fills the height and width with squares
let size = 16;
container.style.setProperty('--grid-size', size);


function fillArea(size){
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


