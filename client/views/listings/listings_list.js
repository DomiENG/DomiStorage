Template.listingSubmit.rendered = function(){
autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),{ types: ['geocode'] });

function geolocate() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
     var geolocation = new google.maps.LatLng(
         position.coords.latitude, position.coords.longitude);
     autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
         geolocation));
   });
 }
}

};

Template.listingSubmit.events({

'submit form': function(e) {
e.preventDefault();

var listing = {
address: $(e.target).find('[name=address]').val(),
price: $(e.target).find('[name=price]').val(),
message: $(e.target).find('[name=message]').val()
}

Meteor.call('listing', listing, function(error, id) {
if (error)
return alert(error.reason);

Router.go('listingPage', {_id: id});
})
}


});
Template.listingsList.helpers({
 listings: function() {
   return Listings.find();
 }
});

Template.listingsList.rendered = function(){

 /*
 // Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
 map.setZoom(9);
 map.setCenter(marker.getPosition());
 });
*/

 GoogleMaps.init(
   {
       'sensor': true, //optional
       //'key': 'MY-GOOGLEMAPS-API-KEY', //optional
     'language': 'en' //optional
  }, 

   function initialize() {
       var mapOptions = {
           zoom: 12,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           disableDefaultUI: true,
           center: new google.maps.LatLng(39.948157624395726, -75.16712415771485)
       };
       map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 

       var marker = new google.maps.Marker({
           position: map.getCenter(),
           map: map,
           title: 'Hello World!'
       });

       var infowindow = new google.maps.InfoWindow({
           content:"Hello World!"
       });

       google.maps.event.addListener(marker, 'click', function() {
           map.setZoom(16);
           map.setCenter(marker.getPosition());
           infowindow.open(map,marker);
       });

       google.maps.event.addListener(map, 'click', function() {
           //add pin at mouse location
       });

       //google.maps.event.addDomListener(window, 'window', initialize);
   }


);
 
}
