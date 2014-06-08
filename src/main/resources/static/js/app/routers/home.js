define(['jquery','backbone','underscore',
        'views/dashboard'],
function($, Backbone, _, 
		 DashboardView
		)
{

	var AppRouter = Backbone.Router.extend({
		routes: {
			'a/about': 'about',
			'a/contact': 'contact',
			'': 'index',
			'a/shit': 'test',
			'a/home/test': 'home',
		}
	});
	// Initiate the router
	var app_router = new AppRouter;
	
	app_router.on('route:itemRoute', function(actions){
		console.log(actions);
	});
	
	app_router.on('route:test', function(actions){
		console.log(actions);
	});
	
	app_router.on('route:index', function(action){
		//var master = new MasterLayout;
		var dashboard = new DashboardView({el: $("#container")});
		$("#content").html("some contact forms here");
	});

	app_router.on('route:contact', function(action){
		var dashboard = new DashboardView({el: $("#container")});
		
	});
	
	app_router.on('route:about', function(action){$("#container").html("Contact details");
		$("#container").html("This is a nice section!");
	});
	
	app_router.on('route:home', function(){
		console.log("token");
	});
	

	
	return AppRouter;
});