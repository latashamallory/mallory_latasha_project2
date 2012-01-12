//Music Library
//Latasha Mallory
//01.12.2012
//Term:  1201

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function){

	//getElementById Function
	function $(x){
		var theElement = document.getElementById('errors');
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats() {
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i = 0, j=playlistGroups.length); i<j; i++){
			var makeOption = document.createElement('option');
			var optText = playlistGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Variable defaults
	var playlistGroups = ["--Choose A Playlist--", "Smooth Sounds", "Rock Hard", "Sensual Beats"];
	makeCats();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", saveData);
	
	}};