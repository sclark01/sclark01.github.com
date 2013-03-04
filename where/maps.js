function run() {
        var mapOptions = {
          center: new google.maps.LatLng(42.317939,-71.081543),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            get_location();

}

function get_location(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position)){
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
		});
	}
	else {
		alert("GeoLocation is Not Enabled on this device");
	}
}