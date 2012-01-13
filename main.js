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
		for(var i=0, j=listGroups.length); i<j; i++){
			var makeOption = document.createElement('option');
			var optText = listGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Find value of selected radio button.
	function  getSelectedRadio() {
		var radios = document.forms[0].favorite;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			favoriteValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue() {
		if($('add').value{
		
		}else{
			favoriteValue = "No"
		}
	}
	
	function storeData() {
		var id      = Math.floor(Math.random()*1000000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio();
		getCheckboxValue();
		var item            = {};
			item.group      = ["Group:", $('groups').value];
			item.aname      = ["Artist Name:", $('aname').value];
			item.alname     = ["Album Name:", $('alname').value];
			item.sname      = ["Song Name:", $('sname').value];
			item.favorite   = ["A Favorite Artist?:", favoriteValue];
			item.add        = ["Add to Playlist?", $('add').value];
			item.like       = ["Like Rating", $('like').value];
			item.date       = ["Date Added", $('date').value];
			item.notes      = ["Notes", $('notes').value];
		//Save data into Local Storage:  Use Stringify to convert object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Song Saved!");
	}
	
	function getData() {
		//Write data from Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute(("id", "items");
		var makeList - document.createElement('ul');
		makeDiv.appendChild(makeList);
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			
		}
	}
	
	//Variable defaults
	var listGroups = ["--Choose A Playlist--", "Smooth Sounds", "Rock Hard", "Sensual Beats"]
		favoriteValue = "No"
		;
	makeCats();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	
	}};