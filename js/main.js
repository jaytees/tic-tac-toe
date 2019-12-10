$(document).ready( function () {
  console.log('DOM LOADED');

  let player = 1;
  let moves = 9;

  let winCheck = false;
  // console.log(winCheck);

  let scoreO = 0;
  let scoreX = 0;



  $('.squares').on('click', function (ev) {
    // console.log(ev);

    const squareClicked = '#' + ev.target.id;
      //provides div position of click

    // const indexNum = squareClicked.replace(/[^0-9]/g,'')
      // gets index number from click

    const ifTaken = squareChecker( squareClicked );
      // runs function to check if square already played


    if (ifTaken === false && winCheck === false) { //checks square available to play

      moveCount();


      if (player === 1) {


        const $counterZero = $('<div class="counterZero">O</div>');
        $(squareClicked).append($counterZero);
        //creates div with 0

        // grid[0][indexNum] = '0';
        // updates grid array by selected square

        placeInGrid(squareClicked, 'O');

        winCheck = checkForWinner('O')
        // console.log(winCheck);

        if (winCheck) {
          // console.log('O is Winner');
          // scoreO += 1;
          // console.log(scoreO);
          winnerFound('O');
        };

        player = 2;
        //changes player

      } else {

        const $counterX = $('<div class=counterX>X</div>');
        $(squareClicked).append( $counterX );
        //creates div with X

        // grid[0][indexNum] = 'X';
        // //updates grid array by selected square

        placeInGrid(squareClicked, 'X');

        // checkForWinner('X')

        winCheck = checkForWinner('X')
        // console.log(winCheck);

        if (winCheck) {
          // console.log(`X is Winner`);
          // scoreX += 1;
          // console.log(scoreX);
          winnerFound('X')
        };


        player = 1;
        //changes player


      }; //nested if


    } else {

      console.log('Please select another square');

    }; //square checker


  }); //square selector



  const squareChecker =  function ( squareClicked ) {

    const contents = $(squareClicked).text();

      if (contents === 'O' || contents === 'X') {

        return true;

      } else {

        return false;

      }; //if

  }; //square checker



  const moveCount = function () {

    moves -= 1;

    if (moves === 0) {

      console.log('Game Over');

    };


  }; //moves checker



  $('#resetButton').on('click', function () {

    $('.counterZero, .counterX').remove()

    grid = [];

    winCheck = false;

    player = 1;

    moves = 9;

  }); // resetButton


  const winnerFound = function (counter) {

    //update score
    //call function to reset board and display message on delay

    if (counter === 'O') {
      console.log('O is Winner');
      scoreO += 1;

    } else if (counter === 'X') {
      console.log('X is Winner');
      scoreX += 1;

    }; //if

    // if counter === 0
      // update score0 += 1;

    // if counter === X
      // update scoreX += 1;

    // if moves = 0
      // gameover


  }; //winnerFound


}); //DOM Loaded
