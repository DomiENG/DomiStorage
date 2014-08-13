Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('listings'); }


});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('listingsList', {path: '/listings'});
	this.route('listingSubmit', { path: '/submit'});

	this.route('listingPage', {
		path: '/listings/:_id',
		data: function() {return Listings.findOne(this.params._id);}
		});

	this.route('listingEdit', {
		path: '/listings/:_id/edit',
		data: function() { return Listings.findOne(this.params._id); }
	});

});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
    	this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
    pause();
  }
}

Router.before(requireLogin, {only: 'listingSubmit'});