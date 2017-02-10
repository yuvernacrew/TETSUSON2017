$(function(){
	$('#nav-toggle').click(function(){
		$('.mobile-nav').toggleClass('open');
	});

	$('.staff-img').on({
	'mouseenter':function(){
		$(this).find('.staff-description').fadeIn()
	},
	'mouseleave':function(){
		$(this).find('.staff-description').fadeOut()
	}
});

});
