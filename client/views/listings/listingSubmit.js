Template.listingSubmit.rendered = function(){
	if (!this.rendered){
	 var script = document.createElement("script");
	 script.type = "text/javascript";
	 script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places";
	 document.body.appendChild(script);

	 var script = document.createElement("script");
	 script.type = "text/javascript";
	 script.src = "https://maps.gstatic.com/cat_js/maps-api-v3/api/js/17/13/%7Bmain,places%7D.js";
	 document.body.appendChild(script);

	 this.rendered = true;
	}

	 var autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),{ types: ['geocode'] });
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