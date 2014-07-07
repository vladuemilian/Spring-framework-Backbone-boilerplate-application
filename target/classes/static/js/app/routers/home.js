define(['jquery','backbone','underscore', 'core/view', 'core/lang', 'models/language/language',
        'views/layouts/master2', 'views/layouts/header/header', 'views/layouts/index'],
function($, Backbone, _, View, Lang, languageModule,
		 Master2Layout, Header2Layout, IndexLayout
		)
{
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'clinics': 'clinics'
		},
	});
	
	//console.log(languageModule);
	//console.log(languageModule);
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
	
	
	return AppRouter;
});