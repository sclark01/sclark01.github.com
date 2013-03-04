function run() {
       var mymap = draw_map();
       get_location(mymap);

}

function draw_map(){
	var mapOptions = {
          center: new google.maps.LatLng(42.317939,-71.081543),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            
    return map;
}

function get_location(mymap){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition(mymap));
		}
	else {
		alert("GeoLocation is Not Enabled on this device");
	}
}

function showPosition(position, mymap){
	var popOptions = {
		
	}
	var pop_up = new google.maps.InfoWindow({content: "HEY"});
	var marker = new google.maps.Marker({position: position, map: mymap, title: "Hello World"});

	google.maps.event.addlistener(marker, 'click', function(){
	infowindow.open(mymap, marker)
});
	
}