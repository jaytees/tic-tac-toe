$(document).ready( function () {
  console.log('DOM LOADED-Refactor');

  let player = 1;
  let moves = 9;

  let winCheck = false;

  let scoreO = 0;
  let scoreX = 0;



  $('.squares').on('click', function (ev) {
    // console.log(ev);

    playerIdentifier(player); //changes scoreboard color

    const squareClicked = '#' + ev.delegateTarget.id;
    //provides div position of click

    const ifTaken = squareChecker( squareClicked );
      // runs function to check if square already played

    if (ifTaken === false && winCheck === false) { //checks square available to play and no winnerFound

      $('#message').text(''); //clear any messages

          if (player === 1) {

            const $counterZero = $('<div class="counterZero">O</div>');
            $(squareClicked).append($counterZero);
            //creates div with 0


            if (placeInGrid(squareClicked, 'O')) {

              winnerFound('O');

            };

            player = 2;
            //changes player

          } else {

            const $counterX = $('<div class=counterX>X</div>');
            $(squareClicked).append( $counterX );
            //creates div with X

            if (placeInGrid(squareClicked, 'X')) {

              winnerFound('X');

            };

            player = 1;
            //changes player


          }; //nested if


    } else if (winCheck === true) {

      $('#message').text('PLEASE RESET BOARD TO PLAY AGAIN! ').css({
        color: '#ff5454',
        visibility: 'visible',
        'font-size': '17px',
        'letter-spacing': '4px',
        'line-height': '24px',
      });

    }; //if

    moveCount();



  }); //square selector



  const squareChecker =  function ( squareClicked ) {

    // const squareClickedNoHash = squareClicked - '#';

    const contents = $(squareClicked).text();

      if (contents === 'O' || contents === 'X') {

        $('#message').text('PLEASE SELECT ANOTHER SQUARE').css({
          color: '#ff5454',
          visibility: 'visible',
          'font-size': '17px',
          'letter-spacing': '2px',
          'line-height': '24px',
        });

        return true;

      } else {

        return false;

      }; //if

  }; //square checker



  const moveCount = function () {

    moves -= 1;

    if (moves === 0 && winCheck === false) {
      $('#message').text('DRAW!').css({
        color: '#ff5454',
        visibility: 'visible',
        'font-size': '17px',
        'letter-spacing': '2px',
        'line-height': '24px',
      });

      // console.log('gameover');

      return true;

    };


  }; //moves checker


  $('#resetButton').on('click', function () {

    $('.counterZero, .counterX').remove()

    grid = [];

    winCheck = false;

    player = 1;

    moves = 9;

    $('#message').text('');
    //3 lines below with empty values reset css to default
    $('.scoreBoard').css('color', '');
    $('#x').css('color', '');
    $('#o').css('color', '');

    // console.log(player);


  }); // resetButton

  const playerIdentifier = function ( player ) {

      if (player === 1) {  //statements are opposite to turn logic so it alternates after every squareClicked

        $('#x').css('color', '#5b9665');
        $('#o').css('color', '#d6d6d6');

      } else {

        $('#o').css('color', '#5490ff');
        $('#x').css('color', '#d6d6d6');

      }; // if


  }; // playerIdentifier


  const winnerFound = function (counter) {

    //update score
    //call function to reset board and display message on delay

    winCheck = true;

    if (counter === 'O') {

        // console.log('O is Winner');
        scoreO += 1;
        $('#scoreCountO').text(scoreO); //updates score on screen
        $('#message').text('O IS WINNER!').css({
          color: '#5490ff',
          visibility: 'visible',
        }); //displays message
        $('#scoreBoardLeft').css('color', '#5490ff'); //makes score board all blue



    } else if (counter === 'X') {

        // console.log('X is Winner');
        scoreX += 1;
        $('#scoreCountX').text(scoreX);
        $('#message').text('X IS WINNER!').css({
          color: '#5b9665',
          visibility: 'visible',
        });
        $('#scoreBoardRight').css('color', '#5b9665'); //makes score board all green


    }; //if


    // if moves = 0
      // gameover


  }; //winnerFound




}); //DOM Loaded







// const boardAnimate = function ( counter ) {
//
//   if (counter === 'X') {
//
//     $('.counterX').css('color', '#5b9665');
//
//   } else {
//
//     $('.counterZero').css('color', '#5490ff');
//
//   }
// }