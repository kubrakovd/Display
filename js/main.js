;(function($){

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


	$('.swipebox').swipebox();
})(jQuery);
