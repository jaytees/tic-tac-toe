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


for (let j = 0; j < winCombos.length; j++) {
  let currentArray = winCombos[j];
  let first = currentArray[0]; // x
  let second = currentArray[1]; // x
  let third = currentArray[2]; // empty


  if (grid[first] === 'X' && grid[second] === 'X' && grid[third] === ''){

    createAiCounter(third);
    break;

  } else if (grid[second] === 'X' && grid[third] === 'X' && grid[first] === '' ) {

    createAiCounter(first);
    break;

  } else if (grid[first] === 'X' && grid[third] === 'X' && grid[second] === '' ) {

    createAiCounter(second);
    break;

  }

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

      } else {

          for (var l = 0; l < grid.length; l++) {

            if (grid[l] === '' ) {

              aiGrid.push(l);
              //pushes empty index numbers to ai array


            }; // if

          }; //loop

          createRandomAiCounter();

      }; // main if

}; // loop





}; //gameLogicAi



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



// loop from createAiCounter
// for (var i = 0; i < aiGrid.length; i++) {
//
//   if (aiGrid[i] === 4 || aiGrid[i] === 0 || aiGrid[i] === 2 || aiGrid[i] === 6 || aiGrid[i] === 8) {
//
//       return emptySpotIndex = aiGrid[i];
//
//   } else {
//
//       const randomNumber = Math.floor((Math.random() * aiGrid.length)); // returns random number
//
//       let emptySpotIndex = aiGrid[randomNumber]
//
//   }; //if
//
// }; //loop


//create ai counter with random number
const createRandomAiCounter = function () {

  const randomNumber = Math.floor((Math.random() * aiGrid.length)); // returns random number

  const emptySpotIndex = aiGrid[randomNumber];

  //interpolate as html class
  let aiChoice = `#${emptySpotIndex}`;

  grid[emptySpotIndex] = 'X';
  //so spot on game grid doesnt show emppty again

  //appened select to DOM
  const $counterX = $('<div class=counterX>X</div>');
  $(aiChoice).append( $counterX );

}; //createRandomAiCounter


// for (let i = 0; i < winCombos.length; i++) {
//   let currentArray = winCombos[i];
//   let first = currentArray[0]; // x
//   let second = currentArray[1]; // x
//   let third = currentArray[2]; // empty
//   //loops through winningcombos, saves value at each index
//
//   //uses above as index value as index in array
//   //if counter is present in all 3 index positions, win
//   if (grid[first] === counter && grid[second] === counter && grid[third] === counter ){
//
//     winningSelector = `#${first}, #${second}, #${third}`;
//     // saves winning array as class's
//
//     return true;
//
//   };// if winner
//
// }; // loop

// for (let j = 0; j < winCombos.length; j++) {
//   let currentArray = winCombos[j];
//   let first = currentArray[0]; // x
//   let second = currentArray[1]; // x
//   let third = currentArray[2]; // empty
//
//   if (grid[first] === 'X' && grid[second] === 'X' || grid[second] === 'X' && grid[third] === 'X' || grid[first] === 'X' && grid[third] === 'X' ) {
//
//     console.log(currentArray);
//
//     for (var k = 0; k < currentArray.length; k++) {
//
//       if (currentArray[k] === '') {
//
//         createAiCounter(k)
//
//       }; // nested if
//
//     }; //nested loop
//
//   }; // main if
//
// }; // loop


// for (let j = 0; j < winCombos.length; j++) {
//   let currentArray = winCombos[j];
//   let first = currentArray[0]; // x
//   let second = currentArray[1]; // x
//   let third = currentArray[2]; // empty
//
//
//   if (grid[first] === 'X' && grid[second] === 'X' && grid[third] === ''){
//
//   } else if (grid[second] === 'X' && grid[third] === 'X' && grid[first] === '' ) {
//
//   } else if (grid[first] === 'X' && grid[third] === 'X' && grid[second] === '' ) {
//
//   }
//
// }; // loop
