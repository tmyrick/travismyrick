$(document).ready(function(){
  $('.hideme').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},800);
    }
  });
  $(window).scroll(function () {
    var viewport = $(window).height();
    var scrolltop = ($(window).scrollTop())
    if($('#home').length >0 ){
      if ($(window).scrollTop() > viewport - 64) {
        $('header').addClass('fixed');
      }
      else {
        $('header').removeClass('fixed');
      }
    }
    else {
      $('header').addClass('fixed');
    }
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},800);
      }
    });
  });
});