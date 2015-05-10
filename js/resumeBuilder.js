var bio = {

	"name": "Pipo Muller",
	"role": "party animal",
	"contacts": {
		"mobile": "+41 67 55 43",
		"email": "info@partyanimal.com",
		"github": "ABC",
		"twitter": "DEF",
		"location": "Zurich"
	},
	"welcomeMessage": "Oh Hi there, armed with years of experience, the latest trend data and cultural insights, I keep brands authentic with key influencers while appealing to the mass.",
	"skills": ["cool", "handsome", "fast", "dynamic"],
	"bioPic": "images/me.png"
}


var education = {
	"schools": [
			{
				"name": "HSG",
				"location": "St.Gallen",
				"degree": "Business Innovation",
				"majors": ["CS"],
				"dates": 2008,
				"url": "www.google.com"
	
			},
			{
				"name": "Deusto",
				"location": "Sanseb",
				"degree": "Finance",
				"majors": ["CS"],
				"dates": 2009,
				"url": "www.facebook.com"
			}
		]
	,
	"onlineCourses": [
			{
				"title": "UDACITY 1",
				"school": "Web 1",
				"dates": 2014,
				"url": "www.bing.com"
			}
		]
	}


var work = {
	"jobs": [
		{
			"employer": "HIGH",
			"title": "Strategist",
			"location": "Bilbao",
			"dates": "2011- to date",
			"description": "Plant advice from The Morton Arboretum: Alaska cedar in an interesting medium-sized evergreen tree with gray-green to blue-green foliage that droops from widely spaced branches. Native to moist bottomlands in the Pacific Northwest, it needs consistently moist soil. This plant is also known as false cypress."
		},
		{
			"employer": "AIR",
			"title": "Brand Manager",
			"location": "Amsterdam",
			"dates": "2005 - 2011",
			"description": "Allegheny serviceberry is a small native understory tree with four-season interest. The early white spring flowers, outstanding orange-red fall color, and striking gray bark make it a lovely specimen for any landscape. The edible black fruit in late summer is attractive to many birds."
		},
		{
			"employer": "SMART",
			"title": "Book Keeper",
			"location": "New Yersey",
			"dates": "2006 - 2007",
			"description": "American basswood is native to the Chicago area and is often used as a specimen or dense shade tree. Its heart-shaped leaves and fragrant flowers in June make it especially attractive for people, while songbirds and blue jays are attracted to its seeds and use the tree for shelter."
		},
		{
			"employer": "FIRST",
			"title": "Head of Marketing",
			"location": "Rio de Janeiro",
			"dates": "2004 - 2005",
			"description": "American beech is a large, graceful native tree, excellent for large, park-like landscapes where it has room to spread its wide, low-growing branches. The massive trunk has beautiful silver gray bark; the dark green summer foliage turns a golden bronze in the fall. Leaves typically hang on well into the winter months adding to the seasonal interest."
		}
	]
}


var projects = {
	"projects" : [
		{
			"title": "Live with an Alpine Ibex",
			"dates": "1999",
			"description": "The Alpine ibex (Capra ibex), also known as the steinbock or bouquetin, is a species of wild goat that lives in the mountains of the European Alps. It is a sexually dimorphic species with larger males who carry larger, curved horns. The coat colour is typically brownish grey. Alpine ibex tend to live in steep, rough terrain above the snow line. ",
			"images": ["images/p1.jpg"]
		
		},
		{
			"title": "Dance with the Wolf",
			"dates": "2000",
			"description": "The gray wolf or grey wolf (Canis lupus[a]) also known as the timber wolf,[3][4] or western wolf,[b] is a canid native to the wilderness and remote areas of North America, Eurasia, and northern, eastern and western Africa.",
			"images": ["images/p2.jpg"]
			
		}

	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


var HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(HTMLbioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);



if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);

}


function displayWork() {
	for (var job in work.jobs) {
    	$("#workExperience").append(HTMLworkStart);
    	var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    	$(".work-entry:last").append(formattedEmployerTitle);
    	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    	$(".work-entry:last").append(formattedDates);
    	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    	$(".work-entry:last").append(formattedworkLocation);
    	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    	$(".work-entry:last").append(formattedDescription);
      }
	}

displayWork();


projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace ("%data%", projects.projects[project].description)
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display ();


$("#mapDiv").append(googleMap);


function inName(name) {
	var name = bio.name;
	name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton)

/*

// this is some code I wrote during the lesson. it's not relevant for the resume page

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}





$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

*/









