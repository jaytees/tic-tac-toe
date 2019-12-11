console.log('refactor');

// let grid = [];


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

    // console.log(typeof indexNum);

    for (var i = 0; i < winCombos.length; i++) {
      let currentArray = winCombos[i];
      // console.log(currentArray);

        for (var j = 0; j < currentArray.length; j++) {
          // console.log(currentArray[j]);

              if (currentArray[j] === indexNum) {

                currentArray[j] = counter;

              }; // if

        }; //nested loop

      }; // first loop

}; // placeGrid


///loop through winning winCombos
// /see if any equal ['X','X', 'X'] or ['0', '0', '0']
const checkForWinner = function ( counter ) {

    

}; // checkForWinner
