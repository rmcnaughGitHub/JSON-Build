$(function(){
	
	'use strict'

	var jsonFile = 'quiz.json';
	console.log('WORKING');

	$.getJSON(jsonFile, function(quiz){

		console.log(quiz.question1,' ',quiz.answer1[0]);

		var output = '';

		for ( key in quiz.answer1) {
			if( quiz.answer1.hasOwnProperty(key) ){
				output+= '<li>' + quiz.answer1[key] + '</li>';
				console.log(output);
			}
		};

		var response = document.getElementById('answers');
		answers.innerHTML = output;
	}).done(function(quiz){
		console.log('SUCCESS!!!!');
	});// getJSON


});