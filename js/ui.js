$(function() {
  // search tabs
	$(".search-tabs li").click(function(e) {
	  e.preventDefault();
	  $(".search-tabs li").removeClass("active");
	  $(this).addClass("active");
	});

	$('#home-product-slider').slick({
	  slidesToScroll: 1,
		slidesToShow: 3,
	  autoplay: true,
	  autoplaySpeed: 1000,
		infinite: true,
    arrows: false,
		responsive: [
		 {
			 breakpoint: 480,
			 settings: {
				 slidesToShow: 2,
			 }
		 }
	 ]
	});
});
