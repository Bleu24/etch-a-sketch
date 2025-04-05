document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");

    //DOM variables
    const body = document.querySelector(".body");
    const canvas = document.querySelector(".grid");
    const gridBtn = document.querySelector(".controls--grid-button");
    const field = document.querySelector(".controls__field");
    const resetBtn = document.querySelector(".controls--reset-canvas");
    const colorBtn = document.querySelector(".controls--choose-color");
    let pixel = document.createElement("div");
    

    //setting canvas 
    canvas.setAttribute("style", "width: 800px; height: 800px; border: 3px dashed blue; margin-top: auto; margin-bottom: auto; display: flex; flex-wrap: wrap;");

    //variables for canvas pixels;
    let rows = 0;
    let columns = 0;
    let inputValue = undefined;
    let color = 'black';

    

    //Functions
    let createPixels = (input, numOfPixels) => {

        if (canvas.hasChildNodes()) {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
        }

        for (let i = 0; i < numOfPixels; i++) {
            pixel = document.createElement("div");
            pixel.classList = 'pixel';
            pixel.setAttribute("style", `flex-basis: calc(100% / ${input}); border: 1px solid black;`);
            canvas.appendChild(pixel);
        }
    }

    let resetCanvas = () => {
        if (canvas.hasChildNodes()) {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
        }
        else {
            alert("Empty Canvas");
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

            createPixels(inputGridSize, canvasArea);
               
        } catch (error) {
            console.error(error);
        }
    });


    resetBtn.addEventListener('click', () => {
        console.log("Resetting Canvas");
        resetCanvas();
    });

    colorBtn.addEventListener('input', (e) => {
        color = e.target.value;
    });

    //Highlight pixel if alt key was pressed
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('pixel')) {
            if (e.altKey) {
                e.target.style.backgroundColor = color;
            } else {
                console.log("Press alt key to draw");
            }
        }
    });
    




















});

