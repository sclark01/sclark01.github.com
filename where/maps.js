var map;
var stations_all = [];
var stations_ash = [];
var stations_brn = [];

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
	var num_stops = 22;
	var stop_all = [];
	var stop_ash = [];
	var stop_brn = [];
	
	for (i = 0; i < 13; i++){
			stop_all[i] = new google.maps.Marker({
				position: stations_all[i],
				map: map,
				title: ""
				});
		
	for (j = 0; j < 5; j++){
		stop_ash[j] = new google.maps.Marker({
			position: stations_ash[j],
			map: map,
			title: ""
			});
		}
	for (w = 0; w < 6; w++){
		stop_brn[j] = new google.maps.Marker({
			position: stations_brn[j],
			map: map,
			title: ""
			});
		}
					
	}
	paths();
}

function paths(){
	var route_all = new google.maps.Polyline({
		path:stations_all,
		strokecolor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2.0,
	});
	var route_ash = new google.maps.Polyline({
		path:stations_ash,
		strokecolor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2.0,
	});
	var route_brn = new google.maps.Polyline({
		path:stations_brn,
		strokecolor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2.0,
	});
	route_all.setMap(map);
	route_ash.setMap(map);
	route_brn.setMap(map);
}

function station_coordinates(){
	stations_all[0] = new google.maps.LatLng(42.395382,-71.142633);
	stations_all[1] = new google.maps.LatLng(42.396967,-71.122935);
	stations_all[2] = new google.maps.LatLng(42.388441,-71.119266);
	stations_all[3] = new google.maps.LatLng(42.373534,-71.118976);
	stations_all[4] = new google.maps.LatLng(42.36552,-71.104116);
	stations_all[5] = new google.maps.LatLng(42.362413,-71.086178);
	stations_all[6] = new google.maps.LatLng(42.361398,-71.071029);
	stations_all[7] = new google.maps.LatLng(42.356356,-71.062188);
	stations_all[8] = new google.maps.LatLng(42.355499,-71.06036);
	stations_all[9] = new google.maps.LatLng(42.352312,-71.055343);
	stations_all[10] = new google.maps.LatLng(42.342559,-71.057038);
	stations_all[11] = new google.maps.LatLng(42.330147,-71.057392);
	stations_all[12] = new google.maps.LatLng(42.320668,-71.052189);
	
	stations_ash[0] = new google.maps.LatLng(42.320668,-71.052189);
	stations_ash[1] = new google.maps.LatLng(42.311275,-71.053391);
	stations_ash[2] = new google.maps.LatLng(42.30004,-71.06163);
	stations_ash[3] = new google.maps.LatLng(42.293088,-71.065793);
	stations_ash[4] = new google.maps.LatLng(42.284612,-71.064205); 
	
	stations_brn[0] = new google.maps.LatLng(42.320668,-71.052189);
	stations_brn[1] = new google.maps.LatLng(42.276039,-71.029444);
	stations_brn[2] = new google.maps.LatLng(42.266448,-71.020346);
	stations_brn[3] = new google.maps.LatLng(42.251774,-71.004896);
	stations_brn[4] = new google.maps.LatLng(42.233347,-71.007128);
	stations_brn[5] = new google.maps.LatLng(42.208081,-71.001248);
}




