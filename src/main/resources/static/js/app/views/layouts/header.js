define(['jquery', 'underscore', 'backbone',
        'text!templates/layouts/header.html'
        ], 
        function(
        		$, _, Backbone,
        		headerTemplate
        		){

	var AppView = Backbone.View.extend({
		
		template: _.template(headerTemplate),
		
		initialize: function(){
			this.render();
		},
		
		render: function()
		{
			this.$el.html(this.template);
		}
	});

	return AppView;
});