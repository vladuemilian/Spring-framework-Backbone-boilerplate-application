define(['jquery', 'underscore', 'backbone'
        ], 
        function($, _, Backbone){ 


	var User = Backbone.Model.extend({
		url: '/api/' + API_VERSION + '/user'
	});
	
	
	return User;
	
});