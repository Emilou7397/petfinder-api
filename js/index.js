// BEHAVIOR
// * JQUERY : https://api.jquery.com/

const getStuff = 'https://gist.githubusercontent.com/Emilou7397/5df2802ef22d1a082d7b8ce04b387311/raw/1a97bc2b195b46523701e8661ff2a7121ee83efe/data.json';
let i = 0;
let datavar;

// Do stuff with returned data
let doStuff = function(data) {
	datavar = data;
	fill(datavar, i);
 
};

let fill = function(datavar, i) {
	let name, age, gender, genderIcon, breeds;
	let photos = [];
	name = datavar.animals[i].name;
	age = datavar.animals[i].age;
	gender = datavar.animals[i].gender;
	if (gender == "Female") {
		genderIcon = "https://github.com/Emilou7397/petfinder-api/blob/master/img/female.png?raw=true";
	}
	else {
		genderIcon = "https://github.com/Emilou7397/petfinder-api/blob/master/img/male.png?raw=true";
	}
	breeds = [datavar.animals[i].breeds.primary];
	if (datavar.animals[i].breeds.secondary) {
		breeds[1] = datavar.animals[i].breeds.secondary;
	}
	breeds = breeds.join(", ");
	datavar.animals[i].photos.forEach(photo => {
		photos.push(photo.medium);
	})
	
	photos.push("https://github.com/Emilou7397/petfinder-api/blob/master/img/default-cat.png?raw=true");
		
	let template = `
								<div class="pet"><img src="${photos[0]}" class="petimg"></img>
								<h2>${name}</h2>
								<p>${age}</p> <p>${gender}</p> <img src=${genderIcon} class="gender" /> <p>${breeds}</p></div>`;
	
	console.log(template);
		
	$("#pet").append(template);
		
	photos = [];
}

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);

$(".next").click(function() {
		document.querySelector("#pet").innerHTML = "";
		i = (i + 1) % datavar.animals.length;
	console.log(datavar);
		fill(datavar, i);
});

$(".prev").click(function() {
		document.querySelector("#pet").innerHTML = "";
		i = (i + datavar.animals.length - 1) % datavar.animals.length;
	console.log(datavar);
		fill(datavar, i);
});
