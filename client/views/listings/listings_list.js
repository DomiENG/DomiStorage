Template.listingsList.helpers({
  listings: function() {
    return Listings.find();
  }
});

if (Meteor.isClient) {
  GoogleMaps.init(
    {
        'sensor': true, //optional
        //'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        //'language': 'de' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        map.setCenter(new google.maps.LatLng( 35.363556, 138.730438 ));
    }
);
}