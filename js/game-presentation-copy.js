console.log('Game-presentation');

let gameType = 1;

let player = 1;

let moves = 9;
let winner = false;

let scoreO = 0;
let scoreX = 0;


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

let winningComboFound = false;
let blockComboFound = false;


//push squareClicked index to grid array
const gameLogic = function (squareClicked, counter){

  const indexNum = parseInt(squareClicked);  //gets number from square class and parse to integer

  grid[indexNum] = counter;

  // console.log(grid[indexNum]);

}; // placeGrid


//checks if winning combo found
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


const winOrBlockFinder = function (counter1, counter2) {

  for (let j = 0; j < winCombos.length; j++) {
    let currentArray = winCombos[j];
    let first = currentArray[0]; // x
    let second = currentArray[1]; // x
    let third = currentArray[2]; // empty


    if (grid[first] === counter1 && grid[second] === counter1 && grid[third] === ''){
      // console.log(currentArray);

      createAiCounter(third);
      winningComboFound = true;
      break;

    } else if (grid[second] === counter1 && grid[third] === counter1 && grid[first] === '' ) {

      createAiCounter(first);
      winningComboFound = true;
      break;

    } else if (grid[first] === counter1 && grid[third] === counter1 && grid[second] === '' ) {

      createAiCounter(second);
      winningComboFound = true;
      break;

    }  //checks for win

    else if (grid[first] === counter2 && grid[second] === counter2 && grid[third] === ''){
          // console.log(currentArray);

        createAiCounter(third);
        blockComboFound = true;
        break;

      } else if (grid[second] === counter2 && grid[third] === counter2 && grid[first] === '' ) {

        createAiCounter(first);
        blockComboFound = true;
        break;

      } else if (grid[first] === counter2 && grid[third] === counter2 && grid[second] === '' ) {

        createAiCounter(second);
        blockComboFound = true;
        break;

      } // checks for block

  } //loop

} // winOrBlockFinder


const gameLogicAi = function () {

    // aiGrid = [];

    winOrBlockFinder('X', 'O')


    if (winningComboFound === false && blockComboFound === false) {


      if (grid[4] === '') {

        createAiCounter(4);

      } else if (grid[0] === '') {

        createAiCounter(0);

      } else if (grid[2] === '') {

        createAiCounter(2);

      } else if (grid[6] === '') {

        createAiCounter(6);

      }else if (grid[8] === '') {

        createAiCounter(8);

      } //nested if's


    }//if


    blockComboFound = false;

}; // gameLogicAi


const createAiCounter = function ( logicIndex ) {

  //interpolate as html class
  let aiChoice = `#${logicIndex}`;
  // let aiChoice = `#${emptySpotIndex}`;
  // console.log(aiChoice);

  grid[logicIndex] = 'X';
  // grid[emptySpotIndex] = 'X';
  //so spot on game grid doesnt show emppty again

  //appened select to DOM
  const $counterX = $('<div class=counterX>X</div>');
  $(aiChoice).append( $counterX );

};
