define(['jquery', 'backbone', 'underscore',
        'models/language/lang/en', 'models/language/lang/ro'
        ], 
        function($, Backbone, _,
        		 lang_en, lang_ro
        ){ 


	var Language = Backbone.Model.extend({});

	var langs = [
	             	new Language({ "prefix": "en", resource: lang_en }),
	             	new Language({ "prefix": "ro", resource: lang_ro }),
	            ];
	
	
	var Languages = Backbone.Collection.extend({
		model: Language,
		
		initialize: function(){
			this._defaultLanguage = 0;
			this._currentLanguage = null;
		},
		
		getCurrentLanguage: function(){
			if(this._currentLanguage==null)
			{
				return this.at(0);
			}
			return this._currentLanguage;
		},
		
		change: function(lang){
			this._currentLanguage = lang;
			Backbone.history.root = "/" + lang.get("prefix") + "/";
		},
		
		msg: function(id){
			//console.log(this.getCurrentLanguage().get("resource")[id].length);
			//var test = _.has(this.getCurrentLanguage().get("resource"), "asdf");
			//console.log(test);
			
			//var lang = this.getCurrentLanguage().get("resource");
			//var test = _.has(this.getCurrentLanguage().get("resource"), id);
			//console.log(test);
			
			if( _.has(this.getCurrentLanguage().get("resource"), id) )
			{
				return this.getCurrentLanguage().get("resource")[id];
			}
			throw "Language message not found for key: " + id;
		},
		
		getLanguageObject: function(){
			return this.getCurrentLanguage().get("resource");
		}

	});
	
	
	//var test = new Languages(langs);
	//console.log( test.msg("blqdqwd") );
	
	return new Languages(langs);
});