function run() {
        var mapOptions = {
          center: new google.maps.LatLng(42.317939,-71.081543),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        get_location();

}

function get_location(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
		}
	else {
		alert("GeoLocation is Not Enabled on this device");
	}
}

function showPosition(position){
	alert("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
}