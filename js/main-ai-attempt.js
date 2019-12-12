$(document).ready( function () {
  console.log('DOM LOADED-Refactor');

  let player = 1;
  let moves = 9;

  let winner = false;

  let scoreO = 0;
  let scoreX = 0;

  let gameType = 1;

  $('#singlePlayer').on('click', function () {

    gameType = 1;
    $('.welcomeScreen').css('visibility', 'hidden');

  }); //singlePlayer button

  $('#multiPlayer').on('click', function () {

    gameType = 2;
    $('.welcomeScreen').css('visibility', 'hidden');

  }); //multiPlayer button



  $('.squares').on('click', function (ev) {
    // console.log(ev);

    playerIdentifier(player); //changes scoreboard color

    const squareClicked = '#' + ev.delegateTarget.id;
    //provides div position of click, using jQuery object

    const ifTaken = squareChecker( squareClicked );
      // runs function to check if square already played



    if (ifTaken === false && winner === false) { //checks square available to play and no winner

        $('#message').text(''); //clear any messages

            if (player === 1) {

              const $counterZero = $('<div class="counterZero">O</div>');
              $(squareClicked).append($counterZero);
              //creates div with O

              gameLogic(ev.delegateTarget.id, 'O');

              winChecker('O');

          // squareSelectAndWin(ev.delegateTarget.id, 'O')

              player = 2;

            } else {

               const $counterX = $('<div class=counterX>X</div>');
               $(squareClicked).append( $counterX );
               //creates div with X

               gameLogic(ev.delegateTarget.id, 'X');

               winChecker('X');

          // squareSelectAndWin(ev.delegateTarget.id, 'X')

              player = 1;


            }; //nested if


      } else if (winner === true) {

        $('#message').text('PLEASE RESET BOARD TO PLAY AGAIN! ').css({
          color: '#ff5454',
          visibility: 'visible',
          'font-size': '17px',
          'letter-spacing': '4px',
          'line-height': '24px',
        });

    }; //if

    moveCount();

    // for one player

    if (gameType === 1 && winner === false) {

      setTimeout(function () {

        playerIdentifier(player); //changes scoreboard color
        gameLogicAi();
        winChecker('X');
        // squareSelectAndWin(ev.delegateTarget.id, 'X')
        player = 1;

      }, 2000);

    }; //one player



  }); //square selector


  const squareChecker =  function ( squareClicked ) {


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

    if (moves === 0 && winner === false) {
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

    $('.counterZero, .counterX').remove();

    grid = ['', '', '', '', '', '', '', ''];

    winner = false;

    player = 1;

    moves = 9;

    $('#message').text('');
    //3 lines below with empty values reset css to default
    $('.scoreBoard').css('color', '');
    $('#x').css('color', '');
    $('#o').css('color', '');

    // console.log(player);


  }); // resetButton


  const winChecker = function (counter) {

    if (winLogic(counter)) {
      //if win logic returns true, winner found

      winner = true;

      boardWinAnimate( winningSelector, counter);

        if (counter === 'O') {

            // console.log('O is Winner');
            scoreO += 1;
            $('#scoreCountO').text(scoreO); //updates score on screen
            $('#message').text('O IS WINNER!').css({
              color: '#5490ff',
              visibility: 'visible',
            }); //displays message
            $('#scoreBoardLeft').css('color', '#5490ff'); //makes score board all blue
            $('#o').css('color', '#5490ff');
            $('#x').css('color', '#d6d6d6');



        } else if (counter === 'X') {

            // console.log('X is Winner');
            scoreX += 1;
            $('#scoreCountX').text(scoreX);
            $('#message').text('X IS WINNER!').css({
              color: '#5b9665',
              visibility: 'visible',
            });
            $('#scoreBoardRight').css('color', '#5b9665'); //makes score board all green
            $('#x').css('color', '#5b9665');
            $('#o').css('color', '#d6d6d6');


        }; // nested if

        setTimeout(function () {

          $('#resetButton').trigger('click');

          // .fadeOut("slow")

        }, 3000);

    }; // if



  }; //winChecker


  const playerIdentifier = function ( player ) {

      if (player === 1) {  //statements are opposite to turn logic so it alternates after every squareClicked

        $('#x').css('color', '#5b9665');
        $('#o').css('color', '#d6d6d6');

      } else {

        $('#o').css('color', '#5490ff');
        $('#x').css('color', '#d6d6d6');

      }; // if


  }; // playerIdentifier


  const boardWinAnimate = function ( winSelector, counter ) {

    // console.log(winningCounter0, winningCounter1, winningCounter2);

    let color = '#5490ff';

    if (counter === 'X') {

      color = '#5b9665';

    };

    // let color = (counter === 'X') ? '#5490ff' : '#5b9665';

    $( winSelector ).children().css( 'color', color )
    .animate({
        fontSize: '65px',
      }, 1000).animate({
        fontSize: '55px'
      }, 1000);

  }; // boardWinAnimate



}); //DOM Loaded
