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
	
	function toggleControls(n) {
		switch(n) {
			case "on":
				$('songForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('add').style.display = "inline";
				break;
			case "off":
				$('songForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('add').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
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
		toggleControls("on");
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
	}
	
	function getData() {
		//Write data from Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute(("id", "items");
		var makeList - document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert string from local storage value back to an object by using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var x in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[x][0]+" "+obj[x][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There's no data to clear.")
		}else{
			localStorage.clear();
			alert("All songs are deleted!");
			window.location.reload();
			return false;
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