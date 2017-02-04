$(document).ready(function(){
	$('.slick').slick({
		autoplay:true,
		autoplaySpeed:4000,
		dots:true,
		arrows:true,
		adaptiveHeight: true,
		fade: true
	});

	$('ul.photo').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		centerMode: true,
		autoplay:true,
		autoplaySpeed:1500,
		arrows: false
	});
});