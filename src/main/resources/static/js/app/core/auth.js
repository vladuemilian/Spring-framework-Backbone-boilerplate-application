define(['jquery', 'underscore'
        ], 
        function($, _){ 

	/**
	 * @brief this module will handle authentication
	 */
	var Auth = {

		isAuthenticated: null,
			
		check: function(){
			if(this.isAuthenticated!=null){
				return this.isAuthenticated;
			}
			
			var status = $.ajax({
				type: "GET",
				url: '/api/' + API_VERSION + '/user/auth/check',
				async: false
			}).responseJSON.status;
		
			this.isAuthenticated = status;
			return this.isAuthenticated;
		},
		
		absoluteCheck: function(){
			this.isAuthenticated=null;
			return this.check();
		},
		
		user: function(){
			
		}
	};

	
	return Auth;
});