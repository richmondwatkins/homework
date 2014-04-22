(function(){
  'use strict';

  var $td;
  // var $source;


// var $td = $('table > tbody > tr > td') * 1;
// var $tr = $('table > tbody > tr') * 1;
 // var $spot = $('table > tbody > tr > td').attr('src');
$(document).ready(init);


  function init(){
    addPacman();
    addGhost();
    checkWin();
    $('td').click(move);


  }

  function move(){
    $($td).removeClass('pacman');
    $(this).addClass('pacman');
    checkWin();
  }

  function checkWin(){

    if($('table > tbody > tr > td.ghost').hasClass('pacman')){

      alert('Winner');
    }
  }



  function addPacman(){
   $td = $('table > tbody > tr > td');
    var i = Math.floor(Math.random() * 6);

       $($td[i]).addClass('pacman');

  }

  function addGhost(){
     $td = $('table > tbody > tr > td');
    // var $tr = $('table > tbody > tr > td');
     var i = Math.floor(Math.random() * 6);

      $($td[i]).addClass('ghost');
  }


  //
  // function move(event) {
  //    src.x = $td.data('x') * 1;
  //   src.y = $td.data('y') * 1;
  // switch(event.keyCode){
  // case 38:
  //     $tr ++;
  //     debugger;
  //     movePacman();
  //     break;
  //   case 40:
  //     $tr --;
  //     movePacman();
  //     break;
  //   case 37:
  //     $td --;
  //     movePacman();
  //     break;
  //   case 39:
  //     $td ++;
  //     movePacman();
  //     break;
  //
  //   }
  //   if(event.keyCode === 37 || event.keyCode === 38 ||  event.keyCode === 39 || event.keyCode === 40) {
  //       event.preventDefault();
  //   }
  // }

})();
