function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

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
		
		//template: _.template(indexTemplate, {lang: language}),
		
		initialize: function(){
			this.render();
		},
		
		render: function(obj)
		{
			//$("#loader").show();
			//todo - check if obj has a property
			//for rendering again the template ( _.template() ) - called
			//by the language module
			
			var temp = _.template(indexTemplate, {lang: language.getLanguageObject()});
			
			this.$el.html(temp);
		},
		
		vid: 'layouts/index'
	});

	return AppView;
});