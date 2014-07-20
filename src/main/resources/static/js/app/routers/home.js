define(['jquery','backbone','underscore', 'core/view', 'core/lang', 'models/language/language', 'core/app',
        'views/layouts/master2', 'views/layouts/header/header', 'views/layouts/index'],
function($, Backbone, _, View, Lang, languageModule, App,
		 Master2Layout, Header2Layout, IndexLayout
		)
{
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'clinics': 'clinics',
			'account/clinic': 'accountClinic'
		},
	});
	
	// Initiate the router
	var app_router = new AppRouter;
	
	app_router.on('route:itemRoute', function(actions){
		console.log(actions);
	});
	
	app_router.on('route:clinics', function(actions){

		var lang = languageModule.getCurrentLanguage();
	
		View.render(new Master2Layout);
		View.render(new Header2Layout({el: "#appLayout"}));
		
		$("#appContent").html("<h1>Hello world!</h1>");
		//View.renderAll();
	});
	
	app_router.on('route:index', function(lang){
		View.render(new Master2Layout);
		View.render(new Header2Layout({el: ".wrapper"}));
	
		//View.render(new IndexLayout);
		View.forceRender(new IndexLayout({el: "#appContent"}));
	});

	app_router.on('route:contact', function(action){
		//var dashboard = new DashboardView({el: $("#container")});
		
	});
	
	app_router.on('route:about', function(action){$("#container").html("Contact details");
		$("#container").html("This is a nice section!");
	});
	
	app_router.on('route:home', function(){
		console.log("token");
	});
	
	app_router.on('route:accountClinic', function(){
		//load the contianer, header and other dependencies
		View.render(new Master2Layout);
		View.render(new Header2Layout({el: "#appContent"}));
	
		//load the main view
		require(['views/user/clinic_account'], function(res){
			View.forceRender(new res({el: "#appContent"}));
		});
		
	});
	

	//register this router into app routers
	App.router.register("appRouter", app_router);
	
	return AppRouter;
});