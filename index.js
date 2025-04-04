document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has loaded");

    //DOM variables
    const body = document.querySelector(".body");
    const canvas = document.querySelector(".grid");
    const gridBtn = document.querySelector(".controls--grid-button");
    const field = document.querySelector(".controls__field");

    //Setting up canvas dimensions;
    let rows = 0;
    let columns = 0;
    let inputValue = undefined;

    //Functions
    let createCanvas = (area) {
        canvas.setAttribute("style", `width: ${area}`)
    }

    //Listeners
    field.addEventListener('input', (e) => {
        try {
            inputValue = e.target.value;
            if (isNaN(inputValue)) {
                throw "NaN! Just Ignore, Debugging Purposes";
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
            rows = convertedValue;
            columns = convertedValue;
            canvasArea = rows * columns;
            console.log(`Creating a canvas size by: ${canvasArea} squares`);
            createCanvas(canvasArea);
        } catch (error) {
            console.error(error);
        }
    });





















});

