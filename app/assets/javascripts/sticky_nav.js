var $nav = $("nav")
$(window).scroll(function() {
	console.log()
if($(this).scrollTop() > 150) {
   $nav.addClass('fixedTop');
} else {
   $nav.removeClass('fixedTop');
}

});


$(window).scroll(example); 

function example() {
    var tempScrollTop = $(window).scrollTop();
    console.log("Scroll from Top: " + tempScrollTop.toString());
};