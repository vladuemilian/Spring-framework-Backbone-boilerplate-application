define(['jquery', 'underscore', 'backbone', 'bootstrap' // Request router.js
        ], function($, _, Backbone, Bootstrap) {
	$.noConflict();
	_.noConflict();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'a/about': 'about',
			'a/contact': 'contact',
			'': 'index',
			'a/shit': 'test'
		}
	});
	// Initiate the router
	var app_router = new AppRouter;
	
	app_router.on('route:*', function(){
		console.log("everyhingwe");
	});

	app_router.on('route:itemRoute', function(actions){
		console.log(actions);
	});
	
	app_router.on('route:test', function(actions){
		console.log(actions);
	});
	
	app_router.on('route:index', function(action){
		console.log("this is index!");
		$("#container").html("welcome!!!!");
	});

	app_router.on('route:contact', function(action){
		$("#container").html("Contact details <a href=\"/a/shit\">test</a>");
	});
	
	app_router.on('route:about', function(action){$("#container").html("Contact details");
		$("#container").html("This is a nice section!");
	});

	// Start Backbone history a necessary step for bookmarkable URL's
	Backbone.history.start({pushState:true});

	$(document.body).on('click', 'a', function(e){
		e.preventDefault();
		Backbone.history.navigate(e.currentTarget.pathname, {trigger: true});
	});
	
	return app_router;
});