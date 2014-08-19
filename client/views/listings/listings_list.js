Template.listingsList.helpers({
  listings: function() {
    return Listings.find();
  }
});

Template.listingsList.rendered = function(){
  
  autocompleteSearch = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),{ types: ['geocode'] });
  

  GoogleMaps.init(
    {
        'sensor': true, //optional
        //'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        'language': 'en' //optional
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

Template.listingSubmit.events({

});