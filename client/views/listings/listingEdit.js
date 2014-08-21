Template.listingEdit.rendered = function(){
   autocompleteEdit = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),{ types: ['geocode'] });
};

Template.listingEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentListingId = this._id;
    
    var listingProperties = {
      address: $(e.target).find('[name=address]').val(),
      price: $(e.target).find('[name=price]').val(),
      message: $(e.target).find('[name=message]').val()

    }
    
    Listings.update(currentListingId, {$set: listingProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('listingPage', {_id: currentListingId});
      }
    });
  },
  
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this listing?")) {
      var currentListingId = this._id;
      Listings.remove(currentListingId);
      Router.go('listingsList');
    }
  }
});