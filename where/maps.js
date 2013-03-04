var map;
var stations;

function run() {

	   draw_map();  
       get_location();

}

function draw_map() {
	
	var mapOptions = {
          center: new google.maps.LatLng(42.3583, -71.0603),
          zoom: 12,
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
	var stop;
	for (int i = 0; i < 4; i++){
		stop[i] = new google.maps.Marker({
			position: stations[i],
			map: map,
			title: "station"
		});
	}
	

}

function station_coordinates(){
	stations[0] = new google.maps.LatLng(42.395382,-71.142633);
	stations[1] = new google.maps.LatLng(42.396967,-71.122935);
	stations[2] = new google.maps.LatLng(42.388441,-71.119266);
	stations[3] = new google.maps.LatLng(42.373534,-71.118976);
	/*
	stations[4] = new google.maps.LatLng(42.399874,-71.137996);
	stations[5] = new google.maps.LatLng(42.399874,-71.137996);
	stations[6] = new google.maps.LatLng(42.399874,-71.137996);
	stations[7] = new google.maps.LatLng(42.399874,-71.137996);
	stations[8] = new google.maps.LatLng(42.399874,-71.137996);
	stations[9] = new google.maps.LatLng(42.399874,-71.137996);
	stations[10] = new google.maps.LatLng(42.399874,-71.137996);
	stations[11] = new google.maps.LatLng(42.399874,-71.137996);
	stations[12] = new google.maps.LatLng(42.399874,-71.137996);
	stations[13] = new google.maps.LatLng(42.399874,-71.137996);
	stations[14] = new google.maps.LatLng(42.399874,-71.137996);
	stations[15] = new google.maps.LatLng(42.399874,-71.137996);
	stations[16] = new google.maps.LatLng(42.399874,-71.137996);
	stations[17] = new google.maps.LatLng(42.399874,-71.137996);
	stations[18] = new google.maps.LatLng(42.399874,-71.137996);
	stations[19] = new google.maps.LatLng(42.399874,-71.137996);
	stations[20] = new google.maps.LatLng(42.399874,-71.137996);*/
}




