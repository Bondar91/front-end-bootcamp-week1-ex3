(function($){

	var hamburger = $("#btn-menu");

	hamburger.on("click", function(){

		$('.nav').slideToggle(1000);

	});

})(jQuery);