var map;
var mycontent;
var stations_all = [];
var stations_ash = [];
var stations_brn = [];
var stop_names = [];
var station_info = [];
var num_stops = 22;
var stops_b4_branch = 13;
var ash_stops = 5;
var brn_stops = 6;
var request_WC = new XMLHttpRequest();


function run() {

	   draw_map();  
       get_location();
       find_friends();

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
	
	var closest_stop = find_distance(lat1, lon1);
	var distance = closest_stop[0];
	var name = closest_stop[1];
	draw_closest(lat1, lon1, name);
	name = stop_names[1];
	
	
	mycontent = "Closest station from you is " + name + ", which is " + distance + " miles away.";
	
	var myInfo = new google.maps.InfoWindow({
		content: mycontent
	});
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Current Location"
	});
	
	

	myInfo.open(map, marker);	
	
	google.maps.event.addListener(marker, 'click', function(event){
		myInfo.open(map, marker);
	});
}

function draw_closest(lat1, lon1, stop){

	var path_arr = [];
	path_arr[0] = stations_all[stop];
	path_arr[1] = new google.maps.LatLng(lat1,lon1);
	
	var closest_route = new google.maps.Polyline({
		path:path_arr,
		strokeColor: "#5200ff",
		strokeOpacity: 0.7,
		strokeWeight: 7.0,
	});
	
	closest_route.setMap(map);
}

function draw_station(){
	station_coordinates();
	names();
	
	var stop_all = [];
	var stop_ash = [];
	var stop_brn = [];
	

	t_logo = 'images/tlogo.png';

	
	for (i = 0; i < num_stops; i++){
			var name = stop_names[i];
			
			
			stop_all[i] = new google.maps.Marker({
				animation: google.maps.Animation.DROP,
				position: stations_all[i],
				map: map,
				title: "",
				icon: t_logo
				});
			
			event_listener(name, stop_all[i]);
		}

	paths();
}

function event_listener(name, marker) { 
	var info = new google.maps.InfoWindow({
		content: name
	});
	
	google.maps.event.addListener(marker, 'click', function(event){
		info.open(map, marker);
	});
	
}

function paths(){

	var non_branched = [];
	
	for (i = 0; i < stops_b4_branch; i++){
		non_branched[i] = stations_all[i];
		}
		
	var route_all = new google.maps.Polyline({
		path:non_branched,
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
	var dis = 100;
	var temp;
	var station = new Object;
	
	for(i = 0; i < num_stops; i++) {
		lat2 = stations_all[i].lat();
		lon2 = stations_all[i].lng();
		temp = haversine(lat1, lon1, lat2, lon2);
		
		if (temp < dis){
			dis = temp;
			station = i;
			}
		}
			
	return [dis,station];
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

function parse(){

	if (request_WC.readyState == 4) {
		if (request_WC.status == 200){
			str = request_WC.responseText;
			parsed = JSON.parse(str);
			count = parsed.length;
			for (i = 0; i < count; i++){
				WC_location(parsed[i]);
			}
			return;
			}
	}
}

function find_friends() {
		request_WC.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
		request_WC.send(null);
		request_WC.onreadystatechange = parse;
}

function WC_location(place){
	var theirLatLng = new google.maps.LatLng(place.loc.latitude, place.loc.longitude);
	
	var message = "Congrats! You found " + place.name + " at " + place.loc.note;
	
	var theirInfo = new google.maps.InfoWindow({
		content: message
	});
	if (place.name == "Waldo"){
		img = 'images/waldo.png';
	}
	else {
		img = 'images/carmen.png';
	}
	var markerWC = new google.maps.Marker({
				animation: google.maps.Animation.BOUNCE,
				position: theirLatLng,
				map: map,
				title: "",
				icon: img
				});

	theirInfo.open(map, markerWC);
	
	google.maps.event.addListener(markerWC, 'click', function(event){
		theirInfo.open(map, markerWC);
	});


	
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
	stations_all[13] = new google.maps.LatLng(42.311275,-71.053391);
	stations_all[14] = new google.maps.LatLng(42.30004,-71.06163);
	stations_all[15] = new google.maps.LatLng(42.293088,-71.065793);
	stations_all[16] = new google.maps.LatLng(42.284612,-71.064205); 
	stations_all[17] = new google.maps.LatLng(42.276039,-71.029444);
	stations_all[18] = new google.maps.LatLng(42.266448,-71.020346);
	stations_all[19] = new google.maps.LatLng(42.251774,-71.004896);
	stations_all[20] = new google.maps.LatLng(42.233347,-71.007128);
	stations_all[21] = new google.maps.LatLng(42.208081,-71.001248);
	
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

function names(){
	stop_names[0] = 'Alewife';
	stop_names[1] = 'Davis';
	stop_names[2] = 'Porter';
	stop_names[3] = 'Harvard';
	stop_names[4] = 'Central';
	stop_names[5] = 'Kendal/MIT';
	stop_names[6] = 'Charles/MGH';
	stop_names[7] = 'Park Street';
	stop_names[8] = 'Downtown Crossing';
	stop_names[9] = 'South Station';
	stop_names[10] = 'Broadway';
	stop_names[11] = 'Andrew';
	stop_names[12] = 'JFK/UMass';
	stop_names[13] = 'Salvin Hill';
	stop_names[14] = 'Fields Corner';
	stop_names[15] = 'Shawmut';
	stop_names[16] = 'Ashmont';
	stop_names[17] = 'North Quincy';
	stop_names[18] = 'Wollaston';
	stop_names[19] = 'Quincy Center';
	stop_names[20] = 'Quincy Adams';
	stop_names[21] = 'Braintree';
}





