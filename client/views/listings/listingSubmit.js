Template.listingSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var listing = {
			address: $(e.target).find('[name=address]').val(),
			price: $(e.target).find('[name=price]').val(),
			owner: $(e.target).find('[name=owner]').val()
		}

		Meteor.call('listing', listing, function(error, id) {
			if (error)
				return alert(error.reason);
		
		Router.go('listingPage', {_id: id});
		})
	}
});