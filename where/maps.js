var map;
var mycontent;
var stations_all = [];
var stations_ash = [];
var stations_brn = [];
var num_stops = 22;

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
	lat1 = position.coords.latitude;
	lon1 = position.coords.longitude;
	mycontent = "Closest station from you is: " + find_distance(lat1, lon1) + " miles away.";
	
	var myInfo = new google.maps.InfoWindow({
		content: mycontent
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
	
	var stop_all = [];
	var stop_ash = [];
	var stop_brn = [];

	t_logo = 'images/tlogo.png';

	
	for (i = 0; i < 13; i++){
			stop_all[i] = new google.maps.Marker({
				position: stations_all[i],
				map: map,
				title: "",
				icon: t_logo
				});
		
	for (j = 0; j < 5; j++){
		stop_ash[j] = new google.maps.Marker({
			position: stations_ash[j],
			map: map,
			title: "",
			icon: t_logo
			});
		}
	for (w = 0; w < 6; w++){
		stop_brn[j] = new google.maps.Marker({
			position: stations_brn[w],
			map: map,
			title: "",
			icon: t_logo
			});
		}
					
	}
	paths();
}

function paths(){
	var route_all = new google.maps.Polyline({
		path:stations_all,
		strokeColor: "#FF0000",
		strokeOpacity: 0.7,
		strokeWeight: 7.0,
	});
	var route_ash = new google.maps.Polyline({
		path:stations_ash,
		strokeColor: "#FF0000",
		strokeOpacity: 0.7,
		strokeWeight: 7.0,
	});
	var route_brn = new google.maps.Polyline({
		path:stations_brn,
		strokeColor: "#FF0000",
		strokeOpacity: 0.7,
		strokeWeight: 7.0,
	});
	route_all.setMap(map);
	route_ash.setMap(map);
	route_brn.setMap(map);
}
function find_distance(lat1, lon1){
	var dis;
	var temp;
	
	for(i = 0; i < 13; i++) {
		lat2 = stations_all[i].lat();
		lon2 = stations_all[i].lng();
		console.log(haversine(lat1, lon1, lat2, lon2));
		console.log(temp);
		if (temp < dis){
			dis = temp;
			}
	/*	if (i < 6){
		lat2 = stations_ash[i].lat();
		lon2 = stations_ash[i].lng();
		temp = haversine(lat1,lon1,lat2,lon2);
		if (temp < dis){
			dis = temp;
			}
			if (i < 5){
				lat2 = stations_ash[i].lat();
				lon2 = stations_ash[i].lng();
				temp = haversine(lat1,lon1,lat2,lon2);
				if (temp < dis){
					dis = temp;
				}
			}
		}*/
	}
	
	return dis;
}
function haversine(lat1, lon1, lat2, lon2){

Number.prototype.toRad = function() {
	return this * Math.PI / 180;
}

	var R = 6371;
	var dLat = (lat2 - lat1).toRad();
	var dLon = (lon2 - lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;

	return d;
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




