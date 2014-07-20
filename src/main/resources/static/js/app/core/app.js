define(['jquery', 'underscore'
        ], 
        function($, _){ 
	

	var App = {
		router: {
			routers: {},
			register: function(name, router){
				if(_.has(this.routers, name)){
					throw "[core/app] The router already exists!";
				}
				this.routers[name] = router;
			},
			
			get: function(name){
				if( _.has(this.routers, name) ){
					return this.routers[name];
				}
				throw "[core/app] The router named " + name + " does not exists !";
			}
		}
	};

	return App;
});