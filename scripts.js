$(document).ready(function() {

  /* scroll on buttons */
  $('.btn').click(function () {
    $('html, body').animate({scrollTop: $('.btn').offset().top}, 1000);
  });



})