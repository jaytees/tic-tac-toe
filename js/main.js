$(document).ready( function () {
  console.log('DOM LOADED');

  let player = 1;
  let moves = 9;


  $('.squares').on('click', function (ev) {
    // console.log(ev);

    const squareClicked = '#' + ev.target.id;
      //provides div position of click

    const indexNum = squareClicked.replace(/[^0-9]/g,'')
      //gets index number from click

    const ifTaken = squareChecker( squareClicked );
      // runs function to check if square already played


    if (ifTaken === false) { //checks square available to play

      moveCount();

      if (player === 1) {


        const $counterZero = $('<div class="counterZero">0</div>');
        $(squareClicked).append($counterZero);
        //creates div with 0

        grid[0][indexNum] = '0';
        //updates grid array by selected square

        player = 2;
        //changes player

      } else {

        const $counterX = $('<div class=counterX>X</div>');
        $(squareClicked).append( $counterX );
        //creates div with X

        grid[0][indexNum] = 'X';
        //updates grid array by selected square

        player = 1;
        //changes player

      }; //nested if


    } else {

      console.log('Please select another square');

    }; //square checker


  }); //square selector



  const squareChecker =  function ( squareClicked ) {

    const contents = $(squareClicked).text();

      if (contents === '0' || contents === 'X') {

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





}); //DOM Loaded
