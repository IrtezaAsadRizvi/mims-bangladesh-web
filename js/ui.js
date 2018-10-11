$(function() {
  // search tabs
	$(".search-tabs li").click(function(e) {
	  e.preventDefault();
	  $(".search-tabs li").removeClass("active");
	  $(this).addClass("active");
	});
});
