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

if (Meteor.isClient) {
  //Session.set("widgetSet", false);
  var key = "AXffth1RwT62d8wusHcCyz";

  Template.listingSubmit.rendered = function () { 
    //if (!Session.get("widgetSet")) {  
      loadPicker(key);
    //}
  };

  Template.listingSubmit.events({
    'click button' : function () {
      filepicker.pick();
    }
  });
}