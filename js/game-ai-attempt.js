console.log('refactor');

let grid = ['', '', '', '', '', '', '', ''];

let aiGrid = [];

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


const gameLogicAi = function (counter) {

  aiGrid = [];

  for (var i = 0; i < grid.length; i++) {

      if (grid[i] === '' ) {

        aiGrid.push(i);
        //pushes empty index numbers to ai array

      }; // if

  }; // for loop

  //use math.random to get a random number maximum being length of array, math.floor to ensure whole number

  const randomNumber = Math.floor((Math.random() * aiGrid.length)); // returns random number

  // console.log(randomNumber);

  //use random number as the index
  // find value at that index

  const emptySpotIndex = aiGrid[randomNumber];

  // console.log(aiGrid[randomNumber]);

  //interpolate as html class

  let aiChoice = `#${emptySpotIndex}`;
  console.log(aiChoice);

  grid[emptySpotIndex] = 'X';

  //appened select to DOM

  const $counterX = $('<div class=counterX>X</div>');
  $(aiChoice).append( $counterX );
  //
  console.log($counterX);


}; //gameLogicAi

// let aiChoice = '';
//
// const gameLogicAi = function ( counter ) {
//
//   let emptySpot = grid.indexOf('');
//   console.log(emptySpot);
//
//   grid[emptySpot] = counter;
//   console.log(grid);
//
//   aiChoice = `#${emptySpot}`;
//   console.log(aiChoice);
//
//   const $counterX = $('<div class=counterX>X</div>');
//   $(aiChoice).append( $counterX );
//
//   console.log($counterX);
//
//   player = 1;
//
// }

// let emptySpot = grid.indexOf(grid[i])
// console.log(emptySpot); //returns first empty spot 7 times (full array)
//
// grid[emptySpot] = counter;
// console.log(grid); // continues adding X in empty spots till array filled
