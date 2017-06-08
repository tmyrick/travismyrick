$(document).ready(function(){
  $(window).scroll(function () {
    var viewport = $(window).height();
    var scrolltop = ($(window).scrollTop())
      if ($(window).scrollTop() > viewport - 64) {
       $('header').addClass('fixed');
       $('.container').addClass('add-pad')
      }
      else {
        $('header').removeClass('fixed');
        $('.container').removeClass('add-pad')
      }

    $('.hideme').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},800);
      }
    });
  })
});