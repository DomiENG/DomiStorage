Template.searchBar.rendered = function(){
	autocompleteSearch = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),{ types: ['geocode'] });
}

Template.searchBar.events({
	
	'submit form': function(e) {
		e.preventDefault();
		
		var search = {
			address: $(e.target).find('[name=address]').val(),
			price: $(e.target).find('[name=price]').val(),
		}
	}
});