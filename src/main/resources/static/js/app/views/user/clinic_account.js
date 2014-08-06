define(['jquery', 'underscore', 'backbone', 'ajaxform', 'core/auth', 'lib/jquery.validate.min', 'core/app',
        'text!templates/user/clinic_account.html',
        'models/language/language', 'models/entity/user',
        'core/view'
        ], 
        function(
        		$, _, Backbone, ajaxForm, Auth, jQueryValidate, App,
        		clinicTemplate,
        		language, User,
        		View
        		){

	var AppView = Backbone.View.extend({
		
		sampleTest: function(){
			var user = new User({username: 'sample', clinic_name: 'blabla'});
			
			//user.fetch();
			user.save();
		},
		
		render: function(obj)
		{
			//todo - check if obj has a property
			//for rendering again the template ( _.template() ) - called
			//by the language module
			var temp = _.template(clinicTemplate, {lang: language.getLanguageObject(), Auth: Auth });
			
			this.$el.html(temp);
			
			//validate the register form
			$("#registerForm").validate({
				rules:{
					phone: {
						digits:true
					},
					register_cpassword: {
						equalTo: '#register_password'
					}
				}
			});
			
			//validate the login form
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
				success: this.loginSuccess,
				beforeSubmit: this.loginBefore
			});
			
			//ajax form for register
			$("#registerForm").ajaxForm({
				success: this.registerSuccess,
				beforeSubmit: this.registerBefore
				
			});
		},
	
		/**
		 * @brief triggered when the login request has successfully
		 * sent - the status of loging will be checked inside 
		 * 
		 */
		loginSuccess: function(responseText, statusText, xhr){
			var status = responseText.status;
		
			$("#alertBeforeLogin").hide();
			
			$(".alert").hide();
		
			//the login has been successfully done - te credentials
			//were correct
			if(status==true){
				$("#alertSuccessLogin").show();
				/*
				Auth.absoluteCheck();
			
				while(Auth.user()==null){
				}
				
				View.renderAll({forceStatic: true});
				App.router.get("appRouter").navigate("/", {trigger: true});
				*/
				window.location="/";
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
		
		/**
		 * 
		 */
		registerSuccess: function(responseText, statusText, xhr){
		
			$(".alert").hide();
			$("#alertSuccessRegister").show();
		},
		
		/**
		 * 
		 * 
		 */
		registerBefore: function(){
			$(".alert").hide();
			$("#alertBeforeRegister").show();
		},
		
		vid: 'layouts/user/clinic_template'
	});

	return AppView;
});