Template.listItem.helpers({
//  domain: function() {
//    var a = document.createElement('a');
//    a.href = this.url;
//    return a.hostname;
//  }
	ownListing: function() {
		return this.userId == Meteor.userId();
	}

});