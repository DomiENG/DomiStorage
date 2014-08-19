Template.myListings.helpers({
  mylistings: function() {
    return Listings.find({'userId': Meteor.user()._id});
  }
});