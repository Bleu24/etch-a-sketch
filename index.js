document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");

    //DOM variables
    const canvas = document.querySelector(".grid");
    const gridBtn = document.querySelector(".controls--grid-button");
    const field = document.querySelector(".controls__field");
    const resetBtn = document.querySelector(".controls--reset-canvas");
    const colorBtn = document.querySelector(".controls--choose-color");
    const randomizeBtn = document.querySelector(".controls--randomize");
    const instruction = document.querySelector(".instruction")
    let pixel = document.createElement("div");

    

    //setting canvas 
    canvas.setAttribute("style", "width: 800px; height: 800px; border: 3px solid black; margin-top: auto; margin-bottom: auto; display: flex; flex-wrap: wrap;");

    //variables for canvas pixels;
    let rows = 0;
    let columns = 0;
    let inputValue = undefined;
    let color = 'black';
    
    //randomize state
    let randState = false;

    if (!canvas.hasChildNodes()) {
        instruction.innerText = `Please set a grid`;
    }
    

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
            pixel.setAttribute("style", `flex-basis: calc(100% / ${input}); border: 1px solid black; flex-grow: 1;`);
            canvas.appendChild(pixel);
        }
    }

    let resetCanvas = () => {
        if (canvas.hasChildNodes()) {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
            instruction.innerText = `Please set a grid`;
        } else {
            alert("Empty Canvas");
            
        }
    }

    let randomizeColor = () => {
        color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        return color;
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

            if(canvas.hasChildNodes()) {
                instruction.innerText = `Hold Alt to draw`;
            }
               
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

    randomizeBtn.addEventListener('click', () => {
        if (!randState) {
            randState = true;
        } else {
            randState = false;
            color = randomizeColor();
            colorBtn.value = color;
        }
    });

    //Highlights/colors pixel if alt key was pressed
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('pixel')) {
            if (randState) {
                if (e.altKey) {
                    e.target.style.backgroundColor = randomizeColor();
                } else {
                    console.log("Press alt key to draw");
                }
            }

            if (e.altKey) {
                e.target.style.backgroundColor = color;
            } else {
                console.log("Press alt key to draw");
            }
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('pixel')) {
            if (randState) {
                if (e.altKey) {
                    e.target.style.backgroundColor = randomizeColor();
                } else {
                    console.log("Press alt key to draw");
                }
            }   
            e.target.style.backgroundColor = color;  
        }
    });

});

