//   $(window).scroll(function () {
//     var viewport = $(window).height();
//     var scrolltop = ($(window).scrollTop())
//     if($('#home').length >0 ){
//       if ($(window).scrollTop() > viewport - 64) {
//         $('header').addClass('fixed');
//         $('#home .container').addClass('padded');
//         // $('.name').addClass('top');
//       }
//       else {
//         $('header').removeClass('fixed');
//         $('#home .container').removeClass('padded');
//         // $('.name').addClass('top');
//       }
//     }
//     else {
//       $('header').addClass('fixed');
//     };

//     function fixDiv() {
//       var $div = $(".name");
//       if ($(window).scrollTop() > viewport - -51) { 
//           $('.name').css({'position': 'fixed', 'top': '0', 'width': '100%', 'margin-top': '1.4rem'}); 
//           $('.name').addClass('hideme');
//       };
//       if ($(window).scrollTop() > viewport - -50) {
//           $('.name').addClass('header-name');
//           $('.name').removeClass('hideme');  
//       }
//       else {
//           $('.name').css({'position': 'static', 'top': 'auto', 'width': '100%'});
//           $('.name').removeClass('header-name');
//       } 
//     }

//     $(".name").data("top", $(".name").offset().top); // set original position on load
//     $(window).scroll(fixDiv);
// }