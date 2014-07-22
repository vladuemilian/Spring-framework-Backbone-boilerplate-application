define(['jquery', 'underscore'
        ], 
        function($, _){ 
	
	var View = {
		
		renderedViews: [],
		currentView: null,

		/**
		 * 
		 * 
		 */
		render: function(v)
		{
			if(this.getViewById(v.vid)!=null){
				return;
			}
			
			this.renderedViews.push(v);
			
			v.render();
		},
	
		/**
		 * 
		 * 
		 * 
		 */
		forceRender: function(v){
			/*
			if(this.getViewById(v.vid)==null){
				this.renderedViews.push(v);
			}
			*/
			this.currentView = v;
			
			v.render();
		},
	
		/**
		 * 
		 * 
		 * @param opt: forceStatic 
		 */
		renderAll: function(opt)
		{
			_.each(this.renderedViews, function(view){
		
				if( _.has(view, "isStatic")){
					if(view.isStatic==false){
						view.render();	
					} else if(view.isStatic==true && _.isObject(opt) && _.has(opt, "forceStatic") && opt.forceStatic==true){
						view.render();
					}
				}  else {

					view.render();
				}
			});
			
			this.currentView.render();
		},
	
		getViewById: function(id){
			for(i=0; i<this.renderedViews.length; i++){
				if(this.renderedViews[i].vid==id){
					return this.renderedViews[i];
				}
			}
			return null;
		}
	}
	
	return View;
});