'use strict'

/*
 * Either assign object to already 
 established object or start over!!!
 */
var jasonBuild = window.jasonBuild || {};


//Object
var jasonBuild = {

	jsonFile: "data/info.txt",
	index: null,
	infoList: null,
	outputDiv: null,
	jsonArr: null,

	init: function(){
		jasonBuild.index = 0;
		jasonBuild.infoList = document.querySelector('#info-list');
		jasonBuild.outputDiv = document.querySelector('#output-div');
		jasonBuild.jsonArr = [];
		jasonBuild.run();//run
		console.log('INITIALIZE');
	},

	loadJson: function(file, callBack){
		// XHR Request for server data
		// Assing quiz.data to XHR response
		// Intead simple parse
		//return(JSON.parse(file);
		var xmlhttp = new XMLHttpRequest();
		var url = file;

		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			    jasonBuild.jsonArr = JSON.parse(xmlhttp.responseText);
			    jasonBuild.styleJSON(jasonBuild.jsonArr);//
			    console.log('JSON FILE ',jasonBuild.jsonArr);
			    //return jasonBuild.jsonLoaded;
		    }
		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	},

	styleJSON: function(arr){
		var out = "";
	    for(var i = 0; i < jasonBuild.jsonArr.length; i++) {
	        out += '<a href="' + jasonBuild.jsonArr[i].url + '">' + 
	        jasonBuild.jsonArr[i].display + '</a><br>';
	    }
	    jasonBuild.outputDiv.innerHTML = out;
	    console.log('Output ',out, ' jsonArr ',jasonBuild.jsonArr);
	},

	run: function(arr){
		jasonBuild.loadJson(jasonBuild.jsonFile);// load json file
	}

};

//When contet is loaded in the Dom run
document.addEventListener('DOMContentLoaded', function(){
	jasonBuild.init();
});

