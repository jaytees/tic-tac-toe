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



const grid = ['', '', '', '', '', '', '', '', '']



const placeInGrid = function (squareClicked, counter) {
  // this will pick the array

  const indexNum = squareClicked.replace(/[^0-9]/g,'')
    //gets index number from click
    // console.log(indexNum); //works


      if (indexNum === '0' || indexNum === '1' || indexNum === '2' ) {
        // console.log('if 1');
        //go in array 0
        // grid[0][indexNum] = counter;
        // updates 2d grid array by selected square

        grid[indexNum] = counter;

      } else if (indexNum === '3' || indexNum === '4' || indexNum === '5' ) {
        // console.log('if 2');
        //go in array 1
        // grid[1][indexNum] = counter;
          // updates 2d grid array by selected square

          grid[indexNum] = counter;

      } else if (indexNum === '6' || indexNum === '7' || indexNum === '8' ) {
        // console.log('if 3');
        //go in array 2
        // grid[2][indexNum] = counter;
        //updates 2d grid array by selected square

        grid[indexNum] = counter;

      }; //if statements


}; //placeInGrid


const checkForWinner =  function (counter) {


  if (grid[0] === counter && grid[1] === counter && grid[2] === counter ) {
    //Horiz WINNER
    // console.log('horiz1 wins');
    return true;

  } else if (grid[3] === counter && grid[4] === counter && grid[5] === counter) {
    //Horiz WINNER
    // console.log('horiz2 wins');
    return true;

  } else if (grid[6] === counter && grid[7] === counter && grid[8] === counter) {
    //Horiz WINNER
    // console.log('horiz3 wins');
    return true;

  } else if (grid[0] === counter && grid[3] === counter && grid[6] === counter ) {
    //Vert WINNER
    // console.log('vert1 wins');
    return true;

  } else if (grid[1] === counter && grid[4] === counter && grid[7] === counter) {
    //Vert WINNER
    // console.log('vert2 wins');
    return true;

  } else if (grid[2] === counter && grid[5] === counter && grid[8] === counter) {
    //Vert WINNER
    // console.log('vert3 wins');
    return true;

  }else if (grid[0] === counter && grid[4] === counter && grid[8] === counter ) {
    //Diag WINNER
    // console.log('diag1 wins');
    return true;

  } else if (grid[2] === counter && grid[4] === counter && grid[6] === counter) {
    //Diag WINNER
    // console.log('diag2 wins');
    return true;

  } else {

    return false;

  }; //if else



}; //checkForWinner
