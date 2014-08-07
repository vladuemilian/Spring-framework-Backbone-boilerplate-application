var OwlCarousel = function (jQuery) {

    return {
    	
        //Owl Carousel
        initOwlCarousel: function () {
        	
        	console.log(jQuery.fn);
        	
		    jQuery(document).ready(function() {
		    	
		        //Owl Slider v2
		        jQuery(document).ready(function() {
		        var owl = jQuery(".owl-slider-v2");
		            owl.owlCarousel({
		                itemsDesktop : [1000,5], //5 items between 1000px and 901px
		                itemsDesktopSmall : [900,4], //4 items betweem 900px and 601px
		                itemsTablet: [600,3], //3 items between 600 and 0;
		                itemsMobile : [479,2], //2 itemsMobile disabled - inherit from itemsTablet option
		                slideSpeed: 1000
		            });

		            var test = jQuery(".next-v2");
		          
		            console.log(document);
		            console.log(test);
		            console.log(test.length);
		            
		           
		            // Custom Navigation Events
		            jQuery(".next-v2").click(function(){
		            	alert("X");
		                owl.trigger('owl.next');
		            })
		            jQuery(".prev-v2").click(function(){
		                owl.trigger('owl.prev');
		            })
		        });

		     
		    });
		}
    };
    
}(jQuery);