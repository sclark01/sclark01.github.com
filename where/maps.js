





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
	var myLatLng = {
		lat: position.coords.latitude, 
		lng: position.coords.longitutde
		}; 
	var say = "NO";
	
	infowindow = new google.maps.InfoWindow();
	infowindow.setPosition(myLatLng);
	infowindow.setContent(say);
	infowindow.open();
}