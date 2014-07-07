define(['jquery', 'underscore', 'backbone', 
        'views/layouts/master', 'views/layouts/header/header2'
        ], 
        function(
        		$, _, Backbone, 
        		MasterLayout, Header2Layout
        		){

	var AppView = Backbone.View.extend({
		el: $('#container'),
		
		initialize: function(){
			//var masterLayout = new MasterLayout;
			var header2Layout = new Header2Layout;
			this.render();
		},
		render: function(){
			
		}
	});

	//var appView = new AppView();
	return AppView;
});