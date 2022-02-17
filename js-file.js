const container = document.querySelector('#container');

window.onload = function(){
  drawSquares(16);
};

//Button

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', ()=> {
  let newSize = askNumber();
  container.innerHTML = '';
  drawSquares(newSize);

});

//Functions

function askNumber() {
  let number = window.prompt('Enter a new size (must be under 100)');
    if( isNaN(number) || number % 1 !==0 || number <= 0 || number > 100 ){ //Validation
      number = window.prompt('Please, enter a number from 1 to 100');
    }
  return number;
}

function drawSquares (numSquares){
  for (j = 0; j < numSquares; j++ ) {
    for (i = 0; i < numSquares; i++ ){
        const square = document.createElement('div');
        square.style.height = 500/numSquares + 'px';
        square.style.width = 500/numSquares + 'px';
        square.style.display = 'inline-block';
        square.style.backgroundColor = 'white';
        container.appendChild(square);
        square.classList.add('square'); 
    }
  }
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
