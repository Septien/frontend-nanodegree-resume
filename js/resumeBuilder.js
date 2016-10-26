/*var awesomeThougths = "I am Jose and I am AWESOME!";
console.log(awesomeThougths);

funThoughts = awesomeThougths.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

//var name = "Jose Septien";
//var formatterdName = HTMLheaderName.replace("%data%", name);
//var role = "Student and Programer";
//var formatterdRole = HTMLheaderRole.replace("%data%", role);

/*$("#main").prepend(formatterdRole);
$("#main").prepend(formatterdName);*/

var bio = {
    "name": "Jose Septien",
    "role": "Student and Programer",
    "contacts": {
        "mobil": "473-738-5512",
        "email": "jaseptienh@gmail.com",
        "twitter": "@jaSeptienh"
        "github": "Septien",
        "location": "Guanajuato"
    },
    "picture": "./images/fry.jpg",
    "welcomeMessage": "Welcome! This is my resume.",
    "skills": [
        "C/C++", "Pyhton", "JS", "Processing", "HTML/CSS."
    ]
};

var formatterdName = HTMLheaderName.replace("%data%", bio.name);
var formatterdRole = HTMLheaderRole.replace("%data%", bio.role);

