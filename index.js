document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");

    //DOM variables
    const body = document.querySelector(".body");
    const canvas = document.querySelector(".grid");
    const gridBtn = document.querySelector(".controls--grid-button");
    const field = document.querySelector(".controls__field");

    //setting canvas 
    canvas.setAttribute("style", "width: 800px; height: 800px; border: 3px dashed blue; margin-top: auto; margin-bottom: auto; display: flex; flex-wrap: nowrap;");

    //variables for canvas pixels;
    let rows = 0;
    let columns = 0;
    let inputValue = undefined;
    let pixelW = 0;
    let pixelL = 0;
    let GRID_BOARD = 800;

    //Functions
    let createPixels = (grid_board, input, numOfPixels) => {
        pixelDimension = grid_board / input;
        for (let i = 0; i < numOfPixels; i++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("style", `width: ${pixelDimension}px; height: ${pixelDimension}px; border: 1px solid black;`);
            canvas.appendChild(pixel);
        }
    }

    //Listeners
    field.addEventListener('input', (e) => {
        try {
            inputValue = e.target.value;
            if (isNaN(inputValue)) {
                throw "NaN! Just Ignore, Debugging Purposes";
            } 

            if (e.target.value > 100) {
                inputValue = 100;
                e.target.value = 100;
                console.log(inputValue);
            }
            console.log(typeof inputValue);
        } catch (error) {
            console.error(error);
        }
        
    });


    gridBtn.addEventListener('click', () => {
        try {
            let convertedValue = parseInt(inputValue);
            if (typeof convertedValue !== 'number') {
                console.log(typeof inputValue);
                throw "Must be a number";
            } else if (isNaN(convertedValue)) {
                throw "NaN! Just Ignore, Debugging Purposes"
            }
            inputGridSize = convertedValue;
            rows = convertedValue;
            columns = convertedValue;
            canvasArea = rows * columns;
            console.log(`Creating a canvas size by: ${canvasArea} squares`);

            createPixels(GRID_BOARD, inputGridSize, canvasArea);
               
        } catch (error) {
            console.error(error);
        }
    });





















});

