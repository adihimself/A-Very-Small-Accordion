$(document).ready(function(e) {
	$('.acc-header').click(function(){
		if($(this).next('.acc-content').hasClass('open')) {
			$(this).next('.acc-content').removeClass('open').slideToggle();
		} else {
			$('.open').removeClass('open').stop().slideToggle(300);
			$(this).addClass('openheader');
			$(this).next('.acc-content').addClass('open').stop().slideToggle(300);
		}
	});
});
