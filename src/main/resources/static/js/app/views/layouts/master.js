define(['jquery', 'underscore', 'backbone',
        'views/layouts/header',
        'text!templates/layouts/master.html'
        ], 
        function(
        		$, _, Backbone,
        		headerLayout,
        		masterTemplate
        		){

	var AppView = Backbone.View.extend({
		el: $('#container'),
		
		template: function() {
			return _.template(masterTemplate, {})
		},
		
		
		initialize: function(){
			this.render();
			this.header = new headerLayout({el: $("#header")});
		},
		render: function()
		{
			this.$el.html(this.template());
		}
	});

	//var appView = new AppView();
	return AppView;
});