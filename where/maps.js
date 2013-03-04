var map;
var stations = [];

function run() {

	   draw_map();  
       get_location();

}

function draw_map() {
	
	var mapOptions = {
          center: new google.maps.LatLng(42.356403,-71.062596),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
    map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
    draw_station();
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
	
	var myInfo = new google.maps.InfoWindow({
		content: "HERE I AM"
	});
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Current Location"
	});

	myInfo.open(map, marker);	
}

function draw_station(){
	station_coordinates();
	var num_stops = 21;
	var stop = [];
	for (i = 0; i < num_stops; i++){
		stop[i] = new google.maps.Marker({
			position: stations[i],
			map: map,
			title: ""
		});
	}
	

}

function station_coordinates(){
	stations[0] = new google.maps.LatLng(42.395382,-71.142633);
	stations[1] = new google.maps.LatLng(42.396967,-71.122935);
	stations[2] = new google.maps.LatLng(42.388441,-71.119266);
	stations[3] = new google.maps.LatLng(42.373534,-71.118976);
	stations[4] = new google.maps.LatLng(42.36552,-71.104116);
	stations[5] = new google.maps.LatLng(42.362413,-71.086178);
	stations[6] = new google.maps.LatLng(42.361398,-71.071029);
	stations[7] = new google.maps.LatLng(42.356356,-71.062188);
	stations[8] = new google.maps.LatLng(42.355499,-71.06036);
	stations[9] = new google.maps.LatLng(42.352312,-71.055343);
	stations[10] = new google.maps.LatLng(42.342559,-71.057038);
	stations[11] = new google.maps.LatLng(42.330147,-71.057392);
	stations[12] = new google.maps.LatLng(42.320668,-71.052189);
	stations[13] = new google.maps.LatLng(42.311275,-71.053391);
	stations[14] = new google.maps.LatLng(42.30004,-71.06163);
	stations[15] = new google.maps.LatLng(42.293088,-71.065793);
	stations[16] = new google.maps.LatLng(42.284612,-71.064205);
	stations[17] = new google.maps.LatLng(42.276039,-71.029444);
	stations[18] = new google.maps.LatLng(42.266448,-71.020346);
	stations[19] = new google.maps.LatLng(42.251774,-71.004896);
	stations[20] = new google.maps.LatLng(42.233347,-71.007128);
	stations[21] = new google.maps.LatLng(42.208081,-71.001248);
}




