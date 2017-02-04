$(function(){
	// ↓↓↓↓↓↓ footer ↓↓↓↓↓↓
	function footer_repeat(){
		var w = $(window).width();
		w = (w - 1000) / 2;
		if(w > 0){
			$(".footer_repeat").css({
			"width" : w
			});
		}else{
			$(".footer_repeat").css({
				"width" : "0px"
			});
		}
	};
	footer_repeat();

	$(window).resize(function(){
		footer_repeat();
	});
	// ↑↑↑↑↑↑ footer ↑↑↑↑↑


	// ページ内
   $('#topback').click(function() {
      $('html,body').animate( {scrollTop:0} ) ;
      return false;
   });
});