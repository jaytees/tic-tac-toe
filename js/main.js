$(document).ready( function () {
  console.log('DOM LOADED');

  let player = 1;


  $('.squares').on('click', function (ev) {
    console.log(ev);

    const squareClicked = '#' + ev.target.id;

    console.log(squareClicked);

    if (player === 1) {

      const $counterZero = $('<div>0</div>');

      $counterZero.addClass('counterZero');

      $(squareClicked).append( $counterZero );

      // $(squareClicked).html('<div>0</div>').addClass('.counterZero').append()
      //

      //add the css

      // $('.counterZero').css('visibility', 'visible');
      player = 2;
    } else {

      const $counterX = $('<div>X</div>');

      $counterX.addClass('counterX');

      $(squareClicked).append( $counterX );


      // $(squareClicked).html('<div>X</div>').addClass('.counterZero').append()


      // $('.counterX').css('visibility', 'visible');


      player = 1;
    };

  });






}); //DOM Loaded
