Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {path: '/'})
	this.route('listingsList', {path: '/listings'});
	this.route('listingSubmit', { path: '/submit'
});
});