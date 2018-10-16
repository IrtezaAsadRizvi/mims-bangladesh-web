$(function() {
	// phone nav buttons (close one when the other one is triggered)
	$('#navbarMenuButton').click(function(){
		$('#navbarSearch').collapse('hide')
	})
	$('#navbarSearchButton').click(function(){
		$('#navbarMenu').collapse('hide')
	})

  // search tabs
	$(".search-tabs li").click(function(e) {
	  e.preventDefault();
	  $(".search-tabs li").removeClass("active");
	  $(this).addClass("active");
	});

	// home product slider
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

	// home news slider
	$('#home-news-slider').slick({
	  slidesToScroll: 1,
		slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 1000,
		infinite: false,
    arrows: true,
		responsive: [
		 {
			 breakpoint: 480,
			 settings: {
				 slidesToShow: 2,
				 arrows: false,
			 }
		 }
	 ]
	});

	// image viewer
	var viewer = ImageViewer();
	$('.gallery-items').click(function () {
		var imgSrc = this.src,
				highResolutionImage = $(this).data('high-res-img');

		viewer.show(imgSrc, highResolutionImage);
	});
});
