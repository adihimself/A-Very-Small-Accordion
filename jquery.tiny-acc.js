$(document).ready(function(e) {
  $('.acc-header').click(function(){
		$('.open').removeClass('open').stop().slideToggle();
		$(this).next('.acc-content').addClass('open').stop().slideToggle();	
	});
});
