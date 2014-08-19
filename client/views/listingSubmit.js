Template.listingSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var listing = {
			address: $(e.target).find('[name=address]').val(),
			price: $(e.target).find('[name=price]').val(),
			owner: $(e.target).find('[name=owner]').val()
		}
	
	listing._id = Listings.insert(listing);
	Router.go('listingPage', listing); }
});

