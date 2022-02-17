const container = document.querySelector('#container');

for (j = 0; j < 16; j++ ) {
    for (i = 0; i < 16; i++ ){
        const square = document.createElement('div');
        square.classList.add('white-square');
        container.appendChild(square);
    }
}

const squares = document.querySelectorAll('.white-square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.remove('white-square');
    square.classList.add('black-square');
  });
});



//const blackSquares = Array.from(document.querySelectorAll('.black-square'));
  