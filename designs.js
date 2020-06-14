// Select color input
// Select size input
const pixelColor = document.getElementById('colorPicker');
const rowNumber = document.getElementById('inputHeight');
const columNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(j) {
    pixelCanvas.innerHTML = '';
    j.preventDefault();
    makeGrid();
} );

pixelCanvas.addEventListener('click', function(j) {
    if(j.target.nodeName === 'TD') {
        j.target.style.backgroundColor = colorPicker.value;
    }
});


function makeGrid() {
    for (let i = 0; i < rowNumber.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let a = 0; a < columNumber.value; a++){
            row.insertCell(0);
        }
    }


}
