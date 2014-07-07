define(['jquery', 'underscore', 'backbone', 'bootstrap', 
        'core/lang',
        'routers/home', 'routers/user/auth'
        ], function($, _, Backbone, Bootstrap,
        lang,
        HomeRouter, UserAuthRouter) {
	$.noConflict();
	_.noConflict();


	//var lang = new Lang;
	// Start Backbone history a necessary step for bookmarkable URL's
	//console.log(Lang.getCurrentPrefix() );
	Backbone.history.start({pushState:true, root: lang.getCurrentPrefix()});
	//Backbone.history.start({pushState:true});
	
	$(document.body).on('click', 'a', function(e){
		e.preventDefault();
		Backbone.history.navigate(e.currentTarget.pathname, {trigger: true});
	});
});