define(['jquery', 'underscore', 'backbone', 
        'views/layouts/master'
        ], 
        function(
        		$, _, Backbone, 
        		MasterLayout 
        		){

	var AppView = Backbone.View.extend({
		el: $('#container'),
		
		initialize: function(){
			var masterLayout = new MasterLayout;
			this.render();
		},
		render: function(){
			
		}
	});

	//var appView = new AppView();
	return AppView;
});