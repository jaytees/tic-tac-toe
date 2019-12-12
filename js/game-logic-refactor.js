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


let winningCounter0;
let winningCounter1;
let winningCounter2;



//push squareClicked index to winCombos
const gameLogic = function (squareClicked, counter){

    const indexNum = parseInt(squareClicked.replace(/[^0-9]/g,''));  //gets number from square class and parse to integer

    grid[indexNum] = counter;

    // console.log(grid[indexNum]);

    for (let i = 0; i < winCombos.length; i++) {
      let currentArray = winCombos[i];
      let first = currentArray[0];
      let second = currentArray[1];
      let third = currentArray[2];


          if (grid[first] === counter && grid[second] === counter && grid[third] === counter ){


              console.log('index number',[i]); //is index of array where win found
              // console.log('winner');

              console.log('currentArray', currentArray); //is winning array

              winningCounter0 = '#square' + currentArray[0];
              winningCounter1 = '#square' + currentArray[1];
              winningCounter2 = '#square' + currentArray[2];

              console.log(winningCounter0, winningCounter1, winningCounter2);


              return true;

          };//winner

      }; // loop


}; // placeGrid
