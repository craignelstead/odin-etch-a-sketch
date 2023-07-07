/*

*/

//Calls setNewGrid when page loads
window.addEventListener('load', () => {
    setNewGrid();
    assignBtnListeners();
});

//Assign event listeners to buttons
function assignBtnListeners() {
    let clearBtn = document.getElementById('cleardrawing');
    clearBtn.addEventListener('click', clearDrawing);

    let newGridBtn = document.getElementById('changegridsize');
    newGridBtn.addEventListener('click', clearAndMakeNew);
}

function clearAndMakeNew() {
    clearDrawing();
    setNewGrid();
}

//Creates grid in content area by getting gridSize and using a loop to add divs
function setNewGrid() {
    //Deletes any exisiting grid
    deleteGrid();

    //Get the grid size
    let gridSize = document.getElementById('inputgridnum').value;

    //Validate input
    if (checkIfValidInput(gridSize) === false) {
        alert('Please enter a valid number');
        document.getElementById('inputgridnum').focus();
        document.getElementById('inputgridnum').select();
    }
    else {

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

                latestRow.appendChild(newBox);
            }

        }

        //Add event listeners to draw on divs
        drawOnDivs();
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
function clearDrawing() {
    const drawingDiv = document.getElementsByClassName('griddiv');

    //Goes through array of all griddiv class and assigns each an event listener
    for (let i=0; i<drawingDiv.length; i++) {
            drawingDiv[i].style.backgroundColor = 'white';
    }
}

//Deletes existing grid divs
function deleteGrid() {
    let existingDivs = document.querySelectorAll('.rowdiv');
    existingDivs.forEach(e => e.remove());
}

function checkIfValidInput(input) {
    let textBox = document.querySelector('#inputgridnum');

    //Determine if input is integer between 1 and 100
    if (input >= 1 && input <= 100 && (Number.isInteger(Number(input)))) {
        textBox.style.backgroundColor = 'white';
        textBox.style.color = 'black';
        return true;
    }
    else {
        textBox.style.backgroundColor = 'red';
        textBox.style.color = 'white';
        return false;
    }
}