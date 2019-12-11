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


//push squareClicked index to winCombos

const placeInGrid = function (squareClicked, counter){

    const indexNum = parseInt(squareClicked.replace(/[^0-9]/g,''));  //gets number of square class and parse to integer

    grid[indexNum] = counter;

    for (var i = 0; i < winCombos.length; i++) {
      let currentArray = winCombos[i];
      const first = currentArray[0];
      const second = currentArray[1];
      const third = currentArray[2];
      // console.log(currentArray);
      // console.log(first);
      // console.log(second);
      // console.log(third);

          if (grid[first] === counter && grid[second] === counter && grid[third] === counter ){

              console.log('winner');

          };//winner

      }; // loop


}; // placeGrid
