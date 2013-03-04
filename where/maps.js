
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
		alert("GeoLocation is not enabled on this device");
	}
}

function showPosition(position){
	var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var say = 'NO';
	console.log(say);
	infowindow = new google.maps.InfoWindow();
	infowindow.setPosition(myLatLng);
	infowindow.setContent(say);
	infowindow.open();
}