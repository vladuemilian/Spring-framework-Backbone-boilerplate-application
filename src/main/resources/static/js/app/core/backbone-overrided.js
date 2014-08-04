define("core/backbone-overrided", ["jquery", "underscore","backbone"], function($, _, Backbone) {
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

	
	//override router to add before/after callbacks
	Backbone.Router.prototype.before = function () {};
	Backbone.Router.prototype.after = function () {};

	Backbone.Router.prototype.route = function (route, name, callback) {
	  if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	  if (_.isFunction(name)) {
	    callback = name;
	    name = '';
	  }
	  if (!callback) callback = this[name];

	  var router = this;

	  Backbone.history.route(route, function(fragment) {
	    var args = router._extractParameters(route, fragment);

	    router.before.apply(router, arguments);
	    callback && callback.apply(router, args);
	    router.after.apply(router, arguments);

	    router.trigger.apply(router, ['route:' + name].concat(args));
	    router.trigger('route', name, args);
	    Backbone.history.trigger('route', router, name, args);
	  });
	  return this;
	};	
	return Backbone;
});

/*
define("backbone-overrided", [], function(){
	var a = {
		test: 'asdf'
	}
	
	return a;
}) */