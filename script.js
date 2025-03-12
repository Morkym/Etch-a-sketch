const grid_container =document.createElement('div');
grid_container.setAttribute('id','grid_container');
document.body.appendChild(grid_container);

const myButton = document.createElement("button")
myButton.setAttribute('id','myButton')
myButton.textContent= "set your own grid size";
document.body.appendChild(myButton)

const guide = document.createElement('h2');
guide.setAttribute('id','guide');
guide.textContent = "Move your mouse over the squares to draw";
document.body.appendChild(guide)

  
    
function getColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(size) {
 grid_container.innerHTML= "";

 grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 grid_container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 grid_container.style.display = "grid";
  
 for (let i = 0; i < size*size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid_item');
    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = getColor()
        

    })
    grid_container.appendChild(square);
    }
}
myButton.addEventListener('click', () => {
    let entry = prompt("Enter the size of your grid");
    let size =parseInt(entry);
    if (!isNaN(size) && size > 0 && size < 100){
        createGrid(size,size);
    }
    else {
        alert("wrong size");
    }
});
createGrid(16);
