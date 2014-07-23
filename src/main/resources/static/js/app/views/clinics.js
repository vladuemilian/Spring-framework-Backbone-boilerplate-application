define(['jquery', 'underscore', 'backbone', 'lib/backbone.relational',
        'core/auth', 'models/language/language',
        'text!templates/clinics.html',
        'models/entity/user'], 
        function($, _, Backbone, BackboneRelational,
        		 Auth, language,
        		 clinicsTemplate,
        		 User
        		 ){


	var AppView = Backbone.View.extend({
		
		initialize: function(){
			//var user = new User();
			
			//user.save();
			
			var user = Auth.user();
			
			
		},

		render: function(obj){
		
			var temp = _.template(clinicsTemplate, {lang: language.getLanguageObject(), Auth: Auth });
			
			this.$el.html(temp);
			
			//more things on DOM can be done here
		}
	})

	return AppView;
});