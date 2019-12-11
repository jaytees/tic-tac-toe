console.log('game-logic');

// const grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const grid = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ];


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



const placeInGrid = function (squareClicked, counter) {
  // this will pick the array

  const indexNum = squareClicked.replace(/[^0-9]/g,'')
    //gets index number from click
    // console.log(indexNum); //works

  grid[indexNum] = counter;
  //updates array;

}; //placeInGrid



const checkForWinner =  function (counter) {


  if (grid[0] === counter && grid[1] === counter && grid[2] === counter ) {
    //Horiz WINNER
    // console.log('horiz1 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[3] === counter && grid[4] === counter && grid[5] === counter) {
    //Horiz WINNER
    // console.log('horiz2 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[6] === counter && grid[7] === counter && grid[8] === counter) {
    //Horiz WINNER
    // console.log('horiz3 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[0] === counter && grid[3] === counter && grid[6] === counter ) {
    //Vert WINNER
    // console.log('vert1 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[1] === counter && grid[4] === counter && grid[7] === counter) {
    //Vert WINNER
    // console.log('vert2 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[2] === counter && grid[5] === counter && grid[8] === counter) {
    //Vert WINNER
    // console.log('vert3 wins');
    // boardAnimate( counter );
    return true;

  }else if (grid[0] === counter && grid[4] === counter && grid[8] === counter ) {
    //Diag WINNER
    // console.log('diag1 wins');
    // boardAnimate( counter );
    return true;

  } else if (grid[2] === counter && grid[4] === counter && grid[6] === counter) {
    //Diag WINNER
    // console.log('diag2 wins');
    // boardAnimate( counter );
    return true;

  } else {

    return false;

  }; //if else



}; //checkForWinner
