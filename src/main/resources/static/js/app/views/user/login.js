define(['jquery', 'underscore', 'backbone', 'ajaxform',
        'text!templates/user/login.html'
        ], 
        function(
        		$, _, Backbone, AjaxForm,
        		LoginView
        		){

	var UserLoginView = Backbone.View.extend({
		el: '#container',
		
		events:{
			'click #login-button': 'makeLogin'
			
		},
		
		initialize: function(){
			this.render();
			$("#csrf_token_login").val(app_vars._csrf_token);
			
			$("#login-form").ajaxForm();
			
			$("#")
		},
		render: function(){
			this.$el.html(LoginView); 
		},
		
		makeLogin: function()
		{
			console.log( app_vars._csrf_token );
		}
		
	});

	return UserLoginView;
});