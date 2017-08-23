$(document).ready(function(){
  // Hide me stuff
  $('.hideme').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},800);
    }
  });

  // Materialize doesn't handle columns inside of cards well, this is a hack for that
  var cardHeight = $('#skills').height();
  $('.skills').css({'height': cardHeight});

  // Sticky nav logic for home + all other pages
  $(window).scroll(function () {
    var viewport = $(window).height();
    var scrolltop = ($(window).scrollTop())
    if($('.home.index').length >0 ){
      if ($(window).scrollTop() > viewport - 64) {
        $('header').addClass('fixed');
        $('.home.index .container').addClass('padded');
        // $('.name').addClass('top');
      }
      else {
        $('header').removeClass('fixed');
        $('.home.index .container').removeClass('padded');
        // $('.name').addClass('top');
      }
    }
    else {
      $('header').addClass('fixed');
    };

    // Handles the rest of the elements when the home nav sticks
    if($('.home.index').length >0 ){
      function fixDiv() {
        var $div = $(".name");
        if ($(window).scrollTop() > viewport - -51) { 
            $('.name').css({'position': 'fixed', 'top': '0', 'width': '100%', 'margin-top': '1.4rem'}); 
            $('.name').addClass('hideme');
        };
        if ($(window).scrollTop() > viewport - -50) {
            $('.name').addClass('header-name');
            $('.name').removeClass('hideme');  
        }
        else {
            $('.name').css({'position': 'static', 'top': 'auto', 'width': '100%'});
            $('.name').removeClass('header-name');
        } 
      };
      $(".name").data("top", $(".name").offset().top); // set original position on load
      $(window).scroll(fixDiv);
    }
  });
});
