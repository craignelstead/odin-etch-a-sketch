/*

*/

//Calls setNewGrid when page loads
window.addEventListener('load', () => {
    setNewGrid();
    drawOnDivs();
});

//Assign event listeners to buttons
let clearBtn = document.getElementById('cleardrawing');
clearBtn.addEventListener('click', clearGrid);

//Creates grid in content area by getting gridSize and using a loop to add divs
function setNewGrid() {
    //Get the grid size
    //let gridInput = document.getElementById('#inputgridnum').value;
    gridSize = 16;

    //Variable for the content container (where the grid will live)
    const gridContainer = document.querySelector('#contentcontainer');

    //This loop will create a container column that has gridSize number of divs
    //It will then add it to the content area
    //While the counter i is less than gridSize, the loop will continue to add
    //more columns

    for (let i=0; i < gridSize; i++) {
        const newLine = document.createElement('div');
        newLine.classList.add('rowdiv');
        gridContainer.appendChild(newLine);

        for (let j=0; j < gridSize; j++) {
            const latestRow = gridContainer.lastElementChild;

            const newBox = document.createElement('div');
            newBox.classList.add('griddiv');

            newBox.textContent = j + 1;

            latestRow.appendChild(newBox);
        }

    }
    
}

//Changes griddiv background color to black when mouse enters it
function drawOnDivs() {
    const drawingDiv = document.getElementsByClassName('griddiv');

    //Goes through array of all griddiv class and assigns each an event listener
    for (let i=0; i<drawingDiv.length; i++) {
        drawingDiv[i].addEventListener('mouseenter', (e) => {
            drawingDiv[i].style.backgroundColor = 'black';
        });
    }
}

//Sets background color of all divs to white
function clearGrid() {
    const drawingDiv = document.getElementsByClassName('griddiv');

    //Goes through array of all griddiv class and assigns each an event listener
    for (let i=0; i<drawingDiv.length; i++) {
            drawingDiv[i].style.backgroundColor = 'white';
    }
}