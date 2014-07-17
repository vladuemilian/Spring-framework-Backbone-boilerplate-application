define(['jquery', 'underscore', 'backbone', 'ajaxform', 'core/auth',
        'text!templates/user/clinic_account.html',
        'models/language/language', 'models/entity/user'
        ], 
        function(
        		$, _, Backbone, ajaxForm, Auth,
        		clinicTemplate,
        		language, User
        		){

	var AppView = Backbone.View.extend({
		
		events: {
			'click #registerButton': 'sampleTest'
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
			
			//create handlers
			$("#loginForm").ajaxForm({
				success: function(responseText, statusText, xhr){
					console.log(responseText.status);
				}
			});
		},
		
		vid: 'layouts/user/clinic_template'
	});

	return AppView;
});