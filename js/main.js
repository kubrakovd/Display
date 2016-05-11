;(function($){

	$(document).ready(function(){

	var $ipadSlider = $('.ba-ipad-slider');
		$ipadSlider.slick({
			dots:false,
			infinite:false
		});
	})


	var $bigSlider = $('.ba-big-slider');
	var $textSlider = $('.ba-text-slider');
	$('.ba-text-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.ba-big-slider'
	});
	$('.ba-big-slider').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.ba-text-slider',
		  arrows:false,
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true
	});







	$(window).load(function(){
	    var mapDiv = $('#map') [0];
		var coordinates = {lat: 45.4783789, lng: 9.1230817};
	    var map = new google.maps.Map(mapDiv, {
	      center:  coordinates,
	      zoom: 13,
	      scrollwheel: false
	    });

		var marker = new google.maps.Marker({
	    position: coordinates,
	    map: map,

	  });
		 var infowindow = new google.maps.InfoWindow({
    	content: 'San Siro, Milano'
  		});

		infowindow.open(map, marker);
	})

	$( '.swipebox' ).swipebox();
})(jQuery);




