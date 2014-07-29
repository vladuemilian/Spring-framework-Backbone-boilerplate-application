({

	/*
	paths: {
		lib: '/js/lib',
		jquery: '/js/lib/jquery',
		underscore: '/js/lib/underscore.min',
		backbone: '/js/lib/backbone.min',
		backbonePaginator: '/js/lib/backbone.paginator.min',
		bootstrap: '../lib/boostrap.min',
		ajaxform: '/js/lib/ajaxform',
		text: '/js/lib/text',
		templates:'../../templates'
	},

	shim:
	{
		'jquery': {
			exports: '$'
		},
		'bootstrap': {
			deps:['jquery'],
			exports: '$'
		},
		'ajaxform':
		{
			deps:['jquery'],
			exports: '$'
		},
		
		'backbone':{
			exports: 'Backbone',
			deps: ['underscore']
		},
		
		'backbonePaginator': {
			exports: 'Backbone',
			deps: ['backbone']
		}
	},	
	*/
	
	
    appDir: ".",
    baseUrl: "../js/app",
    dir: "../appbuild",
    //out: "../appbuild/app.js",
    modules: [
        {
            name: "bootstrap"
        }
    ]
})