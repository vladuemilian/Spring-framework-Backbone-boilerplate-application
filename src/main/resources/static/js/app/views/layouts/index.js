define(['jquery', 'underscore', 'backbone',
        'text!templates/layouts/index.html',
        'models/language/language'
        ], 
        function(
        		$, _, Backbone,
        		indexTemplate,
        		language
        		){

	var AppView = Backbone.View.extend({
		
		template: _.template(indexTemplate, {lang: language}),
		
		initialize: function(){
			this.render();
		},
		
		render: function(obj)
		{
			//todo - check if obj has a property
			//for rendering again the template ( _.template() ) - called
			//by the language module
			
			var temp = _.template(indexTemplate, {lang: language});
			
			this.$el.html(temp);
		},
		
		vid: 'layouts/index'
	});

	return AppView;
});