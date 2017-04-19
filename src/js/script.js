function initMap() {
  var ariano = {lat: 41.1546393, lng: 15.0849688};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: ariano
  });
  var marker = new google.maps.Marker({
    position: ariano,
    map: map
  });
}

$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});
