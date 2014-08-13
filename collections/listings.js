Listings = new Meteor.Collection('listings');

Listings.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Listings.deny({
	update: function(userId, listing, fieldNames) {
	// may only edit the following two fields:
	return (_.without(fieldNames, 'address', 'price').length > 0); }
});

Meteor.methods({
	listing: function(listingAttributes) {
		
		var user = Meteor.user(),
			listingWithSameAddress = Listings.findOne({address: listingAttributes.address});

		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to list ");

		// ensure the listing has a title
		if (!listingAttributes.price)
			throw new Meteor.Error(422, 'Please fill in a price');

		// check that there are no previous listings with the same address
		if (listingAttributes.address && listingWithSameAddress) {
			throw new Meteor.Error(302,
			'This address has already been listed',
			listingWithSameAddress._id);
		}

		// pick out the whitelisted keys
		var listing = _.extend(_.pick(listingAttributes, 'address', 'price', 'owner'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		var listingId = Listings.insert(listing);

		return listingId;
	}
});