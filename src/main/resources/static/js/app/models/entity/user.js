define(['jquery', 'underscore', 'backbone'
        ], 
        function($, _, Backbone){ 


	var User = Backbone.Model.extend({
		url: '/api/v' + API_VERSION + '/user',
		
		getApiParams: function(){
			return {
				'username': 'test',
				'password': 'blabla'
			}
		}
	});
	
	return User;
	
});