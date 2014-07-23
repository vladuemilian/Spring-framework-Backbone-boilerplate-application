define(['jquery', 'underscore', 'backbone', 'lib/backbone.relational'
        ], 
        function($, _, Backbone){ 


	var User = Backbone.RelationalModel.extend({
		
		urlRoot: '/api/v' + API_VERSION + '/user',
		
		getApiParams: function(){
			return {
				'username': 'test',
				'password': 'blabla'
			}
		}
	});
	
	return User;
});