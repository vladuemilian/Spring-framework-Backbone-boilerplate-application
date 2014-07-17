define(['jquery', 'underscore', 'backbone', 'bootstrap', 
        'core/lang',
        'routers/home'
        ], function($, _, Backbone, Bootstrap,
        lang,
        HomeRouter) {
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