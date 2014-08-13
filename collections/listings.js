Listings = new Meteor.Collection('listings');

Listings.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! userId; }
});