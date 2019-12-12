console.log('refactor');

let grid = [];


const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


let winningSelector = '';


//push squareClicked index to winCombos
const gameLogic = function (squareClicked, counter){

    const indexNum = parseInt(squareClicked);  //gets number from square class and parse to integer

    grid[indexNum] = counter;

    // console.log(grid[indexNum]);

    for (let i = 0; i < winCombos.length; i++) {
      let currentArray = winCombos[i];
      let first = currentArray[0];
      let second = currentArray[1];
      let third = currentArray[2];


          if (grid[first] === counter && grid[second] === counter && grid[third] === counter ){

              winningSelector = `#${first}, #${second}, #${third}`;
              // saves winning array as class's

              return true;

          };// if winner

      }; // loop


}; // placeGrid
