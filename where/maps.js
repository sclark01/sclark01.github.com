
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
	alert(myLatLng);
	var myInfo = new google.maps.InfoWindow({
		content: "HERE I AM"
	});
	
		var mapOptions = {
          center: new google.maps.LatLng(42.317939,-71.081543),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
    var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Current Location"
	});
	
	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map, marker);
	});
}