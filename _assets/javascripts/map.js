function initialize() {
var myLatlng = new google.maps.LatLng(41.453142, -8.289201);
var mapOptions = {
zoom: 18,
center: myLatlng,
mapTypeId: 'satellite'
};
var mapCanvas =document.getElementById('map-canvas');
if (mapCanvas == null)
  return;
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title: 'neegium'
});
map.setTilt(45);
}
google.maps.event.addDomListener(window, 'load', initialize);
