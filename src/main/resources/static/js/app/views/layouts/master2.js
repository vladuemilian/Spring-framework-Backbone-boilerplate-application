define(['jquery', 'underscore', 'backbone',
        'views/layouts/header',
        'text!templates/layouts/master2.html'
        ], 
        function(
        		$, _, Backbone,
        		headerLayout,
        		masterTemplate
        		){

	var AppView = Backbone.View.extend({
		el: '#container',
		
		template: function() {
			return _.template(masterTemplate, {})
		},
		
		initialize: function(){
			//if we specify this property, the view will not be rendered
			//any time by the renderer		
			this.isStatic = true;
		},
		
		render: function()
		{
			this.$el.html(this.template());
		},
	
		//view unique id
		vid: 'layouts/master2',
	
	});

	//var appView = new AppView();
	return AppView;
});