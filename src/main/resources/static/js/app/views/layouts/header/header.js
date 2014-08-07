define(['jquery', 'underscore', 'backbone',
        'models/language/language', 'core/view', 'core/auth',
        'text!templates/layouts/header/header2.html',
        'waypoints', 'counter', 'owlCarousel'
        ], 
        function(
        		$, _, Backbone,
        		language, View, Auth,
        		headerTemplate,
        		waypoints, counter, owlCarousel 
        		){
	

	
	var AppView = Backbone.View.extend({
		
		initialize: function(){
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
			
			var temp = _.template(headerTemplate, {langs: language, lang: language.getLanguageObject(), Auth: Auth});
			
			this.$el.html(temp);
			
			$(".navbar-nav li").click(function(e){
				$(".navbar-nav li").removeClass("active");
				$(this).addClass("active");
			});
			
			//set the header counter
			$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
			
			//set the carousel
			owlCarousel.initOwlCarousel();
			//console.log(owlCarousel.initOwlCarousel());
		},
	
		//view unique id
		vid: 'layouts/header/header2'
	});

	return AppView;
});