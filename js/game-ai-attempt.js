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


//push squareClicked index to grid array
const gameLogic = function (squareClicked, counter){

  const indexNum = parseInt(squareClicked);  //gets number from square class and parse to integer

  grid[indexNum] = counter;

  // console.log(grid[indexNum]);

}; // placeGrid


//checks if winning combo fiund
const winLogic = function (counter) {

  for (let i = 0; i < winCombos.length; i++) {
    let currentArray = winCombos[i];
    let first = currentArray[0];
    let second = currentArray[1];
    let third = currentArray[2];
    //loops through winningcombos, saves value at each index

    //uses above as index value as index in array
    //if counter is present in all 3 index positions, win
    if (grid[first] === counter && grid[second] === counter && grid[third] === counter ){

      winningSelector = `#${first}, #${second}, #${third}`;
      // saves winning array as class's

      return true;

    };// if winner

  }; // loop

}; //winLogic


const gameLogicAi = function () {

aiGrid = [];

for (var i = 0; i < grid.length; i++) {

    if (grid[i] === '' ) {

      aiGrid.push(i);
      //pushes empty index numbers to ai array

    }; // if

}; // for loop


const randomNumber = Math.floor((Math.random() * aiGrid.length)); // returns random number

const emptySpotIndex = aiGrid[randomNumber];

//interpolate as html class
let aiChoice = `#${emptySpotIndex}`;

grid[emptySpotIndex] = 'X';
//so spot on game grid doesnt show emppty again

//appened select to DOM
const $counterX = $('<div class=counterX>X</div>');
$(aiChoice).append( $counterX );



}; //gameLogicAi
