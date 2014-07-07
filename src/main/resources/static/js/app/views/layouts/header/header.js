define(['jquery', 'underscore', 'backbone',
        'models/language/language', 'core/view',
        'text!templates/layouts/header/header2.html'
        ], 
        function(
        		$, _, Backbone,
        		language, View,
        		headerTemplate
        		){
	

	var AppView = Backbone.View.extend({
		
		template: _.template(headerTemplate, {langs: language}),
		
		initialize: function(){
			//this.render();
		},
		
		events: {
			"click .changeLanguage": "changeLanguage"
		},
		
		changeLanguage: function(e){
			e.preventDefault();
			var langId = $(e.currentTarget).data("id");
			var lang = language.get(langId);
			
			language.change(lang);
			View.renderAll();
			//Backbone.history.start({root: lang.get("prefix")});
			//console.log(Backbone.history);
		},
		
		render: function()
		{
			//to do - more work here
			this.setElement("#appHeader");
			
			var temp = _.template(headerTemplate, {langs: language});
			
			this.$el.html(temp);
		},
	
		//view unique id
		vid: 'layouts/header/header2'
	});

	return AppView;
});