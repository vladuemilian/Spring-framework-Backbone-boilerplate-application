define(['jquery', 'backbone'
        ], 
        function($, Backbone){ 
	
	var Lang = Backbone.Model.extend({
	
		defaults: {
			defaultLanguage: 0,
			supported: ['en', 'ro'],
			currentLanguage: 0
		},
		
		getCurrentPrefix: function(){
			return this.get("supported")[this.get("currentLanguage")];
		},
		
		initialize: function(){
			this.on("change:currentLanguage", function(lang){
				
			})
		}

	});
	
	return new Lang;
});