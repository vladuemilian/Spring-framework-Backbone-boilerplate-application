//configuration global constants

var API_VERSION = "1.0";

requirejs.config({
	
	
	//By default load any module IDs from js/lib
	baseUrl: '/js/app',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
		lib: 'js/lib',
		jquery: '/js/lib/jquery',
		underscore: '/js/lib/underscore.min',
		backbone: '/js/lib/backbone.min',
		bootstrap: '/js/lib/boostrap.min',	
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
		}
	},
	
	map: {
		
		'core/backbone-overrided': {
			'backbone':'backbone'
		},
	
		'*': {
			'backbone' : 'core/backbone-overrided' 
		},
		

	}
	
	
});

require(['router'],
function()
{
	
	console.log("app loaded");
});  