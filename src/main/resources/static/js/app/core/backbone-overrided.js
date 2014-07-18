define("core/backbone-overrided", ["jquery","underscore","backbone"], function($, _, Backbone) {
	var oldSync = Backbone.sync;
	
	Backbone.sync = function(method, model, options) {
		
		options || (options = {});
		
		if(method === 'create' || method === 'update') {
			options.contentType = "application/x-www-form-urlencoded";
			options.data = $.param(model.getApiParams());
		}

		var a =  oldSync.apply(this, [method, model, options]);
		
		return a;
	}
	
	return Backbone;
});

/*
define("backbone-overrided", [], function(){
	var a = {
		test: 'asdf'
	}
	
	return a;
}) */