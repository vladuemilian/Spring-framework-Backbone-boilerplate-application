define(['jquery','backbone','underscore',
        'views/user/login', 'views/layouts/master'
        ],
function($, Backbone, _, 
		 LoginView, MasterLayout
		){
	
	var UserAuthRouter = Backbone.Router.extend({
		routes: {
			'user/login': 'login',
		}
	});
	// Initiate the router
	var userAuthRouter = new UserAuthRouter;
	
	userAuthRouter.on('route:login', function(actions){
		if(!this.masterLayout)
		{
			this.masterLayout = new MasterLayout;
		}
		var loginView = new LoginView({el: "#content"});
	});
	
	return UserAuthRouter;
});