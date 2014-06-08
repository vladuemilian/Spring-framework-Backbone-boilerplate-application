define(['jquery', 'underscore', 'backbone', 'bootstrap', 
        'routers/home',
        'routers/user/auth'
        ], function($, _, Backbone, Bootstrap,
        HomeRouter, UserAuthRouter) {
	$.noConflict();
	_.noConflict();

	// Start Backbone history a necessary step for bookmarkable URL's
	Backbone.history.start({pushState:true});

	$(document.body).on('click', 'a', function(e){
		e.preventDefault();
		Backbone.history.navigate(e.currentTarget.pathname, {trigger: true});
	});
});