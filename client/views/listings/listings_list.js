Template.listingsList.helpers({
  listings: function() {
    return Listings.find();
  }
});