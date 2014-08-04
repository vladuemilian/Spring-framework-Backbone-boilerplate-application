define(['jquery', 'underscore', 'models/entity/user'
        ],
        function($, _, User){ 

	//define API URL's for this module;
	var API_GET_CHECK = '/api/v' + API_VERSION + '/user/auth/check';
	var API_GET_AUTHENTICATED  = '/api/v' + API_VERSION + '/user/auth';
	
	/**
	 * @brief this module will handle authentication
	 */
	var Auth = {

		isAuthenticated: null,
		
		authenticatedUser: null,
	
		/**
		 * @brief check if the user is authenticated. If yes,
		 * update the isAuthenticated member to send a request
		 * again at the next call. 
		 * 
		 */
		check: function(){
			if(this.isAuthenticated!=null){
				return this.isAuthenticated;
			}
			
			var status = $.ajax({
				type: "GET",
				url: API_GET_CHECK,
				async: false
			}).responseJSON.status;
		
			this.isAuthenticated = status;
			return this.isAuthenticated;
		},

		/**
		 * @brief recheck if the user is authenticated. This
		 * method is required due to singleton approach of this
		 * module. 
		 * 
		 */
		absoluteCheck: function(){
			this.isAuthenticated=null;
			return this.check();
		},
	
		/**
		 * @brief retrieve the authenticated user model 
		 * 
		 */
		user: function(){
			
			if(this.authenticatedUser != null){
				return this.authenticatedUser;
			}
			
			
			
			var user = new User();
	
			//fetch the user from the given URL
			user.fetch({url: API_GET_AUTHENTICATED, async: false});
		
			//store the user in module member
			this.authenticatedUser = user;
			
			
			//fix the issue with username not set
			if(this.isAuthenticated && this.authenticatedUser == null){
				window.location.reload();
			}
			
			return this.authenticatedUser;
		},
		
		/**
		 * @brief this method will put the module members to
		 * null and re-sends the requests to see if the user
		 * changes it's state. 
		 * 
		 */
	};
	
	return Auth;
});