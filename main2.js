/* NAVBAR */
$(document).ready(function() {
	$('.header').height($(window).height());
})

$(function() {
    $(window).on('scroll',function() {
        if($(window).scrollTop() > 10) { 
            $('.navbar').addClass('scrolling');
        } else {
            $('.navbar').removeClass('scrolling');
        }
    });
});


$('.navbar .navbar-nav a').on('click', function() {
	$('.navbar .navbar-nav').find('li.active').removeClass('active');
	$(this).parent('li').addClass('active');
});


/* GALLERY */
$(document).ready(function() {
	$('.filter-button').click(function() {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			$('.filter').show('1000');
		} else {
			$('.filter').not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');
		}
	});

	if ($('.filter-button').removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
});
