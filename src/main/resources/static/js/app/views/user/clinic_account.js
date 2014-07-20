define(['jquery', 'underscore', 'backbone', 'ajaxform', 'core/auth', 'lib/jquery.validate.min', 'core/app',
        'text!templates/user/clinic_account.html',
        'models/language/language', 'models/entity/user'
        ], 
        function(
        		$, _, Backbone, ajaxForm, Auth, jQueryValidate, App,
        		clinicTemplate,
        		language, User
        		){

	var AppView = Backbone.View.extend({
		
		events: {
			//'click #registerButton': 'sampleTest',
		},
		
	
		
		sampleTest: function(){
			//var test = Auth.check();
			
			var user = new User({username: 'sample', clinic_name: 'blabla'});
			
			//user.fetch();
			user.save();
			
		},
		
		initialize: function(){
		},
		
		render: function(obj)
		{
			//todo - check if obj has a property
			//for rendering again the template ( _.template() ) - called
			//by the language module
			var temp = _.template(clinicTemplate, {lang: language.getLanguageObject() });
			
			this.$el.html(temp);
			

			
			$("#registerForm").validate({
				rules:{
					phone: {
						digits:true
					} 
				}
			});
			
			$("#loginForm").validate({
				rules: {
					username: {
						required: true
					},
					password: {
						required: true
					}
				}
			});
			
			//create handlers
			$("#loginForm").ajaxForm({
				/*
				success: function(responseText, statusText, xhr){
					console.log(responseText.status);
				}
				*/
				success: this.login,
				beforeSubmit: this.loginBefore
			});
		},
	
		/**
		 * @brief triggered when the login request has successfully
		 * sent - the status of loging will be checked inside 
		 * 
		 */
		login: function(responseText, statusText, xhr){
			var status = responseText.status;
		
			$("#alertBeforeLogin").hide();
			
			$(".alert").hide();
		
			//the login has been successfully done - te credentials
			//were correct
			if(status==true){
				$("#alertSuccessLogin").show();
				App.router.get("appRouter").navigate("/", {trigger: true});
			} else {
				$("#alertFailLogin").show();
			}
		},
		
		/**
		 * @brief triggered when the button is pushed, but before the
		 * request will be sent. Usually, we will display here a loading
		 * screen.
		 * 
		 */
		loginBefore: function(){
			
			$(".alert").hide();
			
			$("#alertBeforeLogin").show();
		},
		
		vid: 'layouts/user/clinic_template'
	});

	return AppView;
});