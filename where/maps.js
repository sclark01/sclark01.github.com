var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

function run() {
	
        draw_map();
        get_location();

}
function draw_map(){
	var mapOptions = {
          center: new google.maps.LatLng(42.317939,-71.081543),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
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
	var pop_up = new google.maps.InfoWindow({content: "HEY"});
	pop_up.open(map,position);
	
}