const container = document.querySelector('#container');

window.onload = function(){
  drawSquares(16);
};

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

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', ()=> {
  let newSize = window.prompt('Enter a new size (must be under 100)', 16);
  container.innerHTML = '';
  drawSquares(newSize);

});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
